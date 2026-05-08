export const SITE = {
  name: 'New Shayleh Outlet',
  domain: 'newshaylehoutlet.store',
  whatsapp: '9613766921',
  phoneDisplay: '+961 3 766 921',
  instagram: '',
  facebook: '',
  googleMapsUrl: 'https://maps.google.com/?q=New+Shayleh+Lebanon',
};

export const CATEGORIES = ['suits', 'shirts', 'pants', 'sweaters'] as const;
export type Category = (typeof CATEGORIES)[number];
