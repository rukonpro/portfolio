import React from 'react';

const Navigation = () => {
    return (
        <nav className=' flex justify-between items-center px-8 py-4   w-full fixed z-50 bg-opacity-100 bg-gradient-to-b from-indigo-950/90 from-5%  via-indigo-800/5 via-60% to-indigo-950/20'>
            <div><span className="text-white text-[22px] font-bold font-['Roboto'] ">Rukon. </span><span className="text-orange-600 text-[22px] font-bold font-['Roboto']">JS</span></div>


            <div className="flex">

                <div className="hidden md:block">
                    <ul className="flex items-center gap-10 text-white font-bold px-5 text-xl  ">
                        <li><a href="/">Home</a></li>
                        <li>About</li>
                        <li>Skills</li>
                        <li>Portfolio</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <button className="md:hidden block">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="32" cy="32" r="32" fill="url(#paint0_linear_124_219)" />
                        <rect x="15" y="20" width="33" height="7" rx="3.5" fill="white" />
                        <rect x="10" y="29" width="43" height="7" rx="3.5" fill="white" />
                        <rect x="15" y="38" width="33" height="7" rx="3.5" fill="white" />
                        <defs>
                            <linearGradient id="paint0_linear_124_219" x1="-29.5" y1="13.5" x2="68" y2="46.5" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FC4A1A" />
                                <stop offset="1" stopColor="#F7B733" />
                            </linearGradient>
                        </defs>
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Navigation;