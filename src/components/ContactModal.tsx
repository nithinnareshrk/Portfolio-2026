'use client';

import React, { useRef, useState } from 'react';
import { useModal } from '@/context/ModalContext';
import { 
  Mail, 
  Copy, 
  Check, 
  X, 
  ArrowUpRight, 
  Phone, 
  Globe, 
  Send
} from 'lucide-react';
import styles from './ContactModal.module.css';

function LinkedInIcon({ size = 20, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
const Linkedin = LinkedInIcon;

const GMAIL_ADDRESS = 'nithinnareshrk@gmail.com';
const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(GMAIL_ADDRESS)}`;
const LINKEDIN_URL = 'https://www.linkedin.com/in/nithinnaresh-r-k-55a553274/';
const PHONE_NUMBER = '+91-7538882164';
const WHATSAPP_URL = 'https://wa.me/917538882164';
const BEHANCE_URL = 'https://www.behance.net/nithinnareshrk';

export default function ContactModal() {
  const { isContactOpen, closeContact } = useModal();
  const backdropRef = useRef<HTMLDivElement>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  if (!isContactOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === backdropRef.current) {
      closeContact();
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(GMAIL_ADDRESS);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      // Fallback
    }
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(PHONE_NUMBER);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2200);
    } catch {
      // Fallback
    }
  };

  return (
    <div 
      className={styles.backdrop} 
      ref={backdropRef}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      {/* ── DESKTOP POPUP MODAL ── */}
      <div className={styles.dialog} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.statusPill}>
              <span className={styles.statusDot} />
              <span>Available for Roles & Projects</span>
            </div>
            <h2 id="contact-modal-title" className={styles.title}>
              Let&apos;s Connect
            </h2>
            <p className={styles.subtitle}>
              Product Designer • Workflow & Enterprise SaaS • Chennai, India
            </p>
          </div>

          <button
            type="button"
            className={styles.closeBtn}
            onClick={closeContact}
            aria-label="Close modal"
          >
            <X size={20} strokeWidth={2.2} />
          </button>
        </div>

        {/* Content Body */}
        <div className={styles.content}>
          {/* Primary: Gmail Compose */}
          <div className={styles.primaryCard}>
            <div className={styles.channelRow}>
              <div className={styles.channelIconWrapGmail}>
                <Mail size={24} color="#2563eb" strokeWidth={2.2} />
              </div>
              <div className={styles.channelInfo}>
                <span className={styles.channelLabel}>Direct Email</span>
                <div className={styles.channelValue}>{GMAIL_ADDRESS}</div>
              </div>
            </div>

            <div className={styles.gmailActions}>
              <a
                href={GMAIL_COMPOSE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.composeBtn}
              >
                <Send size={16} strokeWidth={2.2} />
                <span>Open in Gmail Compose</span>
              </a>

              <button
                type="button"
                className={`${styles.copyBtn} ${copiedEmail ? styles.copied : ''}`}
                onClick={handleCopyEmail}
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <Check size={16} strokeWidth={2.5} />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Secondary: LinkedIn */}
          <div className={styles.secondaryCard}>
            <div className={styles.channelRow}>
              <div className={styles.channelIconWrapLinkedIn}>
                <LinkedInIcon size={22} color="#ffffff" />
              </div>
              <div className={styles.channelInfo}>
                <span className={styles.channelLabel} style={{ color: '#0077b5' }}>Professional Profile</span>
                <div className={styles.channelValue}>linkedin.com/in/nithinnaresh</div>
              </div>
            </div>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkedInBtn}
            >
              <span>Connect</span>
              <ArrowUpRight size={15} />
            </a>
          </div>

          {/* Other Channels: Phone & Behance */}
          <div className={styles.otherGrid}>
            <a
              href={`tel:${PHONE_NUMBER.replace(/[^0-9+]/g, '')}`}
              className={styles.otherChannel}
              title="Call directly"
            >
              <Phone size={18} className={styles.otherIcon} />
              <span>{PHONE_NUMBER}</span>
            </a>

            <a
              href={BEHANCE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.otherChannel}
              title="View Behance Portfolio"
            >
              <Globe size={18} className={styles.otherIcon} />
              <span>behance.net/nithinnareshrk</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── MOBILE ACTION SHEET / ANDROID BOTTOM SHEET ── */}
      <div className={styles.mobileSheet} onClick={(e) => e.stopPropagation()}>
        <div className={styles.sheetHandleWrap} onClick={closeContact}>
          <div className={styles.sheetHandle} />
        </div>

        <div className={styles.sheetHeader}>
          <h3 className={styles.sheetTitle}>Get in Touch</h3>
          <p className={styles.sheetSub}>Nithinnaresh — Product Designer</p>
        </div>

        <div className={styles.sheetActions}>
          {/* Gmail Compose */}
          <a
            href={GMAIL_COMPOSE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.actionItem} ${styles.actionItemHighlight}`}
            onClick={closeContact}
          >
            <div className={styles.actionItemLeft}>
              <Mail size={22} color="#2563eb" strokeWidth={2.2} />
              <div className={styles.actionItemText}>
                <span className={styles.actionItemTitle}>Compose in Gmail</span>
                <span className={styles.actionItemSub}>{GMAIL_ADDRESS}</span>
              </div>
            </div>
            <ArrowUpRight size={18} color="#2563eb" />
          </a>

          {/* LinkedIn */}
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.actionItem}
            onClick={closeContact}
          >
            <div className={styles.actionItemLeft}>
              <LinkedInIcon size={22} color="#0077b5" />
              <div className={styles.actionItemText}>
                <span className={styles.actionItemTitle}>LinkedIn Profile</span>
                <span className={styles.actionItemSub}>View experience & recommendations</span>
              </div>
            </div>
            <ArrowUpRight size={18} color="#64748b" />
          </a>

          {/* WhatsApp / Call */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.actionItem}
            onClick={closeContact}
          >
            <div className={styles.actionItemLeft}>
              <Phone size={22} color="#16a34a" />
              <div className={styles.actionItemText}>
                <span className={styles.actionItemTitle}>WhatsApp / Call</span>
                <span className={styles.actionItemSub}>{PHONE_NUMBER}</span>
              </div>
            </div>
            <ArrowUpRight size={18} color="#64748b" />
          </a>

          {/* Copy Email */}
          <button
            type="button"
            className={styles.actionItem}
            onClick={handleCopyEmail}
            style={{ width: '100%', textAlign: 'left', cursor: 'pointer' }}
          >
            <div className={styles.actionItemLeft}>
              {copiedEmail ? (
                <Check size={22} color="#059669" />
              ) : (
                <Copy size={22} color="#64748b" />
              )}
              <div className={styles.actionItemText}>
                <span className={styles.actionItemTitle}>
                  {copiedEmail ? 'Email Copied!' : 'Copy Email Address'}
                </span>
                <span className={styles.actionItemSub}>{GMAIL_ADDRESS}</span>
              </div>
            </div>
          </button>
        </div>

        <button
          type="button"
          className={styles.cancelBtn}
          onClick={closeContact}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
