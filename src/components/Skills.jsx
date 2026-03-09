'use client';

import { motion } from 'framer-motion';
import styles from './Skills.module.css';

const skillCategories = [
  {
    title: 'Frontend',
    color: '#7c3aed',
    skills: [
      { name: 'React / Next.js', level: 90 },
      { name: 'JavaScript / TypeScript', level: 88 },
      { name: 'HTML / CSS', level: 95 },
      { name: 'Tailwind CSS', level: 85 },
    ],
  },
  {
    title: 'Backend',
    color: '#06b6d4',
    skills: [
      { name: 'Python / Django', level: 85 },
      { name: 'Node.js / Express', level: 80 },
      { name: 'PostgreSQL / MySQL', level: 82 },
      { name: 'REST APIs', level: 88 },
    ],
  },
  {
    title: 'Tools & DevOps',
    color: '#ec4899',
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'CI/CD Pipelines', level: 72 },
      { name: 'Linux / Shell', level: 78 },
    ],
  },
  {
    title: 'Design & Other',
    color: '#f59e0b',
    skills: [
      { name: 'Figma / Adobe XD', level: 80 },
      { name: 'UI/UX Design', level: 78 },
      { name: 'Responsive Design', level: 92 },
      { name: 'Accessibility', level: 75 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Skills</span>
          <h2 className="section-title">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className={styles.grid}>
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.title}
              className={`glass-card ${styles.card}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <div className={styles.cardHeader}>
                <div
                  className={styles.cardDot}
                  style={{ background: cat.color, boxShadow: `0 0 12px ${cat.color}40` }}
                />
                <h3 className={styles.cardTitle}>{cat.title}</h3>
              </div>

              <div className={styles.skillList}>
                {cat.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    className={styles.skillItem}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: catIndex * 0.1 + i * 0.05 }}
                  >
                    <div className={styles.skillInfo}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillPercent}>{skill.level}%</span>
                    </div>
                    <div className={styles.progressTrack}>
                      <motion.div
                        className={styles.progressBar}
                        style={{ background: cat.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: catIndex * 0.1 + i * 0.1, ease: 'easeOut' }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
