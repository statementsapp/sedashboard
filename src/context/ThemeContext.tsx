'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Theme = {
  name: string;
  primary: string;
  secondary: string;
  background: string;
  text: string;
  border: string;
};

const themes: Theme[] = [
  {
    name: 'light',
    primary: '#002366', // Navy blue
    secondary: '#7B1113', // Garnet
    background: '#FFFFFF',
    text: '#1F2937',
    border: '#E5E7EB',
  },
  {
    name: 'dark',
    primary: '#60A5FA', // Light blue
    secondary: '#F87171', // Light red
    background: '#111827',
    text: '#F9FAFB',
    border: '#374151',
  },
];

type ThemeContextType = {
  currentTheme: Theme;
  setTheme: (themeName: string) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes[0]);

  const setTheme = (themeName: string) => {
    const theme = themes.find(t => t.name === themeName);
    if (theme) {
      setCurrentTheme(theme);
      // Apply theme to document
      document.documentElement.style.setProperty('--primary-color', theme.primary);
      document.documentElement.style.setProperty('--secondary-color', theme.secondary);
      document.documentElement.style.setProperty('--background-color', theme.background);
      document.documentElement.style.setProperty('--text-color', theme.text);
      document.documentElement.style.setProperty('--border-color', theme.border);
    }
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 