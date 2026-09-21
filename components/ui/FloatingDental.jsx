import { Tooth, Sparkle, ToothSparkle, Heart } from "./Icons";

/**
 * Soft floating dental decorations — slow, elegant motion only.
 * `tone` controls palette: "light" on ivory backgrounds, "dark" on teal backgrounds.
 */
export default function FloatingDental({ tone = "light" }) {
  const isDark = tone === "dark";

  const toothCls = isDark ? "text-white/25" : "text-teal-200";
  const sparkleCls = isDark ? "text-orange-200/50" : "text-orange-300";
  const heartCls = isDark ? "text-mint-200/40" : "text-mint-200";

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <span className="absolute left-[4%] top-[12%] animate-floaty-slow">
        <Tooth className={`h-10 w-10 ${toothCls}`} strokeWidth={1.4} />
      </span>
      <span className="absolute right-[7%] top-[18%] animate-floaty">
        <Sparkle className={`h-6 w-6 animate-twinkle ${sparkleCls}`} strokeWidth={1.4} />
      </span>
      <span className="absolute bottom-[16%] left-[10%] animate-floaty">
        <Sparkle className={`h-4 w-4 animate-twinkle ${sparkleCls}`} strokeWidth={1.4} />
      </span>
      <span className="absolute bottom-[10%] right-[12%] animate-floaty-slow">
        <ToothSparkle className={`h-9 w-9 ${toothCls}`} strokeWidth={1.3} />
      </span>
      <span className="absolute left-[46%] top-[6%] animate-floaty">
        <Heart className={`h-5 w-5 ${heartCls}`} strokeWidth={1.4} />
      </span>
    </div>
  );
}
