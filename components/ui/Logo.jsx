import Image from "next/image";
import { SITE } from "@/lib/site";

/** Official clinic logo — used as-is, never redesigned. */
export default function Logo({
  size = 48,
  className = "",
  theme = "light",
  showText = true,
  priority = false,
}) {
  const titleCls = theme === "dark" ? "text-white" : "text-teal-800";
  const subCls = theme === "dark" ? "text-mint-200" : "text-charcoal-mute";

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span
        className="relative shrink-0 overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-teal-100"
        style={{ width: size, height: size }}
      >
        <Image
          src="/images/logo.png"
          alt={`${SITE.name} logo`}
          fill
          sizes={`${size}px`}
          className="object-cover"
          priority={priority}
        />
      </span>
      {showText && (
        <span className="flex flex-col leading-tight">
          <span className={`font-display text-[1.05rem] font-bold ${titleCls}`}>
            Dr. Krupa&apos;s
          </span>
          <span className={`text-[0.66rem] font-semibold uppercase tracking-[0.14em] ${subCls}`}>
            Child Dental Clinic
          </span>
        </span>
      )}
    </span>
  );
}
