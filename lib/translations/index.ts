import { Language } from '../store/languageStore';

// Define the structure of our translations
export interface Translations {
  common: {
    appName: string;
    loading: string;
  };
  home: {
    title: string;
    subtitle: string;
    mobileVersion: string;
    desktopVersion: string;
  };
  settings: {
    language: string;
    theme: string;
    dark: string;
    light: string;
    system: string;
  };
  navigation: {
    home: string;
    events: string;
    competitions: string;
    codeJam: string;
    hackathon: string;
    live: string;
    hhs: string;
    philosophy: string;
    manifesto: string;
    team: string;
    history: string;
    contact: string;
    branding: string;
    stickers: string;
    blog: string;
    brandKit: string;
  };
  carousel: {
    slogan: string;
    buttonText: string;
  };
}

// English translations
const en: Translations = {
  common: {
    appName: 'Happy Hacking Space',
    loading: 'Loading...',
  },
  home: {
    title: 'Happy Hacking Space',
    subtitle: 'A modern web application',
    mobileVersion: 'Mobile Version',
    desktopVersion: 'Desktop Version',
  },
  settings: {
    language: 'Language',
    theme: 'Theme',
    dark: 'Dark',
    light: 'Light',
    system: 'System',
  },
  navigation: {
    home: 'Home',
    events: 'Events',
    competitions: 'Competitions',
    codeJam: 'CodeJam',
    hackathon: 'Hackathon',
    live: 'Live',
    hhs: 'HHS',
    philosophy: 'Philosophy',
    manifesto: 'Manifesto',
    team: 'Team',
    history: 'History',
    contact: 'Contact',
    branding: 'Branding',
    stickers: 'Stickers',
    blog: 'Blog',
    brandKit: 'Brand Kit',
  },
  carousel: {
    slogan: 'Innovate. Create. Transform.',
    buttonText: 'Learn More',
  },
};

// Spanish translations
const tr: Translations = {
  common: {
    appName: 'Happy Hacking Space',
    loading: 'Yükleniyor...',
  },
  home: {
    title: 'Happy Hacking Space',
    subtitle: 'Bir modern web uygulaması',
    mobileVersion: 'Mobile Versiyon',
    desktopVersion: 'Desktop Versiyon',
  },
  settings: {
    language: 'Dil',
    theme: 'Tema',
    dark: 'Koyu',
    light: 'Açık',
    system: 'Sistem',
  },
  navigation: {
    home: 'Anasayfa',
    events: 'Etkinlikler',
    competitions: 'Yarışmalar',
    codeJam: 'CodeJam',
    hackathon: 'Hackathon',
    live: 'Canlı',
    hhs: 'HHS',
    philosophy: 'Felsefe',
    manifesto: 'Manifesto',
    team: 'Takım',
    history: 'Tarihçe',
    contact: 'İletişim',
    branding: 'Marka',
    stickers: 'Çıkartmalar',
    blog: 'Blog',
    brandKit: 'Marka Kiti',
  },
  carousel: {
    slogan: 'Yenilik. Yaratıcılık. Dönüşüm.',
    buttonText: 'Daha Fazla',
  },
};

// Map of all translations
export const translations: Record<Language, Translations> = {
  en,
  tr
};

// Helper function to get translations for the current language
export const getTranslations = (language: Language): Translations => {
  return translations[language] || translations.en;
}; 