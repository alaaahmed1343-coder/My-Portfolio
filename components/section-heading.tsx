'use client'

import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '@/lib/motion'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="flex flex-col items-center gap-3 text-center"
    >
      <span className="rounded-full border border-border bg-secondary/60 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-blush">
        {eyebrow}
      </span>
      <h2 className="font-serif text-3xl font-semibold text-balance text-foreground md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">{description}</p>
      )}
    </motion.div>
  )
}
