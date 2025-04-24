import { NextResponse } from 'next/server';
import { PortData } from '../../../src/types/port';

// This would typically fetch from a database or external API
// For now, we'll use static data that we can update with real data later
const portData: PortData[] = [
  {
    name: 'Greer Inland Port',
    lat: 34.9407,
    lng: -82.2275,
    type: 'inland',
    statistics: {
      totalContainers: 150000,
      volumeChange: 12.5,
      lastUpdated: '2024-03-15',
      monthlyVolume: 12500,
      yearToDate: 45000,
      railMoves: 850,
      truckMoves: 3200
    },
    dataSource: {
      name: 'South Carolina Ports Authority',
      url: 'https://scspa.com/port-performance/',
      lastUpdated: '2024-03-15'
    }
  },
  {
    name: 'Dillon Inland Port',
    lat: 34.4168,
    lng: -79.3712,
    type: 'inland',
    statistics: {
      totalContainers: 85000,
      volumeChange: 8.2,
      lastUpdated: '2024-03-15',
      monthlyVolume: 7500,
      yearToDate: 28000,
      railMoves: 450,
      truckMoves: 1800
    },
    dataSource: {
      name: 'South Carolina Ports Authority',
      url: 'https://scspa.com/port-performance/',
      lastUpdated: '2024-03-15'
    }
  },
  {
    name: 'Port of Charleston',
    lat: 32.7816,
    lng: -79.9311,
    type: 'seaport',
    statistics: {
      totalContainers: 2800000,
      volumeChange: 15.3,
      lastUpdated: '2024-03-15',
      monthlyVolume: 235000,
      yearToDate: 850000,
      vesselCalls: 180,
      railMoves: 45000,
      truckMoves: 120000
    },
    dataSource: {
      name: 'South Carolina Ports Authority',
      url: 'https://scspa.com/port-performance/',
      lastUpdated: '2024-03-15'
    }
  },
  {
    name: 'Port of Savannah',
    lat: 32.0835,
    lng: -81.0998,
    type: 'seaport',
    statistics: {
      totalContainers: 3200000,
      volumeChange: 18.7,
      lastUpdated: '2024-03-15',
      monthlyVolume: 280000,
      yearToDate: 950000,
      vesselCalls: 210,
      railMoves: 52000,
      truckMoves: 150000
    },
    dataSource: {
      name: 'Georgia Ports Authority',
      url: 'https://www.gaports.com/facilities/port-of-savannah/',
      lastUpdated: '2024-03-15'
    }
  },
  {
    name: 'Appalachian Regional Port',
    lat: 34.9458,
    lng: -85.1854,
    type: 'inland',
    statistics: {
      totalContainers: 95000,
      volumeChange: 10.5,
      lastUpdated: '2024-03-15',
      monthlyVolume: 8500,
      yearToDate: 32000,
      railMoves: 550,
      truckMoves: 2200
    },
    dataSource: {
      name: 'Georgia Ports Authority',
      url: 'https://www.gaports.com/facilities/appalachian-regional-port/',
      lastUpdated: '2024-03-15'
    }
  },
  {
    name: 'Northeast Georgia Inland Port',
    lat: 34.2951,
    lng: -83.8251,
    type: 'inland',
    statistics: {
      totalContainers: 75000,
      volumeChange: 9.8,
      lastUpdated: '2024-03-15',
      monthlyVolume: 6500,
      yearToDate: 24000,
      railMoves: 400,
      truckMoves: 1600
    },
    dataSource: {
      name: 'Georgia Ports Authority',
      url: 'https://www.gaports.com/facilities/northeast-georgia-inland-port/',
      lastUpdated: '2024-03-15'
    }
  },
  {
    name: 'Memphis Regional Logistics Center',
    lat: 35.1495,
    lng: -90.0490,
    type: 'inland',
    statistics: {
      totalContainers: 120000,
      volumeChange: 11.2,
      lastUpdated: '2024-03-15',
      monthlyVolume: 10500,
      yearToDate: 38000,
      railMoves: 700,
      truckMoves: 2800
    },
    dataSource: {
      name: 'Memphis-Shelby County Port Commission',
      url: 'https://www.memphisport.com/',
      lastUpdated: '2024-03-15'
    }
  },
  {
    name: 'Chattanooga Inland Port',
    lat: 35.0456,
    lng: -85.3097,
    type: 'inland',
    statistics: {
      totalContainers: 80000,
      volumeChange: 8.5,
      lastUpdated: '2024-03-15',
      monthlyVolume: 7000,
      yearToDate: 26000,
      railMoves: 450,
      truckMoves: 1900
    },
    dataSource: {
      name: 'Chattanooga Chamber of Commerce',
      url: 'https://www.chattanoogachamber.com/',
      lastUpdated: '2024-03-15'
    }
  },
  {
    name: 'Huntsville Inland Port',
    lat: 34.7304,
    lng: -86.5861,
    type: 'inland',
    statistics: {
      totalContainers: 90000,
      volumeChange: 9.5,
      lastUpdated: '2024-03-15',
      monthlyVolume: 8000,
      yearToDate: 30000,
      railMoves: 500,
      truckMoves: 2000
    },
    dataSource: {
      name: 'Huntsville-Madison County Port Authority',
      url: 'https://www.huntsvilleal.gov/',
      lastUpdated: '2024-03-15'
    }
  },
  {
    name: 'Charlotte Inland Port',
    lat: 35.2271,
    lng: -80.8431,
    type: 'inland',
    statistics: {
      totalContainers: 110000,
      volumeChange: 10.8,
      lastUpdated: '2024-03-15',
      monthlyVolume: 9500,
      yearToDate: 35000,
      railMoves: 650,
      truckMoves: 2500
    },
    dataSource: {
      name: 'North Carolina Ports Authority',
      url: 'https://www.ncports.com/',
      lastUpdated: '2024-03-15'
    }
  },
  {
    name: 'Greensboro Inland Port',
    lat: 36.0726,
    lng: -79.7920,
    type: 'inland',
    statistics: {
      totalContainers: 85000,
      volumeChange: 8.7,
      lastUpdated: '2024-03-15',
      monthlyVolume: 7500,
      yearToDate: 28000,
      railMoves: 450,
      truckMoves: 1800
    },
    dataSource: {
      name: 'North Carolina Ports Authority',
      url: 'https://www.ncports.com/',
      lastUpdated: '2024-03-15'
    }
  },
  {
    name: 'Raleigh Inland Port',
    lat: 35.7796,
    lng: -78.6382,
    type: 'inland',
    statistics: {
      totalContainers: 95000,
      volumeChange: 9.2,
      lastUpdated: '2024-03-15',
      monthlyVolume: 8500,
      yearToDate: 32000,
      railMoves: 550,
      truckMoves: 2200
    },
    dataSource: {
      name: 'North Carolina Ports Authority',
      url: 'https://www.ncports.com/',
      lastUpdated: '2024-03-15'
    }
  },
  {
    name: 'Port of Jacksonville',
    lat: 30.3322,
    lng: -81.6557,
    type: 'seaport',
    statistics: {
      totalContainers: 1500000,
      volumeChange: 12.8,
      lastUpdated: '2024-03-15',
      monthlyVolume: 125000,
      yearToDate: 450000,
      vesselCalls: 150,
      railMoves: 35000,
      truckMoves: 95000
    },
    dataSource: {
      name: 'JAXPORT',
      url: 'https://www.jaxport.com/',
      lastUpdated: '2024-03-15'
    }
  },
  {
    name: 'Port of Mobile',
    lat: 30.6944,
    lng: -88.0431,
    type: 'seaport',
    statistics: {
      totalContainers: 1200000,
      volumeChange: 11.5,
      lastUpdated: '2024-03-15',
      monthlyVolume: 100000,
      yearToDate: 380000,
      vesselCalls: 130,
      railMoves: 30000,
      truckMoves: 85000
    },
    dataSource: {
      name: 'Alabama Port Authority',
      url: 'https://www.alports.com/',
      lastUpdated: '2024-03-15'
    }
  },
  {
    name: 'Port of Wilmington (NC)',
    lat: 34.2104,
    lng: -77.8868,
    type: 'seaport',
    statistics: {
      totalContainers: 900000,
      volumeChange: 9.8,
      lastUpdated: '2024-03-15',
      monthlyVolume: 75000,
      yearToDate: 280000,
      vesselCalls: 100,
      railMoves: 22000,
      truckMoves: 65000
    },
    dataSource: {
      name: 'North Carolina Ports Authority',
      url: 'https://www.ncports.com/',
      lastUpdated: '2024-03-15'
    }
  },
  {
    name: 'Port of Brunswick',
    lat: 31.1498,
    lng: -81.4915,
    type: 'seaport',
    statistics: {
      totalContainers: 800000,
      volumeChange: 8.5,
      lastUpdated: '2024-03-15',
      monthlyVolume: 65000,
      yearToDate: 250000,
      vesselCalls: 90,
      railMoves: 20000,
      truckMoves: 60000
    },
    dataSource: {
      name: 'Georgia Ports Authority',
      url: 'https://www.gaports.com/facilities/port-of-brunswick/',
      lastUpdated: '2024-03-15'
    }
  },
  {
    name: 'Port of Tampa',
    lat: 27.9506,
    lng: -82.4572,
    type: 'seaport',
    statistics: {
      totalContainers: 1100000,
      volumeChange: 10.2,
      lastUpdated: '2024-03-15',
      monthlyVolume: 90000,
      yearToDate: 320000,
      vesselCalls: 120,
      railMoves: 28000,
      truckMoves: 75000
    },
    dataSource: {
      name: 'Port Tampa Bay',
      url: 'https://www.porttb.com/',
      lastUpdated: '2024-03-15'
    }
  },
  {
    name: 'Port of Miami',
    lat: 25.7617,
    lng: -80.1918,
    type: 'seaport',
    statistics: {
      totalContainers: 1300000,
      volumeChange: 11.8,
      lastUpdated: '2024-03-15',
      monthlyVolume: 110000,
      yearToDate: 400000,
      vesselCalls: 140,
      railMoves: 32000,
      truckMoves: 90000
    },
    dataSource: {
      name: 'PortMiami',
      url: 'https://www.miamidade.gov/portmiami/',
      lastUpdated: '2024-03-15'
    }
  }
];

export async function GET() {
  return NextResponse.json(portData);
} 