import React from 'react';
import HeroSection from '../components/HeroSection';
import InstitutionList from '../components/InstitutionList';
import CourseList from '../components/CourseList';

const Home = () => {
  return (
    <>
    <HeroSection />
    <div className="underline text-2xl md:text-4xl font-bold text-center my-20 text-gray-700"> Top Institutes  </div>
    <InstitutionList />
    <div className="underline text-2xl md:text-4xl font-bold text-center my-20 text-gray-700"> Top Courses  </div>
    <CourseList />
    </>
   
  )
}

export default Home
