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
    about: string;
    services: string;
    contact: string;
    login: string;
    signup: string;
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
    about: 'About',
    services: 'Services',
    contact: 'Contact',
    login: 'Login',
    signup: 'Sign Up',
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
    about: 'Hakkımızda',
    services: 'Hizmetler',
    contact: 'İletişim',
    login: 'Giriş',
    signup: 'Kayıt Ol',
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