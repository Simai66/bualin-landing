import Image from 'next/image'
import { SERVICES } from '@/lib/data'

export function Services() {
  return (
    <section id="treatments" className="bg-paper" style={{ padding: 'clamp(70px, 7.6vw, 110px) clamp(24px, 4.4vw, 64px) clamp(80px, 9vw, 130px)' }}>
      {/* Header */}
      <div className="text-center mb-[70px] sm:mb-11">
        <span
          className="font-body text-gold font-medium uppercase"
          style={{ fontSize: 11, letterSpacing: '0.34em' }}
        >
          Three Signature Rituals
        </span>
        <h2
          className="font-display font-normal text-ink mt-[14px]"
          style={{ fontSize: 'clamp(30px, 3vw, 44px)', letterSpacing: '-0.005em' }}
        >
          The art of healing, slowly practiced.
        </h2>
      </div>

      {/* Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto"
        style={{ gap: 26, maxWidth: 1320 }}
      >
        {SERVICES.map((s) => {
          const durations = s.duration.split(' / ')
          return (
            <article key={s.id} className="text-center flex flex-col">
              {/* Arched aperture */}
              <div
                className="arch relative w-full overflow-hidden"
                style={{
                  aspectRatio: '0.78',
                  border: '1px solid rgba(184,153,90,0.45)',
                  background: '#F7F0DF',
                  boxShadow: '0 18px 48px rgba(42,34,24,0.08)',
                }}
              >
                <Image
                  src={s.photo}
                  alt={s.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Inner cream hairline */}
                <div
                  className="arch absolute pointer-events-none"
                  style={{
                    inset: 8,
                    border: '1px solid rgba(251,246,236,0.55)',
                  }}
                />
                {/* № plate */}
                <div
                  className="absolute font-mono text-paper backdrop-blur-sm"
                  style={{
                    top: 16,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    fontSize: 10,
                    letterSpacing: '0.32em',
                    background: 'rgba(42,34,24,0.4)',
                    padding: '5px 10px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  № {s.number}
                </div>
              </div>

              {/* Content */}
              <div className="mt-[26px] sm:mt-5 flex flex-col flex-1">
                <h3
                  className="font-display font-normal text-ink"
                  style={{
                    fontSize: 22,
                    margin: '6px 0 8px',
                    letterSpacing: '-0.005em',
                    minHeight: 60,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {s.title}
                </h3>
                <p
                  className="font-body text-ink-soft mx-auto"
                  style={{
                    fontSize: 14,
                    margin: 0,
                    lineHeight: 1.6,
                    maxWidth: 320,
                    minHeight: 44,
                  }}
                >
                  {s.short}.
                </p>

                {/* Price ladder */}
                <div
                  className="mt-auto pt-4 flex justify-center font-mono uppercase text-ink"
                  style={{
                    gap: 20,
                    paddingTop: 16,
                    borderTop: '1px solid rgba(184,153,90,0.45)',
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
                        style={{ fontSize: 34, letterSpacing: '0.005em', lineHeight: 1, marginTop: 8 }}
                      >
                        {s.prices[i]}
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
