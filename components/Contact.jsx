import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE } from "@/lib/site";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  ArrowUpRight,
  ArrowRight,
} from "@/components/ui/Icons";

/** Clean contact block with call / directions / booking actions. */
export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-28 py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Contact"
          title="Dr. Krupa's Child Dental Clinic"
          sub="We'd love to hear from you — reach out for appointments or any questions about your child's dental care."
          id="contact-title"
        />

        <div
          aria-labelledby="contact-title"
          className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_1fr]"
        >
          {/* Address & channels */}
          <Reveal className="h-full">
            <div className="card flex h-full flex-col gap-8 p-8 sm:p-10">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
                  <MapPin className="h-6 w-6" />
                </span>
                <address className="not-italic">
                  <p className="font-display text-lg font-bold text-teal-900">
                    {SITE.name}
                  </p>
                  <div className="mt-2 space-y-0.5 text-[0.95rem] leading-relaxed text-charcoal-soft">
                    {SITE.addressLines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </address>
              </div>

              <div className="grid gap-4 border-t border-teal-50 pt-8 sm:grid-cols-2">
                <a
                  href={`tel:${SITE.phoneTel}`}
                  className="group flex items-center gap-3.5 rounded-2xl border border-teal-50 bg-ivory px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-200 hover:bg-white hover:shadow-soft"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-mint-100 text-teal-700">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-[0.7rem] font-bold uppercase tracking-wider text-charcoal-mute">
                      Phone
                    </span>
                    <span className="block font-bold text-teal-900">
                      {SITE.phoneDisplay}
                    </span>
                  </span>
                </a>
                <a
                  href={`mailto:${SITE.email}`}
                  className="group flex items-center gap-3.5 rounded-2xl border border-teal-50 bg-ivory px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-200 hover:bg-white hover:shadow-soft"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-skysoft-100 text-teal-700">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.7rem] font-bold uppercase tracking-wider text-charcoal-mute">
                      Email
                    </span>
                    <span className="block break-all font-bold text-teal-900">
                      {SITE.email}
                    </span>
                  </span>
                </a>
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3.5 rounded-2xl border border-teal-50 bg-ivory px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-200 hover:bg-white hover:shadow-soft"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 text-orange-500">
                    <Instagram className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-[0.7rem] font-bold uppercase tracking-wider text-charcoal-mute">
                      Instagram
                    </span>
                    <span className="block font-bold text-teal-900">
                      {SITE.instagramHandle}
                    </span>
                  </span>
                </a>
                <a
                  href={SITE.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3.5 rounded-2xl border border-teal-50 bg-ivory px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-200 hover:bg-white hover:shadow-soft"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-skysoft-100 text-teal-700">
                    <Facebook className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.7rem] font-bold uppercase tracking-wider text-charcoal-mute">
                      Facebook
                    </span>
                    <span className="block font-bold leading-snug text-teal-900">
                      {SITE.facebookName}
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Quick actions */}
          <Reveal delay={0.15} className="h-full">
            <div className="flex h-full flex-col gap-4">
              <a
                href={SITE.mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group card flex flex-1 items-center justify-between gap-5 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-lift sm:p-10"
              >
                <span>
                  <span className="block font-display text-xl font-bold text-teal-900">
                    Get Directions
                  </span>
                  <span className="mt-1 block text-sm text-charcoal-soft">
                    Aman Complex, Kutch Kala Road, Gandhidham
                  </span>
                </span>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700 transition-all duration-300 group-hover:bg-teal-700 group-hover:text-white">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </a>
              <a
                href={`tel:${SITE.phoneTel}`}
                className="group card flex flex-1 items-center justify-between gap-5 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-lift sm:p-10"
              >
                <span>
                  <span className="block font-display text-xl font-bold text-teal-900">
                    Call Clinic
                  </span>
                  <span className="mt-1 block text-sm text-charcoal-soft">
                    {SITE.phoneDisplay}
                  </span>
                </span>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-mint-100 text-teal-700 transition-all duration-300 group-hover:bg-teal-700 group-hover:text-white">
                  <Phone className="h-5 w-5" />
                </span>
              </a>
              <a
                href="#book"
                className="group flex flex-1 items-center justify-between gap-5 rounded-4xl bg-orange-600 p-8 text-white shadow-btn transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500 sm:p-10"
              >
                <span>
                  <span className="block font-display text-xl font-bold">
                    Book Appointment
                  </span>
                  <span className="mt-1 block text-sm text-orange-100">
                    Request a comfortable visit for your child
                  </span>
                </span>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="h-5 w-5" />
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
