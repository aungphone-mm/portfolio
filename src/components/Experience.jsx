'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { portfolioData } from '@/data/portfolioData';
import styles from './Experience.module.css';

export default function Experience() {
  const { t, mounted } = useLanguage();

  return (
    <section id="experience" className="section">
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
              <span className="section-label">{t('experience', 'label')}</span>
              <h2 className="section-title">
                {t('experience', 'titlePrefix')}{' '}
                <span className="gradient-text">{t('experience', 'titleHighlight')}</span>
              </h2>
              <p className="section-subtitle">{t('experience', 'subtitle')}</p>
            </>
          )}
        </motion.div>

        <div className={styles.timeline}>
          {portfolioData.experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              className={styles.item}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className={styles.dot}>
                <Briefcase size={13} />
              </div>

              <div className={`glass-card ${styles.card}`}>
                <div className={styles.cardTop}>
                  <div className={styles.cardLeft}>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <div className={styles.company}>{exp.company}</div>
                  </div>
                  <div className={styles.meta}>
                    <span className={styles.period}>
                      <Calendar size={12} />
                      {exp.period}
                    </span>
                    <span className={styles.duration}>{exp.duration}</span>
                  </div>
                </div>

                <ul className={styles.highlights}>
                  {exp.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
