import Link from 'next/link'

const experience = [
  {
    role: 'Software Engineer',
    company: 'KFin Technologies Limited',
    period: 'June 2024 – Present',
    location: 'Hyderabad, Telangana',
    highlights: [
      'Built Pennyless Bank Validation API — adopted by 5+ Mutual Fund AMCs',
      'Led zero-downtime migration of 400M+ records to YugabyteDB',
      'Delivered PAN-based KYC Modification API via CVL KRA integration',
      'Built full-stack features across 3 production portals using React.js, Node.js, and .NET MVC',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'KFin Technologies Limited',
    period: 'Dec 2023 – June 2024',
    location: 'Hyderabad, Telangana',
    highlights: [
      'Resolved 15+ production bugs across investor-facing portals',
      'Participated in 20+ code reviews with senior engineers',
      'Developed knowledge in SOLID design and clean code principles',
    ],
  },
]

const education = [
  {
    degree: 'B.Tech in Information Technology',
    institution: 'Veer Surendra Sai University of Technology',
    period: 'Dec 2020 – May 2024',
    location: 'Burla, Odisha',
  },
  {
    degree: 'Intermediate — PCM',
    institution: 'Nalanda Public School',
    period: 'Sept 2018 – May 2020',
    location: 'Cuttack, Odisha',
  },
  {
    degree: 'Matriculation',
    institution: 'DAV Public School, CDA',
    period: 'Sept 2016 – May 2018',
    location: 'Cuttack, Odisha',
  },
]

export default function AboutPage() {
  return (
    <div className="px-10 py-16">
      <div className="mb-16 max-w-[680px]">
        <p className="font-mono text-[10px] text-muted tracking-[0.12em] uppercase mb-3">
          About
        </p>
        <h1 className="font-display font-light text-[clamp(40px,6vw,80px)] leading-none tracking-[-0.025em] mb-8">
          Sagar Raj<br />Gantayat
        </h1>
        <div className="flex flex-col gap-4 font-sans text-[15px] leading-[1.85] text-ink">
          <p>
            I&apos;m a Full-Stack Software Engineer at KFin Technologies, where I build
            high-scale infrastructure and applications for India&apos;s Mutual Fund industry.
            In 1.8 years I&apos;ve shipped APIs now used by 5+ AMCs and led a migration
            of 400 million records without a single minute of downtime.
          </p>
          <p>
            My work sits at the intersection of fintech reliability and modern engineering —
            I care deeply about systems that don&apos;t fail, APIs that are actually a
            pleasure to integrate, and UIs that respect the people using them.
          </p>
          <p>
            Outside of work I build AI-powered tools — most recently Pulse AI, a stock
            research console that uses Google Gemini and statistical anomaly detection
            to surface insights from market data.
          </p>
        </div>
      </div>

      {/* Experience */}
      <div className="mb-16">
        <p className="font-mono text-[10px] text-muted tracking-[0.12em] uppercase mb-8 pb-4 border-b border-rule">
          Experience
        </p>

        <div className="flex flex-col gap-0">
          {experience.map((job, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-12 py-8 border-b border-rule"
            >
              {/* Left — meta */}
              <div>
                <p className="font-mono text-[10px] text-muted tracking-[0.06em] leading-[2]">
                  {job.period}
                </p>
                <p className="font-mono text-[10px] text-muted tracking-[0.06em] leading-[2]">
                  {job.location}
                </p>
              </div>

              {/* Right — content */}
              <div>
                <h3 className="font-display text-[22px] font-normal leading-tight mb-1">
                  {job.role}
                </h3>
                <p className="font-mono text-[11px] text-muted tracking-[0.04em] mb-5">
                  {job.company}
                </p>
                <ul className="flex flex-col gap-3">
                  {job.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="font-sans text-[13.5px] leading-[1.7] text-ink flex gap-3"
                    >
                      <span className="text-muted mt-[2px] flex-shrink-0">—</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mb-16">
        <p className="font-mono text-[10px] text-muted tracking-[0.12em] uppercase mb-8 pb-4 border-b border-rule">
          Education
        </p>

        <div className="flex flex-col gap-0">
          {education.map((edu, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-12 py-7 border-b border-rule"
            >
              {/* Left — period */}
              <p className="font-mono text-[10px] text-muted tracking-[0.06em] leading-[2]">
                {edu.period}
              </p>

              {/* Right — content */}
              <div>
                <h3 className="font-display text-[20px] font-normal leading-tight mb-1">
                  {edu.degree}
                </h3>
                <p className="font-mono text-[11px] text-muted tracking-[0.04em] mb-1">
                  {edu.institution}
                </p>
                <p className="font-mono text-[10px] text-muted tracking-[0.06em]">
                  {edu.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Currently section */}
      <div className="max-w-[560px]">
        <p className="font-mono text-[10px] text-muted tracking-[0.12em] uppercase mb-6 pb-4 border-b border-rule">
          Currently
        </p>
        <ul className="flex flex-col gap-4">
          {[
            'Building production fintech systems at KFin Technologies',
            'Exploring distributed databases and cloud-native architectures',
            'Available for freelance projects — especially fintech and AI tools',
          ].map((item, i) => (
            <li key={i} className="flex gap-3 font-sans text-[14px] leading-[1.7]">
              <span className="text-muted flex-shrink-0">→</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 pt-10 border-t border-rule flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <p className="font-sans text-[14px] text-muted">
          Want to work together?
        </p>
        <Link
          href="/contact"
          className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 border border-white text-ink text-[11.5px] tracking-[0.05em] font-sans"
        >
          Get in Touch →
        </Link>
      </div>

    </div>
  )
}