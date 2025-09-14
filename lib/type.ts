// This file defines the "shape" of our data.

export interface Course {
  name: string;
  eligibility: string;
}

export interface College {
  id: string;
  name: string;
  location: string;
  courses: Course[];
  facilities: string[];
}

