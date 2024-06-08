import React from 'react';
import { LoadingProvider } from './context/LoadingContext';
import LoadingSpinner from './components/LoadingSpinner';
import AppContent from './components/AppContent';

const App = () => {
  return (
    <LoadingProvider>
      <LoadingSpinner />
      <AppContent />
    </LoadingProvider>
  );
};

export default App;
