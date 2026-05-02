'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const navLinks = [
  { href: '/work',    label: 'Work'    },
  { href: '/services', label: 'Services' },
  { href: '/about',   label: 'About'   },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Add border when user scrolls down
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`sticky top-0 z-50 bg-paper transition-all duration-300 ${
        scrolled ? 'border-b border-rule' : 'border-b border-transparent'
      }`}
    >
      {/* Main nav row */}
      <nav className="flex items-center justify-between px-10 h-[60px]">

        {/* Logo */}
        <Link
          href="/"
          className="font-mono text-[13px] font-medium tracking-[0.06em] hover:opacity-50 transition-opacity duration-200"
        >
          SRG
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 list-none items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-[12px] font-sans tracking-[0.04em] transition-colors duration-200 ${
                  pathname === link.href
                    ? 'text-ink border-b border-ink pb-[2px]'
                    : 'text-muted hover:text-ink'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden font-mono text-[11px] tracking-[0.08em] uppercase text-ink"
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>

      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-rule">
          <ul className="flex flex-col px-10 py-6 gap-5 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-[14px] font-sans ${
                    pathname === link.href ? 'text-ink' : 'text-muted'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}