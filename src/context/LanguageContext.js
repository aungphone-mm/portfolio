'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '@/lib/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check local storage for saved language, default to 'en'
    const savedLang = localStorage.getItem('portfolio_lang');
    if (savedLang === 'my' || savedLang === 'en') {
      setLanguage(savedLang);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('portfolio_lang', language);
      document.documentElement.lang = language;
      if (language === 'my') {
        document.body.classList.add('lang-my');
      } else {
        document.body.classList.remove('lang-my');
      }
    }
  }, [language, mounted]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'my' : 'en');
  };

  const t = (section, key, index = null) => {
    try {
      if (index !== null) {
        return translations[section][key][index][language] || Object.values(translations[section][key][index])[0];
      }
      return translations[section][key][language] || Object.values(translations[section][key])[0];
    } catch (e) {
      console.warn(`Translation missing for ${section}.${key} [${language}]`);
      return `${section}.${key}`;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, mounted }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
