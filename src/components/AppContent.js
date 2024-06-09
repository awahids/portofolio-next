import React, { useEffect } from 'react';
import { useLoadingContext } from '../context/LoadingContext';
import Hero from './Hero';
import Profile from './Profile';
import ScrollToTop from './ScrollToTop';

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
      <ScrollToTop />
    </>
  );
};

export default AppContent;
