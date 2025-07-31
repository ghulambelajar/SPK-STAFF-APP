import React from "react";
const Footer = () => {
    return(
        <footer className="bg-indigo-900 text-indigo-300 py-6 text-center select-none">
            © {new Date().getFullYear()} SPK Penerimaan Staff Mahasiswa. All rights reserved.
        </footer>
    );
};

export default Footer;