import type { Metadata } from "next";
import Image from "next/image";
import { RecaptchaProvider } from "@/components/recaptcha-provider";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact | Scott D. Wood, CPA",
  description:
    "Get in touch with Scott D. Wood, CPA. Schedule a consultation or send us a message. Personal financial guidance for everyone.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 pt-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <span className="text-xs uppercase tracking-editorial text-secondary mb-4 block font-semibold">
              Get in Touch
            </span>
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-primary leading-none -ml-1">
              Let&apos;s <br />
              <span className="italic font-light">Talk.</span>
            </h1>
          </div>
          <div className="lg:col-span-4 pb-2">
            <p className="text-on-surface-variant leading-relaxed max-w-sm">
              Whether you have a quick question or want to schedule a full
              consultation, we&apos;re here to help. Reach out and let&apos;s
              start a conversation about your financial goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Contact Form */}
          <div className="lg:col-span-7">
            <RecaptchaProvider>
              <ContactForm />
            </RecaptchaProvider>
          </div>

          {/* Contact Info Sidebar */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 space-y-12">
              {/* Photo */}
              <div className="aspect-[4/3] relative overflow-hidden bg-surface-container-highest">
                <Image
                  src="/images/scott-casual-2.png"
                  alt="Scott D. Wood"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>

              {/* Info Cards */}
              <div className="space-y-8">
                <div className="border-l-2 border-secondary pl-6">
                  <p className="text-xs uppercase tracking-editorial text-secondary font-bold mb-2">
                    Mailing Address
                  </p>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    PO Box 41
                    <br />
                    Culpeper, VA 22701
                  </p>
                </div>

                <div className="border-l-2 border-secondary pl-6">
                  <p className="text-xs uppercase tracking-editorial text-secondary font-bold mb-2">
                    Schedule a Call
                  </p>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Book a free 15-minute discovery call to discuss your needs.
                    No obligation, no pressure.
                  </p>
                </div>

                <div className="border-l-2 border-secondary pl-6">
                  <p className="text-xs uppercase tracking-editorial text-secondary font-bold mb-2">
                    Response Time
                  </p>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    We typically respond within one business day. During tax
                    season, it may take a bit longer.
                  </p>
                </div>

                <div className="border-l-2 border-secondary pl-6">
                  <p className="text-xs uppercase tracking-editorial text-secondary font-bold mb-2">
                    Office Hours
                  </p>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Monday – Friday: 9:00 AM – 5:00 PM
                    <br />
                    Saturday: By Appointment
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              {/* Trust indicator */}
              <div className="bg-surface-container-highest p-8">
                <p className="font-serif text-xl text-primary mb-2">
                  Your privacy matters.
                </p>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  All information shared is kept strictly confidential and is
                  protected under CPA professional standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
