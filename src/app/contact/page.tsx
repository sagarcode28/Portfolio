'use client'

import { useState } from 'react'

const contactInfo = [
  { label: 'Email',    value: 'sagarrajgantayat9178@gmail.com',              href: 'mailto:sagarrajgantayat9178@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/sagar-raj-gantayat',          href: 'https://linkedin.com/in/sagar-raj-gantayat-a8b6ab203' },
  { label: 'GitHub',   value: 'github.com/sagarrajgantayat',                 href: 'https://github.com' },
  { label: 'Location', value: 'Hyderabad, India — Open to remote',           href: null },
]

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setFormState('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setFormState('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setFormState('error')
      }
    } catch {
      setFormState('error')
    }
  }

  return (
    <div className="px-10 py-16">

      {/* Page header */}
      <div className="mb-16">
        <p className="font-mono text-[10px] text-muted tracking-[0.12em] uppercase mb-3">
          Contact
        </p>
        <h1 className="font-display font-light text-[clamp(40px,6vw,80px)] leading-none tracking-[-0.025em]">
          Get in Touch
        </h1>
      </div>

      {/* Two column layout */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-16 md:gap-24">

        {/* Left — info */}
        <div>
          {/* Availability */}
          <div className="mb-10 p-6 border border-rule">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block w-[6px] h-[6px] rounded-full bg-ink animate-pulse" />
              <p className="font-mono text-[10px] tracking-[0.1em] uppercase font-medium">
                Available for freelance
              </p>
            </div>
            <p className="font-sans text-[12.5px] text-muted leading-[1.7]">
              Open to interesting projects — especially fintech systems,
              AI integrations, and full-stack web applications.
            </p>
            <p className="font-mono text-[10px] text-muted tracking-[0.06em] mt-3">
              Typical response within 24 hours
            </p>
          </div>

          {/* Contact links */}
          <div className="flex flex-col gap-0">
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-1 py-4 border-b border-rule"
              >
                <p className="font-mono text-[9px] text-muted tracking-[0.1em] uppercase">
                  {item.label}
                </p>
                {item.href ? (
                <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="font-sans text-[13px] text-ink hover:text-muted transition-colors duration-200"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="font-sans text-[13px] text-ink">
                    {item.value}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div>
          {formState === 'success' ? (
            // Success state
            <div className="border border-rule p-10 flex flex-col items-start gap-4">
              <p className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted">
                Message sent
              </p>
              <h2 className="font-display text-[32px] font-light leading-tight">
                Thanks, I&apos;ll be in touch soon.
              </h2>
              <button
                onClick={() => setFormState('idle')}
                className="mt-4 font-mono text-[10px] tracking-[0.08em] uppercase text-muted hover:text-ink transition-colors duration-200"
              >
                Send another →
              </button>
            </div>
          ) : (
            // Form
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">

              {/* Name + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[9px] tracking-[0.1em] uppercase text-muted">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="border-b border-rule pb-3 font-sans text-[14px] text-ink placeholder:text-muted/50 bg-transparent outline-none focus:border-ink transition-colors duration-200"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[9px] tracking-[0.1em] uppercase text-muted">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="border-b border-rule pb-3 font-sans text-[14px] text-ink placeholder:text-muted/50 bg-transparent outline-none focus:border-ink transition-colors duration-200"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[9px] tracking-[0.1em] uppercase text-muted">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="border-b border-rule pb-3 font-sans text-[14px] text-ink placeholder:text-muted/50 bg-transparent outline-none focus:border-ink transition-colors duration-200"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[9px] tracking-[0.1em] uppercase text-muted">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="border-b border-rule pb-3 font-sans text-[14px] text-ink placeholder:text-muted/50 bg-transparent outline-none focus:border-ink transition-colors duration-200 resize-none"
                />
              </div>

              {/* Error message */}
              {formState === 'error' && (
                <p className="font-mono text-[10px] text-red-500 tracking-[0.06em]">
                  Something went wrong. Try emailing directly instead.
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={formState === 'loading'}
                className="self-start inline-flex items-center gap-2 px-6 py-3 bg-ink text-paper text-[11.5px] tracking-[0.05em] font-sans hover:bg-transparent hover:text-ink border border-ink transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formState === 'loading' ? 'Sending...' : 'Send Message →'}
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  )
}