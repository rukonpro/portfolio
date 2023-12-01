import React from 'react';
import BlueBackCover from "../Images/BlueBackCover.png";
import IphonScreen from "../Images/iphonScreen.png";
import Icon from "../Images/fluent_design-ideas-20-regular.png";
import Ellipse from "../Images/Ellipse 7.png";

const Services = () => {
    return (
        <section id="services" className=" relative flex justify-center items-center bg-gray-900 py-20 ">
            <div className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[1000px] sm:max-w-md md:max-w-lg" style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>
            <div className="container relative z-10 mx-auto ">
                <div className="flex justify-center">
                    <div className="flex items-center relative">
                        <div className="  w-[55px] h-[55px] bg-gradient-to-r from-orange-600 to-amber-400 rounded-full  customShadow"></div>
                        <h1 className=" relative right-10 text-white z-10 md:text-5xl text-2xl font-bold font-['Roboto'] ">My services</h1>
                    </div>
                </div>

                <div className="md:flex flex-none justify-center mt-10">


                    <div className="block md:hidden pb-20">
                        <div className="flex justify-center">
                            <div className="w-[244.63px] h-[494.98px] z-20 flex justify-center">
                                <img className="absolute" src={BlueBackCover} alt="" />
                                <img className="absolute mt-3  rounded-3xl " src={IphonScreen} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between  gap-5">
                        <div className="flex  md:flex-row-reverse">
                            <div className="px-3">
                                <div className="relative w-[68px] h-[68px] flex justify-center items-center">
                                    <img className="absolute" src={Ellipse} alt="" />
                                    <img className="absolute" src={Icon} alt="" />
                                </div>
                            </div>

                            <div className="md:text-left lg:text-right">
                                <h1 className="  text-white text-2xl font-bold font-['Roboto']">PHOTOGRAPHY</h1>
                                <p className=" text-white text-base pt-5 font-bold font-['Roboto']">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt doloremque excepturi sit odit impedit, voluptas.</p>
                            </div>
                        </div>

                        <div className="flex  md:flex-row-reverse">
                            <div className="px-3">
                                <div className="relative w-[68px] h-[68px] flex justify-center items-center">
                                    <img className="absolute" src={Ellipse} alt="" />
                                    <img className="absolute" src={Icon} alt="" />
                                </div>
                            </div>

                            <div className="md:text-left lg:text-right">
                                <h1 className="  text-white text-2xl font-bold font-['Roboto']">PHOTOGRAPHY</h1>
                                <p className=" text-white text-base pt-5 font-bold font-['Roboto']">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt doloremque excepturi sit odit impedit, voluptas.</p>
                            </div>
                        </div>
                        <div className="flex  md:flex-row-reverse">
                            <div className="px-3">
                                <div className="relative w-[68px] h-[68px] flex justify-center items-center">
                                    <img className="absolute" src={Ellipse} alt="" />
                                    <img className="absolute" src={Icon} alt="" />
                                </div>
                            </div>

                            <div className="md:text-left lg:text-right">
                                <h1 className="  text-white text-2xl font-bold font-['Roboto']">PHOTOGRAPHY</h1>
                                <p className=" text-white text-base pt-5 font-bold font-['Roboto']">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt doloremque excepturi sit odit impedit, voluptas.</p>
                            </div>
                        </div>
                    </div>


                    <div className="md:block hidden">
                        <div className="w-[244.63px] h-[494.98px] z-20 flex justify-center">
                            <img className="absolute" src={BlueBackCover} alt="" />
                            <img className="absolute mt-3  rounded-3xl " src={IphonScreen} alt="" />
                        </div>
                    </div>


                    <div className="flex flex-col justify-between gap-5">
                        <div className="flex">


                            <div className="px-3">
                                <div className="relative w-[68px] h-[68px] flex justify-center items-center">
                                    <img className="absolute" src={Ellipse} alt="" />
                                    <img className="absolute" src={Icon} alt="" />
                                </div>
                            </div>

                            <div >
                                <h1 className=" text-left text-white text-2xl font-bold font-['Roboto']">PHOTOGRAPHY</h1>
                                <p className="text-left text-white text-base font-bold font-['Roboto']">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt doloremque excepturi sit odit impedit, voluptas.</p>
                            </div>

                        </div>
                        <div className="flex">


                            <div className="px-3">
                                <div className="relative w-[68px] h-[68px] flex justify-center items-center">
                                    <img className="absolute" src={Ellipse} alt="" />
                                    <img className="absolute" src={Icon} alt="" />
                                </div>
                            </div>

                            <div >
                                <h1 className=" text-left text-white text-2xl font-bold font-['Roboto']">PHOTOGRAPHY</h1>
                                <p className="text-left text-white text-base font-bold font-['Roboto']">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt doloremque excepturi sit odit impedit, voluptas.</p>
                            </div>

                        </div>
                        <div className="flex">


                            <div className="px-3">
                                <div className="relative w-[68px] h-[68px] flex justify-center items-center">
                                    <img className="absolute" src={Ellipse} alt="" />
                                    <img className="absolute" src={Icon} alt="" />
                                </div>
                            </div>

                            <div >
                                <h1 className=" text-left text-white text-2xl font-bold font-['Roboto']">PHOTOGRAPHY</h1>
                                <p className="text-left text-white text-base font-bold font-['Roboto']">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt doloremque excepturi sit odit impedit, voluptas.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;