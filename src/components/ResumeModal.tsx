'use client';

import React, { useRef } from 'react';
import { useModal } from '@/context/ModalContext';
import { 
  FileText, 
  Download, 
  ExternalLink, 
  X, 
  Sparkles, 
  CheckCircle2,
  Mail
} from 'lucide-react';
import styles from './ResumeModal.module.css';

const RESUME_PDF_URL = '/Nithinnaresh-Resume.pdf';
const RESUME_FILENAME = 'Nithinnaresh-Resume.pdf';

export default function ResumeModal() {
  const { isResumeOpen, closeResume, openContact } = useModal();
  const backdropRef = useRef<HTMLDivElement>(null);

  if (!isResumeOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === backdropRef.current) {
      closeResume();
    }
  };

  return (
    <div 
      className={styles.backdrop} 
      ref={backdropRef}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
    >
      {/* ── DESKTOP POPUP MODAL ── */}
      <div className={styles.dialog} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.fileIconWrap}>
              <FileText size={22} color="#2563eb" strokeWidth={2} />
            </div>
            <div className={styles.titleGroup}>
              <div className={styles.titleRow}>
                <h2 id="resume-title" className={styles.docTitle}>
                  Nithinnaresh — Resume
                </h2>
                <span className={styles.badge}>PDF</span>
              </div>
              <p className={styles.docMeta}>
                Product Designer • B2B SaaS • Updated 2026 • 1.08 MB
              </p>
            </div>
          </div>

          <div className={styles.headerActions}>
            <a
              href={RESUME_PDF_URL}
              download={RESUME_FILENAME}
              className={styles.downloadBtn}
              title="Download Resume PDF"
            >
              <Download size={16} strokeWidth={2.2} />
              <span>Download Resume</span>
            </a>

            <a
              href={RESUME_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconBtn}
              title="Open PDF in new tab"
              aria-label="Open PDF in new tab"
            >
              <ExternalLink size={17} />
            </a>

            <button
              type="button"
              className={styles.closeBtn}
              onClick={closeResume}
              title="Close modal (Esc)"
              aria-label="Close modal"
            >
              <X size={20} strokeWidth={2.2} />
            </button>
          </div>
        </div>

        {/* PDF Embedded Viewer */}
        <div className={styles.viewerBody}>
          <iframe
            src={`${RESUME_PDF_URL}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
            className={styles.pdfFrame}
            title="Nithinnaresh Resume PDF Preview"
          />
        </div>

        {/* Footer Bar */}
        <div className={styles.footer}>
          <div className={styles.footerNote}>
            <Sparkles size={15} color="#2563eb" />
            <span>Looking for a senior product designer?</span>
            <button 
              type="button" 
              className={styles.contactLink}
              onClick={openContact}
            >
              Get in touch
            </button>
          </div>

          <div>
            <a
              href={RESUME_PDF_URL}
              download={RESUME_FILENAME}
              style={{ color: '#2563eb', fontWeight: 600, textDecoration: 'none', fontSize: '13px' }}
            >
              Direct Download Link
            </a>
          </div>
        </div>
      </div>

      {/* ── MOBILE ACTION SHEET / ANDROID BOTTOM SHEET ── */}
      <div className={styles.mobileSheet} onClick={(e) => e.stopPropagation()}>
        {/* Grab Handle */}
        <div className={styles.sheetHandleWrap} onClick={closeResume}>
          <div className={styles.sheetHandle} />
        </div>

        {/* Sheet Header */}
        <div className={styles.sheetHeader}>
          <div className={styles.sheetIconWrap}>
            <FileText size={24} color="#2563eb" />
          </div>
          <div className={styles.sheetTitleGroup}>
            <h3 className={styles.sheetTitle}>Nithinnaresh — Resume</h3>
            <p className={styles.sheetSub}>PDF Document • Product Designer • 1.08 MB</p>
          </div>
        </div>

        {/* Actions List */}
        <div className={styles.actionGroup}>
          <a
            href={RESUME_PDF_URL}
            download={RESUME_FILENAME}
            className={styles.actionBtnPrimary}
            onClick={closeResume}
          >
            <Download size={19} strokeWidth={2.2} />
            <span>Download Document (PDF)</span>
          </a>

          <a
            href={RESUME_PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.actionBtnSecondary}
            onClick={closeResume}
          >
            <ExternalLink size={18} />
            <span>View Full PDF in Browser</span>
          </a>

          <button
            type="button"
            className={styles.actionBtnSecondary}
            onClick={() => {
              closeResume();
              openContact();
            }}
          >
            <Mail size={18} color="#2563eb" />
            <span>Contact Nithinnaresh</span>
          </button>
        </div>

        {/* Quick Highlights Summary */}
        <div className={styles.sheetHighlights}>
          <div className={styles.highlightsTitle}>Executive Summary</div>
          <ul className={styles.highlightList}>
            <li className={styles.highlightItem}>
              <span className={styles.bulletDot} />
              <span><strong>Linarc</strong>: Led end-to-end design for 6+ interconnected B2B SaaS modules (Safety, Equipment Management, Single & multi-object report generator (editor), and Checklists).</span>
            </li>
            <li className={styles.highlightItem}>
              <span className={styles.bulletDot} />
              <span><strong>Design System</strong>: Established reusable UI patterns (20+ components) and variable token logic for cross-module scalability.</span>
            </li>
            <li className={styles.highlightItem}>
              <span className={styles.bulletDot} />
              <span><strong>Skills</strong>: Enterprise SaaS UX, Information Architecture, Interactive Prototyping, Figma, Design Systems.</span>
            </li>
            <li className={styles.highlightItem}>
              <span className={styles.bulletDot} />
              <span><strong>Education</strong>: B.Sc Visual Comm & PG Program in UI/UX Design.</span>
            </li>
          </ul>
        </div>

        {/* Cancel / Dismiss Button */}
        <button
          type="button"
          className={styles.cancelBtn}
          onClick={closeResume}
        >
          Close
        </button>
      </div>
    </div>
  );
}
