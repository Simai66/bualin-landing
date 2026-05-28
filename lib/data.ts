export const BUALIN = {
  brand: 'Bualin Thai Massage Therapy',
  tagline: 'Relax. Heal. Rebalance.',
  address: 'Suite 1, Shop 10/670 Bellarine Highway, Leopold 3224',
  phone: '04 4953 2590',
  hours: 'Open daily · 10am – 6pm',
  bookingUrl:
    'https://app.squareup.com/appointments/book/5btap1cnsywghf/L78WC3SYY14NQ/start',
  instagramUrl: 'https://www.instagram.com/bualinthaimassage/',
  facebookUrl: 'https://web.facebook.com/profile.php?id=61582898821738',
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=-38.187330462882805,144.45593375710231',
  mapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m24!1m8!1m3!1d427.21472146191934!2d144.456378!3d-38.187361!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x6ad43f7095f42963%3A0x25b5573688e02f89!2zQnVhbGluIFRoYWkgTWFzc2FnZSBUaGVyYXB5IFN1aXRlIDEgc2hvcCAxMC82NzAgQmVsbGFyaW5lIEh3eSwgTGVvcG9sZCBWSUMgMzIyNCDguK3guK3guKrguYDguJXguKPguYDguKXguLXguKI!3m2!1d-38.1874496!2d144.4563705!4m5!1s0x6ad43f7095f42963%3A0x25b5573688e02f89!2zQnVhbGluIFRoYWkgTWFzc2FnZSBUaGVyYXB5IFN1aXRlIDEgc2hvcCAxMC82NzAgQmVsbGFyaW5lIEh3eSwgTGVvcG9sZCBWSUMgMzIyNCDguK3guK3guKrguYDguJXguKPguYDguKXguLXguKI!3m2!1d-38.1874496!2d144.4563705!5e1!3m2!1sth!2sth!4v1779952826225!5m2!1sth!2sth',
} as const

export const SERVICES = [
  {
    id: 'thai',
    number: '01',
    title: 'Traditional Thai',
    short: 'Deep compression + assisted stretching',
    duration: '60 / 90 / 120',
    prices: ['$95', '$135', '$180'],
    photo: '/assets/photo_1.png',
    alt: 'Traditional Thai massage treatment',
  },
  {
    id: 'relaxation',
    number: '02',
    title: 'Relaxation Massage',
    short: 'Warm oil, soft to medium pressure',
    duration: '60 / 90 / 120',
    prices: ['$95', '$135', '$180'],
    photo: '/assets/photo_rex.png',
    alt: 'Relaxation massage with warm oil',
  },
  {
    id: 'combination',
    number: '03',
    title: 'Thai Combination',
    short: 'Thai technique meets warm coconut oil',
    duration: '60 / 90 / 120',
    prices: ['$95', '$135', '$180'],
    photo: '/assets/photo4.png',
    alt: 'Thai combination massage treatment',
  },
  {
    id: 'signature',
    number: '04',
    title: 'Signature Back, Shoulder & Head Ritual',
    short: 'Upper-body ritual with herbal compress or hot stone',
    duration: '60 / 75 / 90',
    prices: ['$105', '$135', '$160'],
    photo: '/assets/photo2.png',
    alt: 'Signature back, shoulder and head ritual massage',
  },
] as const

export const ADDONS = [
  {
    title: 'Hot Stone Massage',
    duration: '60 / 90 / 120',
    prices: ['$110', '$150', '$195'],
    note: 'A hot stone massage is a therapeutic spa treatment that uses smooth, heated stones to relax muscles and promote circulation. The warmth from the stones helps ease tension, making it both a restorative and deeply relaxing experience.',
    photo: '/assets/Hot_stone.png',
    alt: 'Hot stone massage treatment',
  },
  {
    title: 'Thai Herbal Compress Massage',
    duration: '60 / 90 / 120',
    prices: ['$110', '$150', '$195'],
    note: 'Thai Herbal Compress Massage is a traditional body treatment from Thailand that combines heat therapy with herbal medicine. It involves applying steamed herbal poultices, called luk pra kob, to the body in rhythmic pressing motions. The treatment is valued for relieving muscle tension, improving circulation, and promoting deep relaxation.',
    photo: '/assets/Herbal_comp.png',
    alt: 'Thai herbal compress massage treatment',
  },
] as const

export const ROOMS = [
  { src: '/assets/Room1.jpeg', label: 'The Room · Wide View' },
  { src: '/assets/Room2.jpeg', label: 'Detail · Lamp & Oils' },
  { src: '/assets/shop.jpeg', label: 'Shopfront' },
  { src: '/assets/shop1.jpeg', label: 'Reception' },
  { src: '/assets/Room3.jpeg', label: 'Vanity' },
] as const

export const GIFT_CARDS = [
  {
    amount: '$95',
    label: '1-Hour Massage',
    note: 'Valid for any 60-minute massage service — Combination, Relaxation, or Thai Massage',
  },
  {
    amount: '$180',
    label: 'Flexible Session',
    note: 'Use as two separate 1-hour sessions or enjoy a continuous 2-hour treatment',
  },
  {
    amount: '$285',
    label: 'Premium Package',
    note: 'Three 1-hour massage sessions with complimentary Hot Stone Therapy & Herbal Compress',
  },
  {
    amount: '$380',
    label: 'Ultimate Gift',
    note: 'Four 1-hour massage sessions with complimentary Hot Stone Therapy & Herbal Compress',
  },
] as const
