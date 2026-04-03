import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { firstName, lastName, email, phone, service, message, recaptchaToken } =
    body;

  // Validate required fields
  if (!firstName || !email || !message) {
    return NextResponse.json(
      { error: "First name, email, and message are required." },
      { status: 400 }
    );
  }

  // Verify reCAPTCHA
  const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
  if (recaptchaSecret && recaptchaToken) {
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptchaToken}`;
    const recaptchaRes = await fetch(verifyUrl, { method: "POST" });
    const recaptchaData = await recaptchaRes.json();

    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return NextResponse.json(
        { error: "reCAPTCHA verification failed." },
        { status: 403 }
      );
    }
  } else if (recaptchaSecret && !recaptchaToken) {
    console.warn("reCAPTCHA token missing — allowing submission for now");
  }

  // Send email via SendGrid REST API directly
  const sendgridKey = process.env.SENDGRID_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL || "office@scottwoodcpa.com";

  if (!sendgridKey) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  const serviceLabels: Record<string, string> = {
    "personal-tax": "Personal Tax Preparation",
    "business-accounting": "Small Business Accounting",
    advisory: "Business Advisory",
    "year-round": "Year-Round Support",
    other: "Other / General Inquiry",
  };

  const fullName = `${firstName} ${lastName || ""}`.trim();
  const serviceName = serviceLabels[service] || "General";

  const sgPayload = {
    personalizations: [
      {
        to: [{ email: toEmail }],
        subject: `New Contact Form: ${fullName} - ${serviceName}`,
      },
    ],
    from: { email: toEmail, name: "Scott D. Wood CPA Website" },
    reply_to: { email: email, name: fullName },
    content: [
      {
        type: "text/plain",
        value: `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nService: ${serviceName}\n\nMessage:\n${message}`,
      },
      {
        type: "text/html",
        value: `<h2>New Contact Form Submission</h2>
<table style="border-collapse:collapse;width:100%;max-width:600px;">
  <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${fullName}</td></tr>
  <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="mailto:${email}">${email}</a></td></tr>
  <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Phone</td><td style="padding:8px;border-bottom:1px solid #eee;">${phone || "Not provided"}</td></tr>
  <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Service</td><td style="padding:8px;border-bottom:1px solid #eee;">${serviceName}</td></tr>
</table>
<h3 style="margin-top:24px;">Message</h3>
<p style="white-space:pre-wrap;">${message}</p>`,
      },
    ],
  };

  const sgRes = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${sendgridKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sgPayload),
  });

  if (!sgRes.ok) {
    const errorBody = await sgRes.text();
    console.error("SendGrid error:", sgRes.status, errorBody);
    return NextResponse.json(
      { error: `SendGrid ${sgRes.status}: ${errorBody}` },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
