import React from "react";
import LazyLoader from "../../Helpers/LazyLoader";
import OnClickSound from "../../Helpers/OnClickSound";
import Slider from "./Slider";
import FollowUs from "../FollowUs/FollowUs";


const Header = () => {

    return (
        <header
            id="home"
            className="relative  bg-[#0e0e36] "
        >
            <div className=" container  flex items-center mx-auto px-5 py-24">
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
                                        className="bg-gradient-to-br from-[#816aff]  to-[#d066fd] text-transparent bg-clip-text tracking-[2px]  ">Rukon Uddin</span>
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


                                 <FollowUs/>
                                    <a
                                        data-aos="fade-right"
                                        data-aos-offset="10"
                                        data-aos-duration="600"
                                        data-aos-easing="ease-in-sine"
                                        href="https://drive.google.com/file/d/1S8dFRWC7f3QH6ZVnGp6miYLwPz8s4coh/view?usp=sharing"
                                       target="_blank" rel="noreferrer">
                                        <button
                                            onClick={() => OnClickSound("/Music/keypress.mp3")}
                                            id="downloadcv"
                                            aria-label="Download CV"
                                            className=" mt-5  text-center text-white md:text-xl text-base font-bold  bg-gradient-to-l from-[#1355b7] to-[#0e0e36] rounded-full active:bg-gradient-to-l hover:shadow-2xl  hover:shadow-[#263458] tracking-[1px] px-4 py-2 ">
                                        <span
                                            className="bg-gradient-to-r from-[#816aff] to-[#d066fd] text-transparent bg-clip-text"> Download CV</span>
                                        </button>
                                    </a>
                                </div>
                        </div>
                        <div className="flex justify-center lg:justify-end">
                            <LazyLoader>
                                <Slider/>
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
                                OnClickSound("/Music/keypress.mp3").catch();
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