'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

export default function CTABanner() {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-60px' })

    return (
        <section className="bg-ink text-paper px-10 py-20">
            <div
                ref={ref}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-10"
                style={{
                    opacity: isInView ? 1 : 0,
                    transform: isInView ? 'translateY(0)' : 'translateY(24px)',
                    transition: 'opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1)',
                }}
            >
                <div>
                    <h2 className="font-display font-light text-[clamp(32px,5vw,64px)] leading-[1.05] tracking-[-0.02em] mb-3">
                        Have a project<br />in mind?
                    </h2>
                    <p className="font-sans text-[13px] text-white/40 font-light">
                        Let&apos;s build something great together.
                    </p>
                </div>

                <Link
                    href="/contact"
                    className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 border border-white text-ink text-[11.5px] tracking-[0.05em] font-sans"
                >
                    Start a Conversation →
                </Link>
            </div>
        </section>
    )
}