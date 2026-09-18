'use client';

import Link from "next/link";
import { useModal } from "@/context/ModalContext";
import styles from "./Footer.module.css";

export default function Footer() {
  const { openContact } = useModal();

  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>© 2026 NITHINNARESH — CRAFTED WITH PRECISION</div>
      <div className={styles.socialLinks}>
        <Link href="https://www.linkedin.com/in/nithinnaresh-r-k-55a553274/" target="_blank" rel="noopener noreferrer">
          LINKEDIN
        </Link>
        <Link href="https://www.behance.net/nithinnareshrk" target="_blank" rel="noopener noreferrer">
          BEHANCE
        </Link>
        <button type="button" onClick={openContact}>
          GMAIL
        </button>
      </div>
    </footer>
  );
}
