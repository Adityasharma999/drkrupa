import Reveal from "@/components/ui/Reveal";
import FloatingDental from "@/components/ui/FloatingDental";
import AppointmentForm from "./AppointmentForm";
import { SITE } from "@/lib/site";
import { Phone, ArrowRight, Sparkle, Tooth } from "@/components/ui/Icons";

/** Strong closing CTA + appointment request form. */
export default function AppointmentSection() {
  return (
    <section id="book" className="relative scroll-mt-28 py-20 sm:py-24">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2.75rem] bg-gradient-to-br from-teal-800 via-teal-700 to-teal-600 shadow-lift">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 -bottom-24 h-80 w-80 rounded-full bg-white/5" />
            <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-orange-300/10 blob-organic" />
            <FloatingDental tone="dark" />
            <span className="absolute left-[6%] top-[16%] animate-floaty">
              <Tooth className="h-9 w-9 text-white/20" strokeWidth={1.3} />
            </span>
            <span className="absolute bottom-[12%] right-[6%] animate-twinkle">
              <Sparkle className="h-6 w-6 text-orange-200/60" strokeWidth={1.3} />
            </span>
          </div>

          <div className="relative grid items-center gap-12 px-6 py-14 sm:px-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16 lg:px-16 lg:py-20">
            <Reveal>
              <div className="flex flex-col items-start gap-6">
                <span
                  className="eyebrow"
                  style={{ background: "rgba(255,255,255,0.1)", color: "#E2F3EB" }}
                >
                  <Sparkle className="h-3.5 w-3.5" />
                  Appointments
                </span>
                <h2 className="max-w-md font-display text-[2.1rem] font-bold leading-[1.1] text-white sm:text-[2.7rem]">
                  Your Child&apos;s Healthy Smile{" "}
                  <span className="text-orange-300">Starts Here</span>
                </h2>
                <p className="max-w-md text-base leading-relaxed text-mint-100">
                  Give your child a comfortable and positive dental experience.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a href="#appointment-form-title" className="btn btn-primary group">
                    Book an Appointment
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                  <a href={`tel:${SITE.phoneTel}`} className="btn btn-ghost-light">
                    <Phone className="h-4 w-4" />
                    Call {SITE.phoneDisplay}
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <AppointmentForm />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
