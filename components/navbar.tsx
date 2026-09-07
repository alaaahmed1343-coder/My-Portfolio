'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Code2, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  // Active section detection
  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((section): section is HTMLElement => section !== null)

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleSections.length > 0) {
          setActive(`#${visibleSections[0].target.id}`)
        }
      },
      {
        rootMargin: '-25% 0px -60% 0px',
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  // Close mobile menu with Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  // Prevent body scroll while mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Close mobile menu when screen becomes desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: 'easeOut',
      }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        aria-label="Main navigation"
        className={cn(
          'glass relative flex w-full max-w-5xl items-center justify-between',
          'rounded-2xl border border-border/70',
          'py-2 pr-2 pl-4',
          'glow-pink-soft',
          'backdrop-blur-xl',
        )}
      >
        {/* Logo */}
        <a
          href="#top"
          aria-label="Alaa Ahmed - Home"
          onClick={() => setOpen(false)}
          className={cn(
            'group flex items-center gap-2',
            'font-mono text-sm font-bold tracking-tight',
            'rounded-lg focus-visible:outline-none',
            'focus-visible:ring-2 focus-visible:ring-berry/60',
          )}
        >
          <span
            className={cn(
              'flex size-8 items-center justify-center rounded-lg',
              'border border-berry/40 bg-berry/10',
              'transition-all duration-300',
              'group-hover:border-berry/60',
              'group-hover:bg-berry/15',
              'group-hover:shadow-[0_0_18px_rgba(236,72,153,0.18)]',
            )}
          >
            <Code2
              className="size-4 text-berry transition-transform duration-300 group-hover:rotate-6"
              aria-hidden="true"
            />
          </span>

          <span>
            Alaa<span className="text-berry">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const isActive = active === link.href

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? 'location' : undefined}
                  className={cn(
                    'relative rounded-xl px-4 py-2 text-sm font-medium',
                    'transition-colors duration-200',
                    'focus-visible:outline-none',
                    'focus-visible:ring-2 focus-visible:ring-berry/60',
                    isActive
                      ? 'text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      aria-hidden="true"
                      className="pink-gradient absolute inset-0 -z-10 rounded-xl"
                      transition={{
                        type: 'spring',
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}

                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className={cn(
            'pink-gradient hidden rounded-xl px-5 py-2.5',
            'text-sm font-bold text-primary-foreground',
            'transition-all duration-200',
            'hover:scale-[1.03] hover:glow-pink',
            'focus-visible:outline-none',
            'focus-visible:ring-2 focus-visible:ring-berry/70',
            'focus-visible:ring-offset-2',
            'md:inline-flex',
          )}
        >
          Let&apos;s Connect
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          className={cn(
            'flex size-10 items-center justify-center rounded-xl',
            'text-foreground transition-all duration-200',
            'hover:bg-secondary',
            'focus-visible:outline-none',
            'focus-visible:ring-2 focus-visible:ring-berry/60',
            'md:hidden',
          )}
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="flex"
              >
                <X className="size-5" aria-hidden="true" />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="flex"
              >
                <Menu className="size-5" aria-hidden="true" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {open && (
          <motion.button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 -z-10 bg-background/20 backdrop-blur-[2px] md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-label="Mobile navigation"
            initial={{
              opacity: 0,
              y: -10,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -10,
              scale: 0.98,
            }}
            transition={{
              duration: 0.2,
              ease: 'easeOut',
            }}
            className={cn(
              'glass absolute top-20',
              'flex w-[calc(100%-2rem)] max-w-5xl flex-col',
              'rounded-2xl border border-border/70 p-3',
              'shadow-xl backdrop-blur-xl',
              'md:hidden',
            )}
          >
            <ul className="flex flex-col gap-1">
              {links.map((link, index) => {
                const isActive = active === link.href

                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.2,
                      delay: index * 0.04,
                    }}
                  >
                    <a
                      href={link.href}
                      aria-current={isActive ? 'location' : undefined}
                      onClick={() => setOpen(false)}
                      className={cn(
                        'flex items-center rounded-xl px-4 py-3',
                        'text-sm font-medium',
                        'transition-all duration-200',
                        'focus-visible:outline-none',
                        'focus-visible:ring-2 focus-visible:ring-berry/60',
                        isActive
                          ? 'pink-gradient text-primary-foreground'
                          : 'text-muted-foreground hover:bg-secondary hover:text-foreground',
                      )}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                )
              })}
            </ul>

            {/* Mobile CTA */}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className={cn(
                'pink-gradient mt-2 flex items-center justify-center',
                'rounded-xl px-4 py-3',
                'text-sm font-bold text-primary-foreground',
                'transition-all duration-200',
                'hover:scale-[1.01] hover:glow-pink',
                'focus-visible:outline-none',
                'focus-visible:ring-2 focus-visible:ring-berry/70',
              )}
            >
              Let&apos;s Connect
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}