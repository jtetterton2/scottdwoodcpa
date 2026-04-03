import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-surface-container-low mt-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 w-full px-8 py-16 max-w-7xl mx-auto">
        <div className="md:col-span-1">
          <div className="text-xl font-serif text-primary mb-6">
            Scott D. Wood, CPA
          </div>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            Accessible financial expertise for everyone. Helping individuals and
            local businesses thrive through clear, honest accounting.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-editorial font-bold text-primary mb-6">
            Navigation
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                href="/about"
                className="text-on-surface-variant hover:text-primary-container underline transition-all text-sm"
              >
                Meet Scott
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-on-surface-variant hover:text-primary-container underline transition-all text-sm"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-on-surface-variant hover:text-primary-container underline transition-all text-sm"
              >
                Get in Touch
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-editorial font-bold text-primary mb-6">
            Resources
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                href="#"
                className="text-on-surface-variant hover:text-primary-container underline transition-all text-sm"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-on-surface-variant hover:text-primary-container underline transition-all text-sm"
              >
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-editorial font-bold text-primary mb-6">
            Contact
          </h4>
          <p className="text-on-surface-variant text-sm mb-2">
            PO Box 41
          </p>
          <p className="text-on-surface-variant text-sm mb-6">
            Culpeper, VA 22701
          </p>
          <Link
            href="/contact"
            className="text-secondary font-semibold hover:text-primary-container transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-on-surface-variant text-xs">
          &copy; {new Date().getFullYear()} Scott D. Wood, CPA. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
