import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { TIPS } from "@/lib/site";
import { ArrowRight, Sparkle, Tooth, Feather, Heart } from "@/components/ui/Icons";

export const metadata = {
  title: "Dental Tips for Parents",
  description:
    "Helpful dental tips for parents from Dr. Krupa's Child Dental Clinic in Gandhidham — first visits, toothbrushes and stress-free dental care for children.",
};

const ICONS = [Tooth, Feather, Heart];

export default function DentalTipsPage() {
  return (
    <main className="min-h-screen bg-ivory">
      <div className="container-x py-10">
        <Link href="/" className="group inline-flex items-center gap-3 rounded-2xl">
          <Logo priority />
        </Link>
      </div>

      <section className="container-x pb-24">
        <span className="eyebrow">
          <Sparkle className="h-3.5 w-3.5 text-orange-500" />
          Dental Tips for Parents
        </span>
        <h1 className="mt-5 max-w-2xl font-display text-[2.4rem] font-bold leading-[1.1] text-teal-900 sm:text-[3rem]">
          Helping Parents Build{" "}
          <span className="text-orange-600">Healthy Smiles</span>
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-charcoal-soft">
          Our full dental tips library is coming soon. Here&apos;s a first look at
          the guidance we&apos;ll be sharing with parents.
        </p>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {TIPS.map((tip, i) => {
            const Icon = ICONS[i];
            return (
              <li key={tip.title} className="group h-full">
                <article className="card flex h-full flex-col gap-5 p-8 transition-all duration-300 hover:-translate-y-[6px] hover:shadow-lift">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-mint-50 text-teal-700 transition-transform duration-300 group-hover:rotate-3">
                    <Icon className="h-7 w-7" strokeWidth={1.6} />
                  </span>
                  <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-orange-500">
                    {tip.tag}
                  </p>
                  <h2 className="font-display text-xl font-bold leading-snug text-teal-900">
                    {tip.title}
                  </h2>
                  <p className="text-[0.95rem] leading-relaxed text-charcoal-soft">
                    {tip.desc}
                  </p>
                </article>
              </li>
            );
          })}
        </ul>

        <div className="mt-14 flex flex-wrap items-center gap-4">
          <Link href="/#book" className="btn btn-primary group">
            Book an Appointment
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link href="/" className="btn btn-outline">
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
