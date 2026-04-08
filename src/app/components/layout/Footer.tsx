import Link from 'next/link'

const links = [
  { href: 'mailto:sagarrajgantayat9178@gmail.com', label: 'Email',    external: false },
  { href: 'https://linkedin.com/in/sagar-raj-gantayat-a8b6ab203',    label: 'LinkedIn', external: true  },
  { href: 'https://github.com/',                   label: 'GitHub',   external: true  },
]

export default function Footer() {

  return (
    <footer className="border-t border-rule px-10 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">

      <span className="font-mono text-[11px] text-ink tracking-[0.04em]">
        Sagar Raj Gantayat
      </span>

      <div className="flex gap-6">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
            className="font-mono text-[10.5px] text-muted hover:text-ink transition-colors duration-200 tracking-[0.04em]"
          >
            {link.label}
          </Link>
        ))}
      </div>

    </footer>
  )
}