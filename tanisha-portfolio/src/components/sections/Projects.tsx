'use client'

import { motion } from 'framer-motion'
import Reveal from '@/components/ui/Reveal'

const projects = [
  {
    id: '01',
    title: 'Privacy-Preserving NLP Pipeline',
    subtitle: 'Encrypted Medical Transcripts',
    description:
      'Built a secure healthcare data pipeline where AI models analyze ~5,000 encrypted medical records without ever decrypting them. Eliminates privacy risk while preserving full analytical capability — using Fully Homomorphic Encryption (CKKS scheme).',
    impact: [
      'Dual-cloud architecture isolating key storage from model inference',
      'End-to-end pipeline: ingestion → cleaning → TF-IDF vectorization → CKKS encryption',
      'Benchmarked performance across 4,000+ records — identified scaling patterns',
      {
        text: 'Published in Grenze International Journal of Engineering and Technology (Jan 2024)',
        link: 'https://drive.google.com/file/d/1asWuAbniBaqon5jPHca-xgE16fhETX9l/view?usp=sharing',
      },
    ],
    stack: ['Python', 'TenSEAL', 'Gensim', 'FHE', 'CKKS'],
    accent: 'var(--aurora)',
    type: 'Research',
  },
  {
    id: '02',
    title: 'Continue Browsing',
    subtitle: 'User Personalization at Blinkit',
    description:
      'A user ranking system that aggregates user interaction signals into product-affinity scores. Boosts high-intent items for users mid-session — generating measurable daily revenue impact at Blinkit\'s scale.',
    impact: [
      '~₹1 Crore/day revenue generation',
      'Click and add-to-cart signal aggregation in real time',
      'Low-latency serving integrated into search pipeline',
    ],
    stack: ['Go', 'Elasticsearch', 'gRPC', 'DynamoDB'],
    accent: 'var(--pulse)',
    type: 'Production',
  },
  {
    id: '03',
    title: 'Restaurant Awards',
    subtitle: 'National Feature — Swiggy',
    description:
      'Led full-stack development of a nationally deployed awards feature for Swiggy. Designed the data ingestion pipeline from Snowflake through Databricks into Kafka, persisted into DynamoDB for low-latency reads across the platform.',
    impact: [
      'Served to ~9.4 million users across India',
      'Snowflake → Databricks → Kafka → DynamoDB pipeline',
      'Optimized DynamoDB schema and access patterns',
    ],
    stack: ['Python', 'Kafka', 'Databricks', 'DynamoDB', 'Snowflake'],
    accent: 'var(--gold)',
    type: 'Production',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <span className="section-label">// projects & work</span>
          <h2
            className="font-display text-4xl md:text-5xl font-bold text-star mb-16"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Things I've{' '}
            <span className="gradient-text-cosmic">shipped.</span>
          </h2>
        </Reveal>

        <div className="space-y-6">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.1}>
              <motion.div
                className="card-glass p-8 group"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8">
                  {/* Left */}
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span
                        className="font-mono text-xs tracking-[0.2em] uppercase"
                        style={{ color: p.accent }}
                      >
                        {p.id}
                      </span>
                      <span
                        className="font-mono text-[10px] tracking-widest uppercase px-2 py-0.5 rounded"
                        style={{
                          border: `1px solid ${p.accent}30`,
                          color: p.accent,
                          background: `${p.accent}08`,
                        }}
                      >
                        {p.type}
                      </span>
                    </div>

                    <h3
                      className="font-display text-2xl font-bold text-star mb-1 group-hover:text-[var(--pulse)] transition-colors duration-300"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {p.title}
                    </h3>
                    <p className="text-[var(--star-dim)] text-sm mb-4">{p.subtitle}</p>
                    <p className="text-[var(--star-dim)] text-sm leading-7 mb-6">{p.description}</p>

                    <ul className="space-y-2">
                      {p.impact.map((item) => {
                        if (typeof item === 'string') {
                          return (
                            <li key={item} className="flex gap-3 items-start">
                              <span className="shrink-0 mt-2 w-1 h-1 rounded-full" style={{ background: p.accent }} />
                              <span className="text-[var(--star-dim)] text-sm leading-6">{item}</span>
                            </li>
                          )
                        } else {
                          return (
                            <li key={item.text} className="flex gap-3 items-start">
                              <span className="shrink-0 mt-2 w-1 h-1 rounded-full" style={{ background: p.accent }} />
                              <span className="text-[var(--star-dim)] text-sm leading-6 flex items-center">
                                {item.text}
                                <a
                                  href={item.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="ml-2 inline-flex items-center text-[var(--pulse)] hover:text-[var(--aurora)]"
                                  aria-label="Open research paper"
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M14 3h7v7m-1.5-6.5L10 13m-4 0v7h7"/></svg>
                                </a>
                              </span>
                            </li>
                          )
                        }
                      })}
                    </ul>
                  </div>

                  {/* Right: tech stack */}
                  <div className="lg:border-l lg:border-[rgba(126,184,247,0.08)] lg:pl-8 flex flex-col justify-center">
                    <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--star-dim)] mb-4">
                      Tech Stack
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <span key={s} className="skill-tag">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
