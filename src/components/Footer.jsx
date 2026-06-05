'use client';

import { Github, Linkedin, Twitter, Globe, Heart } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { portfolioData } from '@/data/portfolioData';
import styles from './Footer.module.css';

export default function Footer() {
  const { t, mounted } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className="glow-line" />
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <a href="#hero" className={styles.logo}>
            <span className={styles.logoIcon}>✦</span>
            <span>Portfolio</span>
          </a>
          <p className={styles.tagline}>
            {mounted ? t('footer', 'tagline') : ''}
          </p>
        </div>

        <div className={styles.center}>
          <div className={styles.linkGroup}>
            {mounted && (
              <>
                <a href="#about" className={styles.footerLink}>{t('nav', 'about')}</a>
                <a href="#experience" className={styles.footerLink}>{t('nav', 'experience')}</a>
                <a href="#skills" className={styles.footerLink}>{t('nav', 'skills')}</a>
                <a href="#projects" className={styles.footerLink}>{t('nav', 'projects')}</a>
                <a href="#contact" className={styles.footerLink}>{t('nav', 'contact')}</a>
              </>
            )}
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.socials}>
            <a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub"><Github size={18} /></a>
            <a href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href={portfolioData.social.twitter} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Twitter"><Twitter size={18} /></a>
            <a href={portfolioData.social.website} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Website"><Globe size={18} /></a>
          </div>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p className={styles.copyright}>
          {mounted ? t('footer', 'copyright1') : ''} {new Date().getFullYear()} {mounted ? t('footer', 'copyright2') : ''}{' '}
          <Heart size={14} className={styles.heart} />{' '}
          {mounted ? t('footer', 'copyright3') : ''}
        </p>
      </div>
    </footer>
  );
}
