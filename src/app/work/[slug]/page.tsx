import Link from 'next/link'
import { notFound } from 'next/navigation'

// All project data lives here for now
// Later this will come from Sanity CMS
const projects = [
  {
    slug: 'pulse-ai',
    id: '01',
    title: 'Pulse AI Stock Dashboard',
    tagline: 'AI-powered stock research console with real-time anomaly detection.',
    category: 'Full Stack · AI/ML',
    year: '2024',
    tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB Atlas', 'FastAPI', 'Google Gemini', 'Alpha Vantage API'],
    liveUrl: '#',
    githubUrl: '#',
    sections: [
      {
        title: 'Overview',
        content:
          'Pulse AI is a full-stack stock research console that combines real-time market data with AI-generated insights. Built to give retail investors the kind of analysis previously only available to institutional traders.',
      },
      {
        title: 'Technical Approach',
        content:
          'Integrated Alpha Vantage for real-time market data and built a FastAPI microservice implementing Z-score statistical anomaly detection on daily stock price time-series data. Each anomalous trading day is flagged with severity scoring (HIGH / MEDIUM) and directional context.',
      },
      {
        title: 'Architecture Decisions',
        content:
          'Used a MongoDB-backed Express API gateway with TTL-indexed price caching (1-hour expiry) to reduce redundant API calls. Portfolio CRUD with live PNL calculation and a persistent watchlist with real-time 7-day sparklines were built as separate concerns.',
      },
      {
        title: 'Outcomes',
        content:
          'Delivered an interactive React dashboard featuring Recharts with anomaly markers, portfolio allocation pie chart, KPI cards, and a watchlist sidebar. The Gemini LLM integration generates structured 3-line market analysis per ticker covering trend, risk level, and price observations.',
      },
    ],
    stats: [
      { value: '1hr', label: 'Cache TTL' },
      { value: 'Z-score', label: 'Anomaly Method' },
      { value: 'HIGH/MED', label: 'Severity Scoring' },
    ],
  },
  {
    slug: 'pennyless-bank-api',
    id: '02',
    title: 'Pennyless Bank Validation API',
    tagline: 'Cost-effective bank account validation adopted by 5+ Mutual Fund AMCs.',
    category: 'Backend · Fintech',
    year: '2024',
    tech: ['Node.js', '.NET MVC', 'REST APIs', 'JWT', 'KFin Investor Portal'],
    liveUrl: '#',
    githubUrl: null,
    sections: [
      {
        title: 'Overview',
        content:
          'A production API that validates bank accounts without requiring monetary transfers — eliminating the cost and friction of traditional "penny drop" verification methods used across India\'s Mutual Fund industry.',
      },
      {
        title: 'Technical Approach',
        content:
          'Built a secure REST API with JWT authentication that interfaces with banking verification systems. The API returns validation status, account holder name match, and IFSC verification without initiating any transactions.',
      },
      {
        title: 'Architecture Decisions',
        content:
          'Designed for multi-tenant usage from day one — each AMC integration receives isolated credentials and audit logging. Error handling was built to gracefully degrade when upstream banking APIs are unavailable.',
      },
      {
        title: 'Outcomes',
        content:
          'Successfully adopted and integrated by KFintech Investor Portals and over 5 leading Mutual Fund AMCs, directly reducing operational costs associated with bank account onboarding and KYC workflows.',
      },
    ],
    stats: [
      { value: '5+', label: 'AMCs Adopted' },
      { value: '0₹', label: 'Per Validation' },
      { value: '100%', label: 'Data Fidelity' },
    ],
  },
  {
    slug: 'yugabytedb-migration',
    id: '03',
    title: 'YugabyteDB Migration Engine',
    tagline: 'Zero-downtime migration of 400M+ fintech records with full data fidelity.',
    category: 'Infrastructure · Backend',
    year: '2024',
    tech: ['C#', '.NET', 'YugabyteDB', 'Multi-threading', 'Console Application'],
    liveUrl: null,
    githubUrl: null,
    sections: [
      {
        title: 'Overview',
        content:
          'Led the end-to-end migration of a high-volume fintech database to YugabyteDB, moving 400 million records while maintaining 99.99% availability — one of the most complex infrastructure projects at KFin Technologies.',
      },
      {
        title: 'Technical Approach',
        content:
          'Developed a robust C# console application featuring multi-threaded data streaming to maximize throughput. Automated retry logic with exponential backoff ensured 100% data fidelity even when transient network errors occurred mid-migration.',
      },
      {
        title: 'Architecture Decisions',
        content:
          'Chose a phased migration approach — data was streamed in parallel batches while the production system remained live. Checksums were computed at source and destination to verify every batch before committing.',
      },
      {
        title: 'Outcomes',
        content:
          'Completed migration of 400 million records with zero data loss and 99.99% system availability throughout. The new YugabyteDB setup provides distributed SQL with significantly improved read scalability for investor-facing portals.',
      },
    ],
    stats: [
      { value: '400M+', label: 'Records Migrated' },
      { value: '99.99%', label: 'Availability' },
      { value: '0', label: 'Data Loss' },
    ],
  },
  {
    slug: 'pan-kyc-api',
    id: '04',
    title: 'PAN-based KYC Modification API',
    tagline: 'Regulatory compliance API via CVL KRA integration across multiple AMC portals.',
    category: 'Backend · Fintech',
    year: '2024',
    tech: ['.NET MVC', 'CVL KRA', 'REST APIs', 'C#'],
    liveUrl: null,
    githubUrl: null,
    sections: [
      {
        title: 'Overview',
        content:
          'A compliance API that streamlines KYC modification workflows for Mutual Fund investors by integrating directly with CVL KRA (KYC Registration Agency), enabling PAN-based identity updates across multiple AMC portals.',
      },
      {
        title: 'Technical Approach',
        content:
          'Built on .NET MVC with a clean service layer that abstracts CVL KRA\'s SOAP-based API into a modern REST interface. Input validation and PAN format verification happen before any external calls are made.',
      },
      {
        title: 'Outcomes',
        content:
          'Deployed across multiple AMC portals, reducing manual processing time for investor KYC updates and ensuring regulatory compliance with SEBI KYC norms.',
      },
    ],
    stats: [
      { value: 'Multi-AMC', label: 'Deployment' },
      { value: 'CVL KRA', label: 'Integration' },
      { value: 'SEBI', label: 'Compliant' },
    ],
  },
]

