import Reveal from "./Reveal";
import { Sparkle } from "./Icons";

/** Consistent section heading: eyebrow badge + display title + supporting copy. */
export default function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "center",
  theme = "light",
  className = "",
  id,
}) {
  const alignCls =
    align === "center" ? "items-center text-center" : "items-start text-left";

  const titleCls =
    theme === "dark" ? "text-white" : "text-teal-900";

  const subCls =
    theme === "dark" ? "text-mint-100" : "text-charcoal-soft";

  const eyebrowCls =
    theme === "dark"
      ? "bg-white/10 text-mint-100 ring-1 ring-white/20"
      : "bg-teal-50 text-teal-700";

  return (
    <div className={`flex flex-col gap-5 ${alignCls} ${className}`}>
      <Reveal>
        <span
          className={`eyebrow ${eyebrowCls}`}
          style={theme === "dark" ? { background: "rgba(255,255,255,0.1)" } : undefined}
        >
          <Sparkle className="h-3.5 w-3.5" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          id={id}
          className={`max-w-3xl font-display text-[2rem] font-bold leading-[1.15] sm:text-[2.5rem] lg:text-[2.85rem] ${titleCls}`}
        >
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.14}>
          <p className={`max-w-2xl text-base leading-relaxed sm:text-[1.05rem] ${subCls}`}>
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  );
}
