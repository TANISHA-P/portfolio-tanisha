'use client'

import Reveal from '@/components/ui/Reveal'

const skillGroups = [
  {
    label: 'Languages',
    color: 'var(--pulse)',
    icon: '⌨',
    skills: ['GoLang', 'Python', 'C++', 'SQL', 'JavaScript'],
  },
  {
    label: 'Backend Systems',
    color: 'var(--aurora)',
    icon: '⚙',
    skills: ['Microservices', 'gRPC', 'REST APIs', 'OpenSearch', 'Elasticsearch', 'Django', 'Redis', 'AWS', 'Kafka'],
  },
  {
    label: 'Databases',
    color: 'var(--gold)',
    icon: '◈',
    skills: ['DynamoDB', 'PostgreSQL', 'MongoDB', 'Snowflake'],
  },
  {
    label: 'Infrastructure & Tools',
    color: 'var(--pulse)',
    icon: '⬡',
    skills: ['Docker', 'Podman', 'ArgoCD', 'Airflow', 'Datadog', 'Grafana', 'JupyterHub', 'JIRA'],
  },
  {
    label: 'Core CS',
    color: 'var(--aurora)',
    icon: '∿',
    skills: ['DSA', 'Distributed Systems', 'System Design', 'Operating Systems', 'DBMS', 'Computer Networks', 'OOP'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      {/* Glow accent */}
      <div
        className="absolute right-0 pointer-events-none"
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(126,184,247,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-5xl mx-auto">
        <Reveal>
          <span className="section-label">// skills</span>
          <h2
            className="font-display text-4xl md:text-5xl font-bold text-star mb-16"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            The tools of{' '}
            <span className="gradient-text-cosmic">exploration.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.08} className={i === 4 ? 'md:col-span-2' : ''}>
              <div className="card-glass p-6 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-lg" style={{ color: group.color }}>{group.icon}</span>
                  <span
                    className="font-mono text-xs tracking-[0.18em] uppercase"
                    style={{ color: group.color }}
                  >
                    {group.label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, si) => (
                    <span
                      key={skill}
                      className="skill-tag"
                      style={{ animationDelay: `${si * 0.05}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
