import React from 'react';

const Footer = () => {
    return (
        <footer className="relative bg-gray-900">
            <div
                className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
                style={{
                    background:
                        "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
                }}
            ></div>
            <div className="flex justify-center py-5 text-white z-10 relative">
                <h1 className="text-gray-400">Copy right &copy;{new Date().getFullYear()} <span className="bg-gradient-to-br from-[#816aff] to-[#d066fd] text-transparent bg-clip-text ">Rukon.Pro</span></h1>
            </div>
        </footer>
    );
};

export default Footer;