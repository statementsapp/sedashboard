import React from 'react';
import Link from 'next/link';
import { useTheme } from '../../context/ThemeContext';

const Header = () => {
  const { currentTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(currentTheme.name === 'light' ? 'dark' : 'light');
  };

  return (
    <header className="bg-background border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-text">
                Southeast Dashboard
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <nav className="flex space-x-4">
              <Link href="/dashboard" className="text-text hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Dashboard
              </Link>
              <Link href="/analytics" className="text-text hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Analytics
              </Link>
              <Link href="/settings" className="text-text hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Settings
              </Link>
            </nav>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-text hover:bg-background hover:text-primary"
              aria-label="Toggle theme"
            >
              {currentTheme.name === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 