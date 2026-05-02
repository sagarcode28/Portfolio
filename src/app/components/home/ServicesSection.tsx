import Link from 'next/link'

export default function ServicesSection() {
  return (
    <section className="px-10 py-20 border-b border-rule">
      <div className="max-w-[680px] mb-12">
        <p className="font-mono text-[10px] text-muted tracking-[0.12em] uppercase mb-3">
          Capabilities
        </p>
        <h2 className="font-display text-[32px] md:text-[48px] leading-tight font-light mb-6">
          Specialized AI Model Integration and Complete Web & Mobile Application Development.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="p-8 border border-rule hover:border-muted transition-colors flex flex-col justify-between">
          <div>
            <h3 className="font-display text-[22px] mb-4">AI & LLM Systems</h3>
            <p className="font-sans text-[14.5px] text-muted leading-[1.6] mb-8">
              Custom RAG applications, Google Gemini integrations, and automated chatbots for business operations.
            </p>
          </div>
          <Link href="/services" className="font-mono text-[11px] tracking-[0.05em] flex items-center gap-2 w-fit">
            Explore AI Services <span className="text-muted transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="p-8 border border-rule hover:border-muted transition-colors flex flex-col justify-between">
          <div>
            <h3 className="font-display text-[22px] mb-4">Full-Stack Web Dev</h3>
            <p className="font-sans text-[14.5px] text-muted leading-[1.6] mb-8">
              Fintech-grade web apps, zero-downtime database migrations, and high-performance Next.js business websites.
            </p>
          </div>
          <Link href="/services" className="font-mono text-[11px] tracking-[0.05em] flex items-center gap-2 w-fit">
            Explore Web Services <span className="text-muted transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>

      <Link
        href="/services"
        className="inline-flex items-center gap-2 px-6 py-3 border border-white text-ink text-[11.5px] tracking-[0.05em] font-sans"
      >
        View All Services →
      </Link>
    </section>
  )
}