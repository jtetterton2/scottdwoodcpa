import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Scott D. Wood, CPA",
  description:
    "Learn about Scott D. Wood, CPA — decades of experience providing personal financial guidance to individuals and local businesses.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section: The Vision */}
      <section className="max-w-7xl mx-auto px-8 py-24 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
        <div className="md:col-span-7">
          <span className="text-xs uppercase tracking-editorial text-secondary font-semibold mb-6 block">
            Our Philosophy
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-primary leading-[1.1] mb-8">
            Accounting as an <br />
            <span className="italic">Architecture</span>.
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant font-light max-w-xl leading-relaxed">
            Scott D. Wood founded this firm on the belief that professional
            financial guidance should be accessible to everyone. We provide
            personal service for every client, ensuring individuals and local
            businesses have the same structural integrity in their finances as
            the largest corporations.
          </p>
        </div>
        <div className="md:col-span-5 relative">
          <div className="bg-surface-container-low overflow-hidden shadow-sm aspect-square">
            <Image
              src="/images/scott-headshot-alt.png"
              alt="Scott D. Wood, CPA"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
          <div className="absolute -left-6 bg-secondary text-white p-8 max-w-[280px] -bottom-4">
            <p className="font-serif italic text-xl">
              &ldquo;The most valuable asset we manage isn&apos;t capital—it&apos;s
              the trust and peace of mind of our neighbors.&rdquo;
            </p>
            <p className="text-[0.65rem] mt-4 opacity-80 tracking-widest uppercase">
              — Scott D. Wood
            </p>
          </div>
        </div>
      </section>

      {/* Biography / Profile Section */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <h2 className="font-serif text-3xl text-primary mb-6">
              Expertise Formed Through Precision.
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-secondary">
                  verified
                </span>
                <span className="text-[0.7rem] uppercase tracking-wider text-on-surface">
                  Certified Public Accountant
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-secondary">
                  history_edu
                </span>
                <span className="text-[0.7rem] uppercase tracking-wider text-on-surface">
                  Decades of Local Experience
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-secondary">
                  school
                </span>
                <span className="text-[0.7rem] uppercase tracking-wider text-on-surface">
                  Masters in Professional Accounting
                </span>
              </div>
            </div>
          </div>
          <div className="md:col-span-8 space-y-8">
            <p className="text-xl text-on-surface leading-relaxed font-light">
              With decades of experience navigating the complexities of tax law
              and finance, Scott D. Wood brings institutional-grade expertise to
              the everyday individuals and local businesses of our community. His
              career began in the rigorous environment of international audit
              firms, but his passion has always been in providing personal
              service for every client, regardless of their scale.
            </p>
            <p className="text-xl text-on-surface leading-relaxed font-light">
              Today, he leverages that high-level rigor to help families and
              entrepreneurs thrive. His approach is deeply personal—treating
              every ledger as a unique story that requires both technical mastery
              and a neighbor&apos;s strategic intuition.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-outline-variant/30">
              <div>
                <h4 className="text-[0.7rem] uppercase text-secondary font-bold mb-2">
                  Core Focus
                </h4>
                <p className="text-on-surface-variant font-light">
                  Individual Tax Preparation, Local Business Advisory, Financial
                  Planning.
                </p>
              </div>
              <div>
                <h4 className="text-[0.7rem] uppercase text-secondary font-bold mb-2">
                  Philosophy
                </h4>
                <p className="text-on-surface-variant font-light">
                  Integrity, accessibility, and personal commitment to every
                  neighbor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process / Timeline */}
      <section className="max-w-7xl mx-auto px-8 py-24 md:py-32">
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-editorial text-secondary font-semibold mb-4 block">
            The Methodology
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-primary">
            A Disciplined Journey.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <ProcessStep
            number="01"
            title="Discovery"
            description="A conversation about your life, your business goals, and your financial concerns."
          />
          <ProcessStep
            number="02"
            title="Analysis"
            description="Reviewing your current situation to find straightforward ways to save and grow."
          />
          <ProcessStep
            number="03"
            title="Plan"
            description="Developing a clear, practical roadmap tailored to your specific needs."
          />
          <ProcessStep
            number="04"
            title="Support"
            description="Ongoing partnership to keep your finances on track year after year."
          />
        </div>
      </section>

      {/* Ledger Summary Component */}
      <section className="bg-surface-container-highest py-20 px-8 md:pl-[10%] md:pr-[5%] overflow-hidden">
        <div className="flex flex-col md:flex-row items-baseline gap-12">
          <div className="flex flex-col">
            <span className="text-8xl md:text-9xl font-serif text-primary leading-none">
              20+
            </span>
            <span className="text-xs uppercase tracking-editorial text-primary font-bold mt-2">
              Years of Proven Excellence
            </span>
          </div>
          <div className="max-w-md">
            <p className="text-lg text-on-surface-variant leading-relaxed">
              Our legacy is built on over two decades of helping local people
              navigate their financial journeys. We bring high-level expertise
              down to earth, ensuring your foundation is as solid as it is
              successful.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Photo Section */}
      <section className="max-w-7xl mx-auto px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square overflow-hidden">
            <Image
              src="/images/scott-couple.jpg"
              alt="Scott with his family"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <span className="text-xs uppercase tracking-editorial text-secondary font-semibold mb-4 block">
              Beyond the Numbers
            </span>
            <h2 className="font-serif text-4xl text-primary mb-6">
              Rooted in Community.
            </h2>
            <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
              Scott is more than a CPA — he&apos;s a neighbor, a family man, and
              a member of the community he serves. That personal connection is
              what drives the care and attention he brings to every client
              relationship.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-8 pb-24 md:pb-32">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-xs uppercase tracking-editorial text-secondary font-semibold mb-4 block">
              Endorsements
            </span>
            <h2 className="font-serif text-4xl text-primary">
              Voices of Trust.
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <TestimonialCard
            quote="Scott treats our family's taxes like they are his own. The attention to detail and personal care he brings is something we never found at the larger firms."
            name="Elena Rodriguez"
            role="Local Business Owner"
            offset={0}
          />
          <TestimonialCard
            quote="Beyond the technical expertise, there is a level of integrity and calm in Scott's office that gives us immense confidence. He's more than a CPA; he's a trusted neighbor."
            name="Julian Thorne"
            role="Community Member"
            offset={8}
          />
          <TestimonialCard
            quote="Scott restructured our shop's bookkeeping in a way that actually made sense for our growth, saving us significant money every tax season."
            name="Marcus Vane"
            role="Small Business Owner"
            offset={16}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-24 text-center">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-serif text-4xl md:text-5xl text-white italic mb-8">
            Ready to simplify your finances?
          </h2>
          <p className="text-on-primary-container text-xl font-light mb-12">
            I am here to help. Let&apos;s begin a conversation about your
            financial goals with a personal approach.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-surface text-primary px-10 py-5 text-xs uppercase tracking-editorial font-semibold hover:bg-secondary hover:text-white transition-all"
          >
            Schedule a Discovery Call
          </Link>
        </div>
      </section>
    </>
  );
}

function ProcessStep({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-surface p-8 border-l border-primary/20 hover:border-primary transition-all group">
      <span className="text-4xl font-serif italic text-outline-variant group-hover:text-primary transition-colors">
        {number}.
      </span>
      <h3 className="font-serif text-xl text-primary mt-6 mb-4">{title}</h3>
      <p className="text-sm text-on-surface-variant leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function TestimonialCard({
  quote,
  name,
  role,
  offset,
}: {
  quote: string;
  name: string;
  role: string;
  offset: number;
}) {
  return (
    <div
      className="relative bg-surface-container-lowest p-10 border border-outline-variant/10 shadow-sm"
      style={offset ? { marginTop: `${offset * 0.25}rem` } : undefined}
    >
      <p className="text-on-surface font-light leading-relaxed mb-8">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="mt-auto">
        <p className="font-serif text-lg text-primary">{name}</p>
        <p className="text-[0.6rem] text-secondary tracking-widest mt-1 uppercase">
          {role}
        </p>
      </div>
    </div>
  );
}
