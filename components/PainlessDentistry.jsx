"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import FloatingDental from "@/components/ui/FloatingDental";
import { Feather, ArrowRight, Tooth, Sparkle, ToothSparkle } from "@/components/ui/Icons";

/** Premium highlighted band — "Say Goodbye to Dental Fear". */
export default function PainlessDentistry() {
  const reduce = useReducedMotion();
  const visualRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: visualRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section id="painless" className="relative scroll-mt-28 py-20 sm:py-24">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2.75rem] bg-gradient-to-br from-teal-800 via-teal-700 to-teal-600 shadow-lift">
          {/* Subtle shapes */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-white/5" />
            <div className="absolute -bottom-28 right-1/4 h-96 w-96 rounded-full bg-mint-200/10 blob-organic" />
            <FloatingDental tone="dark" />
            {/* Animated dental icons */}
            <span className="absolute left-[8%] bottom-[18%] animate-floaty">
              <Tooth className="h-8 w-8 text-white/20" strokeWidth={1.3} />
            </span>
            <span className="absolute right-[6%] top-[14%] animate-floaty-slow">
              <ToothSparkle className="h-10 w-10 text-white/20" strokeWidth={1.2} />
            </span>
            <span className="absolute right-[38%] bottom-[8%] animate-twinkle">
              <Sparkle className="h-5 w-5 text-orange-200/60" strokeWidth={1.3} />
            </span>
          </div>

          <div className="relative grid items-center gap-10 px-6 py-12 sm:px-12 sm:py-16 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:px-16 lg:py-20">
            {/* Content card */}
            <Reveal>
              <div className="rounded-[2rem] bg-white/95 p-8 shadow-lift backdrop-blur sm:p-10">
                <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-teal-700">
                  <Feather className="h-3.5 w-3.5" />
                  Painless Dentistry
                </span>
                <h2 className="mt-5 font-display text-[2rem] font-bold leading-[1.12] text-teal-900 sm:text-[2.5rem]">
                  Say Goodbye to{" "}
                  <span className="text-orange-600">Dental Fear</span>
                </h2>
                <p className="mt-5 text-base leading-relaxed text-charcoal-soft">
                  Experience painless dentistry designed especially for children,
                  with a gentle approach that helps make dental visits more
                  comfortable and positive.
                </p>
                <a href="#book" className="btn btn-primary mt-8 group">
                  Book a Comfortable Visit
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>

            {/* Visual */}
            <Reveal delay={0.15}>
              <motion.div
                ref={visualRef}
                style={reduce ? undefined : { y }}
                className="relative mx-auto w-full max-w-lg"
              >
                <div className="overflow-hidden rounded-[2rem] bg-skysoft-50 shadow-lift ring-4 ring-white/20">
                  <div className="relative aspect-[11/6] w-full">
                    <Image
                      src="/images/painless-visit.png"
                      alt="A relaxed child comfortably seated in a dental chair with a friendly pediatric dentist"
                      fill
                      sizes="(max-width: 1024px) 92vw, 480px"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-5 left-6 animate-floaty rounded-2xl bg-white px-5 py-3 shadow-lift">
                  <p className="flex items-center gap-2 text-sm font-bold text-teal-900">
                    <span className="h-2 w-2 rounded-full bg-orange-500" />
                    Calm, Comfortable Visits
                  </p>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
