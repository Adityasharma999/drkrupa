import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import StatCounter from "@/components/ui/StatCounter";
import { SITE } from "@/lib/site";
import { GoogleG, Star, ArrowUpRight, MapPin, Check } from "@/components/ui/Icons";

/** Google reviews trust band — verified review count only, no invented rating. */
export default function Reviews() {
  return (
    <section id="google-reviews" className="relative py-20 sm:py-24">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2.75rem] bg-gradient-to-br from-mint-50 via-skysoft-50 to-ivory-warm ring-1 ring-teal-50">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/70 blob-organic blur-2xl"
          />

          <div className="relative grid items-center gap-12 px-8 py-14 sm:px-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16 lg:px-16 lg:py-20">
            <div className="flex flex-col items-start gap-6">
              <SectionHeading
                eyebrow="Google Reviews"
                title="Trusted by Families in Gandhidham"
                align="left"
                id="google-reviews-title"
              />
              <Reveal delay={0.12}>
                <p className="max-w-md text-base leading-relaxed text-charcoal-soft">
                  Parents across Gandhidham have shared their experiences on
                  Google. We are grateful for every family&apos;s trust.
                </p>
              </Reveal>

              {/* Animated statistic */}
              <Reveal delay={0.2}>
                <div className="mt-2 flex items-end gap-4 rounded-3xl bg-white px-8 py-6 shadow-soft ring-1 ring-teal-50">
                  <StatCounter
                    to={SITE.reviewCount}
                    suffix="+"
                    className="font-display text-[3.4rem] font-extrabold leading-none text-teal-800 sm:text-6xl"
                  />
                  <div className="pb-1.5">
                    <p className="font-display text-lg font-bold text-teal-900">
                      Google Reviews
                    </p>
                    <p className="text-sm text-charcoal-mute">
                      from parents in Gandhidham
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.28}>
                <a
                  href={SITE.reviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary group"
                >
                  View Google Reviews
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </Reveal>
            </div>

            {/* Google-review-style card */}
            <Reveal delay={0.18}>
              <div className="mx-auto w-full max-w-md rounded-[2rem] bg-white p-8 shadow-lift ring-1 ring-teal-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <GoogleG className="h-8 w-8" />
                    <div>
                      <p className="font-display text-base font-bold text-charcoal">
                        Google Reviews
                      </p>
                      <p className="text-xs text-charcoal-mute">Verified listings</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-mint-50 px-3 py-1.5 text-[0.7rem] font-bold uppercase tracking-wider text-teal-700">
                    90+ Reviews
                  </span>
                </div>

                <div className="mt-6 flex gap-1" aria-label="Review stars placeholder">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-5 w-5 text-charcoal-mute/35" />
                  ))}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-charcoal-soft">
                  Read authentic reviews shared by parents about their children&apos;s
                  dental visits at our clinic.
                </p>

                <ul className="mt-6 space-y-3 border-t border-teal-50 pt-6 text-sm">
                  <li className="flex items-center gap-3 text-charcoal-soft">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-mint-100 text-teal-700">
                      <Check className="h-3.5 w-3.5" strokeWidth={2.4} />
                    </span>
                    Reviews from real families
                  </li>
                  <li className="flex items-center gap-3 text-charcoal-soft">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-mint-100 text-teal-700">
                      <Check className="h-3.5 w-3.5" strokeWidth={2.4} />
                    </span>
                    Feedback about children&apos;s dental care
                  </li>
                  <li className="flex items-center gap-3 text-charcoal-soft">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-mint-100 text-teal-700">
                      <Check className="h-3.5 w-3.5" strokeWidth={2.4} />
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-4 w-4 text-teal-500" />
                      {SITE.city}, {SITE.state}
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
