
'use client'

import { motion, useReducedMotion } from 'framer-motion'
import {
  GraduationCap,
  MapPin,
  Rocket,
  Code2,
} from 'lucide-react'
import { profile } from '@/lib/portfolio-data'
import { fadeUp, stagger, viewportOnce } from '@/lib/motion'
import { SectionHeading } from './section-heading'

const highlights = [
  {
    icon: GraduationCap,
    label: 'Computer Science Student',
    detail: 'Sohag University',
  },
  {
    icon: Rocket,
    label: 'Training',
    detail: 'DEPI, ITI & NTI',
  },
  {
    icon: MapPin,
    label: 'Based in',
    detail: profile.location,
  },
]

export function About() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="scroll-mt-32 px-4 py-20 md:py-24"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        {/* Section heading */}
        <SectionHeading
          eyebrow="About me"
          title="A little about me"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-6 md:grid-cols-[1.3fr_1fr]"
        >
          {/* About Card */}
          <motion.div
            variants={fadeUp}
            className="glass group relative overflow-hidden rounded-3xl border border-border/70 p-8 glow-pink-soft transition-all duration-300 hover:border-berry/40 md:p-9"
          >
            {/* Decorative glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-berry/10 blur-3xl transition-opacity duration-300 group-hover:bg-berry/15"
            />

            {/* Code icon */}
            <div className="relative mb-6 flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl border border-berry/30 bg-berry/10">
                <Code2
                  className="size-5 text-berry"
                  aria-hidden="true"
                />
              </span>

              <span className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Who I am
              </span>
            </div>

            {/* About text */}
            <p className="relative max-w-2xl text-pretty text-lg leading-relaxed text-foreground/90">
              {profile.about}
            </p>

            {/* Bottom accent */}
            <div
              aria-hidden="true"
              className="mt-8 h-px w-20 bg-gradient-to-r from-berry to-transparent"
            />
          </motion.div>

          {/* Highlights */}
          <div className="flex flex-col gap-4">
            {highlights.map(
              ({ icon: Icon, label, detail }, index) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          x: 6,
                        }
                  }
                  transition={{
                    duration: 0.2,
                  }}
                  className="glass group flex items-center gap-4 rounded-2xl border border-border/70 p-4 transition-all duration-300 hover:border-berry/30 hover:bg-berry/[0.03]"
                >
                  {/* Icon */}
                  <span className="pink-gradient flex size-11 shrink-0 items-center justify-center rounded-xl text-primary-foreground shadow-sm transition-transform duration-300 group-hover:scale-105">
                    <Icon
                      className="size-5"
                      aria-hidden="true"
                    />
                  </span>

                  {/* Content */}
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {label}
                    </p>

                    <p className="mt-0.5 truncate font-semibold text-foreground">
                      {detail}
                    </p>
                  </div>

                  {/* Small indicator */}
                  <span
                    aria-hidden="true"
                    className="ml-auto size-1.5 shrink-0 rounded-full bg-berry opacity-40 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </motion.div>
              ),
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
