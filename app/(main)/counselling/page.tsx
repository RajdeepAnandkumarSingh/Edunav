"use client";
import React from 'react';
import Link from 'next/link';
import { Users } from 'lucide-react';

const CounselingPage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', flexDirection: 'column', backgroundColor: '#f0f7ff', padding: '2rem', fontFamily: 'sans-serif' }}>
      <div style={{ backgroundColor: 'white', padding: '3rem', borderRadius: '1.5rem', boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)', maxWidth: '600px', textAlign: 'center' }}>
        <Users size={48} color="#3b82f6" style={{ marginBottom: '1.5rem' }} />
        <h1 style={{ fontSize: '2.25rem', fontWeight: '700', color: '#1a202c', marginBottom: '1rem' }}>
          One-to-One Counseling
        </h1>
        <p style={{ color: '#374151', fontSize: '1.1rem', lineHeight: '1.7' }}>
          This feature is coming soon! Get ready to connect with experienced career counselors for personalized guidance tailored to your unique strengths and aspirations.
        </p>
      </div>
      <Link href="/dashboard" style={{ textDecoration: 'none', color: '#3b82f6', fontWeight: '600', marginTop: '2rem' }}>
        Back to Dashboard
      </Link>
    </div>
  );
};

export default CounselingPage;
