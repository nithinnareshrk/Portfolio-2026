'use client';
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LayoutGrid, Folder, User, FileText, Mail, Maximize2 } from "lucide-react";
import styles from "./Sidebar.module.css";

import { useModal } from "@/context/ModalContext";

export default function Sidebar() {
  const pathname = usePathname();
  const [isAvatarExpanded, setIsAvatarExpanded] = useState(false);
  const { openResume, openContact, isResumeOpen, isContactOpen } = useModal();

  const handleAvatarClick = () => {
    setIsAvatarExpanded((prev) => !prev);
  };

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <aside className={styles.sidebar} aria-label="Main Navigation Sidebar">
      {/* Profile */}
      <div className={styles.profileSection}>
        <div 
          className={`${styles.avatar} ${isAvatarExpanded ? styles.expanded : ""}`}
          onClick={handleAvatarClick}
          role="button"
          tabIndex={0}
          aria-expanded={isAvatarExpanded}
          aria-label={isAvatarExpanded ? "Collapse portrait" : "Expand portrait"}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleAvatarClick();
            }
          }}
        >
          <Image
            src="/images/photo.jpg"
            alt="Nithinnaresh - Product Designer"
            width={400}
            height={400}
            className={styles.avatarImg}
            priority
          />
          <div className={styles.expandOverlay}>
            <Maximize2 size={24} color="#ffffff" strokeWidth={2} />
          </div>
        </div>
        <div className={styles.profileText}>
          <h2 className={styles.name}>Nithinnaresh</h2>
          <p className={styles.role}>Product Designer</p>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={styles.mainNav}>
        <Link
          href="/"
          className={`${styles.navLink} ${isActive("/") ? styles.active : ""}`}
        >
          <div className={styles.iconContainer}>
            <LayoutGrid size={24} strokeWidth={1.8} />
          </div>
          <span>Overview</span>
        </Link>
        <Link
          href="/works"
          className={`${styles.navLink} ${isActive("/works") ? styles.active : ""}`}
        >
          <div className={styles.iconContainer}>
            <Folder size={24} strokeWidth={1.8} />
          </div>
          <span>Works</span>
        </Link>
        <Link
          href="/about"
          className={`${styles.navLink} ${isActive("/about") ? styles.active : ""}`}
        >
          <div className={styles.iconContainer}>
            <User size={24} strokeWidth={1.8} />
          </div>
          <span>About me</span>
        </Link>
      </nav>

      {/* Bottom Nav */}
      <div className={styles.bottomNav}>
        <button
          type="button"
          onClick={openResume}
          className={`${styles.navLink} ${styles.secondary} ${styles.navBtn} ${isResumeOpen ? styles.active : ""}`}
          aria-label="Open Resume Document Preview and Download"
        >
          <div className={styles.iconContainer}>
            <FileText size={24} strokeWidth={1.8} />
          </div>
          <span>Resume</span>
        </button>
        <button
          type="button"
          onClick={openContact}
          className={`${styles.navLink} ${styles.secondary} ${styles.navBtn} ${isContactOpen ? styles.active : ""}`}
          aria-label="Open Contact Information"
        >
          <div className={styles.iconContainer}>
            <Mail size={24} strokeWidth={1.8} />
          </div>
          <span>Contact</span>
        </button>
      </div>
    </aside>
  );
}
