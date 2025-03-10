'use client';

import { useEffect } from 'react';
import { useLanguageStore } from '@/lib/store/languageStore';

/**
 * Component to set the HTML lang attribute based on the selected language
 * This component doesn't render anything, it just updates the lang attribute
 */
const LangAttribute = () => {
  const { language } = useLanguageStore();

  useEffect(() => {
    // Update the HTML lang attribute when the language changes
    document.documentElement.lang = language;
  }, [language]);

  return null;
};

export default LangAttribute; 