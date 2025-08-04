import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';

const CalonPage = () => {
  // BENAR: Ambil calonList & setCalonList DARI induk
  const { calonList, setCalonList } = useOutletContext();

  // State untuk form tetap di sini (lokal)
  const [formData, setFormData] = useState({ nama: '', nim: '', jurusan: '' });
  const [editingId, setEditingId] = useState(null);

  // Sisa kode (handleSubmit, handleEdit, dll.) tidak perlu diubah
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      setCalonList(
        calonList.map(calon =>
          calon.id === editingId ? { ...calon, ...formData } : calon
        )
      );
      setEditingId(null);
    } else {
      const newCalon = {
        id: Date.now(),
        ...formData
      };
      setCalonList([...calonList, newCalon]);
    }
    setFormData({ nama: '', nim: '', jurusan: '' });
  };

  const handleEdit = (id) => {
    const calonToEdit = calonList.find(calon => calon.id === id);
    if (calonToEdit) {
      setFormData(calonToEdit);
      setEditingId(id);
    }
  };

  const handleDelete = (idToDelete) => {
    setCalonList(calonList.filter(calon => calon.id !== idToDelete));
  };

  const handleCancel = () => {
    setFormData({ nama: '', nim: '', jurusan: '' });
    setEditingId(null);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Manajemen Calon</h2>
      <div className="bg-white p-8 rounded-lg shadow-md mb-8">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="nama" className="block text-gray-700 font-semibold mb-2">Nama Calon</label>
            <input type="text" id="nama" name="nama" value={formData.nama} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Masukkan nama calon" required />
          </div>
          <div className="mb-4">
            <label htmlFor="nim" className="block text-gray-700 font-semibold mb-2">NIM</label>
            <input type="text" id="nim" name="nim" value={formData.nim} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Masukkan NIM" required />
          </div>
          <div className="mb-6">
            <label htmlFor="jurusan" className="block text-gray-700 font-semibold mb-2">Jurusan</label>
            <input type="text" id="jurusan" name="jurusan" value={formData.jurusan} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Masukkan jurusan" required />
          </div>
          <div className="flex items-center space-x-4">
            <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition">{editingId ? 'Update' : 'Simpan'}</button>
            <button type="button" className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition" onClick={handleCancel}>Batal</button>
          </div>
        </form>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-6 text-gray-800">Daftar Calon</h3>
        <table className="w-full text-left">
          <thead>
            <tr className="bg-indigo-50">
              <th className="p-4 font-semibold">No</th>
              <th className="p-4 font-semibold">Nama</th>
              <th className="p-4 font-semibold">NIM</th>
              <th className="p-4 font-semibold">Jurusan</th>
              <th className="p-4 font-semibold">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {calonList.map((calon, index) => (
              <tr key={calon.id} className="border-b">
                <td className="p-4">{index + 1}</td>
                <td className="p-4">{calon.nama}</td>
                <td className="p-4">{calon.nim}</td>
                <td className="p-4">{calon.jurusan}</td>
                <td className="p-4">
                  <div className="flex space-x-4">
                    <button onClick={() => handleEdit(calon.id)} className="text-blue-500 hover:text-blue-700"><FaEdit /></button>
                    <button onClick={() => handleDelete(calon.id)} className="text-red-500 hover:text-red-700"><FaTrash /></button>
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

export default CalonPage;