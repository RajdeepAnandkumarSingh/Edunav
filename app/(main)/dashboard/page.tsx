"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  BookOpen,
  Map,
  Compass,
  BrainCircuit,
  Star,
  Users,
  ChevronDown,
} from "lucide-react";
import styles from "./page.module.css";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  delay?: number;
}
interface CareerCardProps {
  image: string;
  title: string;
  delay?: number;
}

function FeatureCard({ icon, title, description, href, delay = 0 }: FeatureCardProps) {
  return (
    <Link href={href} className={styles.featureCardLink}>
      <div
        className={styles.featureCardWrapper}
        style={{ animationDelay: `${delay}ms` }}
      >
        <div className={styles.featureCard}>
          <div className={styles.iconContainer}>
            <div className={styles.iconWrapper}>{icon}</div>
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDescription}>{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

function CareerCard({ image, title, delay = 0 }: CareerCardProps) {
  const [imageError, setImageError] = useState(false);
  return (
    <div className={styles.careerCardWrapper} style={{ animationDelay: `${delay}ms` }}>
      {!imageError && <div className={styles.gradientOverlay}></div>}
      {!imageError ? (
        <img src={image} alt={title} className={styles.careerImage} onError={() => setImageError(true)} />
      ) : (
        <div className={styles.fallbackImage}>
          <div className={styles.fallbackIcon}><BrainCircuit size={32} /></div>
          <span className={styles.fallbackText}>{title}</span>
        </div>
      )}
      <div className={styles.careerLabelContainer}>
        <div className={styles.careerLabel}><h4 className={styles.careerTitle}>{title}</h4></div>
      </div>
    </div>
  );
}

const thoughts = [
  { text: "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.", author: "Malcolm X" },
  { text: "The best way to predict your future is to create it.", author: "Abraham Lincoln" },
  { text: "Choose a job you love, and you will never have to work a day in your life.", author: "Confucius" },
  { text: "The beautiful thing about learning is that no one can take it away from you.", author: "B.B. King" }
];

export default function DashboardPage() {
  const [randomThought, setRandomThought] = useState({ text: "", author: "" });
  const sectionRefs = useRef<Array<HTMLElement | null>>([]);
  const [inViewMap, setInViewMap] = useState<Record<number, boolean>>({});
  const particleColors = [
    "rgba(96,165,250,0.85)",
    "rgba(59,130,246,0.75)",
    "rgba(147,197,253,0.6)",
    "rgba(191,219,254,0.55)"
  ];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * thoughts.length);
    setRandomThought(thoughts[randomIndex]);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const idxAttr = (entry.target as HTMLElement).dataset.index;
          if (!idxAttr) return;
          const idx = Number(idxAttr);
          setInViewMap(prev => ({ ...prev, [idx]: entry.isIntersecting }));
        });
      },
      { threshold: 0.5 }
    );
    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const featureCards: FeatureCardProps[] = [
    { icon: <BookOpen size={28} />, title: "Nearby Colleges", description: "Explore a filterable directory of government colleges.", href: "/colleges", delay: 0 },
    { icon: <BrainCircuit size={28} />, title: "Career Quest", description: "Take our fun, gamified quiz to find your perfect career.", href: "/quest", delay: 100 },
    { icon: <Map size={28} />, title: "Course-to-Career Mapper", description: "See a visual map of where different degrees can take you.", href: "/map", delay: 200 },
    { icon: <Compass size={28} />, title: "Alumni Stories", description: "Get inspired by watching stories from successful alumni.", href: "/stories", delay: 300 },
    { icon: <Star size={28} />, title: "Why EDUNAV?", description: "Discover the unique features that make our platform the best choice.", href: "/why-edunav", delay: 400 },
    { icon: <Users size={28} />, title: "One-to-One Counseling", description: "Schedule a personalized session with a career expert.", href: "/counseling", delay: 500 },
  ];

  const careerCards = [
    { image: "/images/web developer.jpg", title: "Web Developer", delay: 0 },
    { image: "/images/teacher.jpg", title: "Teacher", delay: 100 },
    { image: "/images/Doctor.jpg", title: "Doctor", delay: 200 },
    { image: "/images/photographer.jpg", title: "Photographer", delay: 300 },
    { image: "/images/Archaeologist.jpg", title: "Archaeologist", delay: 0 },
    { image: "/images/Pilot.jpg", title: "Pilot", delay: 100 },
    { image: "/images/Defence.jpg", title: "Defence", delay: 200 },
    { image: "/images/Lawyer.jpg", title: "Lawyer", delay: 300 },
  ];

  function particleStyle(i: number) {
    const left = Math.random() * 100;
    const size = 4 + Math.random() * 12;
    const dur = 5 + Math.random() * 7;
    const delay = Math.random() * dur;
    const drift = (Math.random() - 0.5) * 40;
    const color = particleColors[Math.floor(Math.random() * particleColors.length)];
    return {
      ["--left" as any]: `${left}%`,
      ["--size" as any]: `${size}px`,
      ["--dur" as any]: `${dur}s`,
      ["--delay" as any]: `${delay}s`,
      ["--drift" as any]: `${drift}px`,
      ["--color" as any]: color,
    } as React.CSSProperties;
  }

  return (
    <div className={styles.scrollContainer}>
      <div className={styles.background}></div>

      {/* Page 1 */}
      <section
        ref={(el) => (sectionRefs.current[0] = el)}
        data-index="0"
        className={`${styles.pageSection} ${inViewMap[0] ? styles.inView : ""}`}
      >
        <div className={styles.sectionParticles}>
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} className={styles.particle} style={particleStyle(i)} />
          ))}
        </div>

        <div className={styles.heroBox}>
          <h1 className={styles.heroTitle}>Welcome back, Student!</h1>

          {randomThought.text && (
            <div className={styles.quoteContent}>
              <p className={styles.welcomeSubtitle}>"{randomThought.text}"</p>
              <p className={styles.welcomeAuthor}>- {randomThought.author}</p>
            </div>
          )}

          <p className={styles.promisingLine}>
            EDUNAV is here to guide you on your journey to success.
          </p>
        </div>

        <div className={styles.scrollIndicator}><ChevronDown size={24} /></div>
      </section>

      {/* Page 2 */}
      <section
        ref={(el) => (sectionRefs.current[1] = el)}
        data-index="1"
        className={`${styles.pageSection} ${inViewMap[1] ? styles.inView : ""}`}
      >
        <div className={styles.sectionParticles}>
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} className={styles.particle} style={particleStyle(i)} />
          ))}
        </div>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Discover Careers You Could Explore</h2>
          <div className={styles.careerGrid}>
            {careerCards.map((card) => (
              <CareerCard key={card.title} image={card.image} title={card.title} delay={card.delay} />
            ))}
          </div>
        </div>
      </section>

      {/* Page 3 */}
      <section
        ref={(el) => (sectionRefs.current[2] = el)}
        data-index="2"
        className={`${styles.pageSection} ${inViewMap[2] ? styles.inView : ""}`}
      >
        <div className={styles.sectionParticles}>
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} className={styles.particle} style={particleStyle(i)} />
          ))}
        </div>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Explore Our Features</h2>
          <div className={styles.cardGrid}>
            {featureCards.map((card) => (
              <FeatureCard key={card.title} icon={card.icon} title={card.title} description={card.description} href={card.href} delay={card.delay} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
