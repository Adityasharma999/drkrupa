"use client";

import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { Smile, ChatHeart, Feather, ToothSparkle } from "@/components/ui/Icons";
import { EXPERIENCE_STEPS } from "@/lib/site";

const ICONS = [Smile, ChatHeart, Feather, ToothSparkle];
const ease = [0.22, 0.61, 0.36, 1];

/** Storytelling timeline — animates progressively on scroll. */
export default function DentalExperience() {
  const reduce = useReducedMotion();

  return (
    <section id="experience" className="relative scroll-mt-28 py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="The Visit Journey"
          title="A Better Dental Experience for Your Child"
          sub="Four simple steps that turn a dental appointment into a positive memory."
          id="experience-title"
        />

        {/* ---- Desktop horizontal timeline ---- */}
        <div
          aria-labelledby="experience-title"
          className="relative mt-16 hidden md:block"
        >
          <motion.div
            className="absolute left-[12.5%] right-[12.5%] top-[3.2rem] h-[3px] origin-left rounded-full bg-gradient-to-r from-teal-300 via-teal-400 to-orange-400"
            initial={reduce ? undefined : { scaleX: 0 }}
            whileInView={reduce ? undefined : { scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          />
          <ol className="relative grid grid-cols-4 gap-8">
            {EXPERIENCE_STEPS.map((step, i) => {
              const Icon = ICONS[i];
              return (
                <motion.li
                  key={step.num}
                  className="flex flex-col items-center text-center"
                  initial={reduce ? undefined : { opacity: 0, y: 24 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 0.25 + i * 0.22, ease }}
                >
                  <div className="relative">
                    <span className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-3xl border border-teal-100 bg-white text-teal-700 shadow-soft transition-transform duration-300 hover:-translate-y-1 hover:shadow-lift">
                      <Icon className="h-8 w-8" strokeWidth={1.5} />
                    </span>
                    <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-orange-500 font-display text-[0.7rem] font-bold text-white shadow-btn">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-teal-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-[15rem] text-[0.92rem] leading-relaxed text-charcoal-soft">
                    {step.desc}
                  </p>
                </motion.li>
              );
            })}
          </ol>
        </div>

        {/* ---- Mobile vertical timeline ---- */}
        <div className="relative mt-14 md:hidden">
          <motion.div
            className="absolute bottom-8 left-[1.65rem] top-8 w-[3px] origin-top rounded-full bg-gradient-to-b from-teal-300 via-teal-400 to-orange-400"
            initial={reduce ? undefined : { scaleY: 0 }}
            whileInView={reduce ? undefined : { scaleY: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.3, ease: "easeInOut" }}
          />
          <ol className="relative flex flex-col gap-10">
            {EXPERIENCE_STEPS.map((step, i) => {
              const Icon = ICONS[i];
              return (
                <motion.li
                  key={step.num}
                  className="flex items-start gap-5"
                  initial={reduce ? undefined : { opacity: 0, x: -18 }}
                  whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: 0.15 + i * 0.18, ease }}
                >
                  <div className="relative shrink-0">
                    <span className="flex h-[3.4rem] w-[3.4rem] items-center justify-center rounded-2xl border border-teal-100 bg-white text-teal-700 shadow-soft">
                      <Icon className="h-6 w-6" strokeWidth={1.6} />
                    </span>
                    <span className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 font-display text-[0.62rem] font-bold text-white">
                      {step.num}
                    </span>
                  </div>
                  <div className="pt-1">
                    <h3 className="font-display text-lg font-bold text-teal-900">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-[0.92rem] leading-relaxed text-charcoal-soft">
                      {step.desc}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
