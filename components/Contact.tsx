import { BUALIN } from '@/lib/data'
import { Ornament } from './primitives/Ornament'

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-ink text-paper"
      style={{ padding: 'clamp(80px, 8.3vw, 120px) clamp(24px, 4.4vw, 64px) clamp(50px, 4.9vw, 70px)' }}
    >
      {/* Hero CTA block */}
      <div className="text-center" style={{ marginBottom: 70 }}>
        <span
          className="font-body text-gold-soft font-medium uppercase"
          style={{ fontSize: 11, letterSpacing: '0.34em' }}
        >
          Visit · Write · Book
        </span>
        <h2
          className="font-display font-normal text-paper"
          style={{ fontSize: 'clamp(42px, 5vw, 72px)', margin: '20px 0 24px', letterSpacing: '-0.01em' }}
        >
          A breath, an appointment.
        </h2>
        <Ornament width={110} color="#D9C18A" />
        <div className="mt-9">
          <a
            href={BUALIN.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-transparent text-paper font-body font-medium uppercase no-underline hover:bg-white/10 transition-colors"
            style={{
              padding: 'clamp(12px, 1vw, 15px) clamp(28px, 2.6vw, 38px)',
              fontSize: 'clamp(10.5px, 0.83vw, 12px)',
              letterSpacing: '0.32em',
              border: '1px solid #D9C18A',
            }}
          >
            Schedule Online
          </a>
        </div>
      </div>

      {/* Info row */}
      <div
        className="mx-auto grid grid-cols-1 md:grid-cols-3 text-center md:text-left"
        style={{
          maxWidth: 1100,
          borderTop: '1px solid rgba(184,153,90,0.45)',
          paddingTop: 50,
          gap: 30,
        }}
      >
        {[
          { label: 'Studio', body: BUALIN.address },
          { label: 'Hours', body: BUALIN.hours },
          { label: 'Telephone', body: BUALIN.phone },
        ].map((item) => (
          <div key={item.label}>
            <span
              className="font-body text-gold-soft font-medium uppercase"
              style={{ fontSize: 11, letterSpacing: '0.34em' }}
            >
              {item.label}
            </span>
            <div
              className="font-head italic font-normal text-paper"
              style={{ fontSize: 'clamp(19px, 1.5vw, 22px)', marginTop: 12, lineHeight: 1.5 }}
            >
              {item.body}
            </div>
          </div>
        ))}
      </div>

      {/* Footer strip */}
      <div
        className="flex flex-col md:flex-row items-center justify-between font-mono text-gold-soft uppercase"
        style={{
          marginTop: 70,
          paddingTop: 24,
          borderTop: '1px solid rgba(184,153,90,0.45)',
          fontSize: 10,
          letterSpacing: '0.22em',
          gap: 16,
        }}
      >
        <div>BUALIN STUDIO · MMXXV</div>
        <div className="flex gap-6">
          <a
            href={BUALIN.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-soft no-underline hover:text-paper transition-colors"
          >
            INSTAGRAM
          </a>
          <span>·</span>
          <a
            href={BUALIN.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-soft no-underline hover:text-paper transition-colors"
          >
            FACEBOOK
          </a>
        </div>
      </div>
    </section>
  )
}
