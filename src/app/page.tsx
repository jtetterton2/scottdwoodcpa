import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero Section: The Editorial Cover */}
      <section className="relative max-w-7xl mx-auto px-8 py-20 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 order-2 md:order-1">
          <p className="text-xs uppercase tracking-editorial text-secondary mb-6 font-semibold">
            Accessible Expertise
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-primary leading-[1.1] mb-8">
            Financial Clarity for Everyone.
          </h1>
          <p className="text-on-surface-variant max-w-xl leading-relaxed mb-10 text-lg">
            Honest financial guidance and reliable bookkeeping designed for
            everyday success. We simplify the numbers so you can focus on what
            matters most.
          </p>
          <div className="flex gap-4">
            <Link
              href="/services"
              className="bg-primary text-on-primary px-8 py-4 text-xs font-bold uppercase tracking-editorial hover:shadow-lg transition-all"
            >
              Our Services
            </Link>
            <Link
              href="/about"
              className="border border-outline-variant/30 px-8 py-4 text-xs font-bold uppercase tracking-editorial hover:bg-surface-container-low transition-all"
            >
              How We Help
            </Link>
          </div>
        </div>
        <div className="md:col-span-5 order-1 md:order-2 relative">
          <div className="aspect-[4/5] bg-surface-container-highest overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
            <Image
              src="/images/scott-headshot.webp"
              alt="Scott D. Wood, CPA"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary opacity-10 hidden lg:block" />
        </div>
      </section>

      {/* The Ledger Summary Component */}
      <section className="bg-surface-container-highest py-20 px-8 md:pl-[10%] md:pr-[5%]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 items-center">
          <div className="md:col-span-2">
            <span className="font-serif text-7xl md:text-9xl text-primary leading-none">
              25+
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-primary mt-4 mb-6">
              Years of Community Trust
            </h2>
            <p className="text-on-surface-variant max-w-2xl">
              Accounting isn&apos;t just for big corporations. For over two
              decades, we&apos;ve helped families and local business owners
              navigate taxes and growth with the same care and precision we give
              every client.
            </p>
          </div>
          <div className="space-y-8">
            <div className="border-l-2 border-secondary pl-6">
              <p className="text-xs uppercase tracking-editorial text-secondary font-bold mb-1">
                Total Returns Filed
              </p>
              <p className="font-serif text-3xl text-primary">12,000+</p>
            </div>
            <div className="border-l-2 border-secondary pl-6">
              <p className="text-xs uppercase tracking-editorial text-secondary font-bold mb-1">
                Local Support
              </p>
              <p className="font-serif text-3xl text-primary">
                100% Personal
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services: Editorial Grid */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-editorial text-secondary font-semibold mb-4">
              How We Serve You
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-primary">
              Straightforward solutions for life and business.
            </h2>
          </div>
          <div className="hidden md:block h-px flex-grow mx-12 bg-outline-variant/30" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline-variant/20">
          <ServiceCard
            icon="account_balance_wallet"
            title="Tax Help & Planning"
            description="No-stress tax preparation for individuals and families. We find every deduction and make sure you're always on track."
            linkText="Start Planning"
          />
          <ServiceCard
            icon="query_stats"
            title="Small Business Support"
            description="Affordable bookkeeping and monthly reporting that helps you understand where your money goes and how to keep more of it."
            linkText="View Support"
          />
          <ServiceCard
            icon="insights"
            title="Business Advisory"
            description="Practical advice for growing your local business. We act as your financial partner, helping you make confident decisions."
            linkText="Get Advice"
          />
        </div>
      </section>

      {/* Success Stories: Asymmetric Layout */}
      <section className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <p className="text-xs uppercase tracking-editorial text-secondary font-semibold mb-4">
                Client Voices
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-primary mb-8">
                Real stories from the people we work for.
              </h2>
              <div className="aspect-square bg-surface-container-highest overflow-hidden">
                <Image
                  src="/images/scott-casual.jpg"
                  alt="Scott in the community"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-24 pt-12">
            <Testimonial
              quote="Scott made taxes so much less intimidating. For the first time, I actually understand my return and feel confident about my family's finances."
              name="Eleanor Vance"
              role="Local Shop Owner"
              align="right"
            />
            <Testimonial
              quote="Having someone I can call who understands my business has been a game-changer. Scott is honest, down-to-earth, and truly cares."
              name="Marcus Thorne"
              role="Contractor"
              align="left"
            />
            <Testimonial
              quote="I used to dread tax season, but Scott handles everything with such ease. It's affordable, professional, and exactly what we needed."
              name="Julianna Moretti"
              role="Individual Tax Filer"
              align="right"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="bg-primary-container p-12 md:p-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-container opacity-50 transform skew-x-12 translate-x-1/4" />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-6xl text-white mb-6">
                Let&apos;s simplify your finances together.
              </h2>
              <p className="text-on-primary-container text-lg max-w-md">
                Book a friendly, no-obligation chat to see how we can help you
                or your small business stay organized and worry-free.
              </p>
            </div>
            <div className="flex md:justify-end">
              <div className="bg-surface p-1 w-full max-w-md">
                <Link
                  href="/contact"
                  className="block w-full bg-primary text-on-primary py-6 px-8 text-xs uppercase tracking-editorial font-bold hover:bg-primary-container transition-colors text-center"
                >
                  Talk to Scott Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceCard({
  icon,
  title,
  description,
  linkText,
}: {
  icon: string;
  title: string;
  description: string;
  linkText: string;
}) {
  return (
    <div className="bg-surface p-12 group hover:bg-surface-container-low transition-colors duration-500">
      <span className="material-symbols-outlined text-4xl text-secondary mb-8 block">
        {icon}
      </span>
      <h3 className="font-serif text-2xl text-primary mb-4">{title}</h3>
      <p className="text-on-surface-variant leading-relaxed mb-8">
        {description}
      </p>
      <Link
        href="/services"
        className="inline-flex items-center gap-2 text-xs uppercase tracking-editorial font-bold text-primary group-hover:text-secondary transition-colors"
      >
        {linkText}{" "}
        <span className="material-symbols-outlined text-sm">
          arrow_forward
        </span>
      </Link>
    </div>
  );
}

function Testimonial({
  quote,
  name,
  role,
  align,
}: {
  quote: string;
  name: string;
  role: string;
  align: "left" | "right";
}) {
  return (
    <div className={`max-w-xl ${align === "right" ? "ml-auto" : ""}`}>
      <span className="font-serif text-6xl text-secondary/20 leading-none h-8 block">
        &ldquo;
      </span>
      <p className="font-serif text-2xl md:text-3xl text-primary mb-8 leading-snug">
        {quote}
      </p>
      <div>
        <p className="text-xs uppercase tracking-editorial font-bold text-primary">
          {name}
        </p>
        <p className="text-on-surface-variant text-sm">{role}</p>
      </div>
    </div>
  );
}
