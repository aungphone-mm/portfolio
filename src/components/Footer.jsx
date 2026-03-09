'use client';

import { Github, Linkedin, Twitter, Heart } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
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
            Crafting digital experiences with passion and precision.
          </p>
        </div>

        <div className={styles.center}>
          <div className={styles.linkGroup}>
            <a href="#about" className={styles.footerLink}>About</a>
            <a href="#skills" className={styles.footerLink}>Skills</a>
            <a href="#projects" className={styles.footerLink}>Projects</a>
            <a href="#contact" className={styles.footerLink}>Contact</a>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.socials}>
            <a href="#" className={styles.socialLink} aria-label="GitHub"><Github size={18} /></a>
            <a href="#" className={styles.socialLink} aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href="#" className={styles.socialLink} aria-label="Twitter"><Twitter size={18} /></a>
          </div>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Portfolio. Made with{' '}
          <Heart size={14} className={styles.heart} />{' '}
          and lots of coffee.
        </p>
      </div>
    </footer>
  );
}
