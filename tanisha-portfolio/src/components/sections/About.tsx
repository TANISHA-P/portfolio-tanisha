'use client'

import Reveal from '@/components/ui/Reveal'

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Text block */}
          <div>
            <Reveal>
              <span className="section-label">// about</span>
              <h2
                className="font-display text-4xl md:text-5xl font-bold text-star leading-tight mb-8"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                The work, <br />
                <span className="gradient-text-cosmic">and the person behind it.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-[var(--star-dim)] text-base leading-8 mb-6">
                I’m Tanisha — a backend engineer currently working on search and ranking at Blinkit.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="text-[var(--star-dim)] text-base leading-8 mb-6">
                I spend most of my time building systems that sit close to user intent — figuring out what should show up, in what order, and how fast. That’s meant working on ranking models, real-time signals, and data pipelines that handle scale without breaking. I’ve shipped systems that impact conversions directly and worked on improving latency and reliability in production services.
              </p>
            </Reveal>

            <Reveal delay={0.35}>
              <p className="text-[var(--star-dim)] text-base leading-8 mb-6">
                I started out with competitive programming, and I think that still influences how I approach problems — I care about edge cases, trade-offs, and making systems behave predictably under load.
              </p>
            </Reveal>

            <Reveal delay={0.45}>
              <p className="text-[var(--star-dim)] text-base leading-8 mb-6">
                I’ve previously worked at Swiggy on large-scale data pipelines and user-facing features, and I’ve also experimented with research in privacy-preserving machine learning.
              </p>
            </Reveal>

            <Reveal delay={0.55}>
              <p className="text-[var(--star-dim)] text-base leading-8">
                Outside work, I train in Hindustani classical music, used to compete in skating, and recently started putting out content around things I’m learning.
              </p>
            </Reveal>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">

            {/* Achievements card */}
            <Reveal delay={0.4} className="col-span-2">
              <div className="card-glass p-6">
                <span className="section-label mb-3">// selected achievements</span>
                <ul className="space-y-2">
                  {[
                    'Silver Medalist — ICPC AlgoQueen 2023, World Finals',
                    'Finalist — Lady Ada National Programming Contest (ACM India)',
                    'Top 2.5% — Google Girl Hackathon 2023 (26,000+ participants)',
                    'AIR 672 — Google CodeJam to I/O for Women 2022',
                  ].map((a) => (
                    <li key={a} className="flex gap-3 items-start">
                      <span className="text-[var(--gold)] text-xs mt-1.5 shrink-0">◆</span>
                      <span className="text-[var(--star-dim)] text-sm leading-6">{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
