'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'

// Combined and updated to include all your actual skills while fitting the 4-col design
const skillGroups = [
  {
    title: 'Languages',
    skills: ['JavaScript / TypeScript', 'Python', 'C / C++', 'SQL'],
  },
  {
    title: 'Frontend',
    skills: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'HTML5 / CSS3'],
  },
  {
    title: 'Backend',
    skills: ['Node.js & Express', 'FastAPI', '.NET MVC', 'REST & WebSockets', 'JWT Auth'],
  },
  {
    title: 'Data & AI',
    skills: ['Machine Learning', 'MongoDB & Mongoose', 'MySQL & YugabyteDB', 'Gemini API', 'HuggingFace'],
  },
]

export default function SkillsGrid() {
  // Attached the ref to the section itself so the header animation triggers at the right time
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="px-10 py-16 border-b border-rule" id="skills">

      {/* Header */}
      <div
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        <p className="font-mono text-[10px] text-muted tracking-[0.12em] uppercase mb-2">
          Capabilities
        </p>
        <h2 className="font-display font-light text-[clamp(26px,4vw,44px)] leading-[1.1] tracking-[-0.01em] mb-10">
          Technical Stack
        </h2>
      </div>

      {/* Grid */}
      <div
        className="grid grid-cols-2 md:grid-cols-4"
        style={{
          border: '1px solid #e5e5e5',
          opacity: isInView ? 1 : 0,
          transform: isInView ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.65s cubic-bezier(0.16,1,0.3,1) 0.1s, transform 0.65s cubic-bezier(0.16,1,0.3,1) 0.1s',
        }}
      >
        {skillGroups.map((group, i) => (
          <div
            key={group.title}
            // Fix: Conditional borders that handle BOTH 2-column mobile and 4-column desktop
            className={`p-6 border-rule 
              ${i % 2 === 0 ? 'border-r' : ''} 
              ${i < 2 ? 'border-b md:border-b-0' : ''} 
              md:border-r ${i === 3 ? 'md:border-r-0' : ''}`
            }
          >
            {/* Column title */}
            <h3 className="font-mono text-[10px] tracking-[0.1em] uppercase font-medium pb-3 mb-4 border-b border-rule">
              {group.title}
            </h3>

            {/* Skills list */}
            <ul className="flex flex-col gap-[10px] list-none">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="font-mono text-[11.5px] font-light tracking-[0.02em] text-ink"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </section>
  )
}