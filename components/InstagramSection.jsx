import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE } from "@/lib/site";
import {
  Instagram as InstagramIcon,
  Tooth,
  ToothSparkle,
  Feather,
  Heart,
  Smile,
  Sparkle,
  ArrowUpRight,
} from "@/components/ui/Icons";

/** Six placeholder posts in a soft branded grid — replace with real posts later. */
const POSTS = [
  { icon: Tooth, label: "Smile Care", from: "from-skysoft-50", to: "to-skysoft-200", tint: "text-teal-600" },
  { icon: Feather, label: "Gentle Visits", from: "from-mint-50", to: "to-mint-200", tint: "text-teal-600" },
  { icon: Heart, label: "Happy Faces", from: "from-orange-50", to: "to-orange-100", tint: "text-orange-500" },
  { icon: ToothSparkle, label: "Clean Teeth", from: "from-teal-50", to: "to-teal-100", tint: "text-teal-600" },
  { icon: Smile, label: "Little Smiles", from: "from-ivory-warm", to: "to-ivory-deep", tint: "text-orange-500" },
  { icon: Sparkle, label: "Clinic Moments", from: "from-skysoft-100", to: "to-mint-100", tint: "text-teal-600" },
];

export default function InstagramSection() {
  return (
    <section id="instagram" className="relative py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Social"
          title="Follow Us on Instagram"
          sub={`Daily smiles, clinic moments and dental tips from ${SITE.instagramHandle}`}
          id="instagram-title"
        />

        <ul
          aria-labelledby="instagram-title"
          className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3"
        >
          {POSTS.map((post, i) => {
            const Icon = post.icon;
            return (
              <Reveal key={post.label} delay={0.06 * i} y={20}>
                <li>
                  <a
                    href={SITE.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${post.label} — view on Instagram`}
                    className="group relative block aspect-square overflow-hidden rounded-3xl ring-1 ring-teal-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                  >
                    <span
                      className={`absolute inset-0 bg-gradient-to-br ${post.from} ${post.to}`}
                    />
                    <span className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                      <Icon
                        className={`h-10 w-10 ${post.tint} transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3`}
                        strokeWidth={1.4}
                      />
                      <span className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-charcoal-mute">
                        {post.label}
                      </span>
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center bg-teal-900/45 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                      <span className="flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-teal-800">
                        <InstagramIcon className="h-4 w-4" />
                        View on Instagram
                      </span>
                    </span>
                    <span className="absolute right-3 top-3 text-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <InstagramIcon className="h-5 w-5" />
                    </span>
                  </a>
                </li>
              </Reveal>
            );
          })}
        </ul>

        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-col items-center gap-3">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary group"
            >
              <InstagramIcon className="h-5 w-5" />
              Follow on Instagram
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <p className="text-sm text-charcoal-mute">{SITE.instagramHandle}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
