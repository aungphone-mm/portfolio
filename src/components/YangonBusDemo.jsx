'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './YangonBusDemo.module.css';

export default function YangonBusDemo() {
  const { t, mounted } = useLanguage();

  return (
    <section id="yangon-bus-demo" className="section">
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
              <span className="section-label">{t('yangonBus', 'label')}</span>
              <h2 className="section-title">
                {t('yangonBus', 'titlePrefix')}{' '}
                <span className="gradient-text">{t('yangonBus', 'titleHighlight')}</span>
              </h2>
              <p className="section-subtitle">{t('yangonBus', 'subtitle')}</p>
            </>
          )}
        </motion.div>

        <motion.div
          className={styles.browserWrap}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.browserBar}>
            <div className={styles.dots}>
              <span className={styles.dot} style={{ background: '#ff5f57' }} />
              <span className={styles.dot} style={{ background: '#febc2e' }} />
              <span className={styles.dot} style={{ background: '#28c840' }} />
            </div>
            <div className={styles.urlBar}>
              <span className={styles.urlText}>ybs-plum.vercel.app</span>
            </div>
            <a
              href="https://ybs-plum.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.openBtn}
            >
              <ExternalLink size={13} />
              {mounted ? t('yangonBus', 'openFull') : 'Open'}
            </a>
          </div>

          <iframe
            src="https://ybs-plum.vercel.app"
            className={styles.iframe}
            title="Yangon Bus Transit App"
            loading="lazy"
            allowFullScreen
          />
        </motion.div>
      </div>
    </section>
  );
}
