'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const HEADLINE_WORDS = ['curiosity', 'learning', 'imagination', 'discovery']

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % HEADLINE_WORDS.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{ paddingTop: '80px' }}
    >
      {/* Subtle radial glow behind hero */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 40%, rgba(126,184,247,0.05) 0%, transparent 70%)',
        }}
      />

      {/* Coordinates label */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mb-8"
      >
        <span className="font-mono text-xs tracking-[0.25em] text-[var(--star-dim)] opacity-60">
          28.6448° N, 77.2167° E — EARTH
        </span>
      </motion.div>

      {/* Main heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-6"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        <span className="gradient-text-blue block">Living for</span>
        <span className="text-star block"> </span>
        <span className="relative inline-block">
          <motion.span
            key={wordIndex}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="gradient-text-cosmic"
          >
            {HEADLINE_WORDS[wordIndex]}
          </motion.span>
        </span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="text-[var(--star-dim)] text-lg md:text-xl max-w-2xl leading-relaxed mb-12"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        Backend engineer building search, ranking, and streaming systems at scale.
        Quietly obsessed with understanding how things work — then making them work better.
      </motion.p>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.0 }}
        className="flex flex-col sm:flex-row gap-4 items-center"
      >
        <a href="#experience" className="btn-primary">
          Explore My Work
        </a>
        <a
          href="https://www.linkedin.com/in/tanishapareek/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs tracking-[0.15em] uppercase text-[var(--star-dim)] hover:text-[var(--pulse)] transition-colors duration-300"
        >
          LinkedIn ↗
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--star-dim)] opacity-40">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-[var(--pulse)] to-transparent opacity-40"
        />
      </motion.div>
    </section>
  )
}
