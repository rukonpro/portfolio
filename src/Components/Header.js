import React from "react";
import Iphone from "../Images/header-laptop-2.svg";
import EmailIcon from "../Images/gmail.png";
import PhoneIcon from "../Images/phone-call.png";
import SkypeIcon from "../Images/skype.png";
import LinkdinIcon from "../Images/linkedin.png";
import Whatsapp from "../Images/whatsapp.png";
import GithubIcon from "../Images/github-icon-1.svg";
import LazyImageLoader from "../utilitis/LazyImageLoader";

const Header = () => {
    return (
        <header
            id="home"
            className="relative pb-10 bg-[#0e0e36]     overflow-hidden"
        >
            <div className="relative z-10 md:px-28">
                <div className='lg:flex flex-none justify-between container mx-auto md:pt-28 pt-28 md:px-0 px-5  '>
                    <div>
                        <div>
                            <div>
                                <span
                                    className="text-2xl font-bold bg-gradient-to-r from-[#816aff] to-[#d066fd] text-transparent bg-clip-text tracking-[5px]">
                                    Hello!, I'm
                                </span>
                                <h1 className=" md:text-7xl text-4xl font-bold font-['Roboto'] pt-2  "><
                                    span
                                    className="bg-gradient-to-br from-[#816aff] to-[#d066fd] text-transparent bg-clip-text tracking-[4px] ">Rukon Uddin</span>
                                </h1>

                                <p className=" md:text-xl text-base font-bold font-['Roboto'] mt-2 md:tracking-[5px] tracking-[2px] text-[#fccdff]">MERN-stack
                                    Developer | React Developer | Javascript Developer</p>

                                <div className='flex flex-wrap gap-2 pt-5'>
                                    <a href="https://www.linkedin.com/in/rukonpro/">
                                        <div
                                            className=' w-10 p-2 h-10 rounded-full flex justify-center items-center bg-gradient-to-bl from-[#007ab9] to-[#eceff1]  shadow-2xl shadow-fuchsia-300'>
                                            <LazyImageLoader>
                                                <img src={GithubIcon || undefined} height="100%" width="100%" alt="GithubIcon"
                                                     loading="lazy"/>
                                            </LazyImageLoader>
                                        </div>
                                    </a>

                                    <a href="https://www.linkedin.com/in/rukonpro/">
                                        <div
                                            className=' w-10 h-10 rounded-full flex justify-center items-center bg-gradient-to-bl from-[#007ab9] to-[#0e0e36]'>
                                            <LazyImageLoader>
                                                <img src={LinkdinIcon || undefined} height="100%" width="100%" alt="linkdin"
                                                     loading="lazy"/>
                                            </LazyImageLoader>
                                        </div>
                                    </a>

                                    <a href="mailto:rukon.js@gamil.com">
                                        <div
                                            className=' w-10 h-10 rounded-full flex justify-center items-center bg-gradient-to-bl from-[#f44336] to-[#0e0e36]'>
                                            <LazyImageLoader>
                                                <img src={EmailIcon || undefined} height="100%" width="100%" alt="email"
                                                     loading="lazy"/>
                                            </LazyImageLoader>
                                        </div>
                                    </a>

                                    <a href="https://join.skype.com/invite/yXu1Kxuk8hZF?fbclid=IwAR18ICJ_AmaQUWEIsiIfd4XyikyYvhcEIrM5HLImwXXJc42KT6pwqWjDaC0">
                                        <div
                                            className=' w-10 h-10 rounded-full flex justify-center items-center bg-gradient-to-bl from-[#00aff0] to-[#0e0e36]'>
                                            <LazyImageLoader>
                                                <img src={SkypeIcon || undefined} height="100%" width="100%" alt="skype"
                                                     loading="lazy"/>
                                            </LazyImageLoader>
                                        </div>
                                    </a>
                                    <a href="https://api.whatsapp.com/send?phone=1765459224">
                                        <div
                                            className=' w-10 h-10 rounded-full flex justify-center items-center bg-gradient-to-bl from-[#4caf50] to-[#0e0e36]'>
                                            <LazyImageLoader>
                                                <img src={Whatsapp || undefined} height="100%" width="100%" alt="whatsapp"
                                                     loading="lazy"/>
                                            </LazyImageLoader>

                                        </div>
                                    </a>

                                    <a href="tel:+8801765459224">
                                        <div
                                            className=' w-10 h-10 rounded-full flex justify-center items-center bg-gradient-to-bl from-[#3e9ddd] to-[#0e0e36]'>
                                            <LazyImageLoader>
                                                <img src={PhoneIcon || undefined} height="100%" width="100%"
                                                     alt="phone number" loading="lazy"/>
                                            </LazyImageLoader>
                                        </div>
                                    </a>
                                </div>
                                <a href="https://drive.google.com/file/d/1S8dFRWC7f3QH6ZVnGp6miYLwPz8s4coh/view?usp=sharing">
                                    <button
                                        id="downloadcv"
                                        aria-label="Download CV"
                                        className=" mt-5  text-center text-white md:text-xl text-base font-bold font-['Roboto'] bg-gradient-to-l from-[#1355b7] to-[#0e0e36] rounded-full active:bg-gradient-to-l hover:shadow-2xl  hover:shadow-[#263458] tracking-[1px] px-4 py-2 ">
                                        <span
                                            className="bg-gradient-to-r from-[#816aff] to-[#d066fd] text-transparent bg-clip-text"> Download CV</span>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <LazyImageLoader>
                            <img
                                className=" md:w-[76vh]"
                                src={Iphone || undefined}
                                height="100%"
                                width="100%"
                                alt="bannderphoto"
                                fetchpriority="high"
                                loading="eager"
                            />
                        </LazyImageLoader>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button
                        onClick={() => window.scrollBy(0, 600)}
                        type="button"
                        id="mouseButton"
                        aria-label="mouseButton"
                        className="mouseButton "
                    >
                        <svg
                            width="45"
                            height="77"
                            viewBox="0 0 45 77"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                cx="22.1461"
                                cy="14.6504"
                                r="6.47345"
                                fill="url(#paint0_linear_128_381)"
                            />
                            <rect
                                x="0.5"
                                y="0.5"
                                width="43.9734"
                                height="76"
                                rx="21.9867"
                                stroke="url(#paint1_linear_128_381)"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_128_381"
                                    x1="9.70489"
                                    y1="10.908"
                                    x2="29.4287"
                                    y2="17.5837"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#FC4A1A"/>
                                    <stop offset="1" stopColor="#F7B733"/>
                                </linearGradient>
                                <linearGradient
                                    id="paint1_linear_128_381"
                                    x1="22.4867"
                                    y1="0"
                                    x2="22.4867"
                                    y2="77"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#FC4A1A"/>
                                    <stop offset="1" stopColor="#F7B733"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="absolute custom-animate-pulse inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg" style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
            }}
            ></div>
        </header>
    );
};

export default Header;