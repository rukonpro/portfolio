import React from 'react';
import Iphone from '../Images/header-laptop-2.svg';
import EmailIcon from "../Images/gmail.png";
import PhoneIcon from "../Images/phone-call.png";
import SkypeIcon from "../Images/skype.png";
import LinkdinIcon from "../Images/linkedin.png";
import Whatsapp from "../Images/whatsapp.png";

const Header = () => {
    return (
        <header id="home" className='relative pb-10 bg-[#0e0e36]     overflow-hidden'>

            <div className="relative z-10 md:px-28">
                <div className='lg:flex flex-none justify-between container mx-auto md:pt-28 pt-28 md:px-0 px-5  '>
                    <div>
                        <div>
                            <div>
                                <button
                                    className="w-[134px] py-2 bg-gradient-to-r from-[#111827] to-[#292658] rounded-tl-[40px] rounded-tr-[40px] rounded-br-[40px] text-white md:text-lg text-base font-bold font-['Roboto'] ">
                                    Hello, i’m
                                </button>
                                <h1 className="text-white md:text-7xl text-4xl font-bold font-['Roboto'] pt-2  ">Rukon
                                    Uddin</h1>

                                <h5 className="text-white md:text-xl text-base font-bold font-['Roboto'] mt-2">MERN-STACK
                                    DEVELOPER | REACT DEVELOPER | JAVASCRIPT DEVELOPER</h5>

                                <div className='flex gap-4 pt-5'>
                                    <a href="https://www.linkedin.com/in/rukonpro/">
                                        <div
                                            className=' w-10 h-10 rounded-full flex justify-center items-center bg-white'>
                                            <img src={LinkdinIcon || undefined} alt="linkdin"/>
                                        </div>
                                    </a>

                                    <a href="mailto:rukon.js@gamil.com">
                                        <div
                                            className=' w-10 h-10 rounded-full flex justify-center items-center bg-white'>
                                            <img src={EmailIcon || undefined} alt="email"/>
                                        </div>
                                    </a>

                                    <a href="https://join.skype.com/invite/yXu1Kxuk8hZF?fbclid=IwAR18ICJ_AmaQUWEIsiIfd4XyikyYvhcEIrM5HLImwXXJc42KT6pwqWjDaC0">
                                        <div
                                            className=' w-10 h-10 rounded-full flex justify-center items-center bg-white'>
                                            <img src={SkypeIcon || undefined} alt="skype"/>
                                        </div>
                                    </a>
                                    <a href="https://api.whatsapp.com/send?phone=1765459224">
                                        <div
                                            className=' w-10 h-10 rounded-full flex justify-center items-center bg-white'>
                                            <img src={Whatsapp || undefined} alt="whatsapp"/>
                                        </div>
                                    </a>

                                    <a href="tel:+8801765459224">
                                        <div
                                            className=' w-10 h-10 rounded-full flex justify-center items-center bg-white'>
                                            <img src={PhoneIcon || undefined} alt="phone number"/>
                                        </div>
                                    </a>
                                </div>
                                <a href="https://drive.google.com/file/d/1S8dFRWC7f3QH6ZVnGp6miYLwPz8s4coh/view?usp=sharing">
                                    <button
                                        className="mt-5 w-[180px] h-[45px] text-center text-white md:text-xl text-base font-bold font-['Roboto'] bg-gradient-to-r from-[#263458] to-[#111827] rounded-full active:bg-gradient-to-l hover:shadow-2xl  hover:shadow-[#263458]">Download
                                        CV
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-end'>
                        <img className=' md:w-[76vh]' alt='iphone' src={Iphone || undefined}/>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <button>
                        <svg width="45" height="77" viewBox="0 0 45 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="22.1461" cy="14.6504" r="6.47345" fill="url(#paint0_linear_128_381)"/>
                            <rect x="0.5" y="0.5" width="43.9734" height="76" rx="21.9867"
                                  stroke="url(#paint1_linear_128_381)"/>
                            <defs>
                                <linearGradient id="paint0_linear_128_381" x1="9.70489" y1="10.908" x2="29.4287"
                                                y2="17.5837" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FC4A1A"/>
                                    <stop offset="1" stopColor="#F7B733"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear_128_381" x1="22.4867" y1="0" x2="22.4867" y2="77"
                                                gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FC4A1A"/>
                                    <stop offset="1" stopColor="#F7B733"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </button>
                </div>
            </div>
            <div
                className="absolute custom-animate-pulse inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
                style={{background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)"}}></div>
        </header>
    );
};

export default Header;