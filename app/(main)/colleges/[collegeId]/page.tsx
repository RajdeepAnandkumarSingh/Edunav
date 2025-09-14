'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { MapPin, ArrowLeft, GraduationCap, BookOpen, Users, Award, Building, Calculator, Atom, Cpu, Wrench, Clock, Star, Trophy } from 'lucide-react';
import styles from './page.module.css';

interface Course {
  id: string;
  name: string;
  eligibility: string;
}

interface College {
  id: string;
  name: string;
  location: string;
  courses: Course[];
}

// Mock data for the college - replace with your actual data fetching
const getCollegeData = (id: string): College => {
  const colleges: { [key: string]: College } = {
    '1': {
      id: '1',
      name: 'Government College of Engineering, Karad',
      location: 'Karad, Maharashtra',
      courses: [
        { id: '1', name: 'B.Tech in Civil Engineering', eligibility: '12th Pass with PCM' },
        { id: '2', name: 'B.Tech in Mechanical Engineering', eligibility: '12th Pass with PCM' },
        { id: '3', name: 'B.Tech in Electrical Engineering', eligibility: '12th Pass with PCM' },
        { id: '4', name: 'B.Tech in Computer Engineering', eligibility: '12th Pass with PCM' },
      ]
    },
    '2': {
      id: '2',
      name: 'Veermata Jijabai Technological Institute (VJTI)',
      location: 'Mumbai, Maharashtra',
      courses: [
        { id: '5', name: 'B.Tech in Computer Engineering', eligibility: '12th Pass with PCM' },
        { id: '6', name: 'B.Tech in Information Technology', eligibility: '12th Pass with PCM' },
        { id: '7', name: 'B.Tech in Electronics & Telecommunication', eligibility: '12th Pass with PCM' },
        { id: '8', name: 'B.Tech in Mechanical Engineering', eligibility: '12th Pass with PCM' },
      ]
    },
    '3': {
      id: '3',
      name: 'Sardar Patel College of Engineering (SPCE)',
      location: 'Mumbai, Maharashtra',
      courses: [
        { id: '9', name: 'B.Tech in Structural Engineering', eligibility: '12th Pass with PCM' },
        { id: '10', name: 'B.Tech in Construction Management', eligibility: '12th Pass with PCM' },
        { id: '11', name: 'B.Tech in Civil Engineering', eligibility: '12th Pass with PCM' },
      ]
    }
  };
  
  return colleges[id] || colleges['1'];
};

export default function CollegeDetailPage({ params }: { params: { collegeId: string } }) {
  const college = getCollegeData(params.collegeId);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const coursesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    if (coursesRef.current) observer.observe(coursesRef.current);

    return () => observer.disconnect();
  }, []);

  // Function to get course-specific icon
  const getCourseIcon = (courseName: string) => {
    const name = courseName.toLowerCase();
    if (name.includes('computer') || name.includes('information')) return <Cpu size={24} />;
    if (name.includes('civil') || name.includes('construction')) return <Building size={24} />;
    if (name.includes('mechanical')) return <Wrench size={24} />;
    if (name.includes('electrical') || name.includes('electronics')) return <Atom size={24} />;
    if (name.includes('structural')) return <Calculator size={24} />;
    return <BookOpen size={24} />;
  };

  return (
    <div className={styles.container}>
      {/* Floating educational icons */}
      <div className={styles.floatingIcons}>
        <div className={`${styles.floatingIcon} ${styles.icon1}`}>
          <GraduationCap size={28} />
        </div>
        <div className={`${styles.floatingIcon} ${styles.icon2}`}>
          <BookOpen size={24} />
        </div>
        <div className={`${styles.floatingIcon} ${styles.icon3}`}>
          <Building size={26} />
        </div>
        <div className={`${styles.floatingIcon} ${styles.icon4}`}>
          <Users size={22} />
        </div>
        <div className={`${styles.floatingIcon} ${styles.icon5}`}>
          <Award size={24} />
        </div>
        <div className={`${styles.floatingIcon} ${styles.icon6}`}>
          <Trophy size={20} />
        </div>
        <div className={`${styles.floatingIcon} ${styles.icon7}`}>
          <Star size={22} />
        </div>
        <div className={`${styles.floatingIcon} ${styles.icon8}`}>
          <Clock size={20} />
        </div>
      </div>

      {/* Back button */}
      <div className={styles.backButton}>
        <Link href="/colleges" className={styles.backLink}>
          <ArrowLeft size={20} />
          <span>Back to Colleges</span>
        </Link>
      </div>

      {/* College header */}
      <div className={styles.header} ref={headerRef}>
        <div className={styles.collegeIcon}>
          <Building size={40} />
        </div>
        <div className={styles.collegeInfo}>
          <h1 className={styles.collegeName}>{college.name}</h1>
          <p className={styles.collegeLocation}>
            <MapPin size={18} />
            <span>{college.location}</span>
          </p>
        </div>
      </div>

      {/* Available courses section */}
      <div className={styles.coursesSection} ref={coursesRef}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionIcon}>
            <BookOpen size={32} />
          </div>
          <h2 className={styles.sectionTitle}>Available Courses</h2>
        </div>

        <div className={styles.coursesList}>
          {college.courses.map((course, index) => (
            <div 
              key={course.id} 
              className={styles.courseCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.courseHeader}>
                <div className={styles.courseIcon}>
                  {getCourseIcon(course.name)}
                </div>
                <div className={styles.courseInfo}>
                  <h3 className={styles.courseName}>{course.name}</h3>
                  <p className={styles.courseEligibility}>
                    <Clock size={16} />
                    <span>{course.eligibility}</span>
                  </p>
                </div>
              </div>
              <div className={styles.courseActions}>
                <button className={styles.learnMoreBtn}>
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* College stats/info cards */}
      <div className={styles.infoCards}>
        <div className={styles.infoCard}>
          <div className={styles.infoIcon}>
            <Users size={24} />
          </div>
          <div className={styles.infoContent}>
            <h3>5000+</h3>
            <p>Students</p>
          </div>
        </div>
        <div className={styles.infoCard}>
          <div className={styles.infoIcon}>
            <Award size={24} />
          </div>
          <div className={styles.infoContent}>
            <h3>NAAC A+</h3>
            <p>Accredited</p>
          </div>
        </div>
        <div className={styles.infoCard}>
          <div className={styles.infoIcon}>
            <Trophy size={24} />
          </div>
          <div className={styles.infoContent}>
            <h3>95%</h3>
            <p>Placement Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
}