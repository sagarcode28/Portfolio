'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

// Type for Sanity project data
interface Project {
    _id: string
    title: string
    slug: { current: string }
    tagline: string
    impact: string
    tech: string[]
    category: string
}

// Fallback in case Sanity is empty
const fallbackProjects: Project[] = [
    {
        _id: '1',
        title: 'Pulse AI Stock Dashboard',
        slug: { current: 'pulse-ai' },
        tagline: 'AI research console with real-time anomaly detection',
        impact: 'Z-score anomaly detection + Gemini-powered analysis per ticker.',
        tech: ['React.js', 'FastAPI', 'MongoDB', 'Gemini'],
        category: 'Full Stack · AI/ML',
    },
    {
        _id: '2',
        title: 'Pennyless Bank Validation API',
        slug: { current: 'pennyless-bank-api' },
        tagline: 'Zero-cost bank account validation for Mutual Fund AMCs',
        impact: 'Adopted by 5+ Mutual Fund AMCs across KFin portals.',
        tech: ['Node.js', '.NET MVC', 'REST APIs', 'JWT'],
        category: 'Backend · Fintech',
    },
    {
        _id: '3',
        title: 'YugabyteDB Migration Engine',
        slug: { current: 'yugabytedb-migration-engine' },
        tagline: 'Zero-downtime migration of 400M+ fintech records',
        impact: '99.99% availability maintained · 100% data fidelity.',
        tech: ['C#', 'YugabyteDB', 'Multi-threading'],
        category: 'Infrastructure · Backend',
    },
]

function ProjectCard({
    project,
    index,
    delay,
}: {
    project: Project
    index: number
    delay: number
}) {
    const ref = useRef<HTMLAnchorElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-60px' })

    return (
        <div
            ref={ref}
            href={`/work/${project.slug.current}`}
            className="group bg-paper flex flex-col gap-4 p-7 min-h-[280px] border-rule transition-colors duration-[220ms] hover:bg-ink hover:text-paper cursor-pointer"
            style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}s,
                     transform 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}s,
                     background-color 0.22s ease,
                     color 0.22s ease`,
            }}
        >
            <p className="font-mono text-[10px] text-muted tracking-[0.07em] group-hover:text-white/40 transition-colors duration-[220ms]">
                {String(index + 1).padStart(2, '0')} · {project.category}
            </p>
            <p className="font-display text-[22px] font-normal leading-[1.2] flex-1 group-hover:text-white/40 transition-colors duration-[220ms]">
                {project.title}
            </p>
            <p className="text-[12.5px] text-muted leading-[1.6] group-hover:text-white/60 transition-colors duration-[220ms]">
                {project.impact}
            </p>
            <div className="flex flex-wrap gap-[6px]">
                {project.tech.map((t) => (
                    <span
                        key={t}
                        className="font-mono text-[9px] px-2 py-[3px] border border-rule text-muted tracking-[0.05em] group-hover:border-white/25 group-hover:text-white/50 transition-all duration-[220ms]"
                    >
                        {t}
                    </span>
                ))}
            </div>
            <span className="self-end text-[16px] transition-transform duration-[220ms] group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
            </span>
        </div>
    )
}

export default function FeaturedWork({ projects }: { projects: Project[] }) {
    const headerRef = useRef<HTMLDivElement>(null)
    const headerInView = useInView(headerRef, { once: true, margin: '-60px' })

    const displayProjects = projects.length > 0 ? projects : fallbackProjects

    return (
        <section className="px-10 py-16 border-b border-rule" id="work">
            <div
                ref={headerRef}
                className="flex justify-between items-end mb-10"
                style={{
                    opacity: headerInView ? 1 : 0,
                    transform: headerInView ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)',
                }}
            >
                <div>
                    <p className="font-mono text-[10px] text-muted tracking-[0.12em] uppercase mb-2">
                        Selected Work
                    </p>
                    <h2 className="font-display font-light text-[clamp(26px,4vw,44px)] leading-[1.1] tracking-[-0.01em]">
                        Featured Projects
                    </h2>
                </div>
                <Link href="/work" className="hidden sm:block text-[11.5px] text-muted hover:text-ink transition-colors duration-200">
                    All Projects →
                </Link>
            </div>

            <div
                className="grid grid-cols-1 md:grid-cols-3"
                style={{ border: '1px solid #e5e5e5', gap: '1px', background: '#e5e5e5' }}
            >
                {displayProjects.slice(0, 3).map((project, i) => (
                    <ProjectCard key={project._id} project={project} index={i} delay={i * 0.1} />
                ))}
            </div>
        </section>
    )
}