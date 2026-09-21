import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { TIPS } from "@/lib/site";
import { ArrowRight } from "@/components/ui/Icons";

/** Parent education cards — ready to connect to a blog later. */
export default function ParentEducation() {
  return (
    <section id="dental-tips" className="relative scroll-mt-28 bg-ivory-warm/70 py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Dental Tips for Parents"
          title="Helping Parents Build Healthy Smiles"
          sub="Simple, trustworthy guidance for everyday dental care at home."
          id="tips-title"
        />

        <ul aria-labelledby="tips-title" className="mt-14 grid gap-6 md:grid-cols-3">
          {TIPS.map((tip, i) => (
            <Reveal key={tip.title} delay={0.08 * i} y={24}>
              <li className="group h-full">
                <article className="card flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-[6px] hover:shadow-lift">
                  <div className="flex items-center justify-between bg-gradient-to-r from-teal-50 to-mint-50 px-8 py-5">
                    <span className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-teal-700">
                      {tip.tag}
                    </span>
                    <span className="font-display text-3xl font-extrabold text-teal-100 transition-colors duration-300 group-hover:text-orange-200">
                      0{i + 1}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-4 p-8">
                    <h3 className="font-display text-xl font-bold leading-snug text-teal-900">
                      {tip.title}
                    </h3>
                    <p className="text-[0.95rem] leading-relaxed text-charcoal-soft">
                      {tip.desc}
                    </p>
                  </div>
                </article>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.3}>
          <div className="mt-12 flex justify-center">
            <a href="/dental-tips" className="btn btn-teal group">
              Explore Dental Tips
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
