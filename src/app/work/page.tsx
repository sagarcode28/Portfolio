'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { useInView } from 'framer-motion'

const allProjects = [
  {
    id: '01',
    title: 'Pulse AI Stock Dashboard',
    category: 'Full Stack',
    tags: ['Full Stack', 'AI/ML'],
    year: '2024',
    impact: 'Z-score anomaly detection + Gemini-powered 3-line market analysis per ticker.',
    tech: ['React.js', 'FastAPI', 'MongoDB', 'Gemini', 'Node.js', 'Express.js'],
    slug: 'pulse-ai',
  },
  {
    id: '02',
    title: 'Pennyless Bank Validation API',
    category: 'Backend',
    tags: ['Backend', 'Fintech'],
    year: '2024',
    impact: 'Adopted by 5+ Mutual Fund AMCs. Eliminates monetary transfer for bank validation.',
    tech: ['Node.js', '.NET MVC', 'REST APIs', 'JWT'],
    slug: 'pennyless-bank-api',
  },
  {
    id: '03',
    title: 'YugabyteDB Migration Engine',
    category: 'Infrastructure',
    tags: ['Backend', 'Infrastructure'],
    year: '2024',
    impact: '400M+ records migrated with 99.99% availability and 100% data fidelity.',
    tech: ['C#', 'YugabyteDB', 'Multi-threading'],
    slug: 'yugabytedb-migration',
  },
  {
    id: '04',
    title: 'PAN-based KYC Modification API',
    category: 'Backend',
    tags: ['Backend', 'Fintech'],
    year: '2024',
    impact: 'Streamlined regulatory compliance across multiple AMC portals via CVL KRA.',
    tech: ['.NET MVC', 'CVL KRA', 'REST APIs'],
    slug: 'pan-kyc-api',
  },
]

const filters = ['All', 'Full Stack', 'Backend', 'AI/ML', 'Fintech', 'Infrastructure']

// Single project row — used instead of cards for a more editorial feel
function ProjectRow({
  project,
  index,
  delay,
}: {
  project: (typeof allProjects)[0]
  index: number
  delay: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <div
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.55s cubic-bezier(0.16,1,0.3,1) ${delay}s,
                     transform 0.55s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      <div
        //href={`/work/${project.slug}`}
        className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-0 py-7 border-b border-rule hover:bg-ghost transition-colors duration-200 px-6 -mx-6"
      >
        {/* Number */}
        <span className="font-mono text-[10px] text-muted tracking-[0.08em] md:w-16 flex-shrink-0">
          {project.id}
        </span>

        {/* Title */}
        <h3 className="font-display text-[20px] md:text-[22px] font-normal leading-tight md:flex-1">
          {project.title}
        </h3>

        {/* Impact — hidden on mobile */}
        <p className="hidden lg:block text-[12px] text-muted leading-[1.6] md:w-[320px] flex-shrink-0 px-6">
          {project.impact}
        </p>

        {/* Year + Category */}
        <div className="flex items-center gap-4 md:w-40 flex-shrink-0 justify-between md:justify-end">
          <span className="font-mono text-[10px] text-muted tracking-[0.06em]">
            {project.year}
          </span>
          <span className="font-mono text-[9px] text-muted tracking-[0.06em] border border-rule px-2 py-[3px]">
            {project.category}
          </span>
        </div>

        {/* Arrow */}
        <span className="hidden md:block ml-6 text-[14px] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
          ↗
        </span>
      </div>
    </div>
  )
}

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = allProjects.filter((p) =>
    activeFilter === 'All' ? true : p.tags.includes(activeFilter)
  )

  return (
    <div className="px-10 py-16">

      {/* Page header */}
      <div className="mb-14">
        <p className="font-mono text-[10px] text-muted tracking-[0.12em] uppercase mb-3">
          Portfolio
        </p>
        <h1 className="font-display font-light text-[clamp(40px,6vw,80px)] leading-none tracking-[-0.025em]">
          All Work
        </h1>
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-12 border-b border-rule pb-8">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`font-mono text-[10px] tracking-[0.08em] uppercase px-3 py-[6px] border transition-all duration-200 ${
              activeFilter === filter
                ? 'bg-ink text-paper border-ink'
                : 'bg-transparent text-muted border-rule hover:border-ink hover:text-ink'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Project count */}
      <p className="font-mono text-[10px] text-muted tracking-[0.08em] uppercase mb-2">
        {filtered.length} project{filtered.length !== 1 ? 's' : ''}
      </p>

      {/* Projects list */}
      <div>
        {filtered.map((project, i) => (
          <ProjectRow
            key={project.slug}
            project={project}
            index={i}
            delay={i * 0.07}
          />
        ))}
      </div>

    </div>
  )
}