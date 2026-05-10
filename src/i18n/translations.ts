export const languages = {
  en: 'English',
  ar: 'العربية',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    'site.name': 'New Shayleh Outlet',
    'site.tagline': "Men's Outlet — Suits, Shirts, Pants & Knitwear",
    'nav.home': 'Home',
    'nav.shop': 'Shop',
    'nav.suits': 'Suits',
    'nav.blazers': 'Blazers',
    'nav.shirts': 'Shirts',
    'nav.pants': 'Pants',
    'nav.sweaters': 'Sweaters',
    'nav.ties': 'Ties',
    'nav.visit': 'Visit Us',
    'hero.title': 'Tailored Menswear at Outlet Prices',
    'hero.subtitle': 'Visit our shop in New Shayleh — order any item directly on WhatsApp.',
    'hero.cta': 'Browse the Collection',
    'hero.whatsapp': 'Chat on WhatsApp',
    'hero.message': "Hi! I'm a customer from your New Shayleh Outlet website. I'd like to ask a few questions.",
    'shop.title': 'The Collection',
    'shop.empty': 'New arrivals coming soon.',
    'product.order': 'Order on WhatsApp',
    'product.message': "Hi! I'm a customer from your New Shayleh Outlet website — I'd like to order:",
    'product.related': 'You may also like',
    'product.price': 'Price',
    'product.contact_for_price': 'Ask for price on WhatsApp',
    'visit.title': 'Visit the Shop',
    'visit.address_label': 'Address',
    'visit.address': 'New Shayleh, Lebanon',
    'visit.phone_label': 'WhatsApp / Phone',
    'visit.email_label': 'Email',
    'visit.hours_label': 'Opening Hours',
    'visit.hours': 'Mon – Sat · 9:00 — 19:00',
    'footer.rights': 'All rights reserved.',
    'lang.switch': 'العربية',
    'category.suits': 'Suits',
    'category.blazers': 'Blazers',
    'category.shirts': 'Shirts',
    'category.pants': 'Pants',
    'category.sweaters': 'Sweaters',
    'category.ties': 'Ties',
  },
  ar: {
    'site.name': 'نيو سهيلة أوتلت',
    'site.tagline': 'أوتلت رجالي — بدلات، قمصان، بناطيل وكنزات صوف',
    'nav.home': 'الرئيسية',
    'nav.shop': 'المتجر',
    'nav.suits': 'بدلات',
    'nav.blazers': 'بليزرات',
    'nav.shirts': 'قمصان',
    'nav.pants': 'بناطيل',
    'nav.sweaters': 'كنزات صوف',
    'nav.ties': 'ربطات عنق',
    'nav.visit': 'زورونا',
    'hero.title': 'ملابس رجالية أنيقة بأسعار الأوتلت',
    'hero.subtitle': 'تفضّلوا بزيارة محلّنا في نيو سهيلة — اطلبوا أي قطعة مباشرة عبر واتساب.',
    'hero.cta': 'تصفّح المجموعة',
    'hero.whatsapp': 'تواصل عبر واتساب',
    'hero.message': 'مرحبًا، أنا زبون من موقع نيو سهيلة أوتلت وحابب أستفسر.',
    'shop.title': 'المجموعة',
    'shop.empty': 'وصلات جديدة قريباً.',
    'product.order': 'اطلب عبر واتساب',
    'product.message': 'مرحبًا، أنا زبون من موقع نيو سهيلة أوتلت وحابب أطلب:',
    'product.related': 'قد يعجبك أيضًا',
    'product.price': 'السعر',
    'product.contact_for_price': 'استفسر عن السعر عبر واتساب',
    'visit.title': 'زيارة المحل',
    'visit.address_label': 'العنوان',
    'visit.address': 'نيو سهيلة، لبنان',
    'visit.phone_label': 'واتساب / هاتف',
    'visit.email_label': 'البريد الإلكتروني',
    'visit.hours_label': 'أوقات الدوام',
    'visit.hours': 'الإثنين – السبت · 9:00 — 19:00',
    'footer.rights': 'جميع الحقوق محفوظة.',
    'lang.switch': 'English',
    'category.suits': 'بدلات',
    'category.blazers': 'بليزرات',
    'category.shirts': 'قمصان',
    'category.pants': 'بناطيل',
    'category.sweaters': 'كنزات صوف',
    'category.ties': 'ربطات عنق',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];

export function t(lang: Lang) {
  return (key: UIKey) => ui[lang][key] ?? ui[defaultLang][key];
}

export function dir(lang: Lang) {
  return lang === 'ar' ? 'rtl' : 'ltr';
}
