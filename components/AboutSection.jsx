import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import TrustSection from "./TrustSection";
import FloatingDental from "@/components/ui/FloatingDental";
import { Sparkle } from "@/components/ui/Icons";

/** "Where Little Smiles Feel Safe" — introduction & trust. */
export default function AboutSection() {
  return (
    <section id="about" className="relative scroll-mt-28 overflow-hidden py-20 sm:py-24">
      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Copy */}
          <div className="flex flex-col items-start gap-6">
            <Reveal>
              <span className="eyebrow">
                <Sparkle className="h-3.5 w-3.5 text-orange-500" />
                About the Clinic
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="max-w-lg font-display text-[2.1rem] font-bold leading-[1.12] text-teal-900 sm:text-[2.6rem]">
                Where Little Smiles{" "}
                <span className="text-orange-600">Feel Safe</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="max-w-xl text-base leading-relaxed text-charcoal-soft sm:text-[1.05rem]">
                At Dr. Krupa&apos;s Child Dental Clinic, we focus on making dental
                visits comfortable, positive and stress-free for children. Our
                child-friendly approach is designed to help young patients feel
                relaxed while receiving professional dental care.
              </p>
            </Reveal>
            <TrustSection />
          </div>

          {/* Brand visual */}
          <Reveal delay={0.18} className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-6 blob-organic bg-skysoft-100/80 animate-floaty-slow"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -right-4 h-28 w-28 blob-organic-2 bg-orange-100/70"
              />
              <FloatingDental />
              <figure className="relative overflow-hidden rounded-[2.5rem] bg-white p-8 shadow-lift ring-1 ring-teal-50 sm:p-12">
                <div className="relative mx-auto aspect-square w-full max-w-[320px] overflow-hidden rounded-3xl bg-skysoft-50">
                  <Image
                    src="/images/logo.png"
                    alt="Dr. Krupa's Child Dental Clinic brand illustration — a friendly pediatric dentist with a happy child"
                    fill
                    sizes="(max-width: 640px) 80vw, 320px"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-6 text-center">
                  <p className="font-display text-lg font-bold text-teal-900">
                    Dr. Krupa&apos;s Child Dental Clinic
                  </p>
                  <p className="mt-1 text-sm font-medium uppercase tracking-[0.16em] text-charcoal-mute">
                    Gandhidham, Gujarat
                  </p>
                </figcaption>
              </figure>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
