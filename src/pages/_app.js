import React from 'react';
import { LoadingProvider } from '../context/LoadingContext';
import LoadingSpinner from '../components/LoadingSpinner';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <LoadingProvider>
      <Component {...pageProps} />
      <LoadingSpinner />
    </LoadingProvider>
  );
}

export default MyApp;
