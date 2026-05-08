export const SITE = {
  name: 'New Shayleh Outlet',
  domain: 'newshaylehoutlet.store',
  whatsapp: '9613766921',
  phoneDisplay: '+961 3 766 921',
  email: 'hello@newshaylehoutlet.store',
  instagram: '',
  facebook: '',
  geo: { lat: 33.958800960936365, lng: 35.6531847433295 },
  googleMapsUrl: 'https://www.google.com/maps/place/33.958800960936365,35.6531847433295',
  googleMapsEmbedUrl: 'https://www.google.com/maps?q=33.958800960936365,35.6531847433295&z=18&output=embed',
};

export const CATEGORIES = ['suits', 'shirts', 'pants', 'sweaters'] as const;
export type Category = (typeof CATEGORIES)[number];
