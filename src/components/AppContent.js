import React, { useEffect } from 'react';
import { useLoadingContext } from '../context/LoadingContext';
import Hero from './HeroSection/Hero';
import Profile from './ProfileSection/Profile';
import ScrollToTop from './ScrollToTop';
import Experience from './ExperienceSection/Experience';

const AppContent = () => {
  const { setLoading } = useLoadingContext();

  useEffect(() => {
    // Simulate loading completion after a delay (2 seconds in this case)
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
      <ScrollToTop />
    </>
  );
};

export default AppContent;
