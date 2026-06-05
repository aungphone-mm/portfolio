'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Github, Linkedin, Twitter, Globe, Loader2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { portfolioData } from '@/data/portfolioData';
import styles from './Contact.module.css';

export default function Contact() {
  const { t, mounted } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
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
                  <div className={styles.infoValue}>{portfolioData.contact.email}</div>
                </div>
              </div>
              <div className={`glass-card ${styles.infoCard}`}>
                <div className={styles.infoIcon}><MapPin size={20} /></div>
                <div>
                  <div className={styles.infoLabel}>{mounted ? t('contact', 'location') : ''}</div>
                  <div className={styles.infoValue}>{mounted ? t('contact', 'locationValue') : ''}</div>
                </div>
              </div>
            </div>

            <div className={styles.socialSection}>
              <h4 className={styles.socialTitle}>{mounted ? t('contact', 'follow') : ''}</h4>
              <div className={styles.socialLinks}>
                <a href={portfolioData.social.github} className={styles.socialLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={20} /></a>
                <a href={portfolioData.social.linkedin} className={styles.socialLink} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
                <a href={portfolioData.social.twitter} className={styles.socialLink} target="_blank" rel="noopener noreferrer" aria-label="Twitter"><Twitter size={20} /></a>
                <a href={portfolioData.social.website} className={styles.socialLink} target="_blank" rel="noopener noreferrer" aria-label="Website"><Globe size={20} /></a>
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
                minLength={10}
              />
            </div>
            <button 
              type="submit" 
              className={`btn btn-primary ${styles.submitBtn}`}
              disabled={status === 'submitting'}
            >
              {status === 'submitting' && <><Loader2 size={16} className="animate-spin" /> {mounted ? t('contact', 'sending') : 'Sending...'}</>}
              {status === 'success' && (mounted ? t('contact', 'msgSent') : 'Message Sent! ✓')}
              {status === 'error' && (mounted ? t('contact', 'msgError') : 'Failed to send!')}
              {status === 'idle' && <>{mounted ? t('contact', 'sendMsg') : ''} <Send size={16} /></>}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
