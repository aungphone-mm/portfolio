'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Hero.module.css';

export default function Hero() {
  const { t, mounted } = useLanguage();
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!mounted) return;
    
    // t('hero', 'roles', roleIndex) returns the translated current role
    const currentRole = t('hero', 'roles', roleIndex) || '';
    let timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % 4); // 4 roles
    } else {
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
        );
      }, isDeleting ? 40 : 80);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, mounted, t]);

  return (
    <section id="hero" className={styles.hero}>
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />
      <div className="bg-orb bg-orb-3" />

      <div className={`container ${styles.content}`}>
        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className={styles.badgeDot} />
          {mounted ? t('hero', 'badge') : ''}
        </motion.div>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {mounted ? t('hero', 'titlePrefix') : ''}
          <span className="gradient-text">{mounted ? t('hero', 'titleCreative') : ''}</span>
          <br />
          <span className="gradient-text">{mounted ? t('hero', 'titleDeveloper') : ''}</span>
        </motion.h1>

        <motion.div
          className={styles.typewriter}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <span className={styles.typeText}>{displayText}</span>
          <span className={styles.cursor}>|</span>
        </motion.div>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {mounted ? t('hero', 'description') : ''}
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {mounted && (
            <a href="#projects" className="btn btn-primary">
              {t('hero', 'btnPrimary')}
              <ArrowDown size={18} />
            </a>
          )}
          {mounted && (
            <a href="#contact" className="btn btn-outline">
              {t('hero', 'btnOutline')}
            </a>
          )}
        </motion.div>

        <motion.div
          className={styles.socials}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="mailto:hello@example.com" className={styles.socialLink} aria-label="Email">
            <Mail size={20} />
          </a>
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
