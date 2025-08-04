import React from 'react';
import { useOutletContext } from 'react-router-dom'; // 1. Import hook
import { FaListAlt, FaUsers, FaClipboardCheck } from 'react-icons/fa';

const StatCard = ({ icon, title, value, color }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-6">
    <div className={`text-4xl ${color}`}>
      {icon}
    </div>
    <div>
      <p className="text-gray-600 font-semibold">{title}</p>
      <p className="text-3xl font-bold text-gray-800">{value}</p>
    </div>
  </div>
);

const DashboardPage = () => {
  // 2. Ambil data dari induk
  const { kriteriaList, calonList, penilaian } = useOutletContext();

  // 3. Hitung jumlah data secara dinamis
  const totalKriteria = kriteriaList.length;
  const totalCalon = calonList.length;
  // Hitung jumlah calon yang sudah punya data penilaian
  const totalPenilaian = Object.keys(penilaian).length;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard 
          icon={<FaListAlt />} 
          title="Jumlah Kriteria" 
          value={totalKriteria} 
          color="text-blue-500"
        />
        <StatCard 
          icon={<FaUsers />} 
          title="Jumlah Calon" 
          value={totalCalon} 
          color="text-green-500"
        />
        <StatCard 
          icon={<FaClipboardCheck />} 
          title="Penilaian Tersimpan" 
          value={totalPenilaian} 
          color="text-yellow-500"
        />
      </div>
    </div>
  );
};

export default DashboardPage;