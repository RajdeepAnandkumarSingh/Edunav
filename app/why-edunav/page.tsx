"use client";
import React from 'react';
import Link from 'next/link';
import { Bot, Users, Mic } from 'lucide-react';

const WhyEduNavPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Why Choose EDUNAV?</h1>
        <p style={styles.subtitle}>Your personalized guide to a successful future, designed for you.</p>
        
        <div style={styles.pointsContainer}>
          <div style={styles.point}>
            <div style={styles.iconWrapper}>
              <Bot size={24} color="#3b82f6" />
            </div>
            <div>
              <h2 style={styles.pointTitle}>Conversational AI Discovery</h2>
              <p style={styles.pointDescription}>
                Starts by asking you questions, not filling forms. Our AI agents analyze your responses to build a truly personalized career roadmap.
              </p>
            </div>
          </div>

          <div style={styles.point}>
            <div style={styles.iconWrapper}>
              <Users size={24} color="#3b82f6" />
            </div>
            <div>
              <h2 style={styles.pointTitle}>Inspiring Local Stories</h2>
              <p style={styles.pointDescription}>
                Builds trust with real success stories from alumni of your nearby government colleges, making success feel relatable and achievable.
              </p>
            </div>
          </div>

          <div style={styles.point}>
            <div style={styles.iconWrapper}>
              <Mic size={24} color="#3b82f6" />
            </div>
            <div>
              <h2 style={styles.pointTitle}>Personalized Audio Briefings</h2>
              <p style={styles.pointDescription}>
                Generates on-demand podcast summaries of your AI-generated advice, offering accessible mentoring for students on the go.
              </p>
            </div>
          </div>
        </div>

        <Link href="/dashboard" style={styles.backLink}>
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

// Inline styles for a clean presentation
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f7ff',
    padding: '2rem',
    fontFamily: 'sans-serif',
  },
  card: {
    backgroundColor: 'white',
    padding: '3rem',
    borderRadius: '1.5rem',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '800px',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#1e293b',
    textAlign: 'center' as const,
    marginBottom: '0.5rem',
  },
  subtitle: {
    textAlign: 'center' as const,
    color: '#64748b',
    marginBottom: '3rem',
    fontSize: '1.1rem',
  },
  pointsContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '2rem',
  },
  point: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1.5rem',
  },
  iconWrapper: {
    backgroundColor: '#e0f2fe',
    borderRadius: '50%',
    padding: '0.75rem',
    display: 'inline-flex',
  },
  pointTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: '0.25rem',
  },
  pointDescription: {
    color: '#475569',
    lineHeight: '1.6',
  },
  backLink: {
    display: 'block',
    textAlign: 'center' as const,
    marginTop: '3rem',
    color: '#3b82f6',
    fontWeight: '600',
    textDecoration: 'none',
  },
};

export default WhyEduNavPage;

