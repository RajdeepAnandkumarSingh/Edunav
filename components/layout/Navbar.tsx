'use client'; // Required for using Next.js Link and other client-side components

import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { Compass, User } from 'lucide-react'; // We'll use a User icon for the profile

export function Navbar() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        {/* Logo and App Name */}
        <Link href="/dashboard" className={styles.logoContainer}>
          <Compass size={28} className={styles.logoIcon} />
          <span>EDUNAV</span>
        </Link>

        {/* Navigation Links */}
        <nav className={styles.navLinks}>
          <Link href="/dashboard" className={styles.navLink}>
            Dashboard
          </Link>
          <Link href="/colleges" className={styles.navLink}>
            Colleges
          </Link>
          <Link href="/quest" className={styles.navLink}>
            Career Quest
          </Link>
        </nav>

        {/* Profile Icon */}
        <div className={styles.profileIcon}>
          <User size={20} />
        </div>
      </div>
    </header>
  );
}

