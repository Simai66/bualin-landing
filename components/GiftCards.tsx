import { BUALIN, GIFT_CARDS } from '@/lib/data'
import { Ornament } from './primitives/Ornament'
import { LeafSpray } from './primitives/LeafSpray'

function GiftIcon({ size = 36, color = '#B8995A' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" aria-hidden>
      <path d="M5 14h26v18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V14Z" stroke={color} strokeWidth="1.4" />
      <path d="M3 9h30v5H3z" stroke={color} strokeWidth="1.4" />
      <path d="M18 9v25" stroke={color} strokeWidth="1.4" />
      <path d="M18 9c-3-5-8-5-8-2 0 2 3 2 8 2Z" stroke={color} strokeWidth="1.4" fill="none" />
      <path d="M18 9c3-5 8-5 8-2 0 2-3 2-8 2Z" stroke={color} strokeWidth="1.4" fill="none" />
    </svg>
  )
}

function Sparkle({ color = '#D9C18A', size = 8 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 10 10" fill="none" aria-hidden>
      <path d="M5 0 L 6 4 L 10 5 L 6 6 L 5 10 L 4 6 L 0 5 L 4 4 Z" fill={color} />
    </svg>
  )
}

export function GiftCards() {
  return (
    <section
      id="gift-cards"
      className="relative"
      style={{
        background: 'linear-gradient(180deg, #FBF6EC 0%, #F7F0DF 100%)',
        padding: 'clamp(80px, 8.3vw, 120px) clamp(24px, 4.4vw, 64px) clamp(70px, 7.6vw, 110px)',
      }}
    >
      {/* Leaf spray corners */}
      <div aria-hidden className="absolute top-8 -left-[60px] pointer-events-none">
        <LeafSpray size={240} opacity={0.4} />
      </div>
      <div aria-hidden className="absolute top-8 -right-[60px] pointer-events-none">
        <LeafSpray size={240} opacity={0.4} flip />
      </div>

      {/* Header */}
      <div
        className="text-center mx-auto relative"
        style={{ marginBottom: 70, maxWidth: 720 }}
      >
        <span
          className="font-body text-gold font-medium uppercase"
          style={{ fontSize: 11, letterSpacing: '0.34em' }}
        >
          The Gift of Stillness
        </span>
        <h2
          className="font-display font-normal text-ink"
          style={{ fontSize: 'clamp(40px, 4.4vw, 64px)', margin: '16px 0 20px', lineHeight: 1.05, letterSpacing: '-0.01em' }}
        >
          eGift Cards
        </h2>
        <div className="flex justify-center mb-[22px]">
          <Ornament width={90} />
        </div>
        <p
          className="font-head italic font-normal text-ink-soft"
          style={{ fontSize: 'clamp(16px, 1.4vw, 20px)', margin: 0, lineHeight: 1.6 }}
        >
          Give the gift of relaxation. Our digital gift cards are delivered instantly and can be redeemed for any of our massage services.
        </p>
      </div>

      {/* Cards grid */}
      <div
        className="grid grid-cols-2 lg:grid-cols-4 mx-auto"
        style={{ gap: 26, maxWidth: 1280 }}
      >
        {GIFT_CARDS.map((g) => (
          <article
            key={g.amount}
            className="bg-paper relative text-center flex flex-col"
            style={{
              border: '1px solid rgba(184,153,90,0.45)',
              padding: 'clamp(22px, 2.5vw, 36px) clamp(14px, 1.7vw, 24px) clamp(20px, 1.9vw, 28px)',
              boxShadow: '0 18px 40px rgba(42,34,24,0.06)',
            }}
          >
            {/* Inner double-border hairline */}
            <div
              className="absolute pointer-events-none"
              style={{ inset: 7, border: '0.5px solid rgba(184,153,90,0.45)' }}
            />

            {/* Gift icon circle */}
            <div
              className="rounded-full bg-bg-soft flex items-center justify-center mx-auto"
              style={{
                width: 78,
                height: 78,
                border: '1px solid rgba(184,153,90,0.45)',
                marginBottom: 22,
              }}
            >
              <GiftIcon size={34} color="#B8995A" />
            </div>

            {/* Amount */}
            <div
              className="font-display italic font-medium text-gold"
              style={{ fontSize: 'clamp(38px, 3.9vw, 56px)', letterSpacing: '-0.01em', lineHeight: 1, marginBottom: 14 }}
            >
              {g.amount}
            </div>

            {/* Label */}
            <h3
              className="font-display font-medium text-ink"
              style={{ fontSize: 'clamp(17px, 1.5vw, 22px)', margin: '0 0 14px', letterSpacing: '-0.005em' }}
            >
              {g.label}
            </h3>

            {/* Description */}
            <p
              className="font-body text-ink-soft flex-1"
              style={{ fontSize: 13.5, margin: 0, lineHeight: 1.6 }}
            >
              {g.note}
            </p>

            {/* Sparkle row */}
            <div className="flex justify-center items-center my-[22px]" style={{ gap: 8 }}>
              <Sparkle />
              <Sparkle size={10} color="#B8995A" />
              <Sparkle />
            </div>

            {/* Buy Now */}
            <a
              href={BUALIN.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-ink text-paper font-body font-medium uppercase no-underline hover:opacity-90 transition-opacity"
              style={{
                padding: '13px 16px',
                fontSize: 11.5,
                letterSpacing: '0.32em',
                border: '1px solid #B8995A',
              }}
            >
              Buy Now
            </a>
          </article>
        ))}
      </div>

      {/* Balance check strip */}
      <div
        className="mx-auto flex flex-col sm:flex-row items-center justify-between bg-bg-soft gap-[14px] sm:gap-6 text-center sm:text-left"
        style={{
          marginTop: 60,
          maxWidth: 720,
          border: '1px solid rgba(184,153,90,0.45)',
          padding: 'clamp(18px, 1.5vw, 22px) clamp(20px, 2.2vw, 32px)',
        }}
      >
        <div>
          <div
            className="font-display font-medium text-ink"
            style={{ fontSize: 20, letterSpacing: '-0.005em' }}
          >
            Already have a gift card?
          </div>
          <div className="font-body text-ink-soft" style={{ fontSize: 13, marginTop: 4 }}>
            Check your balance online
          </div>
        </div>
        <a
          href={BUALIN.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block whitespace-nowrap bg-transparent text-ink font-body font-medium uppercase no-underline hover:bg-bg transition-colors"
          style={{
            padding: '12px 28px',
            fontSize: 11.5,
            letterSpacing: '0.28em',
            border: '1px solid #B8995A',
          }}
        >
          Check Balance
        </a>
      </div>

      {/* Footer note */}
      <p
        className="font-head italic font-normal text-ink-faint text-center mx-auto"
        style={{ marginTop: 40, maxWidth: 640, fontSize: 15, lineHeight: 1.6 }}
      >
        eGift Cards are delivered via email and never expire.
        <br />
        Add to Apple Wallet for easy access and redemption.
      </p>
    </section>
  )
}
