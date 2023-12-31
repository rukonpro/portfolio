import React from 'react';
import BlueBackCover from "../../Images/BlueBackCover.webp";
import IphonScreen from "../../Images/MobileScreen.webp";
import Icon from "../../Images/fluent_design-ideas-20-regular.png";
import Ellipse from "../../Images/Ellipse 7.png";
import ServiceIcon from "../../Images/24-hour-clock.png";
import LazyLoader from "../../Helpers/LazyLoader";

const Services = () => {
    return (
        <section id="services"
                 className=" overflow-hidden relative flex justify-center items-center bg-[#0e0e36] py-20 px-3">
            <div
                className="absolute custom-animate-pulse inset-0 m-auto max-w-xs h-[357px] blur-[1000px] sm:max-w-md md:max-w-lg"
                style={{background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)"}}></div>
            <div className="max-w-[1200px] relative z-10 mx-auto ">
                <div className="flex justify-center">
                    <div className="flex items-center relative">
                        <div
                            className="  w-[55px] h-[55px] bg-gradient-to-tl from-[#17113a] to-[#8907c0]  animate-spin rounded-full  customShadow"></div>
                        <h1
                            data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom"
                            className=" relative right-10 text-white z-10 md:text-5xl text-2xl font-bold font-['Roboto'] tracking-[4px]">My
                            services</h1>
                    </div>
                </div>
                <div className="flex justify-center px-5 mt-10 pb-10">
                    <p
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                        data-aos-duration="1000"
                        className="max-w-4xl  font-bold font-['Roboto'] text-base text-slate-400 tracking-[2px] md:text-center text-justify">If
                        you're looking for a developer with expertise in a stack typically associated with web
                        development, here's a brief description of the MEAN stack, which is a popular choice</p>
                </div>
                <div className="divider">
                    <LazyLoader>
                        <img
                            style={{width:"32px"}}
                            src={ServiceIcon || undefined}
                            height="100%" width="100%"
                            alt="ServiceICon" loading="lazy"/>
                    </LazyLoader>
                </div>
                <div className="lg:flex flex-none justify-center mt-10">


                    <div className="block lg:hidden pb-20">
                        <div className="flex justify-center">
                            <LazyLoader>
                            <div className="w-[244.63px] h-[494.98px] z-20 p-3 flex justify-center overflow-hidden">

                                    <img
                                        data-aos="zoom-out-right"
                                        data-aos-offset="10"
                                        data-aos-duration="2000"
                                        data-aos-easing="ease-in-sine"
                                        className="absolute w-[244.63px] h-[494.98px]"
                                         src={BlueBackCover || undefined}
                                         height="100%"
                                         width="100%"
                                         alt="BlueBackCover"/>
                                    <img
                                        data-aos="zoom-out-left"
                                        data-aos-offset="10"
                                        data-aos-duration="2500"
                                        data-aos-easing="ease-in-sine"
                                        className="absolute mt-3  w-[228.63px] h-[470.98px] rounded-3xl "
                                         src={IphonScreen || undefined}
                                         height="100%" width="100%"
                                         alt="IphonScreen"/>
                            </div>
                            </LazyLoader>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between  gap-5">
                        <div className="flex gap-2 lg:flex-row-reverse">
                            <div >
                                <LazyLoader>
                                <div className="relative w-[68px] h-[68px] flex justify-center items-center">
                                    <img
                                        data-aos="zoom-in-right"
                                        data-aos-duration="2000"
                                        className="absolute" src={Ellipse || undefined} height="100%" width="100%" alt="Ellipse" loading="lazy"/>
                                    <img
                                        data-aos="zoom-in-left"
                                        data-aos-duration="2000"
                                        className="absolute" src={Icon || undefined} height="100%" width="100%" alt="Ellipse" loading="lazy"/>
                                </div>
                                </LazyLoader>
                            </div>

                            <div className="md:text-left lg:text-right">
                                <h1
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="bottom-bottom"
                                    className="  text-white md:text-2xl text-xl font-bold font-['Roboto'] tracking-[4px]">Front-End</h1>
                                <p
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="bottom-bottom"
                                    className=" text-gray-300 text-base pt-5 font-bold font-['Roboto'] tracking-[1px]">
                                    As well as making responsive front-end development with popular javascript
                                    frameworks such as React.js, familiar with Vue.js, HTML5, CSS3, Bootstrap4&5,and
                                    MaterialUI.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-2 pt-5 lg:flex-row-reverse">
                            <div >
                                <LazyLoader>
                                    <div className="relative w-[68px] h-[68px] flex justify-center items-center">
                                        <img
                                            data-aos="zoom-in-right"
                                            data-aos-duration="2000"
                                            className="absolute" src={Ellipse || undefined} height="100%" width="100%" alt="Ellipse"/>
                                        <img
                                            data-aos="zoom-in-left"
                                            data-aos-duration="2000"
                                            className="absolute" src={Icon || undefined} height="100%" width="100%" alt="Icon"/>
                                    </div>
                                </LazyLoader>
                            </div>

                            <div className="md:text-left lg:text-right">
                                <h1
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="bottom-bottom"
                                    className="  text-white md:text-2xl text-xl font-bold font-['Roboto'] tracking-[4px]">Back-End</h1>
                                <p
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="bottom-bottom"
                                    className=" text-gray-300 text-base pt-5 font-bold font-['Roboto'] tracking-[1px]">
                                    Utilising node.js, express.js, mongoDB, firebase, heroku, including REST APIs, and
                                    more. Building e-services, e-commerce, e-learning and more website and web
                                    applications. </p>
                            </div>
                        </div>
                        <div className="flex gap-2   lg:flex-row-reverse">
                            <div>
                                <div className="relative w-[68px] h-[68px] flex justify-center items-center">
                                    <img
                                        data-aos="zoom-in-right"
                                        data-aos-duration="2000"
                                        className="absolute" src={Ellipse || undefined} height="100%" width="100%" alt="Ellipse"/>
                                    <img
                                        data-aos="zoom-in-left"
                                        data-aos-duration="2000"
                                        className="absolute" src={Icon || undefined} height="100%" width="100%" alt="Icon"/>
                                </div>
                            </div>

                            <div className="lg:text-right">
                                <h1
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="bottom-bottom"
                                    className="  text-white md:text-2xl text-xl font-bold font-['Roboto'] tracking-[4px]">Template</h1>
                                <p
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="bottom-bottom"
                                    className="  text-gray-300 pt-5 font-bold font-['Roboto'] tracking-[1px]">
                                    As well as making responsive web template with HTML5, CSS3, Bootstrap4&5,
                                    Tailwind-CSS and Metaril UI.
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="lg:block hidden px-3">
                        <LazyLoader>
                            <div className="w-[244.63px] h-[494.98px] z-20 p-3 flex justify-center overflow-hidden">
                                <img className="absolute w-[244.63px] h-[494.98px]"
                                     data-aos="zoom-out-right"
                                     data-aos-offset="10"
                                     data-aos-duration="2000"
                                     data-aos-easing="ease-in-sine"
                                     src={BlueBackCover || undefined}
                                     height="100%" width="100%"
                                     alt="BlueBackCover"/>
                                <img className="absolute mt-3  w-[228.63px] h-[470.98px] rounded-3xl "
                                     data-aos="zoom-out-left"
                                     data-aos-offset="10"
                                     data-aos-duration="2500"
                                     data-aos-easing="ease-in-sine"
                                     src={IphonScreen || undefined}
                                     height="100%"
                                     width="100%"
                                     alt="IphonScreen"/>
                            </div>
                            </LazyLoader>
                    </div>


                    <div className="flex flex-col justify-between gap-5">
                        <div className="flex gap-2 pt-5">


                            <div >
                                <LazyLoader>
                                <div className="relative w-[68px] h-[68px] flex justify-center items-center">
                                    <img
                                        data-aos="zoom-in-right"
                                        data-aos-duration="2000"
                                        className="absolute" src={Ellipse || undefined} height="100%" width="100%" alt="Ellipse"/>
                                    <img
                                        data-aos="zoom-in-left"
                                        data-aos-duration="2000"
                                        className="absolute" src={Icon || undefined} height="100%" width="100%" alt="Icon"/>
                                </div>
                                </LazyLoader>
                            </div>

                            <div>
                                <h1
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="bottom-bottom"
                                    className=" text-left text-white md:text-2xl text-xl  font-bold font-['Roboto'] tracking-[2px]">Full-Stack
                                    Development</h1>
                                <p
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="bottom-bottom"
                                    className="text-left text-gray-300 text-base pt-5 font-bold font-['Roboto'] tracking-[1px]"> Full-stack
                                    developers are proficient in both frontend and backend development, allowing them to
                                    work on the entire web application development process.</p>
                            </div>

                        </div>
                        <div className="flex gap-2 pt-5">


                            <div >
                                <LazyLoader>
                                    <div className="relative w-[68px] h-[68px] flex justify-center items-center">
                                        <img
                                            data-aos="zoom-in-right"
                                            data-aos-duration="2000"
                                            className="absolute" src={Ellipse || undefined} height="100%" width="100%" alt="Ellipse"/>
                                        <img
                                            data-aos="zoom-in-left"
                                            data-aos-duration="2000"
                                            className="absolute" src={Icon || undefined} height="100%" width="100%" alt="Icon"/>
                                    </div>
                                </LazyLoader>
                            </div>

                            <div>
                                <h1
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="bottom-bottom"
                                    className=" text-left text-white md:text-2xl text-xl font-bold font-['Roboto'] tracking-[4px]">Web
                                    Hosting and Maintenance</h1>
                                <p
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="bottom-bottom"
                                    className="text-left text-gray-300 text-base pt-5  font-bold font-['Roboto'] tracking-[1px]">After
                                    development, websites and applications need hosting and ongoing maintenance to
                                    ensure they remain secure, updated, and operational.</p>
                            </div>

                        </div>
                        <div className="flex gap-2 pt-5">


                            <div>
                                <LazyLoader>
                                    <div className="relative w-[68px] h-[68px] flex justify-center items-center">
                                        <img
                                            data-aos="zoom-in-right"
                                            data-aos-duration="2000"
                                            className="absolute" src={Ellipse || undefined} height="100%" width="100%" alt="Ellipse"/>
                                        <img
                                            data-aos="zoom-in-left"
                                            data-aos-duration="2000"
                                            className="absolute" src={Icon || undefined} height="100%" width="100%" alt="Icon"/>
                                    </div>
                                </LazyLoader>
                            </div>

                            <div>
                                <h1
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="bottom-bottom"
                                    className=" text-left text-white md:text-2xl text-xl  font-bold font-['Roboto'] tracking-[4px]">E-commerce
                                    Development</h1>
                                <p
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="bottom-bottom"
                                    className="text-left text-gray-300 text-base pt-5 font-bold font-['Roboto'] tracking-[1px]">Specialized
                                    in
                                    creating online stores, e-commerce developers enable businesses to sell products and
                                    services online, often integrating payment gateways and shopping cart
                                    functionality.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;