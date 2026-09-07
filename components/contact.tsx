'use client'

import { useState, type FormEvent } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Link2,
  Mail,
  MapPin,
  Phone,
  Send,
  Code2,
} from 'lucide-react'
import { profile } from '@/lib/portfolio-data'
import {
  fadeUp,
  stagger,
  viewportOnce,
} from '@/lib/motion'
import { SectionHeading } from './section-heading'

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: profile.phone,
    href: `tel:+2${profile.phone}`,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: profile.location,
    href: 'https://maps.google.com/?q=Sohag,Egypt',
  },
  {
    icon: Link2,
    label: 'LinkedIn',
    value: 'alaa-frontend',
    href: profile.linkedin,
  },
]

const inputClass =
  'w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-foreground placeholder:text-muted-foreground/70 transition-all duration-200 focus:border-berry focus:bg-background/80 focus:outline-none focus:ring-2 focus:ring-berry/20'

export function Contact() {
  const [sent, setSent] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault()

    const data = new FormData(event.currentTarget)

    const name = String(data.get('name') ?? '')
    const email = String(data.get('email') ?? '')
    const message = String(data.get('message') ?? '')

    const subject = encodeURIComponent(
      `Portfolio message from ${name}`,
    )

    const body = encodeURIComponent(
      `${message}\n\nFrom: ${name} <${email}>`,
    )

    window.location.href =
      `mailto:${profile.email}?subject=${subject}&body=${body}`

    setSent(true)
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-32 px-4 py-20 md:py-24"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Work Together"
          description="Have a project in mind or want to discuss an opportunity? Feel free to get in touch."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-6 md:grid-cols-[1fr_1.2fr]"
        >
          {/* Contact Links */}
          <div className="flex flex-col gap-4">
            {contactLinks.map(
              ({
                icon: Icon,
                label,
                value,
                href,
              }) => {
                const isExternal = href.startsWith('http')

                return (
                  <motion.a
                    key={label}
                    variants={fadeUp}
                    href={href}
                    target={
                      isExternal ? '_blank' : undefined
                    }
                    rel={
                      isExternal
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    aria-label={`${label}: ${value}`}
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : { x: 6 }
                    }
                    whileTap={
                      shouldReduceMotion
                        ? undefined
                        : { scale: 0.99 }
                    }
                    transition={{
                      duration: 0.2,
                      ease: 'easeOut',
                    }}
                    className="glass group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-border/70 p-4 transition-all duration-300 hover:border-berry/50 hover:glow-pink-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-berry/70 focus-visible:ring-offset-2"
                  >
                    {/* Decorative glow */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-10 -top-10 size-24 rounded-full bg-berry/5 blur-2xl transition-all duration-300 group-hover:bg-berry/10"
                    />

                    <span className="pink-gradient relative flex size-11 shrink-0 items-center justify-center rounded-xl text-primary-foreground shadow-sm transition-transform duration-300 group-hover:scale-105">
                      <Icon
                        className="size-5"
                        aria-hidden="true"
                      />
                    </span>

                    <div className="relative min-w-0">
                      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                        {label}
                      </p>

                      <p className="truncate font-semibold text-foreground transition-colors duration-200 group-hover:text-blush">
                        {value}
                      </p>
                    </div>

                    <span
                      aria-hidden="true"
                      className="relative ml-auto size-1.5 shrink-0 rounded-full bg-berry opacity-40 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </motion.a>
                )
              },
            )}
          </div>

          {/* Contact Form */}
          <motion.form
            variants={fadeUp}
            onSubmit={handleSubmit}
            aria-label="Contact form"
            className="glass relative flex flex-col gap-5 overflow-hidden rounded-3xl border border-border/70 p-6 glow-pink-soft sm:p-8"
          >
            {/* Decorative glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 size-40 rounded-full bg-berry/5 blur-3xl"
            />

            {/* Form Header */}
            <div className="relative flex items-center gap-3 border-b border-border/80 pb-4">
              <span className="flex size-10 items-center justify-center rounded-xl border border-berry/40 bg-berry/10">
                <Code2
                  className="size-5 text-berry"
                  aria-hidden="true"
                />
              </span>

              <div>
               

                <p className="text-sm font-semibold text-foreground">
                  Send a message
                </p>
              </div>
            </div>

            {/* Name + Email */}
            <div className="relative grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-semibold text-foreground">
                <span>Name</span>

                <input
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className={inputClass}
                />
              </label>

              <label className="flex flex-col gap-2 text-sm font-semibold text-foreground">
                <span>Email</span>

                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </label>
            </div>

            {/* Message */}
            <label className="relative flex flex-col gap-2 text-sm font-semibold text-foreground">
              <span>Message</span>

              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project or idea..."
                className={`${inputClass} resize-none`}
              />
            </label>

            {/* Submit */}
            <motion.button
              type="submit"
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { scale: 1.02 }
              }
              whileTap={
                shouldReduceMotion
                  ? undefined
                  : { scale: 0.98 }
              }
              transition={{
                duration: 0.2,
                ease: 'easeOut',
              }}
              className="pink-gradient relative inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-bold text-primary-foreground glow-pink transition-shadow duration-300 hover:glow-pink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-berry/70 focus-visible:ring-offset-2"
            >
              <Send
                className="size-4"
                aria-hidden="true"
              />

              {sent
                ? 'Opening your mail app...'
                : 'Send Message'}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}