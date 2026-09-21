import Reveal from "@/components/ui/Reveal";
import { TRUST_POINTS } from "@/lib/site";
import { Check } from "@/components/ui/Icons";

/** Three trust pillars — child-friendly, gentle, consistent. */
export default function TrustSection() {
  return (
    <ul className="mt-2 flex flex-col gap-3">
      {TRUST_POINTS.map((point, i) => (
        <Reveal key={point} delay={0.1 * i} y={18}>
          <li className="group flex items-center gap-3.5 rounded-2xl border border-teal-50 bg-white px-4 py-3.5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-lift">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-mint-100 text-teal-700 transition-transform duration-300 group-hover:scale-110">
              <Check className="h-5 w-5" strokeWidth={2.2} />
            </span>
            <span className="font-semibold text-teal-900">{point}</span>
          </li>
        </Reveal>
      ))}
    </ul>
  );
}
