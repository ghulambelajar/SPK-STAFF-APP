import React from "react";

const Hero = () => {
    return(
        <section className="container mx-auto px-6 pt-20 pb-16 flex flex-col-reverse md:flex-row items-center gap-12 max-w-7xl">
            <div className="md:w1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-lg">
                Sistem Pendukung Keputusan
                <br />
                <span className="text-indigo-300">
                    Penerimaan Staff Mahasiswa
                </span>
            </h1>
            <p className="mt-6 text-indigo-200 text-lg md:text-xl max-w-xl drop-shadow-md">
                Aplikasi berbasis web untuk membantu panitia dalam memilih calon staff mahasiswa terbaik menggunakan method Weighted Product (WP).
            </p>
            <a href="#login" className="inline-block mt-10 bg-white text-indigo-700 font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-indigo-50 transition text-lg drop-shadow-md">
                Masuk ke Halaman Login
            </a>
            </div>

            <div className="md:w-1/2 max-w-md mx-auto md:mx-0">
            <img src="https://storage.googleapis.com/a1aa/image/51b83353-ad41-480e-ab51-d7a43f9abedf.jpg" alt="Collaboration Illustration"className="rounded-xl shadow-2xl w-full object-cover"/>
            </div>
        </section>
    );
};

export default Hero;