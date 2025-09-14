"use client";
import React from 'react';
import Link from 'next/link';
import { Compass, Mail, Lock } from 'lucide-react';

const LoginPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <Compass size={32} color="#3b82f6" />
          <h1 style={styles.title}>Welcome Back</h1>
        </div>
        <p style={styles.subtitle}>Please enter your details to sign in.</p>
        
        <form style={styles.form}>
          <div style={styles.inputGroup}>
            <Mail size={18} style={styles.inputIcon} />
            <input type="email" placeholder="Email" style={styles.input} />
          </div>
          <div style={styles.inputGroup}>
            <Lock size={18} style={styles.inputIcon} />
            <input type="password" placeholder="Password" style={styles.input} />
          </div>
          <div style={styles.options}>
            <a href="#" style={styles.forgotLink}>Forgot password?</a>
          </div>
          <button type="submit" style={styles.button}>
            Sign In
          </button>
        </form>
        
        <p style={styles.signupText}>
          Don't have an account?{' '}
          <Link href="/onboarding" style={styles.signupLink}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

// Simple inline styles for demonstration
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f7ff',
    fontFamily: 'sans-serif',
  },
  card: {
    backgroundColor: 'white',
    padding: '2.5rem',
    borderRadius: '1rem',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center' as const,
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.75rem',
    marginBottom: '0.5rem',
  },
  title: {
    fontSize: '1.75rem',
    fontWeight: '700',
    color: '#1e293b',
  },
  subtitle: {
    color: '#64748b',
    marginBottom: '2rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1rem',
  },
  inputGroup: {
    position: 'relative' as const,
  },
  input: {
    width: '100%',
    padding: '0.75rem 0.75rem 0.75rem 2.5rem',
    borderRadius: '0.5rem',
    border: '1px solid #cbd5e1',
    fontSize: '1rem',
    boxSizing: 'border-box' as const,
  },
  inputIcon: {
    position: 'absolute' as const,
    left: '0.75rem',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#94a3b8',
  },
  options: {
    display: 'flex',
    justifyContent: 'flex-end',
    fontSize: '0.875rem',
  },
  forgotLink: {
    color: '#3b82f6',
    textDecoration: 'none',
  },
  button: {
    backgroundColor: '#3b82f6',
    color: 'white',
    padding: '0.75rem',
    borderRadius: '0.5rem',
    border: 'none',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '1rem',
  },
  signupText: {
    marginTop: '2rem',
    color: '#64748b',
  },
  signupLink: {
    color: '#3b82f6',
    fontWeight: '600',
    textDecoration: 'none',
  },
};

export default LoginPage;

