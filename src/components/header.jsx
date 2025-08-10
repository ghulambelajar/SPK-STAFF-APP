import React, {useState} from "react";
import { FaBars,FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return(
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4 flex item-center justify-between">
                <a className="flex item-center space-x-3" href="#">
                    <img alt="Logo SPK"className="w-12 h-12 rounded-md"src="https://storage.googleapis.com/a1aa/image/3487aecf-ad62-4214-9320-18b25d940bca.jpg" />
                    <span className="text-2xl font-bold text-indigo-600 select-none">
                        Penerimaan Staff Mahasiswa
                    </span>
                </a>

                {/* Menu Dekstop */}
                <nav className="hidden md:flex space-x-8 font-semibold text-indigo-600">
                    <a href="#features" className="hover:text-indigo-800">Features</a>
                    <a href="#about" className="hover:text-indigo-800">About</a>
                    <Link to="/login" className="bg-indigo-600 text-white px-5 py-2 mt-2 rounded-md shadow-md hover:bg-indigo-700 transition text-center">
                    Login Admin
                    </Link>
                </nav>
                
                {/* Tombol untuk Mobile */}
                <button aria-label="Toggle menu" className="md:hidden text-indigo-600 focus:outline-none" onClick={() => setIsMenuOpen (!isMenuOpen)}>
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} /> }
                </button>
            </div>
            {/* Tampilan Menu Mobile (muncul jika isMenuOpen true) */}
            {isMenuOpen &&(
                <div className="md:hidden bg-white">
                    <nav className="flex flex-col space-y-2 px-6 py-4 font-semibold text-indigo-600">
                        <a href="#features" className="hover:text-indigo-800 transition py-2">Features</a>
                        <a href="#about" className="hover:text-indigo-800 transition py-2">About</a>
                        <Link to="/login" className="bg-indigo-600 text-white px-5 py-2 mt-2 rounded-md shadow-md hover:bg-indigo-700 transition text-center">
                        Login Admin
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;