import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import FloatingDental from "@/components/ui/FloatingDental";
import { WHY_FEATURES } from "@/lib/site";

/** "Designed Around Your Child" — four numbered reasons parents choose us. */
export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative scroll-mt-28 py-20 sm:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-16 h-72 w-72 rounded-full bg-skysoft-50 blob-organic-2 blur-3xl" />
      </div>

      <div className="container-x relative">
        <SectionHeading
          eyebrow="Why Parents Choose Us"
          title="Designed Around Your Child"
          sub="Thoughtful details that make every visit easier — for children and for parents."
          id="why-us-title"
        />

        <ul
          aria-labelledby="why-us-title"
          className="mt-14 grid gap-x-16 gap-y-10 md:grid-cols-2"
        >
          {WHY_FEATURES.map((f, i) => (
            <Reveal key={f.num} delay={0.08 * i} y={26}>
              <li className="group relative flex items-start gap-6 rounded-4xl p-6 transition-all duration-300 hover:bg-white hover:shadow-soft sm:gap-8">
                <span
                  aria-hidden="true"
                  className="font-display text-[3.4rem] font-extrabold leading-none text-teal-100 transition-colors duration-300 group-hover:text-orange-200 sm:text-[4.2rem]"
                >
                  {f.num}
                </span>
                <span className="mt-1 block">
                  <span className="block h-px w-12 bg-orange-400/70 transition-all duration-300 group-hover:w-20" />
                  <h3 className="mt-4 font-display text-xl font-bold text-teal-900 sm:text-2xl">
                    {f.title}
                  </h3>
                  <p className="mt-2 max-w-sm text-[0.95rem] leading-relaxed text-charcoal-soft">
                    {f.desc}
                  </p>
                </span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
