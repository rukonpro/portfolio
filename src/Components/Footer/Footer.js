import React from 'react';
import FollowUs from "../FollowUs/FollowUs";
import {Link} from "react-router-dom";
const Footer = () => {

    /*className="relative overflow-hidden  flex justify-center items-center bg-[#0e0e36] "*/
    return (
        <footer className="bg-gray-950 relative py-32">
            {/*   <div className="absolute custom-animate-pulse inset-0 blur-[118px] radial-gradient"></div>
            <div className=" flex justify-center py-5 text-white z-10 ">
                <h1 className="text-gray-400">Copy right &copy;{new Date().getFullYear()} <span
                    className="bg-gradient-to-br from-[#816aff] to-[#d066fd] text-transparent bg-clip-text ">Rukon.Pro</span>
                </h1>
            </div>*/}

            <div className="absolute w-full z-10 ">


                <div className=" max-w-[1200px] px-5  mx-auto ">
                    <div className="grid lg:grid-cols-3">
                        <div>
                            <h1 className="text-[30px] md:text-4xl lg:text-left text-center bg-gradient-to-br from-[#816aff]  to-[#d066fd] text-transparent bg-clip-text ">MD.
                                Rukon Uddin</h1>
                            <ol className="text-center lg:text-left pt-10 text-[#fccdff]">
                                <li className="py-3 text-[14px] tracking-[2px]">
                                    Sunamganj-3110, Sylhet, Bangladesh.
                                </li>
                                <li className="py-3 text-[14px] tracking-[2px]">
                                    Tel:- <a href="tel:+8801765459224">+8801765459224</a>
                                </li>
                                <li className="py-3  text-[14px] tracking-[2px]">

                                    Mail:- <a href="mailto: rukon.pro@gmail.com"> rukon.pro@gmail.com</a>
                                </li>
                                <li className="py-3  text-[14px] tracking-[2px]">
                                    (Available : Any time)
                                </li>
                            </ol>
                        </div>

                        <div>
                            <ol className="text-[#fccdff] flex flex-wrap lg:flex-col justify-center items-center lg:items-start gap-1 lg:gap-0 pt-10 lg:pt-0">
                                <li className="py-2 text-[14px] tracking-[2px]">
                                    <Link to="/#home">Home</Link>
                                </li>
                                <li className="block lg:hidden">|</li>
                                <li className="py-2 text-[14px] tracking-[2px]">
                                    <Link to="/#about">About</Link>
                                </li>
                                <li className="block lg:hidden">|</li>
                                <li className="py-2 text-[14px] tracking-[2px]">
                                    <Link to="/#services"> Services</Link>
                                </li>
                                <li className="block lg:hidden">|</li>
                                <li className="py-2 text-[14px] tracking-[2px]">
                                    <Link to="/#portfolio">Portfolios</Link>
                                </li>
                                <li className="block lg:hidden">|</li>
                                <li className="py-2 text-[14px] tracking-[2px]">
                                    <Link to="/#blogs">Blogs</Link>
                                </li>
                                <li className="block lg:hidden ">|</li>
                                <li className="py-2 text-[14px] tracking-[2px]">
                                    <Link to="/#blogs">skills</Link>
                                </li>
                                <li className="block lg:hidden ">|</li>
                                <li className="py-2 text-[14px] tracking-[2px]">
                                    <Link to="/#contact">Contact</Link>
                                </li>
                            </ol>
                        </div>
                        <div className='w-full flex justify-center'>
                            <div className="pt-10 lg:pt-0">
                                <h1 className="text-center text-[#fccdff] font-bold tracking-[5px]">Follow Us</h1>
                                <FollowUs/>

                            </div>
                        </div>
                    </div>
                </div>

                <div className=" flex justify-center py-5 text-white z-10 ">
                    <h1 className="text-gray-400">Copy right &copy;{new Date().getFullYear()} <span
                        className="bg-gradient-to-br from-[#816aff] to-[#d066fd] text-transparent bg-clip-text ">Rukon.Pro</span>
                    </h1>
                </div>
            </div>

            <div className=" flex flex-col lg:flex-row justify-between blur-[400px] ">
                <div className=" h-60 w-full  bg-gradient-to-tl from-[#22062d] to-[#532f82] rounded-full"/>
                <div className=" h-[30vh] w-full  bg-gradient-to-tr from-[#230a48] to-[#282f5b]  rounded-full"/>
                <div className="h-10 lg:h-60 w-full  bg-gradient-to-tl from-[#380644] to-[#36084b]  rounded-full"/>
            </div>


        </footer>
    );
};

export default Footer;