import { BUALIN } from '@/lib/data'

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Treatments', href: '#treatments' },
  { label: 'Studio', href: '#studio' },
  { label: 'Gift Cards', href: '#gift-cards' },
  { label: 'Contact', href: '#contact' },
]

export function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-16 py-7 sm:px-[22px] sm:py-5">
      <div
        className="font-display text-ink font-medium"
        style={{ fontSize: 17, letterSpacing: '0.28em' }}
      >
        BUALIN STUDIO
      </div>

      <nav className="hidden lg:flex gap-[38px] font-body text-[12px] tracking-[0.16em] uppercase text-ink-soft font-medium">
        {NAV_LINKS.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            className={
              'no-underline transition-colors duration-200 hover:text-ink ' +
              (i === 0 ? 'text-ink border-b border-gold pb-1' : '')
            }
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a
        href={BUALIN.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="font-body text-[11px] sm:text-[10px] tracking-[0.22em] uppercase text-ink font-medium no-underline hover:text-gold transition-colors duration-200"
      >
        Book Now
      </a>
    </header>
  )
}
