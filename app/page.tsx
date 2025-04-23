'use client';

import React from 'react';
import MapView from './components/map/MapView';
import Header from './components/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow">
          <MapView />
        </div>
      </main>
    </div>
  );
}
