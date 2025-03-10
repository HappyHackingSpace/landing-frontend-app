import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Define available languages
export type Language = 'en' | 'tr';

// Define the language store state
interface LanguageState {
  language: Language;
  setLanguage: (language: Language) => void;
}

// Create the language store with persistence
export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: 'en', // Default language is English
      setLanguage: (language: Language) => set({ language }),
    }),
    {
      name: 'language-storage', // Name for localStorage
    }
  )
); 