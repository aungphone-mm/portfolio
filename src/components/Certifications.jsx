'use client';

import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { portfolioData } from '@/data/portfolioData';
import styles from './Certifications.module.css';

export default function Certifications() {
  const { t, mounted } = useLanguage();

  return (
    <section id="certifications" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {mounted && (
            <>
              <span className="section-label">{t('certifications', 'label')}</span>
              <h2 className="section-title">
                {t('certifications', 'titlePrefix')}{' '}
                <span className="gradient-text">{t('certifications', 'titleHighlight')}</span>
              </h2>
            </>
          )}
        </motion.div>

        <div className={styles.grid}>
          {portfolioData.certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              className={`glass-card ${styles.card}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className={styles.iconWrap} style={{ background: `${cert.color}18`, boxShadow: `0 0 20px ${cert.color}25` }}>
                <Award size={24} style={{ color: cert.color }} />
              </div>
              <div className={styles.year} style={{ color: cert.color }}>{cert.year}</div>
              <h3 className={styles.name}>{cert.name}</h3>
              <p className={styles.issuer}>{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
