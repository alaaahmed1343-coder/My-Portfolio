'use client'

import { useCallback, useState } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowUpRight,
  Code2,
  ExternalLink,
} from 'lucide-react'
import {
  projects,
  type Project,
} from '@/lib/portfolio-data'
import {
  fadeUp,
  stagger,
  viewportOnce,
} from '@/lib/motion'
import { SectionHeading } from './section-heading'
import { ProjectModal } from './project-modal'

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)
  const shouldReduceMotion = useReducedMotion()

  const close = useCallback(() => {
    setSelected(null)
  }, [])

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="scroll-mt-32 px-4 py-20 md:py-24"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <SectionHeading
          eyebrow="Projects"
          title="Projects I've Built"
          description="Click any card to peek inside and see the full details."
        />

        <motion.ul
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.li
              key={project.id}
              variants={fadeUp}
              className="h-full"
            >
              <motion.button
                type="button"
                onClick={() => setSelected(project)}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : { y: -8 }
                }
                whileTap={
                  shouldReduceMotion
                    ? undefined
                    : { scale: 0.98 }
                }
                aria-label={`View details for ${project.title}`}
                className="glass group flex h-full w-full flex-col overflow-hidden rounded-3xl border border-border/70 text-left transition-all duration-300 hover:border-berry/50 hover:glow-pink-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-berry/70 focus-visible:ring-offset-2"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-secondary">
                  <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-background/75 via-transparent to-transparent opacity-70"
                  />

                  {/* Project Number */}
                  <span
                    aria-hidden="true"
                    className="absolute left-4 top-4 rounded-lg border border-white/10 bg-background/70 px-2.5 py-1 font-mono text-[10px] font-bold text-muted-foreground backdrop-blur-md"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  {/* Open Icon */}
                  <span
                    aria-hidden="true"
                    className="pink-gradient absolute right-4 top-4 flex size-10 items-center justify-center rounded-xl text-primary-foreground opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 group-hover:scale-105"
                  >
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col gap-4 p-5">
                  <div>
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <p className="font-mono text-[10px] font-semibold text-blush">
                        {project.period}
                      </p>

                      <Code2
                        className="size-4 text-berry opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    </div>

                    <h3 className="font-serif text-xl font-semibold tracking-tight text-foreground">
                      {project.title}
                    </h3>

                    <p className="mt-0.5 font-mono text-xs text-muted-foreground">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <ul className="mt-auto flex flex-wrap gap-1.5 pt-1">
                    {project.stack.slice(0, 3).map((tech) => (
                      <li
                        key={tech}
                        className="rounded-lg border border-border bg-background/40 px-2.5 py-1 font-mono text-[10px] text-muted-foreground transition-all duration-200 group-hover:border-berry/40 group-hover:text-foreground"
                      >
                        {tech}
                      </li>
                    ))}

                    {project.stack.length > 3 && (
                      <li className="rounded-lg border border-border bg-background/40 px-2.5 py-1 font-mono text-[10px] text-blush">
                        +{project.stack.length - 3}
                      </li>
                    )}
                  </ul>

                  {/* View Details */}
                  <div className="flex items-center gap-2 pt-1 text-xs font-semibold text-muted-foreground transition-colors duration-200 group-hover:text-blush">
                    <ExternalLink
                      className="size-3.5 text-berry"
                      aria-hidden="true"
                    />

                    <span>Click to view details</span>
                  </div>

                  {/* Bottom Accent */}
                  <div
                    aria-hidden="true"
                    className="h-px w-0 bg-gradient-to-r from-berry to-transparent transition-all duration-500 group-hover:w-20"
                  />
                </div>
              </motion.button>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <ProjectModal
        project={selected}
        onClose={close}
      />
    </section>
  )
}