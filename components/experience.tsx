'use client'

import { motion, useReducedMotion } from 'framer-motion'
import {
  BriefcaseBusiness,
  CalendarHeart,
  GraduationCap,
  type LucideIcon,
} from 'lucide-react'
import {
  courses,
  experience,
  type TimelineItem,
} from '@/lib/portfolio-data'
import {
  fadeUp,
  stagger,
  viewportOnce,
} from '@/lib/motion'
import { SectionHeading } from './section-heading'

type TimelineGroupProps = {
  id: string
  icon: LucideIcon
  title: string
  subtitle: string
  items: TimelineItem[]
}

function TimelineGroup({
  id,
  icon: Icon,
  title,
  subtitle,
  items,
}: TimelineGroupProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="flex flex-col gap-7"
    >
      {/* Group Header */}
      <motion.div
        variants={fadeUp}
        className="flex items-center gap-3"
      >
        <span className="pink-gradient inline-flex size-11 shrink-0 items-center justify-center rounded-xl text-primary-foreground glow-pink-soft">
          <Icon
            className="size-5"
            aria-hidden="true"
          />
        </span>

        <div className="flex min-w-0 flex-col">
          <h3
            id={id}
            className="font-serif text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
          >
            {title}
          </h3>

          <p className="font-mono text-[11px] tracking-wide text-muted-foreground sm:text-xs">
            {subtitle}
          </p>
        </div>
      </motion.div>

      {/* Timeline */}
      <ol
        aria-labelledby={id}
        className="relative flex flex-col gap-6 border-l border-border/80 pl-6 sm:ml-5 sm:pl-9"
      >
        {items.map((item, index) => (
          <motion.li
            key={`${item.org}-${item.period}`}
            variants={fadeUp}
            className="relative"
          >
            {/* Timeline Node */}
            <span
              aria-hidden="true"
              className="pink-gradient absolute top-7 -left-[calc(1.5rem+7px)] size-3.5 rounded-full ring-4 ring-background glow-pink sm:-left-[calc(2.25rem+7px)]"
            />

            {/* Experience Card */}
            <motion.article
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { y: -4 }
              }
              transition={{
                duration: 0.2,
                ease: 'easeOut',
              }}
              className="glass group relative flex flex-col gap-4 overflow-hidden rounded-3xl border border-border/70 p-5 transition-all duration-300 hover:border-berry/50 hover:glow-pink-soft sm:p-6"
            >
              {/* Decorative Glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 size-32 rounded-full bg-berry/5 blur-3xl transition-all duration-500 group-hover:bg-berry/10"
              />

              {/* Timeline Number */}
              <span
                aria-hidden="true"
                className="absolute right-5 top-3 font-mono text-4xl font-bold leading-none text-foreground/[0.035] select-none"
              >
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Card Header */}
              <div className="relative flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                <div className="min-w-0">
                  <h4 className="font-serif text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                    {item.role}
                  </h4>

                  <p className="mt-1 font-mono text-sm font-medium text-blush">
                    {item.org}
                  </p>
                </div>

                {/* Period */}
                <span className="inline-flex w-fit shrink-0 items-center gap-1.5 rounded-lg border border-border bg-background/40 px-3 py-1.5 font-mono text-[10px] font-semibold text-muted-foreground transition-colors duration-200 group-hover:border-berry/30 group-hover:text-foreground sm:text-[11px]">
                  <CalendarHeart
                    className="size-3.5 text-berry"
                    aria-hidden="true"
                  />

                  {item.period}
                </span>
              </div>

              {/* Divider */}
              <div
                aria-hidden="true"
                className="h-px bg-border/80"
              />

              {/* Description */}
              <p className="relative max-w-3xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                {item.details}
              </p>

              {/* Bottom Accent */}
              <div
                aria-hidden="true"
                className="h-px w-0 bg-gradient-to-r from-berry to-transparent transition-all duration-500 group-hover:w-24"
              />
            </motion.article>
          </motion.li>
        ))}
      </ol>
    </motion.div>
  )
}

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="scroll-mt-32 px-4 py-20 md:py-24"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <SectionHeading
          eyebrow="Experience"
          title="Experience & Training"
          description="My professional experience, practical training, and continuous learning in web development."
        />

        <div className="flex flex-col gap-16">
          <TimelineGroup
            id="experience-work"
            icon={BriefcaseBusiness}
            title="Experience"
            subtitle="Professional Experience & Training"
            items={experience}
          />

          <TimelineGroup
            id="experience-courses"
            icon={GraduationCap}
            title="Courses & Training"
            subtitle="Courses & Professional Development"
            items={courses}
          />
        </div>
      </div>
    </section>
  )
}