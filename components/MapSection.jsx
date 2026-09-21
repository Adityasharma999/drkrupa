import { SITE } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";
import { MapPin, ArrowUpRight, Phone } from "@/components/ui/Icons";

/** Interactive Google Map with a floating location card. */
export default function MapSection() {
  return (
    <section aria-label="Clinic location map" className="relative pb-24 pt-4">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-lift ring-1 ring-teal-50">
            <iframe
              title={`Google Map showing the location of ${SITE.name}`}
              src={SITE.mapEmbedUrl}
              className="h-[420px] w-full border-0 sm:h-[480px]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Location card overlay */}
            <div className="pointer-events-none absolute left-4 top-4 max-w-xs sm:left-6 sm:top-6">
              <div className="pointer-events-auto rounded-3xl bg-white/95 p-5 shadow-lift backdrop-blur-sm ring-1 ring-teal-50 sm:p-6">
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-teal-700 text-white">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display text-base font-bold leading-tight text-teal-900">
                      Dr. Krupa&apos;s Child Dental Clinic
                    </p>
                    <p className="mt-1 text-sm text-charcoal-soft">Aman Complex</p>
                    <p className="text-sm text-charcoal-soft">Gandhidham, Gujarat</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href={SITE.mapDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-teal btn-sm"
                  >
                    Get Directions
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                  <a href={`tel:${SITE.phoneTel}`} className="btn btn-outline btn-sm">
                    <Phone className="h-3.5 w-3.5" />
                    Call
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
