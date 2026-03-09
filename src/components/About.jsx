'use client';

import { motion } from 'framer-motion';
import { Code2, Palette, Zap, Coffee } from 'lucide-react';
import styles from './About.module.css';

const stats = [
  { icon: <Code2 size={20} />, value: '50+', label: 'Projects' },
  { icon: <Palette size={20} />, value: '3+', label: 'Years Exp' },
  { icon: <Zap size={20} />, value: '30+', label: 'Happy Clients' },
  { icon: <Coffee size={20} />, value: '∞', label: 'Coffee Cups' },
];

export default function About() {
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
            <img src="/profile.png" alt="Profile" className={styles.image} />
          </div>
        </motion.div>

        <motion.div
          className={styles.textCol}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            Passionate about creating{' '}
            <span className="gradient-text">digital experiences</span>
          </h2>
          <p className={styles.bio}>
            I&apos;m a full-stack developer with a passion for building beautiful,
            functional, and user-centered digital experiences. With expertise spanning
            from frontend design to backend architecture, I bring ideas to life through
            clean code and creative problem-solving.
          </p>
          <p className={styles.bio}>
            When I&apos;m not coding, you&apos;ll find me exploring new technologies,
            contributing to open-source projects, or enjoying a good cup of coffee while
            brainstorming the next big idea.
          </p>

          <div className={styles.stats}>
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className={`glass-card ${styles.statCard}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              >
                <div className={styles.statIcon}>{stat.icon}</div>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
