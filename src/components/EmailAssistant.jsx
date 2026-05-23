'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Copy, Check, Loader2, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './EmailAssistant.module.css';

const TONES = ['professional', 'warm', 'concise', 'formal', 'casual', 'persuasive'];
const TONE_TRANSLATION_KEYS = {
  professional: 'toneProfessional',
  warm: 'toneWarm',
  concise: 'toneConcise',
  formal: 'toneFormal',
  casual: 'toneCasual',
  persuasive: 'tonePersuasive',
};

export default function EmailAssistant() {
  const { t, mounted } = useLanguage();
  const [thoughts, setThoughts] = useState('');
  const [tone, setTone] = useState('professional');
  const [context, setContext] = useState('');
  const [showContext, setShowContext] = useState(false);
  const [output, setOutput] = useState('');
  const [status, setStatus] = useState('idle'); // idle | generating | error
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!thoughts.trim()) return;
    setStatus('generating');
    setOutput('');

    try {
      const res = await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ thoughts, tone, context: showContext ? context : '' }),
      });
      const data = await res.json();
      if (res.ok) {
        setOutput(data.email);
        setStatus('idle');
      } else {
        setOutput(data.error || 'Something went wrong.');
        setStatus('error');
      }
    } catch {
      setOutput('Network error. Please try again.');
      setStatus('error');
    }
  };

  const handleKeyDown = (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') handleGenerate();
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="email-tool" className="section" style={{ background: 'var(--bg-secondary)' }}>
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
              <span className="section-label">{t('emailAssistant', 'label')}</span>
              <h2 className="section-title">
                {t('emailAssistant', 'titlePrefix')} <span className="gradient-text">{t('emailAssistant', 'titleHighlight')}</span>
              </h2>
              <p className="section-subtitle">{t('emailAssistant', 'subtitle')}</p>
            </>
          )}
        </motion.div>

        <div className={styles.wrapper}>
          <motion.div
            className={`glass-card ${styles.card}`}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.formGroup}>
              <label className={styles.label}>{mounted ? t('emailAssistant', 'thoughtsLabel') : ''}</label>
              <textarea
                className={`${styles.input} ${styles.thoughtsArea}`}
                placeholder={mounted ? t('emailAssistant', 'thoughtsPlaceholder') : ''}
                value={thoughts}
                onChange={e => setThoughts(e.target.value)}
                onKeyDown={handleKeyDown}
                rows={5}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>{mounted ? t('emailAssistant', 'toneLabel') : ''}</label>
              <div className={styles.toneGrid}>
                {TONES.map(toneName => (
                  <button
                    key={toneName}
                    className={`${styles.toneBtn} ${tone === toneName ? styles.toneBtnActive : ''}`}
                    onClick={() => setTone(toneName)}
                  >
                    {mounted ? t('emailAssistant', TONE_TRANSLATION_KEYS[toneName]) : toneName}
                  </button>
                ))}
              </div>
            </div>

            <button className={styles.contextToggle} onClick={() => setShowContext(v => !v)}>
              <ChevronDown size={14} className={showContext ? styles.chevronOpen : ''} />
              {mounted ? t('emailAssistant', showContext ? 'contextHide' : 'contextShow') : ''}
            </button>

            {showContext && (
              <div className={styles.formGroup}>
                <label className={styles.label}>{mounted ? t('emailAssistant', 'contextLabel') : ''}</label>
                <textarea
                  className={`${styles.input} ${styles.contextArea}`}
                  placeholder={mounted ? t('emailAssistant', 'contextPlaceholder') : ''}
                  value={context}
                  onChange={e => setContext(e.target.value)}
                  rows={3}
                />
              </div>
            )}

            <button
              className={`btn btn-primary ${styles.generateBtn}`}
              onClick={handleGenerate}
              disabled={!thoughts.trim() || status === 'generating'}
            >
              {status === 'generating' ? (
                <><Loader2 size={16} className={styles.spin} /> {mounted ? t('emailAssistant', 'generating') : 'Generating...'}</>
              ) : (
                <><Sparkles size={16} /> {mounted ? t('emailAssistant', 'generateBtn') : 'Generate Email'}</>
              )}
            </button>
          </motion.div>

          <motion.div
            className={`glass-card ${styles.card}`}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className={styles.outputHeader}>
              <span className={styles.label}>{mounted ? t('emailAssistant', 'outputTitle') : ''}</span>
              {output && status !== 'error' && (
                <button className={styles.copyBtn} onClick={handleCopy}>
                  {copied
                    ? <><Check size={14} /> {mounted ? t('emailAssistant', 'copied') : 'Copied!'}</>
                    : <><Copy size={14} /> {mounted ? t('emailAssistant', 'copy') : 'Copy'}</>
                  }
                </button>
              )}
            </div>

            {output ? (
              <pre className={`${styles.outputArea} ${status === 'error' ? styles.outputError : ''}`}>
                {output}
              </pre>
            ) : (
              <div className={styles.placeholder}>
                <Sparkles size={32} className={styles.placeholderIcon} />
                <p>{mounted ? t('emailAssistant', 'placeholder') : ''}</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
