import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Southeast Dashboard</h1>
      <p className="text-gray-600">
        This dashboard provides analytics and insights for the Southeast region.
        Use the navigation menu to explore different sections.
      </p>
    </div>
  );
}
