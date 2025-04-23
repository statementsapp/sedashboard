'use client';

import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeSelector: React.FC = () => {
  const { currentTheme, setTheme } = useTheme();
  
  return (
    <div className="flex gap-4 mb-4">
      <button
        onClick={() => setTheme('navy')}
        className={`px-4 py-2 rounded ${
          currentTheme.name === 'navy' ? 'ring-2 ring-offset-2' : ''
        }`}
        style={{
          backgroundColor: '#002366',
          color: '#FFFFFF'
        }}
      >
        Navy Theme
      </button>
      <button
        onClick={() => setTheme('garnet')}
        className={`px-4 py-2 rounded ${
          currentTheme.name === 'garnet' ? 'ring-2 ring-offset-2' : ''
        }`}
        style={{
          backgroundColor: '#7B1113',
          color: '#000000'
        }}
      >
        Garnet Theme
      </button>
      <button
        onClick={() => setTheme('purple')}
        className={`px-4 py-2 rounded ${
          currentTheme.name === 'purple' ? 'ring-2 ring-offset-2' : ''
        }`}
        style={{
          backgroundColor: '#4B0082',
          color: '#FFA500'
        }}
      >
        Purple Theme
      </button>
    </div>
  );
};

export default ThemeSelector; 