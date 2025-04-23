import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="hidden md:flex md:w-64 md:flex-col">
      <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto bg-blue-50 border-r border-blue-200">
        <div className="flex items-center flex-shrink-0 px-4">
          <span className="text-lg font-semibold text-blue-800">Menu</span>
        </div>
        <div className="mt-5 flex-grow flex flex-col">
          <nav className="flex-1 px-2 space-y-1">
            <Link
              href="/dashboard"
              className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-blue-800 hover:bg-blue-100 hover:text-blue-900"
            >
              Overview
            </Link>
            <Link
              href="/dashboard/map"
              className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-blue-800 hover:bg-blue-100 hover:text-blue-900"
            >
              Map View
            </Link>
            <Link
              href="/dashboard/charts"
              className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-blue-800 hover:bg-blue-100 hover:text-blue-900"
            >
              Charts
            </Link>
            <Link
              href="/dashboard/reports"
              className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-blue-800 hover:bg-blue-100 hover:text-blue-900"
            >
              Reports
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 