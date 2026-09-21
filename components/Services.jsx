import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { IconByName } from "@/components/ui/Icons";
import { SERVICES } from "@/lib/site";

const TINTS = [
  "bg-mint-50 text-teal-700 group-hover:bg-mint-100",
  "bg-skysoft-50 text-teal-700 group-hover:bg-skysoft-100",
  "bg-orange-50 text-orange-600 group-hover:bg-orange-100",
  "bg-teal-50 text-teal-700 group-hover:bg-teal-100",
  "bg-ivory-warm text-orange-600 group-hover:bg-ivory-deep",
  "bg-mint-50 text-teal-700 group-hover:bg-mint-100",
];

/** Complete dental care — 6 service cards with gentle hover motion. */
export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-28 py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Services"
          title="Complete Dental Care for Growing Smiles"
          sub="From first check-ups to gentle treatments, every service is designed around the unique needs of children."
          id="services-title"
        />

        <ul
          aria-labelledby="services-title"
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={0.07 * i} y={24}>
              <li className="group h-full">
                <article className="card flex h-full flex-col gap-5 p-8 transition-all duration-300 ease-out hover:-translate-y-[6px] hover:border-teal-200 hover:shadow-lift">
                  <span
                    className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 group-hover:rotate-3 group-hover:scale-105 ${TINTS[i % TINTS.length]}`}
                  >
                    <IconByName name={service.icon} className="h-7 w-7" strokeWidth={1.6} />
                  </span>
                  <h3 className="font-display text-xl font-bold text-teal-900">
                    {service.title}
                  </h3>
                  <p className="text-[0.95rem] leading-relaxed text-charcoal-soft">
                    {service.desc}
                  </p>
                </article>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
