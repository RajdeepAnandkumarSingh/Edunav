'use client'; // Required for using event handlers like onClick

import React from 'react';
import Link from 'next/link';
// This is how we import the styles specifically for this page
import styles from './page.module.css';
// We'll use our awesome reusable button component
import { Button } from '../components/ui/Button';
// Let's add a nice icon for the logo. You'll need to install lucide-react.
import { Compass } from 'lucide-react';

export default function WelcomePage() {
  return (
    <main className={styles.main}>
      {/* This is the main card with the hover effect.
        We assign the class name from our styles object. */}
      <div className={styles.card}>
        <Compass className={styles.logo} />
        <h1 className={styles.title}>EDUNAV</h1>
        <p className={styles.description}>
          Your Personalized Path to a Brighter Future. Unlock your potential and find the right college and career path designed just for you.
        </p>
        <div className={styles.buttonGroup}>
          <Link href="/dashboard">
            <Button size="large">Get Started</Button>
          </Link>
          <Link href="/login">
            <Button variant="secondary" size="large">
              Login
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
// This is a new comment to trigger a fresh build
// Final push to Vercel
