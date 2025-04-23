'use client';

import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { LatLngTuple } from 'leaflet';

// Fix for default marker icons in Leaflet with Next.js
const icon = L.icon({
  iconUrl: '/marker-icon.png',
  iconRetinaUrl: '/marker-icon-2x.png',
  shadowUrl: '/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

interface PortData {
  name: string;
  position: LatLngTuple;
  data: {
    containers: string;
    growth: string;
    year: string;
  };
}

// Port locations with sample data
const portData: PortData[] = [
  {
    name: 'Port of Charleston',
    position: [32.7817, -79.9244],
    data: {
      containers: '2.3M TEUs',
      growth: '+5.2%',
      year: '2023'
    }
  },
  {
    name: 'Port of Savannah',
    position: [32.0814, -81.0912],
    data: {
      containers: '4.9M TEUs',
      growth: '+3.8%',
      year: '2023'
    }
  },
  {
    name: 'Inland Port Greer',
    position: [34.9334, -82.2165],
    data: {
      containers: '150K TEUs',
      growth: '+7.1%',
      year: '2023'
    }
  },
  {
    name: 'Inland Port Dillon',
    position: [34.4168, -79.3712],
    data: {
      containers: '75K TEUs',
      growth: '+4.3%',
      year: '2023'
    }
  }
];

const PortMap: React.FC = () => {
  useEffect(() => {
    // Ensure Leaflet CSS is properly loaded
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="h-[600px] w-full">
      <MapContainer
        center={[33.8361, -81.1637]}
        zoom={7}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {portData.map((port) => (
          <Marker
            key={port.name}
            position={port.position}
            icon={icon}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-bold">{port.name}</h3>
                <p>Containers: {port.data.containers}</p>
                <p>Growth: {port.data.growth}</p>
                <p>Year: {port.data.year}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default PortMap; 