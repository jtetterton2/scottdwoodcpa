import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Scott D. Wood, CPA",
  description:
    "Professional tax preparation, small business accounting, and year-round financial support. Straightforward solutions for life and business.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section: Editorial Layout */}
      <section className="max-w-7xl mx-auto px-8 mb-24 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <span className="text-xs uppercase tracking-editorial text-secondary mb-4 block font-semibold">
              Accessible Expertise
            </span>
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-primary leading-none -ml-1">
              Professional <br />
              <span className="italic font-light">Care.</span>
            </h1>
          </div>
          <div className="lg:col-span-4 pb-2">
            <p className="text-on-surface-variant leading-relaxed max-w-sm">
              Bringing high-level financial clarity to everyone. Whether
              you&apos;re an individual or a growing business, we provide the
              dedicated support you deserve.
            </p>
          </div>
        </div>
      </section>

      {/* Services Breakdown: The Ledger Grid */}
      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-outline-variant/30">
          {/* Service 1 */}
          <div className="group p-8 md:p-12 border-b md:border-b-0 md:border-r border-outline-variant/30 bg-surface hover:bg-surface-container-low transition-colors duration-500">
            <div className="mb-12">
              <span className="material-symbols-outlined text-4xl text-primary mb-6 block">
                person
              </span>
              <h3 className="font-serif text-3xl text-primary mb-6">
                Personal Tax Preparation
              </h3>
              <p className="text-on-surface-variant leading-relaxed mb-8">
                Reliable tax filing for individuals and families. We ensure you
                maximize your returns while staying fully compliant with the
                latest regulations.
              </p>
            </div>
            <ul className="space-y-4 mb-12 text-xs uppercase tracking-editorial text-primary/70">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-secondary" /> Annual Income Tax
                Returns
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-secondary" /> Deduction &amp;
                Credit Analysis
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-secondary" /> Electronic Filing
                &amp; Direct Deposit
              </li>
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-medium text-secondary hover:text-primary transition-colors"
            >
              Get Started{" "}
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </Link>
          </div>

          {/* Service 2 */}
          <div className="group p-8 md:p-12 border-b md:border-b-0 md:border-r border-outline-variant/30 bg-surface-container-low transition-colors duration-500">
            <div className="mb-12">
              <span className="material-symbols-outlined text-4xl text-primary mb-6 block">
                store
              </span>
              <h3 className="font-serif text-3xl text-primary mb-6">
                Small Business Accounting
              </h3>
              <p className="text-on-surface-variant leading-relaxed mb-8">
                Straightforward bookkeeping and payroll solutions for local
                businesses. We handle the paperwork so you can focus on serving
                your customers.
              </p>
            </div>
            <ul className="space-y-4 mb-12 text-xs uppercase tracking-editorial text-primary/70">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-secondary" /> Monthly
                Bookkeeping
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-secondary" /> Simple Payroll
                Processing
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-secondary" /> Financial Health
                Checkups
              </li>
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-medium text-secondary hover:text-primary transition-colors"
            >
              Business Solutions{" "}
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </Link>
          </div>

          {/* Service 3 */}
          <div className="group p-8 md:p-12 bg-surface hover:bg-surface-container-low transition-colors duration-500">
            <div className="mb-12">
              <span className="material-symbols-outlined text-4xl text-primary mb-6 block">
                calendar_month
              </span>
              <h3 className="font-serif text-3xl text-primary mb-6">
                Year-Round Support
              </h3>
              <p className="text-on-surface-variant leading-relaxed mb-8">
                Expert advice isn&apos;t just for tax season. We provide
                year-round guidance to help you make informed financial decisions
                whenever they arise.
              </p>
            </div>
            <ul className="space-y-4 mb-12 text-xs uppercase tracking-editorial text-primary/70">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-secondary" /> Quarterly
                Planning Meetings
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-secondary" /> On-Call Financial
                Advice
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-secondary" /> Life Event Tax
                Planning
              </li>
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-medium text-secondary hover:text-primary transition-colors"
            >
              Learn More{" "}
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Personalized Trust Section with Scott's Headshot */}
      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="bg-primary text-on-primary overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 relative min-h-[400px]">
            <Image
              src="/images/scott-headshot.webp"
              alt="Scott D. Wood, CPA"
              fill
              className="object-cover grayscale-[0.2] contrast-[1.05]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-primary/80 to-transparent md:hidden">
              <p className="font-serif text-2xl">Scott D. Wood, CPA</p>
            </div>
          </div>
          <div className="md:w-1/2 p-10 md:p-16 lg:p-24 flex flex-col justify-center">
            <span className="text-xs uppercase tracking-editorial text-primary-fixed mb-4 block">
              Our Commitment
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl leading-tight mb-8">
              Expertise for All.{" "}
              <br />
              <span className="italic font-light opacity-80">
                Personal Touch.
              </span>
            </h2>
            <p className="text-lg text-primary-fixed/80 leading-relaxed mb-10 max-w-lg">
              I believe every client deserves high-quality professional advice.
              Whether you&apos;re filing a simple return or managing a growing
              business, I&apos;m here to provide the direct, expert support you
              need to succeed.
            </p>
            <div className="flex items-center gap-4 border-t border-primary-fixed/20 pt-8">
              <div>
                <p className="font-serif text-xl text-primary-fixed">
                  Scott D. Wood
                </p>
                <p className="text-[10px] uppercase tracking-widest text-primary-fixed/60">
                  Principal &amp; Founder
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Ledger Summary Component: Value Based Pricing */}
      <section className="w-full bg-surface-container-highest py-24 mb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 lg:pl-[5%]">
            <span className="text-xs uppercase tracking-editorial text-secondary mb-4 block">
              Fair Pricing
            </span>
            <h2 className="font-serif text-5xl md:text-6xl text-primary leading-tight mb-8">
              Transparent &amp; <br />
              <span className="italic">Predictable.</span>
            </h2>
            <p className="text-lg text-on-surface-variant leading-relaxed max-w-xl">
              We believe in straightforward pricing with no hidden surprises. Our
              goal is to provide exceptional value and peace of mind through
              clear, upfront fee structures.
            </p>
          </div>
          <div className="lg:col-span-5 lg:pr-[5%]">
            <div className="bg-surface-container-lowest p-10 editorial-shadow border border-outline-variant/10">
              <div className="text-7xl font-serif text-primary mb-4">Flat</div>
              <p className="text-xs uppercase tracking-editorial text-on-surface-variant mb-8">
                Fee Structure Available
              </p>
              <div className="space-y-6">
                <div className="flex justify-between items-end border-b border-outline-variant/20 pb-2">
                  <span className="text-sm">Upfront Quotes</span>
                  <span className="material-symbols-outlined text-secondary text-sm">
                    check
                  </span>
                </div>
                <div className="flex justify-between items-end border-b border-outline-variant/20 pb-2">
                  <span className="text-sm">No Hourly Surprises</span>
                  <span className="material-symbols-outlined text-secondary text-sm">
                    check
                  </span>
                </div>
                <div className="flex justify-between items-end border-b border-outline-variant/20 pb-2">
                  <span className="text-sm">Flexible Payment Plans</span>
                  <span className="material-symbols-outlined text-secondary text-sm">
                    check
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative">
              <Image
                src="/images/scott-couple.jpg"
                alt="Scott with his family"
                width={800}
                height={600}
                className="w-full h-[600px] object-cover grayscale-[0.5] contrast-[1.1]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary p-8 text-on-primary max-w-xs hidden md:block">
                <p className="font-serif text-xl">Service for everyone.</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2">
            <span className="text-xs uppercase tracking-editorial text-secondary mb-4 block">
              Our Clients
            </span>
            <h2 className="font-serif text-5xl text-primary mb-12">
              Who We Serve
            </h2>
            <div className="space-y-12">
              <div className="flex gap-6 group">
                <span className="text-4xl font-serif text-outline-variant group-hover:text-secondary transition-colors">
                  01
                </span>
                <div>
                  <h4 className="font-serif text-2xl text-primary mb-2">
                    Individuals &amp; Families
                  </h4>
                  <p className="text-on-surface-variant leading-relaxed">
                    Providing peace of mind with accurate tax preparation and
                    sensible financial planning for your household.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 group">
                <span className="text-4xl font-serif text-outline-variant group-hover:text-secondary transition-colors">
                  02
                </span>
                <div>
                  <h4 className="font-serif text-2xl text-primary mb-2">
                    Small Business Owners
                  </h4>
                  <p className="text-on-surface-variant leading-relaxed">
                    Helping entrepreneurs and local shops manage their books and
                    grow their vision without the stress.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 group">
                <span className="text-4xl font-serif text-outline-variant group-hover:text-secondary transition-colors">
                  03
                </span>
                <div>
                  <h4 className="font-serif text-2xl text-primary mb-2">
                    Independent Professionals
                  </h4>
                  <p className="text-on-surface-variant leading-relaxed">
                    Customized support for freelancers and consultants navigating
                    self-employment taxes and expenses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-8 mb-20 text-center">
        <div className="bg-surface-container-low py-20 px-12 border-t-2 border-primary">
          <h2 className="font-serif text-4xl text-primary mb-6">
            Let&apos;s Simplify Your Taxes
          </h2>
          <p className="text-on-surface-variant mb-12 max-w-lg mx-auto">
            Schedule a free 15-minute discovery call to see how we can help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/contact"
              className="bg-primary text-on-primary px-8 py-4 text-xs font-medium tracking-editorial uppercase hover:bg-primary-container transition-all"
            >
              Book Free Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
