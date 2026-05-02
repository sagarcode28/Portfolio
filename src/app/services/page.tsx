import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services | Sagar Raj Gantayat - Full Stack Developer',
  description: 'Freelance web development, custom LLM integration, and AI chatbot development services by Sagar Raj Gantayat.',
  keywords: [
    'full stack developer',
    'full stack web developer',
    'freelance web developer',
    'web development services',
    'website development',
    'mobile app development',
    'full stack developer India',
    
    'LLM integration developer',
    'LLM developer freelance',
    'AI chatbot development',
    'chatbot developer for business',
    'custom chatbot development India',
    'AI powered website development',
    'business website developer',
    'business website design and development',
    'personal brand website developer',
    'full stack software engineer freelance',
    'web app development services',
    'mobile app developer with AI integration',
    'RAG LLM application developer',
    'AI SaaS app development freelancer',
    
    'full stack developer Bhubaneswar',
    'web developer Odisha',
    'freelance software developer Bhubaneswar',
    'chatbot development services India',
    
    'freelance software developer',
    'software engineer services',
    'AI application development',
    'custom web application development',
    'React web developer',
    'Node.js web developer',
    'Python web developer'
  ],
}

const services = [
  {
    category: 'AI & LLM Integration',
    target: 'AI Chatbots & RAG Applications',
    highlights: [
      'Custom RAG LLM application developer using Google Gemini and Python.',
      'AI chatbot development for business automation, tailored to internal data.',
      'AI SaaS app development freelancer for automated insight engines (e.g., Pulse AI).',
      'Statistical anomaly detection and market data integration.',
    ],
  },
  {
    category: 'Full-Stack Web Development',
    target: 'Custom Web Apps & Portals',
    highlights: [
      'End-to-end custom web application development using React.js, Node.js, and Next.js.',
      'Fintech-grade infrastructure with zero-downtime database migrations.',
      'Secure API development and third-party software integration (e.g., KRA, Payment Gateways).',
      'Enterprise-level scalable architectures using cloud-native patterns.',
    ],
  },
  {
    category: 'Business & Brand Websites',
    target: 'High-Performance Landing Pages',
    highlights: [
      'Business website developer focused on SEO-optimized, ultra-fast Next.js deployments.',
      'Personal brand website developer for high-signal creator portfolios.',
      'Mobile app developer with AI integration capabilities.',
      'Performance audits and Core Web Vitals optimization.',
    ],
  }
]

export default function ServicesPage() {
  return (
    <main className="px-10 py-16">
      <div className="mb-16 max-w-[680px]">
        <p className="font-mono text-[10px] text-muted tracking-[0.12em] uppercase mb-3">
          Offerings
        </p>
        <h1 className="font-display font-light text-[clamp(40px,6vw,80px)] leading-none tracking-[-0.025em] mb-8">
          Freelance<br />Services
        </h1>
        <div className="flex flex-col gap-4 font-sans text-[15px] leading-[1.85] text-ink">
          <p>
            I provide freelance software engineering services specialized in modern web infrastructure and artificial intelligence.I partner with businesses and creators to build systems that are fast, reliable, and intelligent.
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="mb-16">
        <div className="flex flex-col gap-0 border-t border-rule">
          {services.map((service, i) => (
            <section
              key={i}
              className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-12 py-8 border-b border-rule"
            >
              {/* Left — meta */}
              <div>
                <h2 className="font-mono text-[10px] text-muted tracking-[0.06em] leading-[2] uppercase">
                  {service.category}
                </h2>
              </div>

              {/* Right — content */}
              <div>
                <h3 className="font-display text-[22px] font-normal leading-tight mb-4">
                  {service.target}
                </h3>
                <ul className="flex flex-col gap-3">
                  {service.highlights.map((h, j) => (
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
            </section>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 pt-10 border-t border-rule flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <p className="font-sans text-[14px] text-muted">
          Need a custom LLM integration or web app?
        </p>
        <Link
          href="/contact"
          className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 border border-white text-ink text-[11.5px] tracking-[0.05em] font-sans"
        >
          Discuss a Project →
        </Link>
      </div>
    </main>
  )
}