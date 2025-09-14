// We import the types we just defined.
import { College } from '../lib/type';

// We tell TypeScript that our array will contain objects of type "College".
export const allColleges: College[] = [
  {
    id: '1',
    name: 'Government College of Engineering, Karad',
    location: 'Karad, Maharashtra',
    courses: [
      { name: 'B.Tech in Civil Engineering', eligibility: '12th Pass with PCM' },
      { name: 'B.Tech in Mechanical Engineering', eligibility: '12th Pass with PCM' },
      { name: 'B.Tech in Electrical Engineering', eligibility: '12th Pass with PCM' },
    ],
    facilities: ['Hostel', 'Library', 'Labs', 'Wi-Fi', 'Sports'],
  },
  {
    id: '2',
    name: 'Veermata Jijabai Technological Institute (VJTI)',
    location: 'Mumbai, Maharashtra',
    courses: [
        { name: 'B.Tech in Computer Engineering', eligibility: '12th Pass with PCM' },
        { name: 'B.Tech in Information Technology', eligibility: '12th Pass with PCM' },
        { name: 'B.Tech in Electronics & Telecommunication', eligibility: '12th Pass with PCM' },
    ],
    facilities: ['Library', 'Labs', 'Wi-Fi', 'Gymkhana'],
  },
  {
    id: '3',
    name: 'Sardar Patel College of Engineering (SPCE)',
    location: 'Mumbai, Maharashtra',
    courses: [
        { name: 'B.Tech in Structural Engineering', eligibility: '12th Pass with PCM' },
        { name: 'B.Tech in Construction Management', eligibility: '12th Pass with PCM' },
    ],
    facilities: ['Hostel', 'Library', 'Labs', 'Sports'],
  },
];

