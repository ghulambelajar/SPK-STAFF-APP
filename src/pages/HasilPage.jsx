import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

const HasilPage = () => {
  const { kriteriaList, calonList, penilaian } = useOutletContext();
  const [hasil, setHasil] = useState(null);

  const handleHitung = () => {
    // === TAHAP 1: Normalisasi Bobot ===
    // Menjumlahkan semua bobot kriteria untuk mendapatkan total bobot.
    const totalBobot = kriteriaList.reduce((sum, kriteria) => sum + kriteria.bobot, 0);
    // Membuat array baru berisi bobot yang sudah dinormalisasi (total bobot = 1).
    const bobotNormal = kriteriaList.map(k => ({
      ...k,
      bobotNormal: k.bobot / totalBobot,
    }));

    // === TAHAP 2: Hitung Vektor S (Si) ===
    // Menghitung nilai preferensi relatif (vektor S) untuk setiap calon.
    const vektorS = calonList.map(calon => {
      let s = 1;
      bobotNormal.forEach(kriteria => {
        const nilai = penilaian[calon.id]?.[kriteria.id];
        if (!nilai) {
          alert(`Nilai untuk ${calon.nama} pada kriteria ${kriteria.nama} belum diisi!`);
          throw new Error("Nilai tidak lengkap");
        }
        
        // Bobot menjadi negatif jika jenisnya 'Cost'.
        const pangkat = kriteria.jenis === 'Cost' ? -kriteria.bobotNormal : kriteria.bobotNormal;
        // Setiap nilai kriteria dipangkatkan dengan bobot ternormalisasi, lalu dikalikan.
        s *= Math.pow(parseFloat(nilai), pangkat);
      });
      return { ...calon, vektorS: s };
    });

    // === TAHAP 3: Hitung Vektor V (Vi) / Skor Akhir ===
    // Menjumlahkan semua nilai Vektor S.
    const totalVektorS = vektorS.reduce((sum, calon) => sum + calon.vektorS, 0);
    // Menghitung skor akhir setiap calon dengan membagi Vektor S masing-masing dengan total Vektor S.
    const hasilAkhir = vektorS.map(calon => ({
      ...calon,
      skor: calon.vektorS / totalVektorS,
    }));

    // === TAHAP 4: Urutkan Hasil (Ranking) ===
    // Mengurutkan calon dari skor tertinggi ke terendah.
    hasilAkhir.sort((a, b) => b.skor - a.skor);

    setHasil(hasilAkhir);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Hasil Perankingan</h2>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex justify-end mb-6">
          <button 
            onClick={handleHitung}
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition font-semibold"
          >
            Hitung Peringkat
          </button>
        </div>

        <table className="w-full text-left">
          <thead>
            <tr className="bg-indigo-50">
              <th className="p-4 font-semibold">Peringkat</th>
              <th className="p-4 font-semibold">Nama Calon</th>
              <th className="p-4 font-semibold">NIM</th>
              <th className="p-4 font-semibold">Jurusan</th>
              <th className="p-4 font-semibold">Skor Akhir (V)</th>
            </tr>
          </thead>
          <tbody>
            {hasil ? (
              hasil.map((calon, index) => (
                <tr key={calon.id} className="border-b">
                  <td className="p-4 font-bold">{index + 1}</td>
                  <td className="p-4">{calon.nama}</td>
                  <td className="p-4">{calon.nim}</td>
                  <td className="p-4">{calon.jurusan}</td>
                  <td className="p-4 font-semibold">{calon.skor.toFixed(4)}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center p-8 text-gray-500">
                  Tekan tombol "Hitung Peringkat" untuk melihat hasil
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HasilPage;