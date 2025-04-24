'use client';

import React, { useEffect, useRef, useState } from 'react';
import { PortData } from '@/types/port';
import 'leaflet/dist/leaflet.css';
import type { Map, Layer } from 'leaflet';

// Custom icons for different port types
const inlandPortIcon = {
  iconUrl: '/images/custom/truck.svg',
  iconSize: [32, 32] as [number, number],
  iconAnchor: [16, 16] as [number, number],
  popupAnchor: [0, -16] as [number, number],
  tooltipAnchor: [16, 0] as [number, number]
};

const seaportIcon = {
  iconUrl: '/images/custom/ship.svg',
  iconSize: [32, 32] as [number, number],
  iconAnchor: [16, 16] as [number, number],
  popupAnchor: [0, -16] as [number, number],
  tooltipAnchor: [16, 0] as [number, number]
};

const MapView = () => {
  const mapRef = useRef<Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [portData, setPortData] = useState<PortData[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Fetch port data
    const fetchPortData = async () => {
      try {
        const response = await fetch('/api/ports');
        const data = await response.json();
        setPortData(data);
      } catch (error) {
        console.error('Error fetching port data:', error);
      }
    };

    fetchPortData();
  }, []);

  useEffect(() => {
    if (!isClient || !mapContainerRef.current || mapRef.current) return;

    // Import Leaflet only on client side
    import('leaflet').then((L) => {
      // Initialize the map centered on the Southeast region
      mapRef.current = L.map(mapContainerRef.current!).setView([33.0, -82.0], 6);

      // Add the tile layer with state borders
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors, © CARTO'
      }).addTo(mapRef.current);

      // Add state borders layer
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors, © CARTO'
      }).addTo(mapRef.current);

      return () => {
        if (mapRef.current) {
          mapRef.current.remove();
          mapRef.current = null;
        }
      };
    });
  }, [isClient]);

  // Update port markers when portData changes
  useEffect(() => {
    if (!isClient || !mapRef.current || portData.length === 0) return;

    import('leaflet').then((L) => {
      // Clear existing port markers
      mapRef.current.eachLayer((layer: Layer) => {
        if (layer instanceof L.Marker && layer.getPopup()?.getContent()?.includes('Port')) {
          mapRef.current?.removeLayer(layer);
        }
      });

      // Add port markers with statistics
      portData.forEach(port => {
        const marker = L.marker([port.lat, port.lng], { 
          icon: L.icon(port.type === 'inland' ? inlandPortIcon : seaportIcon)
        }).addTo(mapRef.current!);

        // Create tooltip with statistics
        const tooltipContent = `
          <div style="padding: 5px;">
            <h3 style="margin: 0 0 5px 0;">${port.name}</h3>
            <p style="margin: 2px 0;">Total Containers: ${port.statistics.totalContainers.toLocaleString()}</p>
            <p style="margin: 2px 0;">Volume Change: ${port.statistics.volumeChange > 0 ? '+' : ''}${port.statistics.volumeChange}%</p>
            <p style="margin: 2px 0;">Monthly Volume: ${port.statistics.monthlyVolume?.toLocaleString()}</p>
            <p style="margin: 2px 0;">Year to Date: ${port.statistics.yearToDate?.toLocaleString()}</p>
            ${port.type === 'inland' ? `
              <p style="margin: 2px 0;">Rail Moves: ${port.statistics.railMoves?.toLocaleString()}</p>
              <p style="margin: 2px 0;">Truck Moves: ${port.statistics.truckMoves?.toLocaleString()}</p>
            ` : `
              <p style="margin: 2px 0;">Vessel Calls: ${port.statistics.vesselCalls?.toLocaleString()}</p>
              <p style="margin: 2px 0;">Rail Moves: ${port.statistics.railMoves?.toLocaleString()}</p>
              <p style="margin: 2px 0;">Truck Moves: ${port.statistics.truckMoves?.toLocaleString()}</p>
            `}
            <p style="margin: 2px 0; font-size: 0.8em;">
              Data Source: <a href="${port.dataSource.url}" target="_blank" rel="noopener noreferrer" style="color: #2563EB; text-decoration: underline;">${port.dataSource.name}</a>
            </p>
            <p style="margin: 2px 0; font-size: 0.8em;">Last Updated: ${port.dataSource.lastUpdated}</p>
          </div>
        `;

        // Bind tooltip for mouseover
        marker.bindTooltip(tooltipContent, {
          permanent: false,
          direction: 'left',
          offset: L.point(-10, 0),
          className: 'port-tooltip',
          interactive: true,
          sticky: true,
          opacity: 1
        });

        // Bind popup for click
        marker.bindPopup(`
          <div style="padding: 10px;">
            <h3 style="margin: 0 0 10px 0;">${port.name}</h3>
            <p style="margin: 5px 0;"><b>Total Containers:</b> ${port.statistics.totalContainers.toLocaleString()}</p>
            <p style="margin: 5px 0;"><b>Volume Change:</b> ${port.statistics.volumeChange > 0 ? '+' : ''}${port.statistics.volumeChange}%</p>
            <p style="margin: 5px 0;"><b>Monthly Volume:</b> ${port.statistics.monthlyVolume?.toLocaleString()}</p>
            <p style="margin: 5px 0;"><b>Year to Date:</b> ${port.statistics.yearToDate?.toLocaleString()}</p>
            ${port.type === 'inland' ? `
              <p style="margin: 5px 0;"><b>Rail Moves:</b> ${port.statistics.railMoves?.toLocaleString()}</p>
              <p style="margin: 5px 0;"><b>Truck Moves:</b> ${port.statistics.truckMoves?.toLocaleString()}</p>
            ` : `
              <p style="margin: 5px 0;"><b>Vessel Calls:</b> ${port.statistics.vesselCalls?.toLocaleString()}</p>
              <p style="margin: 5px 0;"><b>Rail Moves:</b> ${port.statistics.railMoves?.toLocaleString()}</p>
              <p style="margin: 5px 0;"><b>Truck Moves:</b> ${port.statistics.truckMoves?.toLocaleString()}</p>
            `}
            <div style="margin-top: 10px; padding-top: 10px; border-top: 1px solid #e5e7eb;">
              <p style="margin: 5px 0;"><b>Data Source:</b> <a href="${port.dataSource.url}" target="_blank" rel="noopener noreferrer" style="color: #2563EB; text-decoration: underline;">${port.dataSource.name}</a></p>
              <p style="margin: 5px 0;"><b>Last Updated:</b> ${port.dataSource.lastUpdated}</p>
            </div>
          </div>
        `);
      });
    });
  }, [portData, isClient]);

  if (!isClient) {
    return <div className="h-[600px] w-full rounded-lg overflow-hidden bg-gray-100" />;
  }

  return (
    <div className="h-[600px] w-full rounded-lg overflow-hidden">
      <div ref={mapContainerRef} className="h-full w-full" />
    </div>
  );
};

export default MapView; 