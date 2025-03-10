'use client';

import React from 'react';
import { useLanguageStore, Language } from '@/lib/store/languageStore';
import { useTranslation } from '@/hooks/useTranslation';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// Language display names
const languageNames: Record<Language, string> = {
  en: 'English',
  tr: 'Turkish'
};

// Language flags (emoji)
const languageFlags: Record<Language, string> = {
  en: 'us',
  tr: 'tr'
  
};

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguageStore();
  const t = useTranslation();

  const handleLanguageChange = (value: string) => {
    setLanguage(value as Language);
  };

  return (
    <div className="flex items-center space-x-2">
      {/* <span className="text-sm font-medium">{t.settings.language}:</span> */}
      <Select value={language} onValueChange={handleLanguageChange}>
        <SelectTrigger className="w-[140px]">
          <SelectValue placeholder={t.settings.language} />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(languageNames).map(([code, name]) => (
            <SelectItem key={code} value={code}>
              <div className="flex items-center">
                <span className="mr-2">{languageFlags[code as Language]}</span>
                <span>{name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelector; 