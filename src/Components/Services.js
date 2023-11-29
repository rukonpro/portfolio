import React from 'react';
import BlueBackCover from "../Images/BlueBackCover.png";
import IphonScreen from "../Images/iphonScreen.png";
import Icon from "../Images/fluent_design-ideas-20-regular.png";
import Ellipse from "../Images/Ellipse 7.png";

const Services = () => {
    return (
        <section id="services" className="myServiceContainer  w-screen   flex justify-center items-center bg-slate-800 py-20 ">
            <div className="container mx-auto ">
                <div className="flex justify-center">
                    <div className="relative  w-[55px] h-[55px] bg-gradient-to-r from-orange-600 to-amber-400 rounded-full right-28 customShadow"></div>
                    <h1 className="text-white z-10 text-[50px] font-bold font-['Roboto'] absolute">My services</h1>
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
                                <h1 className="  text-white text-[28px] font-bold font-['Roboto']">PHOTOGRAPHY</h1>
                                <p className=" text-white text-lg font-bold font-['Roboto']">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt doloremque excepturi sit odit impedit, voluptas.</p>
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
                                <h1 className="text-white text-[28px] font-bold font-['Roboto']">PHOTOGRAPHY</h1>
                                <p className="text-white text-lg font-bold font-['Roboto']">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt doloremque excepturi sit odit impedit, voluptas.</p>
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
                                <h1 className=" text-white text-[28px] font-bold font-['Roboto']">PHOTOGRAPHY</h1>
                                <p className=" text-white text-lg font-bold font-['Roboto']">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt doloremque excepturi sit odit impedit, voluptas.</p>
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
                                <h1 className=" text-left text-white text-[28px] font-bold font-['Roboto']">PHOTOGRAPHY</h1>
                                <p className="text-left text-white text-lg font-bold font-['Roboto']">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt doloremque excepturi sit odit impedit, voluptas.</p>
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
                                <h1 className=" text-left text-white text-[28px] font-bold font-['Roboto']">PHOTOGRAPHY</h1>
                                <p className="text-left text-white text-lg font-bold font-['Roboto']">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt doloremque excepturi sit odit impedit, voluptas.</p>
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
                                <h1 className=" text-left text-white text-[28px] font-bold font-['Roboto']">PHOTOGRAPHY</h1>
                                <p className="text-left text-white text-lg font-bold font-['Roboto']">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt doloremque excepturi sit odit impedit, voluptas.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;