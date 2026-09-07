'use client'

import { motion, useReducedMotion } from 'framer-motion'
import {
  Braces,
  Server,
  GitBranch,
  type LucideIcon,
} from 'lucide-react'
import { skillGroups } from '@/lib/portfolio-data'
import { fadeUp, stagger, viewportOnce } from '@/lib/motion'
import { SectionHeading } from './section-heading'

const icons: LucideIcon[] = [
  Braces,
  Server,
  GitBranch,
]

export function Skills() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="scroll-mt-32 px-4 py-20 md:py-24"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <SectionHeading
          eyebrow="Skills"
          title="Technical Skills"
          description="Technologies and tools I use to build modern, responsive, and user-focused web applications."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-6 md:grid-cols-3"
        >
          {skillGroups.map((group, gi) => {
            const Icon = icons[gi % icons.length]

            return (
              <motion.article
                key={group.title}
                variants={fadeUp}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : { y: -6 }
                }
                transition={{
                  duration: 0.25,
                  ease: 'easeOut',
                }}
                className="glass group relative flex flex-col gap-5 overflow-hidden rounded-3xl border border-border/70 p-6 transition-all duration-300 hover:border-berry/50 hover:glow-pink-soft"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 size-32 rounded-full bg-berry/5 blur-3xl transition-all duration-500 group-hover:bg-berry/10"
                />

                <span
                  aria-hidden="true"
                  className="absolute right-5 top-4 font-mono text-4xl font-bold leading-none text-foreground/[0.035] select-none"
                >
                  {String(gi + 1).padStart(2, '0')}
                </span>

                <div className="relative flex items-center gap-3">
                  <span className="pink-gradient flex size-11 shrink-0 items-center justify-center rounded-xl text-primary-foreground shadow-sm transition-transform duration-300 group-hover:scale-105">
                    <Icon
                      className="size-5"
                      aria-hidden="true"
                    />
                  </span>

                  <div className="min-w-0">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      Skill Stack
                    </p>

                    <h3 className="font-serif text-xl font-semibold tracking-tight text-foreground">
                      {group.title}
                    </h3>
                  </div>
                </div>

                <div
                  aria-hidden="true"
                  className="h-px bg-border/80"
                />

                <ul className="relative flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <motion.li
                      key={skill}
                      initial={false}
                      whileHover={
                        shouldReduceMotion
                          ? undefined
                          : { scale: 1.06 }
                      }
                      transition={{ duration: 0.18 }}
                      className="cursor-default rounded-lg border border-border bg-background/60 px-3 py-1.5 font-mono text-xs font-medium text-foreground transition-all duration-200 hover:border-berry/70 hover:bg-berry/5 hover:text-blush"
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>

                <div
                  aria-hidden="true"
                  className="mt-auto h-px w-0 bg-gradient-to-r from-berry to-transparent transition-all duration-500 group-hover:w-20"
                />
              </motion.article>
            )
          })}
        </motion.div>

    
      </div>
    </section>
  )
}