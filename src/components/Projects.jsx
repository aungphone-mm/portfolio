'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with real-time inventory, Stripe payments, and an admin dashboard. Built with modern tech stack for optimal performance.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    color: '#7c3aed',
    demo: '#',
    source: '#',
  },
  {
    title: 'AI Task Manager',
    description: 'Smart productivity app that uses AI to prioritize tasks, suggest deadlines, and auto-categorize work items for maximum efficiency.',
    tech: ['React', 'Python', 'OpenAI', 'FastAPI'],
    color: '#06b6d4',
    demo: '#',
    source: '#',
  },
  {
    title: 'Social Analytics Dashboard',
    description: 'Real-time analytics platform that aggregates social media metrics, generates insights, and creates automated reports with beautiful visualizations.',
    tech: ['Vue.js', 'D3.js', 'Express', 'MongoDB'],
    color: '#ec4899',
    demo: '#',
    source: '#',
  },
  {
    title: 'Cloud File Manager',
    description: 'Secure cloud storage solution with drag-and-drop upload, file sharing, real-time collaboration, and end-to-end encryption.',
    tech: ['React', 'AWS S3', 'Node.js', 'Redis'],
    color: '#f59e0b',
    demo: '#',
    source: '#',
  },
];

export default function Projects() {
  const { t, mounted } = useLanguage();

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

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className={`glass-card ${styles.card}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div
                className={styles.cardAccent}
                style={{ background: `linear-gradient(135deg, ${project.color}20, transparent)` }}
              />
              <div className={styles.cardNumber}>
                <span style={{ color: project.color }}>0{i + 1}</span>
              </div>

              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDesc}>{mounted ? t('projects', 'list', i).desc : ''}</p>

              <div className={styles.techStack}>
                {project.tech.map(t => (
                  <span key={t} className={styles.techTag} style={{ borderColor: `${project.color}30`, color: project.color }}>
                    {t}
                  </span>
                ))}
              </div>

              <div className={styles.cardLinks}>
                <a href={project.demo} className={styles.cardLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                  {mounted ? t('projects', 'demo') : ''}
                </a>
                <a href={project.source} className={styles.cardLink} target="_blank" rel="noopener noreferrer">
                  <Github size={16} />
                  {mounted ? t('projects', 'source') : ''}
                </a>
              </div>

              <div className={styles.cardArrow}>
                <ArrowUpRight size={20} style={{ color: project.color }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
