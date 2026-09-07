'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Download, MessageCircleHeart, Sparkles } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'
import { fadeUp, stagger } from '@/lib/motion'

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh items-center overflow-hidden px-4 pt-28 pb-16 md:pt-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(255,77,148,0.16),transparent_55%)]"
      />

      <div className="mx-auto grid w-full max-w-5xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-6 text-center md:items-start md:text-left"
        >
          <motion.span
            variants={fadeUp}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-blush"
          >
            <Sparkles className="size-4" aria-hidden />
            Hello, I&apos;m {profile.name}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="font-serif text-4xl font-semibold leading-[1.1] text-balance sm:text-5xl lg:text-6xl"
          >
            <span className="pink-gradient-text">{profile.role}</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground"
          >
            {profile.headline}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3 md:justify-start">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="pink-gradient inline-flex items-center gap-2 rounded-full px-6 py-3 font-bold text-primary-foreground glow-pink"
            >
              <Sparkles className="size-4" aria-hidden />
              View My Projects
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-foreground transition-colors hover:border-berry"
            >
              <MessageCircleHeart className="size-4 text-berry" aria-hidden />
              Let&apos;s Connect
            </motion.a>

            <motion.a
              href={profile.cvUrl}
              download="Alaa_Ahmed_Resume.pdf"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-blush transition-colors hover:text-foreground"
            >
              <Download className="size-4" aria-hidden />
              Download My CV
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
          >
            <div
              aria-hidden
              className="pink-gradient absolute -inset-1 rounded-full opacity-80 blur-md"
            />

            <div className="relative size-64 overflow-hidden rounded-full border-4 border-berry bg-background glow-pink sm:size-72 lg:size-80">
              <Image
                src={profile.avatar}
                alt={`Portrait of ${profile.name}`}
                fill
                priority
                sizes="(max-width: 640px) 256px, 320px"
                className="object-cover"
              />
            </div>

            <motion.div
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="glass absolute -right-2 -bottom-2 rounded-2xl px-4 py-2 text-sm font-semibold sm:right-0 sm:bottom-4"
            >
              <span className="text-berry">React</span> Developer
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}