import React, { useEffect } from 'react';
import { useLoadingContext } from '../context/LoadingContext';
import Hero from './HeroSection/Hero';
import Profile from './ProfileSection/Profile';
import ScrollToTop from './ScrollToTop';
import Experience from './ExperienceSection/Experience';
import SkillSection from './SkillSection/Skill';
import ProjectSection from './ProjectsSection/Projects';

const AppContent = () => {
  const { setLoading } = useLoadingContext();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [setLoading]);

  return (
    <>
      <Hero />
      <Profile />
      <Experience />
      <SkillSection />
      <ProjectSection />

      <ScrollToTop />
    </>
  );
};

export default AppContent;
