'use client';

import { motion } from 'framer-motion';
import { Code2, Palette, Zap, Coffee } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './About.module.css';

const statsData = [
  { icon: <Code2 size={20} />, value: '20+', key: 'projects' },
  { icon: <Palette size={20} />, value: '13+', key: 'experience' },
  { icon: <Zap size={20} />, value: '15+', key: 'clients' },
  { icon: <Coffee size={20} />, value: '∞', key: 'coffee' },
];

export default function About() {
  const { t, mounted } = useLanguage();
  return (
    <section id="about" className="section">
      <div className={`container ${styles.wrapper}`}>
        <motion.div
          className={styles.imageCol}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.imageFrame}>
            <div className={styles.imageBorder} />
            <img src="/profile.jpg" alt="Profile" className={styles.image} />
          </div>
        </motion.div>

        <motion.div
          className={styles.textCol}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {mounted && (
            <>
              <span className="section-label">{t('about', 'label')}</span>
              <h2 className="section-title">
                {t('about', 'titlePrefix')}{' '}
                <span className="gradient-text">{t('about', 'titleHighlight')}</span>
              </h2>
              <p className={styles.bio}>{t('about', 'p1')}</p>
              <p className={styles.bio}>{t('about', 'p2')}</p>

              <div className={styles.stats}>
                {statsData.map((stat, i) => (
                  <motion.div
                    key={stat.key}
                    className={`glass-card ${styles.statCard}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  >
                    <div className={styles.statIcon}>{stat.icon}</div>
                    <div className={styles.statValue}>{stat.value}</div>
                    <div className={styles.statLabel}>{t('about', 'stats')[stat.key]}</div>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
