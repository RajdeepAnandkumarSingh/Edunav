import React from 'react';
import { GraduationCap } from "lucide-react";

// You would typically have a proper CSS module for this, but for simplicity:
const navStyles: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 2rem',
  backgroundColor: 'white',
  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
};

const logoStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '1.25rem',
    fontWeight: '700',
    color: '#1a202c',
    textDecoration: 'none',
};

const navLinksStyles: React.CSSProperties = {
    display: 'flex',
    gap: '2rem',
};

const linkStyles: React.CSSProperties = {
    color: '#4a5568',
    textDecoration: 'none',
    fontWeight: '500',
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav style={navStyles}>
        <a href="/dashboard" style={logoStyles}>
          <GraduationCap size={28} strokeWidth={2} />
          <span>EDUNAV</span>
        </a>
        <div style={navLinksStyles}>
          <a href="/dashboard" style={linkStyles}>Dashboard</a>
          <a href="/about" style={linkStyles}>About</a>
          <a href="/colleges" style={linkStyles}>Colleges</a>
          <a href="/quest" style={linkStyles}>Career Quest</a>
          <a href="/alumni" style={linkStyles}>Alumni</a>
           <a href="/counselling" style={linkStyles}>Counselling</a>
        </div>
        <div>
          <a href="/login" style={linkStyles}>Login</a>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
}

