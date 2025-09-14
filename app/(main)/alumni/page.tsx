"use client";

import React, { useEffect, useRef } from 'react';
import { Linkedin, Briefcase, Calendar } from 'lucide-react';
import styles from './page.module.css';

const alumniData = [
  {
    name: 'Priya Sharma',
    year: 2020,
    role: 'Software Engineer at Google',
    testimonial: 'EDUNAV helped me find the right college and career path. The resources and counseling were invaluable.',
    imageUrl: 'https://placehold.co/150x150/a0aec0/ffffff?text=PS',
    linkedinUrl: '#',
  },
  {
    name: 'Raj Patel',
    year: 2019,
    role: 'Product Manager at Microsoft',
    testimonial: 'The career quest feature accurately identified my strengths and interests, guiding me towards a fulfilling career in tech.',
    imageUrl: 'https://placehold.co/150x150/90cdf4/ffffff?text=RP',
    linkedinUrl: '#',
  },
  {
    name: 'Anjali Menon',
    year: 2021,
    role: 'UX Designer at Adobe',
    testimonial: 'Thanks to EDUNAV, I turned my passion for art and technology into a successful career.',
    imageUrl: 'https://placehold.co/150x150/fbb6ce/ffffff?text=AM',
    linkedinUrl: '#',
  },
  {
    name: 'Vikram Singh',
    year: 2018,
    role: 'Data Scientist at Amazon',
    testimonial: 'The course-to-career mapper opened doors I never knew existed for a statistics degree.',
    imageUrl: 'https://placehold.co/150x150/f6e05e/ffffff?text=VS',
    linkedinUrl: '#',
  },
  {
    name: 'Nisha Kumar',
    year: 2022,
    role: 'Machine Learning Engineer at NVIDIA',
    testimonial: 'I loved how intuitive the platform was. It helped me understand the job market and map my career goals effectively.',
    imageUrl: 'https://placehold.co/150x150/48bb78/ffffff?text=NK',
    linkedinUrl: '#',
  },
  {
    name: 'Amit Joshi',
    year: 2020,
    role: 'Cloud Solutions Architect at IBM',
    testimonial: 'The 1-on-1 counseling sessions were game-changing for me. EDUNAV made career planning stress-free.',
    imageUrl: 'https://placehold.co/150x150/ed8936/ffffff?text=AJ',
    linkedinUrl: '#',
  },
  {
    name: 'Meera Desai',
    year: 2017,
    role: 'Cybersecurity Specialist at Palo Alto Networks',
    testimonial: 'EDUNAV\'s resources helped me understand industry demands and tailor my skills perfectly.',
    imageUrl: 'https://placehold.co/150x150/667eea/ffffff?text=MD',
    linkedinUrl: '#',
  },
  {
    name: 'Rohan Verma',
    year: 2019,
    role: 'AI Researcher at OpenAI',
    testimonial: 'The platform gave me clarity on which AI paths matched my strengths and ambitions.',
    imageUrl: 'https://placehold.co/150x150/f56565/ffffff?text=RV',
    linkedinUrl: '#',
  },
  {
    name: 'Kavya Iyer',
    year: 2023,
    role: 'DevOps Engineer at Netflix',
    testimonial: 'EDUNAV\'s industry insights and skill assessments helped me transition from development to DevOps seamlessly.',
    imageUrl: 'https://placehold.co/150x150/0ea5e9/ffffff?text=KI',
    linkedinUrl: '#',
  },
];

const FloatingElements = () => {
  return (
    <div className={styles.floatingElements}>
      <div className={`${styles.floatingElement} ${styles.float1}`}>🎓</div>
      <div className={`${styles.floatingElement} ${styles.float2}`}>⭐</div>
      <div className={`${styles.floatingElement} ${styles.float3}`}>🏆</div>
      <div className={`${styles.floatingElement} ${styles.float4}`}>💼</div>
      <div className={`${styles.floatingElement} ${styles.float5}`}>🚀</div>
      <div className={`${styles.floatingElement} ${styles.float6}`}>💡</div>
    </div>
  );
};

const LoadingSpinner = ({ isVisible }: { isVisible: boolean }) => {
  if (!isVisible) return null;

  return <div className={styles.loadingSpinner}></div>;
};

const AlumniCard = ({
  name,
  year,
  role,
  testimonial,
  imageUrl,
  linkedinUrl,
  index
}: typeof alumniData[0] & { index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cardRef.current) {
        cardRef.current.classList.add(styles.visible);
      }
    }, index * 150);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={styles.card}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={styles.cardHeader}>
        <img
          src={imageUrl}
          alt={`Profile of ${name}`}
          className={styles.profileImage}
        />
        <div className={styles.headerText}>
          <h2 className={styles.name}>{name}</h2>
          <div className={styles.meta}>
            <span className={styles.metaItem}>
              <Calendar size={16} />
              Graduated {year}
            </span>
            <span className={styles.metaItem}>
              <Briefcase size={16} />
              {role}
            </span>
          </div>
        </div>
      </div>
      <p className={styles.testimonial}>"{testimonial}"</p>
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.linkedinButton}
      >
        <Linkedin size={18} />
        View Profile
      </a>
    </div>
  );
};

export default function AlumniPage() {
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      const floatingElements = document.querySelectorAll(`.${styles.floatingElement}`);

      floatingElements.forEach((element, index) => {
        const htmlElement = element as HTMLElement;
        htmlElement.style.transform = `translateY(${rate * (index + 1) * 0.1}px) rotate(${scrolled * 0.1}deg)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.style.animationPlayState = 'running';
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll(`.${styles.card}`);
    cards.forEach(card => observer.observe(card));

    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, [isLoading]);

  return (
    <>
      <LoadingSpinner isVisible={isLoading} />
      <FloatingElements />

      <div className={styles.pageContainer}>
        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>Our Inspiring Alumni</h1>

          <p className={styles.subtitle}>
            Connect with past graduates, explore their success journeys, discover real-world career paths, and grow your network in the EDUNAV ecosystem.
          </p>

          <div className={styles.grid}>
            {alumniData.map((alumnus, index) => (
              <AlumniCard key={index} {...alumnus} index={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
