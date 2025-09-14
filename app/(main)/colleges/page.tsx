'use client'; 

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import { Search, MapPin, GraduationCap, BookOpen, Users, Award, Building, Calculator, Atom, Cpu, Wrench } from 'lucide-react';

// Temporary mock data - replace with your actual imports once you have them
interface Course {
  id: string;
  name: string;
}

interface College {
  id: string;
  name: string;
  location: string;
  courses: Course[];
}

const mockColleges: College[] = [
  {
    id: '1',
    name: 'Government College of Engineering, Karad',
    location: 'Karad, Maharashtra',
    courses: [
      { id: '1', name: 'B.Tech in Civil Engineering' },
      { id: '2', name: 'B.Tech in Mechanical Engineering' },
      { id: '3', name: 'B.Tech in Electrical Engineering' },
      { id: '4', name: 'B.Tech in Computer Engineering' },
    ]
  },
  {
    id: '2',
    name: 'Veermata Jijabai Technological Institute (VJTI)',
    location: 'Mumbai, Maharashtra',
    courses: [
      { id: '5', name: 'B.Tech in Computer Engineering' },
      { id: '6', name: 'B.Tech in Information Technology' },
      { id: '7', name: 'B.Tech in Electronics & Telecommunication' },
      { id: '8', name: 'B.Tech in Mechanical Engineering' },
    ]
  },
  {
    id: '3',
    name: 'Sardar Patel College of Engineering (SPCE)',
    location: 'Mumbai, Maharashtra',
    courses: [
      { id: '9', name: 'B.Tech in Structural Engineering' },
      { id: '10', name: 'B.Tech in Construction Management' },
      { id: '11', name: 'B.Tech in Civil Engineering' },
    ]
  },
  {
    id: '4',
    name: 'College of Engineering Pune (CoEP)',
    location: 'Pune, Maharashtra',
    courses: [
      { id: '12', name: 'B.Tech in Computer Engineering' },
      { id: '13', name: 'B.Tech in Electrical Engineering' },
      { id: '14', name: 'B.Tech in Mechanical Engineering' },
      { id: '15', name: 'B.Tech in Electronics Engineering' },
    ]
  }
];

export default function CollegesPage() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter colleges based on the search term
  const filteredColleges = mockColleges.filter((college) =>
    college.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to get course-specific icon
  const getCourseIcon = (courseName: string) => {
    const name = courseName.toLowerCase();
    if (name.includes('computer') || name.includes('information')) return <Cpu size={14} />;
    if (name.includes('civil') || name.includes('construction')) return <Building size={14} />;
    if (name.includes('mechanical')) return <Wrench size={14} />;
    if (name.includes('electrical') || name.includes('electronics')) return <Atom size={14} />;
    if (name.includes('structural')) return <Calculator size={14} />;
    return <BookOpen size={14} />;
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
          <Atom size={20} />
        </div>
        <div className={`${styles.floatingIcon} ${styles.icon7}`}>
          <Calculator size={22} />
        </div>
        <div className={`${styles.floatingIcon} ${styles.icon8}`}>
          <Cpu size={24} />
        </div>
      </div>

      <div className={styles.header}>
        <div className={styles.titleSection}>
          <div className={styles.titleIcon}>
            <GraduationCap size={40} />
          </div>
          <div>
            <h1 className={styles.title}>Nearby Government Colleges</h1>
            <p className={styles.subtitle}>
              Find the perfect government college in your area.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.searchBar}>
        <Search className={styles.searchIcon} size={20} />
        <input
          type="text"
          placeholder="Search for a college..."
          className={styles.searchInput}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className={styles.collegeGrid}>
        {filteredColleges.map((college: College) => (
          <Link href={`/colleges/${college.id}`} key={college.id} className={styles.collegeCardLink}>
            <div className={styles.collegeCard}>
              <div className={styles.cardHeader}>
                <div className={styles.collegeIcon}>
                  <Building size={20} />
                </div>
                <h2 className={styles.collegeName}>{college.name}</h2>
              </div>
              <p className={styles.collegeLocation}>
                <MapPin size={14} /> {college.location}
              </p>
              <div className={styles.courseTags}>
                {college.courses.slice(0, 3).map((course: Course, index: number) => (
                  <span key={index} className={styles.courseTag}>
                    {getCourseIcon(course.name)}
                    <span>{course.name.replace('B.Tech in ', '').replace('Engineering', 'Eng.')}</span>
                  </span>
                ))}
                {college.courses.length > 3 && (
                  <span className={styles.moreTag}>
                    +{college.courses.length - 3} more
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredColleges.length === 0 && (
        <div className={styles.noResults}>
          <BookOpen size={48} className={styles.noResultsIcon} />
          <h3>No colleges found</h3>
          <p>Try adjusting your search terms</p>
        </div>
      )}
    </div>
  );
}