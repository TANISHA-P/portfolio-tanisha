'use client'

import Reveal from '@/components/ui/Reveal'

const experiences = [
  {
    company: 'Blinkit',
    role: 'Software Development Engineer',
    period: 'June 2024 — Present',
    location: 'Gurugram, India',
    type: 'Full-time',
    color: 'var(--pulse)',
    highlights: [
      {
        title: 'Continue Browsing System',
        desc: 'Aggregated user interaction signals (clicks, add-to-cart events) into product-affinity scores, boosting high-intent items in real time — generating ~₹1 Cr/day in revenue.',
        tags: ['Ranking', 'Real-time', 'Revenue Impact'],
      },
      {
        title: 'Trend-Aware Ranking',
        desc: 'Built a behavioral analysis pipeline to detect and boost contextually relevant products during seasonal events and trends.',
        tags: ['Time Series', 'Search', 'Go'],
      },
      {
        title: 'Variant Ranking Strategy',
        desc: 'Designed a ranking strategy driven by sales velocity and discount signals, lifting search-to-purchase conversion by ~0.1% — at Blinkit\'s scale, meaningfully significant.',
        tags: ['Conversion', 'Signals', 'A/B Testing'],
      },
      {
        title: 'Complaint-Aware Deboosting',
        desc: 'Used statistical segmentation to reduce visibility of high-complaint items while minimizing revenue impact — a precision trade-off between trust and commerce.',
        tags: ['Statistical Analysis', 'Safety'],
      },
      {
        title: 'Python → Go Migration',
        desc: 'Migrated critical services to Go with gRPC-based communication, reducing p99 latency by ~25%.',
        tags: ['Go', 'gRPC', 'Performance'],
      },
      {
        title: 'Dynamic Filtering (Elasticsearch)',
        desc: 'Delivered a multi-select filter system using Elasticsearch aggregation queries with property-based query composition.',
        tags: ['Elasticsearch', 'OpenSearch', 'Backend'],
      },
    ],
  },
  {
    company: 'Swiggy',
    role: 'Software Development Engineer Intern',
    period: 'Sept 2023 — March 2024',
    location: 'Bangalore, India (Remote)',
    type: 'Internship',
    color: 'var(--aurora)',
    highlights: [
      {
        title: 'Restaurant Awards Feature',
        desc: 'Led end-to-end development of a nationally-visible awards feature, serving ~9.4 million users across India.',
        tags: ['9.4M Users', 'Product Feature'],
      },
      {
        title: 'Scalable Data Pipeline',
        desc: 'Designed a pipeline ingesting data from Snowflake via Databricks into Kafka, then persisting into DynamoDB for low-latency access.',
        tags: ['Kafka', 'Databricks', 'DynamoDB', 'Snowflake'],
      },
      {
        title: 'DynamoDB Optimization',
        desc: 'Optimized schema and access patterns to improve query performance and system reliability at scale.',
        tags: ['DynamoDB', 'Schema Design'],
      },
    ],
  },
  {
    company: 'Mastercard',
    role: 'Software Development Engineer Intern',
    period: 'May 2023 — July 2023',
    location: 'Pune, India',
    type: 'Internship',
    color: 'var(--gold)',
    highlights: [
      {
        title: 'Node.js Data Services',
        desc: 'Built Node.js services for data retrieval from MongoDB, optimizing test validation workflows.',
        tags: ['Node.js', 'MongoDB'],
      },
      {
        title: 'JMeter Pipeline Extension',
        desc: 'Extended JMeter-based testing pipelines with custom build artifacts and automation scripts, improving test execution efficiency.',
        tags: ['Testing', 'Automation', 'JMeter'],
      },
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6">
      {/* Subtle nebula glow */}
      <div
        className="absolute left-0 pointer-events-none"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(167,139,250,0.04) 0%, transparent 70%)',
          marginTop: '-100px',
        }}
      />

      <div className="max-w-5xl mx-auto">
        <Reveal>
          <span className="section-label">// experience</span>
          <h2
            className="font-display text-4xl md:text-5xl font-bold text-star mb-16"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Where I've{' '}
            <span className="gradient-text-cosmic">built things.</span>
          </h2>
        </Reveal>

        <div className="space-y-20">
          {experiences.map((exp, ei) => (
            <Reveal key={exp.company} delay={ei * 0.1}>
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-12">
                {/* Left: company info */}
                <div className="md:pt-1">
                  <div
                    className="font-display text-xl font-bold mb-1"
                    style={{ fontFamily: 'var(--font-display)', color: exp.color }}
                  >
                    {exp.company}
                  </div>
                  <div className="text-star text-sm font-medium mb-3 leading-5">{exp.role}</div>
                  <div className="font-mono text-xs text-[var(--star-dim)] tracking-wide mb-1">{exp.period}</div>
                  <div className="font-mono text-xs text-[var(--star-dim)] opacity-60">{exp.location}</div>
                  <span
                    className="inline-block mt-3 font-mono text-[10px] tracking-widest uppercase px-2 py-1 rounded"
                    style={{
                      border: `1px solid ${exp.color}30`,
                      color: exp.color,
                      background: `${exp.color}08`,
                    }}
                  >
                    {exp.type}
                  </span>
                </div>

                {/* Right: highlights */}
                <div className="space-y-4">
                  {exp.highlights.map((h, hi) => (
                    <Reveal key={h.title} delay={hi * 0.07}>
                      <div className="card-glass p-5">
                        <div className="flex gap-3 items-start">
                          <div
                            className="timeline-dot mt-1.5"
                            style={{
                              background: exp.color,
                              boxShadow: `0 0 8px ${exp.color}80`,
                            }}
                          />
                          <div className="flex-1">
                            <div className="text-star text-sm font-medium mb-1">{h.title}</div>
                            <div className="text-[var(--star-dim)] text-sm leading-6 mb-3">{h.desc}</div>
                            <div className="flex flex-wrap gap-2">
                              {h.tags.map((t) => (
                                <span key={t} className="skill-tag text-[10px]">{t}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              {ei < experiences.length - 1 && (
                <div className="cosmic-divider mt-16" />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