// next.js needs this to know which slugs exist at build time
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string }
}) {
  const project = projects.find((p) => p.slug === params.slug)

  // If slug doesn't exist — show 404
  if (!project) notFound()

  return (
    <article className="px-10 py-16 max-w-[900px]">

      {/* Back link */}
      <Link
        href="/work"
        className="inline-flex items-center gap-2 font-mono text-[10px] text-muted tracking-[0.08em] uppercase hover:text-ink transition-colors duration-200 mb-12"
      >
        ← Back to Work
      </Link>

      {/* Header */}
      <div className="border-b border-rule pb-10 mb-10">
        <p className="font-mono text-[10px] text-muted tracking-[0.1em] uppercase mb-4">
          {project.id} · {project.category} · {project.year}
        </p>
        <h1 className="font-display font-light text-[clamp(36px,5vw,64px)] leading-[1.05] tracking-[-0.02em] mb-5">
          {project.title}
        </h1>
        <p className="font-sans text-[15px] text-muted leading-[1.7]">
          {project.tagline}
        </p>
      </div>

      {/* Stats row */}
      <div className="flex border border-rule mb-12">
        {project.stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex-1 px-6 py-5 ${i > 0 ? 'border-l border-rule' : ''}`}
          >
            <p className="font-mono text-[clamp(16px,2vw,22px)] font-medium mb-1">
              {stat.value}
            </p>
            <p className="font-mono text-[9px] text-muted tracking-[0.08em] uppercase">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Tech stack */}
      <div className="mb-12">
        <p className="font-mono text-[10px] text-muted tracking-[0.1em] uppercase mb-3">
          Tech Stack
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-[10px] px-3 py-[5px] border border-rule text-ink tracking-[0.04em]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Content sections */}
      <div className="flex flex-col gap-10">
        {project.sections.map((section, i) => (
          <div key={section.title} className="border-t border-rule pt-8">
            <p className="font-mono text-[10px] text-muted tracking-[0.1em] uppercase mb-4">
              0{i + 1} — {section.title}
            </p>
            <p className="font-sans text-[15px] leading-[1.85] text-ink">
              {section.content}
            </p>
          </div>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4 mt-14 pt-10 border-t border-rule">
        {project.liveUrl && (
        <a
          
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-[10px] bg-ink text-paper text-[11.5px] tracking-[0.05em] font-sans hover:bg-transparent hover:text-ink border border-ink transition-all duration-200"
          >
            Live Demo ↗
          </a>
        )}
        {project.githubUrl && (
            <a
          
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-[10px] bg-transparent text-ink text-[11.5px] tracking-[0.05em] font-sans hover:bg-ink hover:text-paper border border-ink transition-all duration-200"
          >
            GitHub →
          </a>
        )}
        <Link
          href="/work"
          className="ml-auto inline-flex items-center gap-2 font-mono text-[10px] text-muted tracking-[0.08em] uppercase hover:text-ink transition-colors duration-200"
        >
          All Projects →
        </Link>
      </div>

    </article>
  )
}