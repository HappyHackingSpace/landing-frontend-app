import { useLanguageStore } from '@/lib/store/languageStore';
import { getTranslations, Translations } from '@/lib/translations';

/**
 * Custom hook to use translations in the application
 * @returns The translations for the current language
 */
export const useTranslation = (): Translations => {
  const { language } = useLanguageStore();
  return getTranslations(language);
}; 