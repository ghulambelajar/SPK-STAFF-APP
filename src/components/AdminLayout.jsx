import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage'; // 1. Import hook baru kita

const AdminLayout = () => {
  // --- GANTI useState DENGAN useLocalStorage ---
  
  // Kriteria tetap ada data awalnya, biar tidak input ulang
  const [kriteriaList, setKriteriaList] = useLocalStorage('kriteria', [
    { id: 1, nama: 'IPK', bobot: 0.25, jenis: 'Benefit' },
    { id: 2, nama: 'Wawancara', bobot: 0.40, jenis: 'Benefit' },
    { id: 3, nama: 'Pengalaman Organisasi', bobot: 0.20, jenis: 'Benefit' },
    { id: 4, nama: 'Tes Kemampuan', bobot: 0.15, jenis: 'Benefit' },
  ]);

  // Calon kita buat KOSONG sesuai permintaanmu
  const [calonList, setCalonList] = useLocalStorage('calon', []);

  // Penilaian juga kosong di awal
  const [penilaian, setPenilaian] = useLocalStorage('penilaian', {});

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-indigo-600 text-white shadow-md">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">SPK Penerimaan Staff Mahasiswa</h1>
          <div className="space-x-6">
            <Link to="/admin/dashboard" className="hover:text-indigo-200">Dashboard</Link>
            <Link to="/admin/kriteria" className="hover:text-indigo-200">Manajemen Kriteria</Link>
            <Link to="/admin/calon" className="hover:text-indigo-200">Manajemen Calon</Link>
            <Link to="/admin/penilaian" className="hover:text-indigo-200">Proses Penilaian</Link>
            <Link to="/admin/hasil" className="hover:text-indigo-200">Hasil</Link>
          </div>
        </nav>
      </header>
      <main className="container mx-auto px-6 py-8">
        <Outlet context={{ 
            kriteriaList, setKriteriaList, 
            calonList, setCalonList,
            penilaian, setPenilaian 
        }} />
      </main>
    </div>
  );
};

export default AdminLayout;