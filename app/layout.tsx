import type { Metadata } from 'next'
import {
  Playfair_Display,
  Cormorant_Garamond,
  Inter,
  JetBrains_Mono,
} from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-head',
  display: 'swap',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'Bualin Studio · Thai Massage Therapy · Leopold',
  description:
    'Bualin Studio offers authentic Thai massage therapy in Leopold, Bellarine Peninsula, Victoria. Traditional Thai, Relaxation, Combination, Hot Stone, and Herbal Compress treatments. Open daily 10am–6pm.',
  keywords: [
    'Thai massage',
    'Leopold massage',
    'Bellarine massage',
    'hot stone massage',
    'herbal compress massage',
    'relaxation massage',
    'Bualin',
    'Victoria massage',
  ],
  openGraph: {
    title: 'Bualin Studio · Thai Massage Therapy · Leopold',
    description:
      'Authentic Thai massage therapy in Leopold, Bellarine. Relax. Heal. Rebalance.',
    type: 'website',
    locale: 'en_AU',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MassageTherapist',
  name: 'Bualin Thai Massage Therapy',
  description:
    'Authentic Thai massage therapy studio in Leopold, Bellarine Peninsula, Victoria, Australia.',
  url: 'https://bualinstudio.com.au',
  telephone: '+61449532590',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Suite 1, Shop 10/670 Bellarine Highway',
    addressLocality: 'Leopold',
    addressRegion: 'VIC',
    postalCode: '3224',
    addressCountry: 'AU',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '10:00',
    closes: '18:00',
  },
  priceRange: '$95–$195',
  sameAs: [
    'https://www.instagram.com/bualinthaimassage/',
    'https://web.facebook.com/profile.php?id=61582898821738',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={[
        playfair.variable,
        cormorant.variable,
        inter.variable,
        jetbrainsMono.variable,
      ].join(' ')}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-paper text-ink antialiased">{children}</body>
    </html>
  )
}
