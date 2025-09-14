"use client";
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { BookOpen, Star, Lightbulb, Users, Pencil, Target } from 'lucide-react';
import styles from './page.module.css';

const AboutPage = () => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentCardRef = cardRef.current;
    if (currentCardRef) {
      observer.observe(currentCardRef);
    }

    return () => {
      if (currentCardRef) {
        observer.unobserve(currentCardRef);
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      {/* Decorative floating icons */}
      <div className={styles.floatingIcons}>
        <div className={`${styles.floatingIcon} ${styles.icon1}`}>
          <BookOpen size={24} />
        </div>
        <div className={`${styles.floatingIcon} ${styles.icon2}`}>
          <Star size={20} />
        </div>
        <div className={`${styles.floatingIcon} ${styles.icon3}`}>
          <Lightbulb size={28} />
        </div>
        <div className={`${styles.floatingIcon} ${styles.icon4}`}>
          <Target size={22} />
        </div>
        <div className={`${styles.floatingIcon} ${styles.icon5}`}>
          <Users size={26} />
        </div>
        <div className={`${styles.floatingIcon} ${styles.icon6}`}>
          <Pencil size={20} />
        </div>
        <div className={`${styles.floatingIcon} ${styles.icon7}`}>
          <Star size={18} />
        </div>
        <div className={`${styles.floatingIcon} ${styles.icon8}`}>
          <BookOpen size={22} />
        </div>
      </div>

      <div className={styles.card} ref={cardRef}>
        <div className={styles.header}>
          <h1 className={styles.title}>About EDUNAV</h1>
        </div>

        <div className={styles.content}>
          <p className={styles.paragraph}>
            At Edunav, we believe every student deserves access to the right guidance, at the right time, in a way that fits their learning style. Our mission is to empower students from government colleges and underserved communities by providing personalized, real-time career advice using the latest advancements in artificial intelligence.
          </p>
          <p className={styles.paragraph}>
            Built on deep personalization and local insights, Edunav goes beyond traditional career counseling. Our platform offers interactive learning journeys, audio-based mentorship, and instant access to opportunities. Whether it's exploring new courses, preparing for exams, connecting with alumni or finding colleges, we're here to help students navigate their path with confidence.
          </p>
          <p className={styles.paragraph}>
            With a powerful AI Mentor, gamified "Career Quests," and a dynamic chatbot assistant, Edunav is designed to make career planning engaging, relatable, and accessible. We collaborate with educational institutions, alumni networks, and local organizations to ensure every student can unlock their full potential.
          </p>
          <p className={styles.tagline}>
            Your career, your way — guided by AI, powered by community.
          </p>
        </div>

        <Link href="/dashboard" className={styles.backLink}>
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;