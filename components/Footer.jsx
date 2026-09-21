import Logo from "@/components/ui/Logo";
import { SITE } from "@/lib/site";
import { Phone, Mail, Instagram, Facebook, MapPin } from "@/components/ui/Icons";

const FOOTER_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Dental Tips", href: "#dental-tips" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-teal-900 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/60 to-transparent"
      />
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.2fr]">
          {/* Brand */}
          <div className="flex flex-col items-start gap-5">
            <a href="#home" className="rounded-2xl">
              <Logo size={56} theme="dark" />
            </a>
            <div>
              <p className="font-display text-lg font-bold text-white">
                Dr. Krupa&apos;s Child Dental Clinic
              </p>
              <p className="mt-1 text-sm uppercase tracking-[0.16em] text-mint-200">
                Pediatric / Child Dental Clinic
              </p>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-mint-100/80">
              Gentle, child-friendly dental care in Gandhidham — because healthy
              smiles start with happy visits.
            </p>
            <address className="not-italic">
              <p className="flex items-start gap-2 text-sm leading-relaxed text-mint-100/80">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange-300" />
                <span>
                  WARD 12/C, Aman Complex, 5, 1st Floor, Plot No. 510-511,
                  Kutch Kala Road, Above Nityanand Pooja Bhandar, Opposite
                  Kariyavar Dresses, Gandhidham, Gujarat 370201
                </span>
              </p>
            </address>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <h2 className="text-[0.75rem] font-bold uppercase tracking-[0.18em] text-orange-300">
              Quick Links
            </h2>
            <ul className="mt-5 grid gap-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-mint-100/85 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact & social */}
          <div>
            <h2 className="text-[0.75rem] font-bold uppercase tracking-[0.18em] text-orange-300">
              Contact
            </h2>
            <ul className="mt-5 grid gap-3 text-sm text-mint-100/85">
              <li>
                <a
                  href={`tel:${SITE.phoneTel}`}
                  className="inline-flex items-center gap-2.5 transition-colors duration-200 hover:text-white"
                >
                  <Phone className="h-4 w-4 text-orange-300" />
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2.5 transition-colors duration-200 hover:text-white"
                >
                  <Mail className="h-4 w-4 text-orange-300" />
                  {SITE.email}
                </a>
              </li>
            </ul>

            <h2 className="mt-8 text-[0.75rem] font-bold uppercase tracking-[0.18em] text-orange-300">
              Social
            </h2>
            <ul className="mt-5 grid gap-3 text-sm text-mint-100/85">
              <li>
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 transition-colors duration-200 hover:text-white"
                >
                  <Instagram className="h-4 w-4 text-orange-300" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={SITE.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 transition-colors duration-200 hover:text-white"
                >
                  <Facebook className="h-4 w-4 text-orange-300" />
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-mint-100/70">
            © 2026 Dr. Krupa&apos;s Child Dental Clinic. All Rights Reserved.
          </p>
          <p className="text-xs text-mint-100/70">
            Pediatric / Child Dental Clinic · Gandhidham, Gujarat
          </p>
        </div>
      </div>
    </footer>
  );
}
