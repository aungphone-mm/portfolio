'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import ThemeToggle from './ThemeToggle';
import styles from './Navbar.module.css';

const navLinks = [
  { key: 'home', href: '#hero' },
  { key: 'about', href: '#about' },
  { key: 'experience', href: '#experience' },
  { key: 'skills', href: '#skills' },
  { key: 'projects', href: '#projects' },
  { key: 'contact', href: '#contact' },
];

export default function Navbar() {
  const { language, toggleLanguage, t, mounted } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
    >
      <div className={`container ${styles.inner}`}>
        <a href="#hero" className={styles.logo}>
          <span className={styles.logoIcon}>✦</span>
          <span className={styles.logoText}>Portfolio</span>
        </a>

        <div className={styles.links}>
          {mounted && navLinks.map(link => (
            <a
              key={link.key}
              href={link.href}
              className={`${styles.link} ${activeSection === link.href.replace('#', '') ? styles.active : ''}`}
            >
              {t('nav', link.key)}
              {activeSection === link.href.replace('#', '') && (
                <motion.span className={styles.activeDot} layoutId="activeDot" />
              )}
            </a>
          ))}
          
          {mounted && (
            <div className={styles.controls}>
              <ThemeToggle />
              <button className={styles.langToggle} onClick={toggleLanguage} aria-label="Toggle Language">
                <div className={`${styles.langPill} ${language === 'my' ? styles.langMy : ''}`}>
                  <span>EN</span>
                  <span>MY</span>
                  <div className={styles.langScroller} />
                </div>
              </button>
            </div>
          )}
        </div>

        {mounted && (
          <a href="#contact" className={`btn btn-primary ${styles.ctaBtn}`}>
            {t('nav', 'cta')}
          </a>
        )}

        <button
          className={styles.hamburger}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {mounted && navLinks.map((link, i) => (
              <motion.a
                key={link.key}
                href={link.href}
                className={styles.mobileLink}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setMobileOpen(false)}
              >
                {t('nav', link.key)}
              </motion.a>
            ))}
            
            {mounted && (
              <div className={styles.mobileControls}>
                <div className={styles.mobileControlItem}>
                  <span>Theme</span>
                  <ThemeToggle />
                </div>
                <div className={styles.mobileControlItem}>
                  <span>Language</span>
                  <button className={styles.langToggle} onClick={toggleLanguage}>
                    <div className={`${styles.langPill} ${language === 'my' ? styles.langMy : ''}`}>
                      <span>EN</span>
                      <span>MY</span>
                      <div className={styles.langScroller} />
                    </div>
                  </button>
                </div>
              </div>
            )}

            {mounted && (
              <a
                href="#contact"
                className="btn btn-primary"
                style={{ marginTop: '16px', width: '100%', justifyContent: 'center' }}
                onClick={() => setMobileOpen(false)}
              >
                {t('nav', 'cta')}
              </a>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
