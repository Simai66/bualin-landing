import { BUALIN } from '@/lib/data'
import { Ornament } from './primitives/Ornament'
import { LeafSpray } from './primitives/LeafSpray'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden text-center text-ink"
      style={{
        background: 'linear-gradient(180deg, #F0E6D2 0%, #F7F0DF 60%, #FBF6EC 100%)',
        padding: 'clamp(80px, 12vw, 170px) clamp(24px, 5vw, 64px) clamp(80px, 8vw, 120px)',
      }}
    >
      {/* Silk striations overlay */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(180deg, rgba(255,255,255,0.18) 0px, rgba(255,255,255,0.18) 1px, transparent 1px, transparent 14px)',
          opacity: 0.6,
        }}
      />

      {/* Leaf spray — left */}
      <div aria-hidden className="absolute pointer-events-none" style={{ top: 60, left: -40 }}>
        <div className="hidden lg:block">
          <LeafSpray size={380} opacity={0.4} />
        </div>
        <div className="lg:hidden" style={{ position: 'absolute', top: -30, left: -20 }}>
          <LeafSpray size={220} opacity={0.4} />
        </div>
      </div>

      {/* Leaf spray — right */}
      <div aria-hidden className="absolute pointer-events-none" style={{ top: 90, right: -60 }}>
        <div className="hidden lg:block">
          <LeafSpray size={380} opacity={0.4} flip />
        </div>
        <div className="lg:hidden" style={{ position: 'absolute', top: -20, right: -20 }}>
          <LeafSpray size={220} opacity={0.4} flip />
        </div>
      </div>

      <div className="relative mx-auto" style={{ maxWidth: 1100 }}>
        {/* Ornament + eyebrow */}
        <div className="inline-flex flex-col items-center gap-4 mb-[18px]">
          <Ornament width={90} />
          <span
            className="font-body text-gold font-medium uppercase"
            style={{ fontSize: 11, letterSpacing: '0.34em' }}
          >
            EST · LEOPOLD · BELLARINE
          </span>
        </div>

        {/* Logotype */}
        <h1
          className="font-display font-normal text-gold mt-5"
          style={{ fontSize: 'clamp(60px, 10.8vw, 156px)', lineHeight: 0.96, letterSpacing: '0.01em' }}
        >
          BUALIN{' '}
          <span className="italic text-ink">Studio</span>
        </h1>

        <p
          className="font-head font-medium text-ink"
          style={{ fontSize: 'clamp(18px, 1.8vw, 26px)', marginTop: 'clamp(18px, 1.8vw, 26px)', letterSpacing: '0.06em' }}
        >
          Thai Massage Therapy
        </p>

        <p
          className="font-head italic font-normal text-ink-soft"
          style={{ fontSize: 'clamp(16px, 1.5vw, 22px)', marginTop: 14 }}
        >
          Relax. Heal. Rebalance.
        </p>

        {/* CTA */}
        <div className="inline-flex flex-col items-center gap-[22px] mt-[50px] sm:mt-[34px]">
          <a
            href={BUALIN.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-paper text-ink border border-gold font-body font-medium tracking-[0.32em] uppercase no-underline hover:bg-bg transition-colors duration-200"
            style={{ padding: 'clamp(12px, 1vw, 15px) clamp(28px, 2.6vw, 38px)', fontSize: 'clamp(10.5px, 0.83vw, 12px)' }}
          >
            Book a Session
          </a>
          <Ornament width={110} />
        </div>
      </div>
    </section>
  )
}
