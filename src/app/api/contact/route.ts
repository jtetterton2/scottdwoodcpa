import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

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
  if (recaptchaSecret) {
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptchaToken}`;
    const recaptchaRes = await fetch(verifyUrl, { method: "POST" });
    const recaptchaData = await recaptchaRes.json();

    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return NextResponse.json(
        { error: "reCAPTCHA verification failed." },
        { status: 403 }
      );
    }
  }

  // Send email via SendGrid
  const sendgridKey = process.env.SENDGRID_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL || "office@scottwoodcpa.com";

  if (!sendgridKey) {
    console.error("SENDGRID_API_KEY is not configured");
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  sgMail.setApiKey(sendgridKey);

  const serviceLabels: Record<string, string> = {
    "personal-tax": "Personal Tax Preparation",
    "business-accounting": "Small Business Accounting",
    advisory: "Business Advisory",
    "year-round": "Year-Round Support",
    other: "Other / General Inquiry",
  };

  const msg = {
    to: toEmail,
    from: toEmail, // Must be a verified sender in SendGrid
    replyTo: email,
    subject: `New Contact Form: ${firstName} ${lastName || ""} — ${serviceLabels[service] || "General"}`,
    text: [
      `Name: ${firstName} ${lastName || ""}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      `Service: ${serviceLabels[service] || "Not specified"}`,
      ``,
      `Message:`,
      message,
    ].join("\n"),
    html: `
      <h2>New Contact Form Submission</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${firstName} ${lastName || ""}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Phone</td><td style="padding:8px;border-bottom:1px solid #eee;">${phone || "Not provided"}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Service</td><td style="padding:8px;border-bottom:1px solid #eee;">${serviceLabels[service] || "Not specified"}</td></tr>
      </table>
      <h3 style="margin-top:24px;">Message</h3>
      <p style="white-space:pre-wrap;">${message}</p>
    `,
  };

  try {
    await sgMail.send(msg);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("SendGrid error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
