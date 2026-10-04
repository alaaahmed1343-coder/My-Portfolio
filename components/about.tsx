
'use client'

import { motion } from 'framer-motion'
import { Code2 } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'
import { fadeUp, viewportOnce } from '@/lib/motion'
import { SectionHeading } from './section-heading'

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="scroll-mt-32 px-4 py-20 md:py-24"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section heading */}
        <SectionHeading
          eyebrow="About me"
          title="A little about me"
        />

        {/* About Card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="glass group relative mx-auto mt-12 max-w-4xl overflow-hidden rounded-3xl border border-border/70 p-8 glow-pink-soft transition-all duration-300 hover:border-berry/40 md:p-10 lg:p-12"
        >
          {/* Decorative glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 size-48 rounded-full bg-berry/10 blur-3xl transition-opacity duration-300 group-hover:bg-berry/15"
          />

          {/* Code icon + label */}
          <div className="relative mb-7 flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-xl border border-berry/30 bg-berry/10">
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
          <div className="relative max-w-3xl space-y-5 text-pretty text-base leading-8 text-foreground/90 md:text-lg">
            {profile.about
              .trim()
              .split('\n\n')
              .map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}
          </div>

          {/* Bottom accent */}
          <div
            aria-hidden="true"
            className="mt-10 h-px w-24 bg-gradient-to-r from-berry to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}
