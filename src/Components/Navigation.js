import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className=' fixed z-50 bg-gray-900'>
            <div className="flex  justify-between items-center px-8 py-4  w-screen">
                <div><Link to="/"><span className="text-white text-[22px] font-bold font-['Roboto'] ">Rukon. </span><span className="text-orange-600 text-[22px] font-bold font-['Roboto']">JS</span></Link></div>
                <div className="flex" >

                    <div className="hidden md:block">
                        <ul className="flex items-center gap-10 text-white font-bold px-5 text-xl  ">
                            <li><a href="/#home">Home</a></li>
                            <li><a href="/#about">About</a></li>
                            <li><a href="/#services">Services</a></li>
                            <li><a href="/#skills">Skills</a></li>
                            <li><a href="/#portfolio">Portfolio</a></li>
                            <li><a href="/#blogs">Blogs</a></li>
                            <li><a href="/#contact">Contact</a></li>
                            <li><button onClick={() => document.getElementById("loginModal").showModal()}>Login</button></li>
                        </ul>
                    </div>
                    <button className="md:hidden  rounded-full block">
                        <svg width="50" height="50" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            </div>
        </nav>
    );
};

export default Navigation;