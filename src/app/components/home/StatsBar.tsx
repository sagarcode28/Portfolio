'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

// Define each stat's data
const stats = [
  { value: 1.8,  suffix: ' yrs',      label: 'Experience',          isDecimal: true  },
  { value: 400,  suffix: 'M+ Records', label: 'Migrated · YugabyteDB', isDecimal: false },
  { value: 5,    suffix: '+ AMCs',    label: 'API Adoption',         isDecimal: false },
  { value: 35,   suffix: '%',         label: 'Efficiency Gained',    isDecimal: false },
]

function CountUp({
  value,
  suffix,
  isDecimal,
}: {
  value: number
  suffix: string
  isDecimal: boolean
}) {
  const [display, setDisplay] = useState('0')
  const ref = useRef<HTMLSpanElement>(null)

  // useInView fires once when the element enters the screen
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!isInView) return

    const duration = 1400 
    const startTime = performance.now()
    function easeOut(t: number) {
      return 1 - Math.pow(1 - t, 3)
    }

    function tick(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const current = value * easeOut(progress)

      setDisplay(isDecimal ? current.toFixed(1) : Math.floor(current).toString())

      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [isInView, value, isDecimal])

  return (
    <span
      ref={ref}
      className="font-mono font-medium leading-none text-[clamp(20px,2.5vw,30px)]"
    >
      {display}{suffix}
    </span>
  )
}

export default function StatsBar() {
  return (
    <div className="border-b border-rule px-10 py-7 flex">
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className={`
            flex-1 flex flex-col gap-[6px]
            ${i > 0 ? 'border-l border-rule pl-7' : ''}
            ${i < stats.length - 1 ? 'pr-7' : ''}
          `}
        >
          <CountUp
            value={stat.value}
            suffix={stat.suffix}
            isDecimal={stat.isDecimal}
          />
          <p className="font-mono text-[10px] text-muted tracking-[0.08em] uppercase">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  )
}