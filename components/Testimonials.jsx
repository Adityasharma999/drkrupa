import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE } from "@/lib/site";
import { Star, Quote, ArrowUpRight } from "@/components/ui/Icons";

const PLACEHOLDERS = [0, 1, 2];

/**
 * Testimonial placeholders — intentionally NOT fabricated.
 * Replace with real Google reviews when available.
 */
export default function Testimonials() {
  return (
    <section id="reviews" className="relative scroll-mt-28 py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Parents Say"
          sub="Real stories from families will appear here soon."
          id="testimonials-title"
        />

        <ul
          aria-labelledby="testimonials-title"
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {PLACEHOLDERS.map((_, i) => (
            <Reveal key={i} delay={0.08 * i} y={24}>
              <li className="group h-full">
                <figure className="card relative flex h-full flex-col gap-5 p-8 transition-all duration-300 hover:-translate-y-[6px] hover:border-teal-200 hover:shadow-lift">
                  <Quote
                    aria-hidden="true"
                    className="absolute right-6 top-6 h-10 w-10 text-teal-50"
                  />
                  <div className="flex gap-1" aria-label="5 star placeholder">
                    {[0, 1, 2, 3, 4].map((s) => (
                      <Star
                        key={s}
                        className="h-4 w-4 fill-orange-400 text-orange-400"
                      />
                    ))}
                  </div>
                  <blockquote className="flex-1">
                    <p className="text-[1.02rem] italic leading-relaxed text-charcoal-soft">
                      &ldquo;Parent testimonial will appear here.&rdquo;
                    </p>
                  </blockquote>
                  <figcaption className="flex items-center gap-3 border-t border-teal-50 pt-5">
                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-ivory-warm font-display text-sm font-bold text-teal-700"
                    >
                      P
                    </span>
                    <span className="text-sm font-bold text-teal-900">
                      — Parent Name
                    </span>
                  </figcaption>
                </figure>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.28}>
          <div className="mt-12 flex justify-center">
            <a
              href={SITE.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline group"
            >
              See More Google Reviews
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
