'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { portfolioData } from '@/data/portfolioData';
import styles from './Projects.module.css';

export default function Projects() {
  const { t, mounted } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('All');
  
  const categories = ['All', 'ERP', 'Full Stack', 'AI'];

  const filteredProjects = portfolioData.projects.filter(project => {
    return activeFilter === 'All' ? true : project.category === activeFilter;
  });

  return (
    <section id="projects" className="section">
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
              <span className="section-label">{t('projects', 'label')}</span>
              <h2 className="section-title">
                {t('projects', 'titlePrefix')} <span className="gradient-text">{t('projects', 'titleHighlight')}</span>
              </h2>
              <p className="section-subtitle">
                {t('projects', 'subtitle')}
              </p>
            </>
          )}
        </motion.div>

        <div className={styles.filterContainer}>
          {mounted && categories.map(category => (
            <button
              key={category}
              className={`${styles.filterBtn} ${activeFilter === category ? styles.filterActive : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className={styles.grid}>
          <AnimatePresence>
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                className={`glass-card ${styles.card}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
              <div
                className={styles.cardAccent}
                style={{ background: `linear-gradient(135deg, ${project.color}20, transparent)` }}
              />
              <div className={styles.cardNumber}>
                <span style={{ color: project.color }}>0{i + 1}</span>
              </div>

              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDesc}>{mounted ? t('projects', 'descriptions')[project.id] : ''}</p>

              <div className={styles.techStack}>
                {project.tech.map(t => (
                  <span key={t} className={styles.techTag} style={{ borderColor: `${project.color}30`, color: project.color }}>
                    {t}
                  </span>
                ))}
              </div>

              <div className={styles.cardLinks}>
                {project.demo && (
                  <a href={project.demo} className={styles.cardLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} />
                    {mounted ? t('projects', 'demo') : ''}
                  </a>
                )}
                {project.source && (
                  <a href={project.source} className={styles.cardLink} target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                    {mounted ? t('projects', 'source') : ''}
                  </a>
                )}
                {!project.demo && !project.source && mounted && (
                  <span className={styles.cardLink} style={{ opacity: 0.5, cursor: 'default' }}>Internal Project</span>
                )}
              </div>

              <div className={styles.cardArrow}>
                <ArrowUpRight size={20} style={{ color: project.color }} />
              </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
