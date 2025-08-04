import React from 'react'; // useState tidak perlu di sini, tapi tidak apa-apa jika ada
import { useOutletContext } from 'react-router-dom';

const PenilaianPage = () => {
  // BENAR: Ambil semua state yang dibutuhkan DARI induk dalam satu panggilan
  const { kriteriaList, calonList, penilaian, setPenilaian } = useOutletContext();

  const handleNilaiChange = (calonId, kriteriaId, value) => {
    setPenilaian(prev => ({
      ...prev,
      [calonId]: {
        ...prev[calonId],
        [kriteriaId]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Data Penilaian Tersimpan:', penilaian);
    alert('Data penilaian berhasil disimpan (di state)!');
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Proses Penilaian</h2>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-indigo-50">
                  <th className="p-4 font-semibold">No</th>
                  <th className="p-4 font-semibold">Nama Calon</th>
                  <th className="p-4 font-semibold">NIM</th>
                  <th className="p-4 font-semibold">Jurusan</th>
                  {kriteriaList.map(kriteria => (
                    <th key={kriteria.id} className="p-4 font-semibold">{kriteria.nama}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
            {calonList.length > 0 ? (
              calonList.map((calon, index) => (
                <tr key={calon.id} className="border-b">
                  <td className="p-4">{index + 1}</td>
                  <td className="p-4">{calon.nama}</td>
                  <td className="p-4">{calon.nim}</td>
                  <td className="p-4">{calon.jurusan}</td>
                  {kriteriaList.map(kriteria => (
                    <td key={kriteria.id} className="p-2">
                      <input
                        type="number"
                        className="w-full max-w-20 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        value={penilaian[calon.id]?.[kriteria.id] || ''}
                        onChange={(e) => handleNilaiChange(calon.id, kriteria.id, e.target.value)}
                        required
                      />
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={kriteriaList.length + 4} className="text-center p-8 text-gray-500">
                  Data calon masih kosong. Silakan isi data di halaman Manajemen Calon terlebih dahulu.
                </td>
              </tr>
            )}
          </tbody>
            </table>
          </div>
          <div className="flex justify-end mt-8">
            <button type="submit" className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition font-semibold">
              Simpan Penilaian
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PenilaianPage;