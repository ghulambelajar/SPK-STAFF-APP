import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';

const KriteriaPage = () => {
  // BENAR: Ambil kriteriaList & setKriteriaList DARI induk
  const { kriteriaList, setKriteriaList } = useOutletContext();

  // State untuk form dan mode edit tetap di sini (lokal)
  const [formData, setFormData] = useState({ nama: '', bobot: '', jenis: 'Benefit' });
  const [editingId, setEditingId] = useState(null);

  // Sisa kode (handleSubmit, handleEdit, dll.) tidak perlu diubah
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      const updatedList = kriteriaList.map(kriteria =>
        kriteria.id === editingId ? { ...kriteria, ...formData, bobot: parseFloat(formData.bobot) } : kriteria
      );
      setKriteriaList(updatedList);
      setEditingId(null);
    } else {
      const newKriteria = {
        id: Date.now(),
        nama: formData.nama,
        bobot: parseFloat(formData.bobot),
        jenis: formData.jenis,
      };
      setKriteriaList([...kriteriaList, newKriteria]);
    }
    setFormData({ nama: '', bobot: '', jenis: 'Benefit' });
  };

  const handleEdit = (id) => {
    const kriteriaToEdit = kriteriaList.find(kriteria => kriteria.id === id);
    if (kriteriaToEdit) {
      setFormData(kriteriaToEdit);
      setEditingId(id);
    }
  };

  const handleDelete = (idToDelete) => {
    setKriteriaList(kriteriaList.filter((kriteria) => kriteria.id !== idToDelete));
  };

  const handleCancel = () => {
    setFormData({ nama: '', bobot: '', jenis: 'Benefit' });
    setEditingId(null);
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Manajemen Kriteria</h2>
      <div className="bg-white p-8 rounded-lg shadow-md mb-8">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="nama" className="block text-gray-700 font-semibold mb-2">Nama Kriteria</label>
            <input type="text" id="nama" name="nama" value={formData.nama} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Contoh: IPK" required />
          </div>
          <div className="mb-4">
            <label htmlFor="bobot" className="block text-gray-700 font-semibold mb-2">Bobot</label>
            <input type="number" step="0.01" id="bobot" name="bobot" value={formData.bobot} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Contoh: 0.3" required />
          </div>
          <div className="mb-6">
            <label htmlFor="jenis" className="block text-gray-700 font-semibold mb-2">Jenis</label>
            <select id="jenis" name="jenis" value={formData.jenis} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" required>
              <option value="Benefit">Benefit</option>
              <option value="Cost">Cost</option>
            </select>
          </div>
          <div className="flex items-center space-x-4">
            <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition">{editingId ? 'Update' : 'Simpan'}</button>
            <button type="button" className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition" onClick={handleCancel}>Batal</button>
          </div>
        </form>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-6 text-gray-800">Daftar Kriteria</h3>
        <table className="w-full text-left">
          <thead>
            <tr className="bg-indigo-50">
              <th className="p-4 font-semibold">No</th>
              <th className="p-4 font-semibold">Nama Kriteria</th>
              <th className="p-4 font-semibold">Bobot</th>
              <th className="p-4 font-semibold">Jenis</th>
              <th className="p-4 font-semibold">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {kriteriaList.map((kriteria, index) => (
              <tr key={kriteria.id} className="border-b">
                <td className="p-4">{index + 1}</td>
                <td className="p-4">{kriteria.nama}</td>
                <td className="p-4">{kriteria.bobot}</td>
                <td className="p-4">{kriteria.jenis}</td>
                <td className="p-4">
                  <div className="flex space-x-4">
                    <button onClick={() => handleEdit(kriteria.id)} className="text-blue-500 hover:text-blue-700"><FaEdit /></button>
                    <button onClick={() => handleDelete(kriteria.id)} className="text-red-500 hover:text-red-700"><FaTrash /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default KriteriaPage;