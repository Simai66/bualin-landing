import Image from 'next/image'
import { BUALIN, ROOMS } from '@/lib/data'
import { Ornament } from './primitives/Ornament'

export function StudioRoom() {
  return (
    <section
      id="studio"
      className="bg-paper"
      style={{ padding: 'clamp(80px, 8.3vw, 120px) clamp(24px, 4.4vw, 64px)' }}
    >
      {/* Header */}
      <div className="text-center" style={{ marginBottom: 64 }}>
        <span
          className="font-body text-gold font-medium uppercase"
          style={{ fontSize: 11, letterSpacing: '0.34em' }}
        >
          Studio Room · Leopold · Bellarine
        </span>
        <h2
          className="font-display font-normal text-ink"
          style={{ fontSize: 'clamp(34px, 3.9vw, 56px)', margin: '14px 0 18px', lineHeight: 1.08, letterSpacing: '-0.005em' }}
        >
          Step inside the studio.
        </h2>
        <div className="flex justify-center">
          <Ornament width={90} />
        </div>
        <p
          className="font-head italic font-normal text-ink-soft mx-auto"
          style={{ fontSize: 'clamp(16px, 1.5vw, 22px)', margin: '20px auto 0', maxWidth: 640, lineHeight: 1.5 }}
        >
          One massage treatment room located within Deeluscious and Trimtrove barber.
        </p>
      </div>

      {/* Ambiance gallery — 3-column on desktop */}
      <div
        className="mx-auto mb-[70px] grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr]"
        style={{ gap: 18, maxWidth: 1240 }}
      >
        {/* Left — wide tall arch */}
        <div
          className="arch-wide relative overflow-hidden"
          style={{
            aspectRatio: '0.95',
            border: '1px solid rgba(184,153,90,0.45)',
          }}
        >
          <Image
            src={ROOMS[0].src}
            alt="Treatment room wide view"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
          <GalleryLabel label={ROOMS[0].label} />
        </div>

        {/* Middle — 2 stacked */}
        <div className="grid grid-rows-2" style={{ gap: 18 }}>
          <div
            className="relative overflow-hidden"
            style={{ border: '1px solid rgba(184,153,90,0.45)', minHeight: 160 }}
          >
            <Image
              src={ROOMS[1].src}
              alt="Massage room detail with lamp and oils"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 30vw"
            />
            <GalleryLabel label={ROOMS[1].label} small />
          </div>
          <div
            className="relative overflow-hidden"
            style={{ border: '1px solid rgba(184,153,90,0.45)', minHeight: 160 }}
          >
            <Image
              src={ROOMS[2].src}
              alt="Studio shopfront exterior"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 30vw"
            />
            <GalleryLabel label={ROOMS[2].label} small />
          </div>
        </div>

        {/* Right — 2 stacked */}
        <div className="grid grid-rows-2" style={{ gap: 18 }}>
          <div
            className="relative overflow-hidden"
            style={{ border: '1px solid rgba(184,153,90,0.45)', minHeight: 160 }}
          >
            <Image
              src={ROOMS[3].src}
              alt="Studio reception area"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 30vw"
            />
            <GalleryLabel label={ROOMS[3].label} small />
          </div>
          <div
            className="relative overflow-hidden"
            style={{ border: '1px solid rgba(184,153,90,0.45)', minHeight: 160 }}
          >
            <Image
              src={ROOMS[4].src}
              alt="Studio vanity area"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 30vw"
            />
            <GalleryLabel label={ROOMS[4].label} small />
          </div>
        </div>
      </div>

      {/* Visit info + Map */}
      <div
        className="mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] bg-bg-soft"
        style={{ maxWidth: 1240, border: '1px solid rgba(184,153,90,0.45)' }}
      >
        {/* Info panel */}
        <div style={{ padding: 'clamp(32px, 3.5vw, 50px)' }}>
          <span
            className="font-body text-gold font-medium uppercase"
            style={{ fontSize: 10, letterSpacing: '0.28em' }}
          >
            Plan Your Visit
          </span>
          <h3
            className="font-display font-normal text-ink"
            style={{ fontSize: 'clamp(26px, 2.5vw, 36px)', margin: '12px 0 24px', lineHeight: 1.15, letterSpacing: '-0.005em' }}
          >
            Tucked along the Bellarine Highway.
          </h3>
          <Ornament width={70} />

          <div
            className="mt-8 grid grid-cols-1 sm:grid-cols-2"
            style={{ gap: 26 }}
          >
            {/* Address */}
            <InfoItem label="Address" body={BUALIN.address} sub="Leopold · Bellarine, VIC" />
            {/* Hours */}
            <InfoItem label="Hours" body={BUALIN.hours} sub="Last appointment 5pm" />
            {/* Follow */}
            <div style={{ borderTop: '1px solid rgba(184,153,90,0.45)', paddingTop: 14 }}>
              <span
                className="font-body text-gold font-medium uppercase"
                style={{ fontSize: 10, letterSpacing: '0.28em' }}
              >
                Follow
              </span>
              <div
                className="font-head font-medium text-ink"
                style={{ fontSize: 17, margin: '8px 0 4px', lineHeight: 1.45 }}
              >
                <a
                  href={BUALIN.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink no-underline hover:text-gold transition-colors"
                  style={{ borderBottom: '1px solid #B8995A' }}
                >
                  @bualinthaimassage
                </a>
              </div>
              <div style={{ fontSize: 11.5, lineHeight: 1.4 }}>
                <a
                  href={BUALIN.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-faint no-underline hover:text-ink-soft transition-colors"
                  style={{ borderBottom: '1px dotted rgba(42,34,24,0.38)' }}
                >
                  Facebook · Bualin Thai Massage
                </a>
              </div>
            </div>
            {/* Telephone */}
            <InfoItem label="Telephone" body={BUALIN.phone} sub="Call to book or enquire" />
          </div>

          <div className="mt-8">
            <a
              href={BUALIN.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-ink text-paper font-body font-medium uppercase tracking-[0.28em] no-underline hover:opacity-90 transition-opacity"
              style={{ padding: '13px 32px', fontSize: 11.5 }}
            >
              Get Directions
            </a>
          </div>
        </div>

        {/* Google Maps embed */}
        <div
          className="relative lg:border-l"
          style={{ minHeight: 480, borderColor: 'rgba(184,153,90,0.45)' }}
        >
          <iframe
            src={BUALIN.mapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0, display: 'block', minHeight: 320 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Bualin Studio location map"
          />
        </div>
      </div>
    </section>
  )
}

function GalleryLabel({ label, small = false }: { label: string; small?: boolean }) {
  return (
    <div
      className="absolute font-mono text-paper uppercase"
      style={{
        bottom: small ? 10 : 16,
        left: small ? 10 : 16,
        fontSize: small ? 9 : 10,
        letterSpacing: '0.28em',
        background: 'rgba(42,34,24,0.55)',
        padding: small ? '4px 9px' : '6px 12px',
      }}
    >
      {label}
    </div>
  )
}

function InfoItem({ label, body, sub }: { label: string; body: string; sub: string }) {
  return (
    <div style={{ borderTop: '1px solid rgba(184,153,90,0.45)', paddingTop: 14 }}>
      <span
        className="font-body text-gold font-medium uppercase"
        style={{ fontSize: 10, letterSpacing: '0.28em' }}
      >
        {label}
      </span>
      <div
        className="font-head font-medium text-ink"
        style={{ fontSize: 17, margin: '8px 0 4px', lineHeight: 1.45 }}
      >
        {body}
      </div>
      <div
        className="font-body text-ink-faint"
        style={{ fontSize: 11.5, lineHeight: 1.4 }}
      >
        {sub}
      </div>
    </div>
  )
}
