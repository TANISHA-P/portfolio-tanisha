'use client'

import Reveal from '@/components/ui/Reveal'

const links = [
  {
    label: 'Email',
    value: 'tanishapareek2505@gmail.com',
    href: 'mailto:tanishapareek2505@gmail.com',
    icon: '✉',
    color: 'var(--pulse)',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/tanishapareek/',
    href: 'https://www.linkedin.com/in/tanishapareek/',
    icon: '⬡',
    color: 'var(--aurora)',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <Reveal>
          <span className="section-label">// contact</span>
          <h2
            className="font-display text-4xl md:text-6xl font-bold text-star mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Let's build something{' '}
            <span className="gradient-text-cosmic">worth exploring.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="text-[var(--star-dim)] text-lg max-w-xl mx-auto mb-16 leading-8">
            I'm looking for SDE-2 opportunities where I can take greater ownership over
            architecture and technical direction. If that sounds like a conversation worth having — reach out.
          </p>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {links.map((link, i) => (
            <Reveal key={link.label} delay={i * 0.1}>
              <a
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="card-glass p-5 flex flex-col items-center gap-3 text-center group no-underline min-w-[180px]"
              >
                <span className="text-xl" style={{ color: link.color }}>{link.icon}</span>
                <div>
                  <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--star-dim)] mb-1">{link.label}</div>
                  <div className="text-star text-sm group-hover:text-[var(--pulse)] transition-colors duration-300 break-all">{link.label === 'Resume' ? 'Resume' : link.value}</div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="https://drive.google.com/file/d/1aYGl6ZKwtUAORP-0KofLwTr1E7vBo4AK/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Resume ↗
            </a>
            <a
              href="https://www.linkedin.com/in/tanishapareek/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              LinkedIn ↗
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
