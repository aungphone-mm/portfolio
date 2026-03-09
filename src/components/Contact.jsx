'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Contact</span>
          <h2 className="section-title">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind? Let&apos;s work together to create something amazing.
          </p>
        </motion.div>

        <div className={styles.wrapper}>
          <motion.div
            className={styles.infoCol}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.infoCards}>
              <div className={`glass-card ${styles.infoCard}`}>
                <div className={styles.infoIcon}><Mail size={20} /></div>
                <div>
                  <div className={styles.infoLabel}>Email</div>
                  <div className={styles.infoValue}>hello@example.com</div>
                </div>
              </div>
              <div className={`glass-card ${styles.infoCard}`}>
                <div className={styles.infoIcon}><MapPin size={20} /></div>
                <div>
                  <div className={styles.infoLabel}>Location</div>
                  <div className={styles.infoValue}>Yangon, Myanmar</div>
                </div>
              </div>
              <div className={`glass-card ${styles.infoCard}`}>
                <div className={styles.infoIcon}><Phone size={20} /></div>
                <div>
                  <div className={styles.infoLabel}>Phone</div>
                  <div className={styles.infoValue}>+95 9 xxx xxx xxx</div>
                </div>
              </div>
            </div>

            <div className={styles.socialSection}>
              <h4 className={styles.socialTitle}>Follow Me</h4>
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialLink} aria-label="GitHub"><Github size={20} /></a>
                <a href="#" className={styles.socialLink} aria-label="LinkedIn"><Linkedin size={20} /></a>
                <a href="#" className={styles.socialLink} aria-label="Twitter"><Twitter size={20} /></a>
              </div>
            </div>
          </motion.div>

          <motion.form
            className={`glass-card ${styles.form}`}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
          >
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                className={styles.input}
                placeholder="Your name"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                className={styles.input}
                placeholder="your@email.com"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="message">Message</label>
              <textarea
                id="message"
                className={`${styles.input} ${styles.textarea}`}
                placeholder="Tell me about your project..."
                rows={5}
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>
            <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
              {sent ? 'Message Sent! ✓' : <>Send Message <Send size={16} /></>}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
