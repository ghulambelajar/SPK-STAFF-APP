import React from "react";
import { FaUserLock, FaTachometerAlt, FaListAlt, FaUser, FaClipboardList, FaChartBar } from "react-icons/fa";

const featuresData = [
    { icon: <FaUserLock/>, title: "Halaman Login", description: "Login Khusus admin/panitia untuk mengakses sistem dengan aman" },
    { icon: <FaTachometerAlt />, title: "Dashboard", description: "Tampilan utama yang menampilkan ringkasan data dan status sistem"},
    { icon: <FaListAlt />, title: "Manajemen Kriteria", description: "Tambah, Edit, dan Hapus kriteria dengan bobot dan jenis benefit/cost" },
    { icon: <FaUser />, title: "Manajemen Calon", description: "Kelola data calon staff mahasiswa seperti nama, NIM, dan Jurusan" },
    { icon: <FaClipboardList />, title: "Proses Penilaian", description: "Input nilai calon untuk setiap kriteria dalam bentuk tabel yang mudah"},
    { icon: <FaChartBar />, title: "Hasil Perangkingan", description: "Menampilkan hasil perhitungan WP dengan skor akhir dan peringkat"},
];

const FeaturesCard = ({ icon, title, description }) => (
    <div className="flex flex-col items-center text-center space-y-4 px-4">
        <div className="bg-indigo-100 text-indigo-600 rounded-full p-5 shadow-md text-4xl">
            {icon}
        </div>
        <h3 className="text-xl font-semibold text-indigo-700"> {title} </h3>
        <p className="text-gray-600"> {description} </p>
    </div>
);

const Features = () => {
    return (
        <section className="bg-white rounded-t-3xl shadow-xl py-16 px-6 md:px-16 -mt-20 relative z-10" id="features">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-extrabold text-indigo-600 text-center mb-12">
                    fitur utama
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6 max-w-5xl mx-auto">
                    {featuresData.map((feature, index)=> (
                        <FeaturesCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;