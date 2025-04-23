'use client';

import React from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import dynamic from 'next/dynamic';

const PortMap = dynamic(() => import('./PortMap'), {
  ssr: false,
  loading: () => <div className="h-[600px] w-full bg-gray-100 animate-pulse" />
});

const ThemeSelector = dynamic(() => import('./ThemeSelector'), {
  ssr: false
});

const Dashboard: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">
            Southeast Port Activity Dashboard
          </h1>
          <ThemeSelector />
          <div className="bg-white rounded-lg shadow-lg p-4">
            <PortMap />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Dashboard; 