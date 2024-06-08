import React from 'react';
import { useLoadingContext } from '../context/LoadingContext';

const LoadingSpinner = () => {
  const { loading } = useLoadingContext();

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-gray-100 flex items-center justify-center opacity-75 z-50">
      <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-blue-500"></div>
    </div>
  );
};

export default LoadingSpinner;
