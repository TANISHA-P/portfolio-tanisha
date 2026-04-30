'use client'

export default function Footer() {
  return (
    <footer className="relative py-12 px-6 border-t border-[rgba(126,184,247,0.06)]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span
            className="font-display text-lg font-bold gradient-text-blue"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Tanisha Pareek
          </span>
          <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-[var(--star-dim)] mt-1 opacity-50">
            Backend Engineer · Curious Builder
          </p>
        </div>

        <blockquote className="text-center">
          <p className="text-[var(--star-dim)] text-sm italic leading-7 max-w-sm opacity-60">
            "The universe is under no obligation to make sense to you.
            <br />But systems are — if you build them right."
          </p>
        </blockquote>

        <div className="font-mono text-[10px] text-[var(--star-dim)] tracking-wide opacity-40 text-right">
          <p>Built with Next.js + Framer Motion</p>
          <p className="mt-1">© {new Date().getFullYear()} Tanisha Pareek</p>
        </div>
      </div>
    </footer>
  )
}
