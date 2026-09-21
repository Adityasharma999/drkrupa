"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { SITE } from "@/lib/site";
import { Phone, Sparkle, Feather, MapPin, Tooth, Star, ArrowRight } from "@/components/ui/Icons";

const ease = [0.22, 0.61, 0.36, 1];

function HeroItem({ children, delay = 0, className = "" }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? undefined : { opacity: 0, y: 28 }}
      animate={reduce ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 640], [0, -38]);

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-28">
      {/* Soft organic background shapes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-24 h-[26rem] w-[26rem] animate-floaty-slow rounded-full bg-skysoft-100/80 blur-3xl" />
        <div className="absolute -right-32 top-40 h-[30rem] w-[30rem] rounded-full bg-mint-100/70 blob-organic blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-orange-50/80 blur-2xl" />
      </div>

      <div className="container-x relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          {/* ---- Left column ---- */}
          <div className="flex max-w-xl flex-col items-start gap-6">
            <HeroItem delay={0.05}>
              <span className="eyebrow bg-white/80 shadow-soft ring-1 ring-teal-100">
                <Sparkle className="h-3.5 w-3.5 text-orange-500" />
                Pediatric / Child Dental Clinic
              </span>
            </HeroItem>

            <HeroItem delay={0.14}>
              <h1 className="font-display text-[2.7rem] font-extrabold leading-[1.06] tracking-tight text-teal-900 sm:text-6xl lg:text-[4.1rem]">
                Healthy Smiles,
                <br />
                <span className="text-orange-600">Happy Little Faces.</span>
              </h1>
            </HeroItem>

            <HeroItem delay={0.24}>
              <p className="max-w-lg text-lg leading-relaxed text-charcoal-soft">
                Specialized dental care for children in a gentle, comfortable and
                child-friendly environment.
              </p>
            </HeroItem>

            <HeroItem delay={0.32}>
              <p className="inline-flex items-center gap-2.5 rounded-2xl border border-mint-200 bg-mint-50 px-4 py-2.5 text-sm font-bold text-teal-800 shadow-soft">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-teal-700 text-white">
                  <Feather className="h-4 w-4" />
                </span>
                Experience Painless Dentistry
              </p>
            </HeroItem>

            <HeroItem delay={0.42}>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a href="#book" className="btn btn-primary group">
                  Book an Appointment
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a href={`tel:${SITE.phoneTel}`} className="btn btn-outline">
                  <Phone className="h-4 w-4 text-teal-600" />
                  Call {SITE.phoneDisplay}
                </a>
              </div>
            </HeroItem>

            <HeroItem delay={0.52}>
              <div className="mt-1 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-charcoal-mute">
                <span className="inline-flex items-center gap-1.5">
                  <span className="flex" aria-hidden="true">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-orange-400 text-orange-400" />
                    ))}
                  </span>
                  90+ Google Reviews
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-teal-500" />
                  {SITE.city}, {SITE.state}
                </span>
              </div>
            </HeroItem>
          </div>

          {/* ---- Right column: premium composition ---- */}
          <motion.div
            style={reduce ? undefined : { y: parallaxY }}
            className="relative mx-auto w-full max-w-[560px]"
          >
            <HeroItem delay={0.25}>
              <div className="relative">
                {/* Backdrop blobs */}
                <div
                  aria-hidden="true"
                  className="absolute -right-6 -top-8 h-40 w-40 blob-organic bg-orange-100/70 animate-floaty-slow"
                />
                <div
                  aria-hidden="true"
                  className="absolute -bottom-8 -left-6 h-44 w-44 blob-organic-2 bg-skysoft-200/70 animate-floaty"
                />

                {/* Main visual */}
                <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-skysoft-50 to-ivory-deep shadow-lift ring-1 ring-white/80">
                  <div className="relative aspect-[11/6] w-full">
                    <Image
                      src="/images/hero-care.png"
                      alt="Pediatric dentist gently caring for a happy child seated in a dental chair"
                      fill
                      priority
                      sizes="(max-width: 1024px) 92vw, 560px"
                      className="object-cover object-center"
                    />
                  </div>
                </div>

                {/* Floating accent chips */}
                <div className="absolute -left-4 top-10 animate-floaty sm:-left-7">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-lift ring-1 ring-teal-50">
                    <Tooth className="h-7 w-7 text-teal-500" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="absolute -right-3 top-6 animate-twinkle sm:-right-5">
                  <Sparkle className="h-8 w-8 text-orange-400" strokeWidth={1.4} />
                </div>
                <div className="absolute -bottom-6 right-6 animate-floaty-slow sm:right-10">
                  <div className="flex items-center gap-2.5 rounded-2xl bg-white/95 px-4 py-3 shadow-lift ring-1 ring-teal-50 backdrop-blur">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                      <Feather className="h-5 w-5" />
                    </span>
                    <span className="text-left">
                      <span className="block text-[0.7rem] font-bold uppercase tracking-wider text-charcoal-mute">
                        Gentle &amp; Painless
                      </span>
                      <span className="block font-display text-sm font-bold text-teal-900">
                        Comfortable Care
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </HeroItem>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
