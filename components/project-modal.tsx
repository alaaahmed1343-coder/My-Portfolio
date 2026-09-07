'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from 'framer-motion'
import {
  CalendarHeart,
  Check,
  ExternalLink,
  X,
} from 'lucide-react'
import type { Project } from '@/lib/portfolio-data'

type ProjectModalProps = {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({
  project,
  onClose,
}: ProjectModalProps) {
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (!project) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener(
      'keydown',
      handleKeyDown,
    )

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener(
        'keydown',
        handleKeyDown,
      )

      document.body.style.overflow = previousOverflow
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-end justify-center bg-background/80 p-0 backdrop-blur-md sm:items-center sm:p-4"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            aria-describedby="project-modal-description"
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : {
                    y: 40,
                    opacity: 0,
                    scale: 0.98,
                  }
            }
            animate={
              shouldReduceMotion
                ? { opacity: 1 }
                : {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                  }
            }
            exit={
              shouldReduceMotion
                ? { opacity: 0 }
                : {
                    y: 30,
                    opacity: 0,
                    scale: 0.98,
                  }
            }
            transition={
              shouldReduceMotion
                ? { duration: 0.15 }
                : {
                    type: 'spring',
                    stiffness: 300,
                    damping: 30,
                  }
            }
            onClick={(event) =>
              event.stopPropagation()
            }
            className="glass relative max-h-[92svh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border border-border/70 bg-popover shadow-2xl glow-pink sm:rounded-3xl"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              className="absolute right-4 top-4 z-20 flex size-9 items-center justify-center rounded-xl border border-border bg-background/70 text-foreground backdrop-blur-md transition-all duration-200 hover:border-berry hover:bg-berry hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-berry/70 focus-visible:ring-offset-2"
            >
              <X
                className="size-4"
                aria-hidden="true"
              />
            </button>

            {/* Project Image */}
            <div className="relative aspect-video w-full overflow-hidden">
              <Image
                src={project.image}
                alt={`${project.title} project preview`}
                fill
                sizes="(max-width: 672px) 100vw, 672px"
                className="object-cover"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-popover via-transparent to-transparent"
              />

              <div className="absolute bottom-4 left-5 rounded-lg border border-white/10 bg-background/70 px-3 py-1.5 font-mono text-[10px] font-semibold text-blush backdrop-blur-md">
                {project.period}
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-7 p-6 sm:p-8">
              {/* Header */}
              <header className="flex flex-col gap-3">
                <div className="flex items-center gap-2 font-mono text-xs text-blush">
                  <CalendarHeart
                    className="size-3.5 text-berry"
                    aria-hidden="true"
                  />

                  <span>{project.period}</span>
                </div>

                <h3
                  id="project-modal-title"
                  className="font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
                >
                  {project.title}{' '}
                  <span className="text-muted-foreground">
                    – {project.subtitle}
                  </span>
                </h3>

                <p
                  id="project-modal-description"
                  className="text-pretty leading-relaxed text-muted-foreground"
                >
                  {project.description}
                </p>
              </header>

              {/* Features */}
              <section
                aria-labelledby="project-features-title"
                className="flex flex-col gap-3"
              >
                <h4
                  id="project-features-title"
                  className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-foreground"
                >
                  

                  Key features
                </h4>

                <ul className="grid gap-2 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 rounded-xl border border-border/60 bg-background/30 p-3 text-sm leading-relaxed text-foreground/90 transition-colors duration-200 hover:border-berry/30"
                    >
                      <span
                        aria-hidden="true"
                        className="pink-gradient mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full"
                      >
                        <Check
                          className="size-3 text-primary-foreground"
                          aria-hidden="true"
                        />
                      </span>

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Tech Stack */}
              <section
                aria-labelledby="project-stack-title"
                className="flex flex-col gap-3"
              >
                <h4
                  id="project-stack-title"
                  className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-foreground"
                >
                
                  Tech stack
                </h4>

                <ul className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-lg border border-border bg-background/60 px-3 py-1.5 font-mono text-xs font-medium text-blush transition-all duration-200 hover:border-berry/50 hover:bg-berry/5"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Live Demo */}
              <div className="border-t border-border/70 pt-5">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open live demo for ${project.title}`}
                  className="pink-gradient inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold text-primary-foreground transition-all duration-200 hover:scale-[1.02] hover:glow-pink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-berry/70 focus-visible:ring-offset-2"
                >
                  <ExternalLink
                    className="size-4"
                    aria-hidden="true"
                  />

                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}