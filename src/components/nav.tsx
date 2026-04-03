"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface">
      <nav className="flex justify-between items-center w-full px-8 py-6 max-w-7xl mx-auto">
        <Link href="/">
          <Image
            src="/images/logo.webp"
            alt="Scott D. Wood, CPA"
            width={160}
            height={80}
            className="h-16 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium text-xs uppercase tracking-editorial transition-colors duration-300 ${
                  isActive
                    ? "text-primary-container border-b border-primary-container pb-1"
                    : "text-on-surface-variant hover:text-secondary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <Link
          href="/contact"
          className="hidden md:block bg-primary text-on-primary px-6 py-2.5 text-xs font-semibold uppercase tracking-editorial hover:bg-primary-container transition-colors"
        >
          Book Consultation
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-primary text-3xl">
            {mobileOpen ? "close" : "menu"}
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface border-t border-outline-variant/20 px-8 pb-6">
          <div className="flex flex-col gap-4 pt-4">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`font-medium text-sm uppercase tracking-editorial py-2 ${
                    isActive ? "text-primary-container" : "text-on-surface-variant"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="bg-primary text-on-primary px-6 py-3 text-xs font-semibold uppercase tracking-editorial text-center mt-2"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}

      <div className="bg-surface-container-low h-px w-full" />
    </header>
  );
}
