'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Contact.module.css';

export default function Contact() {
  const { t, mounted } = useLanguage();
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
          {mounted && (
            <>
              <span className="section-label">{t('contact', 'label')}</span>
              <h2 className="section-title">
                {t('contact', 'titlePrefix')} <span className="gradient-text">{t('contact', 'titleHighlight')}</span>
              </h2>
              <p className="section-subtitle">
                {t('contact', 'subtitle')}
              </p>
            </>
          )}
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
                  <div className={styles.infoLabel}>{mounted ? t('contact', 'email') : ''}</div>
                  <div className={styles.infoValue}>hello@example.com</div>
                </div>
              </div>
              <div className={`glass-card ${styles.infoCard}`}>
                <div className={styles.infoIcon}><MapPin size={20} /></div>
                <div>
                  <div className={styles.infoLabel}>{mounted ? t('contact', 'location') : ''}</div>
                  <div className={styles.infoValue}>{mounted ? t('contact', 'locationValue') : ''}</div>
                </div>
              </div>
              <div className={`glass-card ${styles.infoCard}`}>
                <div className={styles.infoIcon}><Phone size={20} /></div>
                <div>
                  <div className={styles.infoLabel}>{mounted ? t('contact', 'phone') : ''}</div>
                  <div className={styles.infoValue}>+95 9 xxx xxx xxx</div>
                </div>
              </div>
            </div>

            <div className={styles.socialSection}>
              <h4 className={styles.socialTitle}>{mounted ? t('contact', 'follow') : ''}</h4>
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
              <label className={styles.label} htmlFor="name">{mounted ? t('contact', 'formName') : ''}</label>
              <input
                id="name"
                type="text"
                className={styles.input}
                placeholder={mounted ? t('contact', 'formNamePlaceholder') : ''}
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="email">{mounted ? t('contact', 'formEmail') : ''}</label>
              <input
                id="email"
                type="email"
                className={styles.input}
                placeholder={mounted ? t('contact', 'formEmailPlaceholder') : ''}
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="message">{mounted ? t('contact', 'formMessage') : ''}</label>
              <textarea
                id="message"
                className={`${styles.input} ${styles.textarea}`}
                placeholder={mounted ? t('contact', 'formMessagePlaceholder') : ''}
                rows={5}
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>
            <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
              {sent ? (mounted ? t('contact', 'msgSent') : 'Message Sent! ✓') : <>{mounted ? t('contact', 'sendMsg') : ''} <Send size={16} /></>}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
