'use client'

import { useState } from 'react'

// 1. Added strict typing for your contact data
interface ContactLink {
  label: string
  value: string
  href: string | null
}

const contactInfo: ContactLink[] = [
  { label: 'Email',    value: 'sagarrajgantayat9178@gmail.com',        href: 'mailto:sagarrajgantayat9178@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/sagar-raj-gantayat',    href: 'https://linkedin.com/in/sagar-raj-gantayat-a8b6ab203' },
  { label: 'GitHub',   value: 'github.com/sagarrajgantayat',           href: 'https://github.com/sagarrajgantayat' },
  { label: 'Location', value: 'Hyderabad, India — Open to remote',     href: null },
]

// 2. Simplified state: no network requests mean no 'loading' or 'error' states needed
type FormState = 'idle' | 'success'

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

  // 3. Removed async because window.location.href is synchronous
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const { name, email, subject, message } = formData
    const emailBody = `Name: ${name}\nReturn Email: ${email}\n\nMessage:\n${message}`
    
    const mailtoLink = `mailto:sagarrajgantayat9178@gmail.com?subject=${encodeURIComponent(
      subject || 'Portfolio Contact'
    )}&body=${encodeURIComponent(emailBody)}`
    
    window.location.href = mailtoLink

    // Instantly show success state and clear form
    setFormState('success')
    setFormData({ name: '', email: '', subject: '', message: '' })
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
                Message formatted
              </p>
              <h2 className="font-display text-[32px] font-light leading-tight">
                Your default mail app should be open now.
              </h2>
              <button
                onClick={() => setFormState('idle')}
                className="mt-4 font-mono text-[10px] tracking-[0.08em] uppercase text-muted hover:text-ink transition-colors duration-200"
              >
                Draft another message →
              </button>
            </div>
          ) : (
            // Form
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">

              {/* Name + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  {/* 4. Added htmlFor and id to all inputs for accessibility */}
                  <label htmlFor="name" className="font-mono text-[9px] tracking-[0.1em] uppercase text-muted cursor-pointer">
                    Name
                  </label>
                  <input
                    id="name"
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
                  <label htmlFor="email" className="font-mono text-[9px] tracking-[0.1em] uppercase text-muted cursor-pointer">
                    Email
                  </label>
                  <input
                    id="email"
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
                <label htmlFor="subject" className="font-mono text-[9px] tracking-[0.1em] uppercase text-muted cursor-pointer">
                  Subject
                </label>
                <input
                  id="subject"
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
                <label htmlFor="message" className="font-mono text-[9px] tracking-[0.1em] uppercase text-muted cursor-pointer">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="border-b border-rule pb-3 font-sans text-[14px] text-ink placeholder:text-muted/50 bg-transparent outline-none focus:border-ink transition-colors duration-200 resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="self-start inline-flex items-center gap-2 px-6 py-3 bg-ink text-paper text-[11.5px] tracking-[0.05em] font-sans hover:bg-transparent hover:text-ink border border-ink transition-all duration-200"
              >
                Launch Mail App →
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  )
}