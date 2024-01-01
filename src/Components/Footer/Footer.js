import React from 'react';

const Footer = () => {
    return (
        <footer className="relative">
            <div className="absolute custom-animate-pulse inset-0 blur-[118px] radial-gradient"></div>

            <div className="flex justify-center py-5 text-white radial-gradient">
                <h1 className="text-gray-400">Copy right &copy;{new Date().getFullYear()} <span className="bg-gradient-to-br from-[#816aff] to-[#d066fd] text-transparent bg-clip-text ">Rukon.Pro</span></h1>
            </div>
        </footer>
    );
};

export default Footer;