'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

// Reusable easing curve — used across the whole site
const EASE_EXPO = [0.16, 1, 0.3, 1] as const

// Parent container — controls stagger timing for children
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1, // each child animates 0.1s after the previous
        },
    },
}

// Each headline line rises up and fades in
const lineVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE_EXPO } },
}

// Subtitle and buttons fade up slightly later
const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    visible: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.75, delay, ease: EASE_EXPO },
    }),
}

export default function Hero() {
    return (
        <section className="px-10 pt-20 pb-16 border-b border-rule min-h-[calc(100vh-60px)] flex flex-col justify-between">

            {/* Giant display title */}
            <motion.h1
                className="font-display font-light leading-none tracking-[-0.025em] text-[clamp(52px,9vw,100px)]"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.span variants={lineVariants} className="block">
                    Full-Stack
                </motion.span>
                <motion.span variants={lineVariants} className="block">
                    Software
                </motion.span>
                <motion.span variants={lineVariants} className="block">
                    Engineer.
                </motion.span>
            </motion.h1>

            {/* Bottom row */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-10 mt-14">

                {/* Left — description + buttons */}
                <div className="max-w-[440px]">
                    <motion.p
                        className="text-muted text-[14px] leading-[1.8] mb-6 font-sans"
                        custom={0.55}
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                    >
                        Sagar Raj Gantayat — Building high-scale fintech systems
                        at KFin Technologies.
                    </motion.p>

                    <motion.div
                        className="flex gap-3 flex-wrap"
                        custom={0.7}
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                    >
                        <Link
                            href="/work"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-ink border border-ink/20 text-[11px] tracking-[0.1em] font-sans transition-all duration-200 hover:border-ink"
                        >
                            View My Work →
                        </Link>


                    </motion.div>
                </div>

                {/* Right — availability status */}
                <motion.div
                    className="text-right"
                    custom={0.85}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                >
                    <p className="font-mono text-[10px] text-muted tracking-[0.1em] uppercase leading-[2.8] flex items-center justify-end gap-2">
                        <span className="inline-block w-[5px] h-[5px] rounded-full bg-ink animate-pulse" />
                        Available for freelance
                    </p>
                    <p className="font-mono text-[10px] text-muted tracking-[0.1em] uppercase leading-[2.8]">
                        Odisha, India
                    </p>
                    <p className="font-mono text-[10px] text-muted tracking-[0.1em] uppercase leading-[2.8]">
                        Open to remote
                    </p>
                </motion.div>

            </div>
        </section>
    )
}