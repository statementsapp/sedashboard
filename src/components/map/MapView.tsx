'use client';

import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons
const defaultIcon = L.icon({
  iconUrl: '/images/marker-icon.png',
  iconRetinaUrl: '/images/marker-icon-2x.png',
  shadowUrl: '/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = defaultIcon;

const MapView = () => {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapContainerRef.current && !mapRef.current) {
      // Initialize the map
      mapRef.current = L.map(mapContainerRef.current).setView([33.7490, -84.3880], 6); // Centered on Atlanta

      // Add the tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(mapRef.current);

      // Add some sample markers for major cities in the Southeast
      const cities = [
        { name: 'Atlanta', lat: 33.7490, lng: -84.3880 },
        { name: 'Charlotte', lat: 35.2271, lng: -80.8431 },
        { name: 'Nashville', lat: 36.1627, lng: -86.7816 },
        { name: 'Raleigh', lat: 35.7796, lng: -78.6382 },
        { name: 'Orlando', lat: 28.5383, lng: -81.3792 }
      ];

      cities.forEach(city => {
        L.marker([city.lat, city.lng])
          .addTo(mapRef.current!)
          .bindPopup(city.name);
      });
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div className="h-[600px] w-full rounded-lg overflow-hidden">
      <div ref={mapContainerRef} className="h-full w-full" />
    </div>
  );
};

export default MapView; 