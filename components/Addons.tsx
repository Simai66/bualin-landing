import Image from 'next/image'
import { ADDONS } from '@/lib/data'
import { Ornament } from './primitives/Ornament'

export function Addons() {
  return (
    <section
      className="bg-paper"
      style={{ padding: 'clamp(60px, 6.25vw, 90px) clamp(24px, 4.4vw, 64px) clamp(70px, 6.9vw, 100px)' }}
    >
      {/* Header */}
      <div
        className="text-center mx-auto"
        style={{ marginBottom: 56, maxWidth: 760 }}
      >
        <span
          className="font-body text-gold font-medium uppercase"
          style={{ fontSize: 11, letterSpacing: '0.34em' }}
        >
          Treatment Enhancements
        </span>
        <h2
          className="font-display font-normal text-ink"
          style={{ fontSize: 'clamp(28px, 2.9vw, 42px)', margin: '14px 0 18px', lineHeight: 1.12, letterSpacing: '-0.005em' }}
        >
          A relaxing massage treatment combining…
        </h2>
        <div className="flex justify-center">
          <Ornament width={80} />
        </div>
      </div>

      {/* Cards */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 mx-auto"
        style={{ gap: 28, maxWidth: 1180 }}
      >
        {ADDONS.map((a) => {
          const durations = a.duration.split(' / ')
          return (
            <article
              key={a.title}
              className="flex flex-col overflow-hidden bg-bg-soft"
              style={{ border: '1px solid rgba(184,153,90,0.45)' }}
            >
              {/* Top image */}
              <div
                className="relative w-full overflow-hidden"
                style={{
                  aspectRatio: '16/9',
                  borderBottom: '1px solid rgba(184,153,90,0.45)',
                }}
              >
                <Image
                  src={a.photo}
                  alt={a.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  className="absolute font-mono text-paper backdrop-blur-sm uppercase"
                  style={{
                    top: 14,
                    left: 14,
                    fontSize: 10,
                    letterSpacing: '0.28em',
                    background: 'rgba(42,34,24,0.55)',
                    padding: '5px 11px',
                  }}
                >
                  Combine with any massage
                </div>
              </div>

              {/* Copy */}
              <div className="flex flex-col flex-1" style={{ padding: '28px 30px 30px' }}>
                <h3
                  className="font-display font-normal text-ink"
                  style={{ fontSize: 'clamp(22px, 1.9vw, 28px)', margin: '0 0 14px', letterSpacing: '-0.005em', lineHeight: 1.15 }}
                >
                  {a.title}
                </h3>
                <Ornament width={50} />
                <p
                  className="font-body text-ink-soft"
                  style={{ fontSize: 14, margin: '16px 0 0', lineHeight: 1.7 }}
                >
                  {a.note}
                </p>

                {/* Price ladder */}
                <div
                  className="mt-auto flex justify-center font-mono uppercase text-ink"
                  style={{
                    paddingTop: 22,
                    borderTop: '1px solid rgba(184,153,90,0.45)',
                    gap: 28,
                    letterSpacing: '0.12em',
                  }}
                >
                  {durations.map((mins, i) => (
                    <div key={i} className="text-center" style={{ lineHeight: 1.3 }}>
                      <div
                        className="font-mono font-medium text-ink-faint"
                        style={{ fontSize: 13, letterSpacing: '0.18em' }}
                      >
                        {mins.trim()} MIN
                      </div>
                      <div
                        className="font-display font-medium text-gold"
                        style={{ fontSize: 38, letterSpacing: '0.005em', lineHeight: 1, marginTop: 8 }}
                      >
                        {a.prices[i]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
