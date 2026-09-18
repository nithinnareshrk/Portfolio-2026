'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutGrid, Folder, User } from 'lucide-react';
import styles from './MobileBottomNav.module.css';

const NAV_ITEMS = [
  {
    label: 'Overview',
    href: '/',
    icon: LayoutGrid,
    exact: true,
  },
  {
    label: 'Works',
    href: '/works',
    icon: Folder,
    exact: false,
  },
  {
    label: 'About',
    href: '/about',
    icon: User,
    exact: false,
  },
];

export default function MobileBottomNav() {
  const pathname = usePathname();

  const isItemActive = (href: string, exact: boolean) => {
    if (exact) return pathname === href;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <nav className={styles.bottomNavContainer} aria-label="Mobile Navigation">
      <div className={styles.navPill}>
        {NAV_ITEMS.map((item) => {
          const active = isItemActive(item.href, item.exact);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.navItem} ${active ? styles.navItemActive : ""}`}
              aria-current={active ? "page" : undefined}
            >
              <div className={styles.iconWrap}>
                <Icon size={19} strokeWidth={active ? 2.3 : 1.8} />
                {active && <span className={styles.activeDot} />}
              </div>
              <span className={styles.navLabel}>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
