'use client';

import React from 'react';
import Link from 'next/link';
import { Download, Mail, ArrowRight, ExternalLink } from 'lucide-react';
import { useModal } from '@/context/ModalContext';
import styles from '@/app/(with-sidebar)/resume/page.module.css';

export default function ResumeHeaderActions() {
  const { openContact, openResume } = useModal();

  return (
    <div className={styles.headerActions}>
      <a 
        href="/Nithinnaresh-Resume.pdf" 
        download="Nithinnaresh-Resume.pdf"
        className={styles.btnPrimary}
        title="Download Nithinnaresh Resume (PDF)"
      >
        <Download size={16} strokeWidth={2.2} />
        <span>Download PDF</span>
      </a>

      <button 
        type="button"
        onClick={openResume}
        className={styles.btnSecondary}
        style={{ cursor: 'pointer', fontFamily: 'inherit' }}
        title="Open interactive document viewer"
      >
        <ExternalLink size={16} />
        <span>Preview Doc</span>
      </button>

      <button 
        type="button"
        onClick={openContact}
        className={styles.btnSecondary}
        style={{ cursor: 'pointer', fontFamily: 'inherit' }}
        title="Get in touch"
      >
        <Mail size={16} />
        <span>Contact</span>
      </button>

      <Link 
        href="/works" 
        className={styles.btnSecondary}
      >
        <span>Works</span>
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}
