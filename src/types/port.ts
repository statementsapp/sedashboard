export interface PortData {
  name: string;
  lat: number;
  lng: number;
  type: 'inland' | 'seaport';
  statistics: {
    totalContainers: number;
    volumeChange: number;
    lastUpdated: string;
    // Additional statistics we might want to add
    monthlyVolume?: number;
    yearToDate?: number;
    vesselCalls?: number;
    railMoves?: number;
    truckMoves?: number;
  };
  dataSource: {
    name: string;
    url: string;
    lastUpdated: string;
  };
} 