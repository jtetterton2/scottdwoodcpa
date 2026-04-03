"use client";

import Script from "next/script";
import { useState, useCallback } from "react";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

function getRecaptchaToken(action: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error("reCAPTCHA timed out")), 8000);

    const w = window as unknown as {
      grecaptcha?: {
        ready: (cb: () => void) => void;
        execute: (key: string, opts: { action: string }) => Promise<string>;
      };
    };

    if (!w.grecaptcha) {
      clearTimeout(timeout);
      reject(new Error("reCAPTCHA not available"));
      return;
    }

    w.grecaptcha.ready(() => {
      w.grecaptcha!
        .execute(RECAPTCHA_SITE_KEY, { action })
        .then((token) => {
          clearTimeout(timeout);
          resolve(token);
        })
        .catch((err) => {
          clearTimeout(timeout);
          reject(err);
        });
    });
  });
}

export function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setStatus("sending");
      setErrorMessage("");

      const form = e.currentTarget;
      const formData = new FormData(form);

      let recaptchaToken = "";
      if (RECAPTCHA_SITE_KEY) {
        try {
          recaptchaToken = await getRecaptchaToken("contact_form");
        } catch (err) {
          console.warn("reCAPTCHA failed:", err);
          // Still try to submit — server will decide
        }
      }

      const payload = {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        service: formData.get("service"),
        message: formData.get("message"),
        recaptchaToken,
      };

      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.error || "Something went wrong.");
        }

        setStatus("success");
        form.reset();
      } catch (err) {
        setStatus("error");
        setErrorMessage(
          err instanceof Error
            ? err.message
            : "Failed to send. Please try again."
        );
      }
    },
    []
  );

  if (status === "success") {
    return (
      <div className="border-t border-outline-variant/30 pt-12">
        <div className="bg-secondary-container p-12 text-center">
          <span className="material-symbols-outlined text-5xl text-secondary mb-4 block">
            check_circle
          </span>
          <h2 className="font-serif text-3xl text-primary mb-4">
            Message Sent!
          </h2>
          <p className="text-on-surface-variant max-w-md mx-auto">
            Thank you for reaching out. Scott will get back to you within one
            business day.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-8 border border-outline-variant/30 px-8 py-3 text-xs font-bold uppercase tracking-editorial hover:bg-surface-container-low transition-all"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="border-t border-outline-variant/30 pt-12">
      <h2 className="font-serif text-3xl text-primary mb-8">Send a Message</h2>

      {status === "error" && errorMessage && (
        <div className="bg-error-container text-on-error-container p-4 mb-8 text-sm">
          {errorMessage}
        </div>
      )}

      {RECAPTCHA_SITE_KEY && (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <label
              htmlFor="firstName"
              className="block text-xs uppercase tracking-editorial text-primary font-bold mb-3"
            >
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="w-full bg-transparent border-b border-outline-variant/50 pb-3 text-on-surface focus:border-primary focus:outline-none transition-colors"
              placeholder="Your first name"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-xs uppercase tracking-editorial text-primary font-bold mb-3"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full bg-transparent border-b border-outline-variant/50 pb-3 text-on-surface focus:border-primary focus:outline-none transition-colors"
              placeholder="Your last name"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-xs uppercase tracking-editorial text-primary font-bold mb-3"
          >
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full bg-transparent border-b border-outline-variant/50 pb-3 text-on-surface focus:border-primary focus:outline-none transition-colors"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-xs uppercase tracking-editorial text-primary font-bold mb-3"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full bg-transparent border-b border-outline-variant/50 pb-3 text-on-surface focus:border-primary focus:outline-none transition-colors"
            placeholder="(555) 000-0000"
          />
        </div>

        <div>
          <label
            htmlFor="service"
            className="block text-xs uppercase tracking-editorial text-primary font-bold mb-3"
          >
            How Can We Help?
          </label>
          <select
            id="service"
            name="service"
            className="w-full bg-transparent border-b border-outline-variant/50 pb-3 text-on-surface focus:border-primary focus:outline-none transition-colors"
          >
            <option value="">Select a service...</option>
            <option value="personal-tax">Personal Tax Preparation</option>
            <option value="business-accounting">
              Small Business Accounting
            </option>
            <option value="advisory">Business Advisory</option>
            <option value="year-round">Year-Round Support</option>
            <option value="other">Other / General Inquiry</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-xs uppercase tracking-editorial text-primary font-bold mb-3"
          >
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full bg-transparent border-b border-outline-variant/50 pb-3 text-on-surface focus:border-primary focus:outline-none transition-colors resize-none"
            placeholder="Tell us a bit about your situation..."
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-primary text-on-primary px-10 py-4 text-xs font-bold uppercase tracking-editorial hover:bg-primary-container transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {RECAPTCHA_SITE_KEY && (
          <p className="text-xs text-on-surface-variant mt-4">
            This site is protected by reCAPTCHA and the Google{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="https://policies.google.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary"
            >
              Terms of Service
            </a>{" "}
            apply.
          </p>
        )}
      </form>
    </div>
  );
}
