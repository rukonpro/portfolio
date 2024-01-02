import React from "react";
import Iphone from "../../Images/header-laptop-2.svg";
import EmailIcon from "../../Images/gmail.png";
import PhoneIcon from "../../Images/phone-call.png";
import SkypeIcon from "../../Images/skype.png";
import LinkdinIcon from "../../Images/linkedin.png";
import Whatsapp from "../../Images/whatsapp.png";
import GithubIcon from "../../Images/github-icon-1.svg";
import LazyLoader from "../../Helpers/LazyLoader";
import OnClickSound from "../../Helpers/OnClickSound";


const Header = () => {

    return (
        <header
            id="home"
            className="relative  bg-[#0e0e36]    "
        >
            <div className=" container h-screen flex items-center mx-auto px-5 py-24">
                <div className=" relative z-10 ">
                    <div className='grid lg:grid-cols-2 grid-cols-1 items-center'>
                        <div>
                                <div>
                                <span
                                    data-aos="fade-right"
                                    data-aos-offset="10"
                                    data-aos-duration="1000"
                                    data-aos-easing="ease-in-sine"
                                    className="text-2xl font-bold bg-gradient-to-r from-[#816aff] to-[#d066fd] text-transparent bg-clip-text tracking-[5px]">
                                    Hello!, I'm
                                </span>
                                    <h1
                                        data-aos="fade-right"
                                        data-aos-offset="10"
                                        data-aos-duration="1000"
                                        data-aos-easing="ease-in-sine"
                                        className=" md:text-7xl text-4xl font-bold  pt-2  "><
                                        span
                                        className="bg-gradient-to-br from-[#816aff]  to-[#d066fd] text-transparent bg-clip-text tracking-[2px] ">Rukon Uddin</span>
                                    </h1>

                                    <div className=" md:text-xl text-base font-bold  mt-2 md:tracking-[3px] tracking-[1px] text-[#fccdff] flex gap-1 flex-wrap">
                                        <p
                                            data-aos="fade-right"
                                            data-aos-offset="10"
                                            data-aos-duration="12000"
                                            data-aos-easing="ease-in-sine"
                                        >MERN-stack
                                        Developer</p> | <p
                                        data-aos="fade-right"
                                        data-aos-offset="10"
                                        data-aos-duration="1100"
                                        data-aos-easing="ease-in-sine"
                                    >React Developer</p> | <p
                                        data-aos="fade-right"
                                        data-aos-offset="10"
                                        data-aos-duration="1000"
                                        data-aos-easing="ease-in-sine"
                                    >Javascript Developer</p></div>


                                    <div className='flex flex-wrap gap-2 pt-5'>
                                        <a
                                            data-aos="fade-right"
                                            data-aos-offset="10"
                                            data-aos-duration="1200"
                                            data-aos-easing="ease-in-sine"
                                            href="https://github.com/rukonpro" target="_blank" rel="noreferrer">
                                            <button
                                                onClick={() => OnClickSound("/keypress.mp3")}
                                                className=' w-10 p-2 h-10 rounded-full flex justify-center items-center bg-gradient-to-bl from-[#007ab9] to-[#eceff1]  shadow-2xl shadow-fuchsia-300 '>
                                                <LazyLoader>
                                                    <img src={GithubIcon || undefined} height="100%" width="100%"
                                                         alt="GithubIcon"
                                                         loading="lazy"/>
                                                </LazyLoader>
                                            </button>
                                        </a>

                                        <a
                                            data-aos="fade-right"
                                            data-aos-offset="10"
                                            data-aos-duration="1100"
                                            data-aos-easing="ease-in-sine"
                                            href="https://www.linkedin.com/in/rukonpro/" target="_blank"
                                           rel="noreferrer">
                                            <button
                                                onClick={() => OnClickSound("/keypress.mp3")}
                                                className=' w-10 h-10 rounded-full flex justify-center items-center bg-gradient-to-bl from-[#007ab9] to-[#0e0e36] '>
                                                <LazyLoader>
                                                    <img src={LinkdinIcon || undefined} height="100%" width="100%"
                                                         alt="linkdin"
                                                         loading="lazy"/>
                                                </LazyLoader>
                                            </button>
                                        </a>

                                        <a
                                            data-aos="fade-right"
                                            data-aos-offset="10"
                                            data-aos-duration="1000"
                                            data-aos-easing="ease-in-sine"
                                            href="mailto:rukon.js@gamil.com" target="_blank" rel="noreferrer">
                                            <button
                                                onClick={() => OnClickSound("/keypress.mp3")}
                                                className=' w-10 h-10 rounded-full flex justify-center items-center bg-gradient-to-bl from-[#f44336] to-[#0e0e36] '>
                                                <LazyLoader>
                                                    <img src={EmailIcon || undefined} height="100%" width="100%"
                                                         alt="email"
                                                         loading="lazy"/>
                                                </LazyLoader>
                                            </button>
                                        </a>

                                        <a
                                            data-aos="fade-right"
                                            data-aos-offset="10"
                                            data-aos-duration="900"
                                            data-aos-easing="ease-in-sine"
                                            href="https://join.skype.com/invite/yXu1Kxuk8hZF?fbclid=IwAR18ICJ_AmaQUWEIsiIfd4XyikyYvhcEIrM5HLImwXXJc42KT6pwqWjDaC0"
                                           target="_blank" rel="noreferrer">
                                            <button
                                                onClick={() => OnClickSound("/keypress.mp3")}
                                                className=' w-10 h-10 rounded-full flex justify-center items-center bg-gradient-to-bl from-[#00aff0] to-[#0e0e36] '>
                                                <LazyLoader>
                                                    <img src={SkypeIcon || undefined} height="100%" width="100%"
                                                         alt="skype"
                                                         loading="lazy"/>
                                                </LazyLoader>
                                            </button>
                                        </a>
                                        <a
                                            data-aos="fade-right"
                                            data-aos-offset="10"
                                            data-aos-duration="800"
                                            data-aos-easing="ease-in-sine"
                                            href="https://api.whatsapp.com/send?phone=1765459224" target="_blank"
                                           rel="noreferrer">
                                            <button
                                                onClick={() => OnClickSound("/keypress.mp3")}
                                                className=' w-10 h-10 rounded-full flex justify-center items-center bg-gradient-to-bl from-[#4caf50] to-[#0e0e36] '>
                                                <LazyLoader>
                                                    <img src={Whatsapp || undefined} height="100%" width="100%"
                                                         alt="whatsapp"
                                                         loading="lazy"/>
                                                </LazyLoader>

                                            </button>
                                        </a>

                                        <a
                                            data-aos="fade-right"
                                            data-aos-offset="10"
                                            data-aos-duration="700"
                                            data-aos-easing="ease-in-sine"
                                            href="tel:+8801765459224" target="_blank" rel="noreferrer">
                                            <button
                                                onClick={() => OnClickSound("/keypress.mp3")}
                                                className=' w-10 h-10 rounded-full flex justify-center items-center bg-gradient-to-bl from-[#3e9ddd] to-[#0e0e36] '
                                                data-aos="fade-in"
                                            >
                                                <LazyLoader>
                                                    <img
                                                        src={PhoneIcon || undefined} height="100%" width="100%"
                                                         alt="phone number" loading="lazy"/>
                                                </LazyLoader>
                                            </button>
                                        </a>
                                    </div>
                                    <a
                                        data-aos="fade-right"
                                        data-aos-offset="10"
                                        data-aos-duration="600"
                                        data-aos-easing="ease-in-sine"
                                        href="https://drive.google.com/file/d/1S8dFRWC7f3QH6ZVnGp6miYLwPz8s4coh/view?usp=sharing"
                                       target="_blank" rel="noreferrer">
                                        <button
                                            onClick={() => OnClickSound("/keypress.mp3")}
                                            id="downloadcv"
                                            aria-label="Download CV"
                                            className=" mt-5  text-center text-white md:text-xl text-base font-bold  bg-gradient-to-l from-[#1355b7] to-[#0e0e36] rounded-full active:bg-gradient-to-l hover:shadow-2xl  hover:shadow-[#263458] tracking-[1px] px-4 py-2 ">
                                        <span
                                            className="bg-gradient-to-r from-[#816aff] to-[#d066fd] text-transparent bg-clip-text"> Download CV</span>
                                        </button>
                                    </a>
                                </div>
                        </div>
                        <div className="flex justify-end">
                            <LazyLoader>
                                <img
                                    data-aos="fade-left"
                                    data-aos-offset="10"
                                    data-aos-duration="2000"
                                    data-aos-easing="ease-in-sine"
                                    className=" md:w-[76vh]"
                                    src={Iphone || undefined}
                                    height="100%"
                                    width="100%"
                                    alt="bannderphoto"
                                    loading="eager"
                                />
                            </LazyLoader>
                        </div>
                    </div>
                    <div className="flex justify-center relative">
                        <button
                            data-aos="fade-up"
                            data-aos-offset="10"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-sine"
                            onClick={() => {
                                OnClickSound("/keypress.mp3").catch();
                                window.scrollBy(0, 900);
                            }}
                            type="button"
                            id="mouseButton"
                            aria-label="mouseButton"
                            className="mouseButton  "
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
                <div
                    className="absolute custom-animate-pulse inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
                    style={{
                        background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
                    }}
                ></div>
            </div>
        </header>
    );
};

export default Header;