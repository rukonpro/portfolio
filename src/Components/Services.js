import React from 'react';
import BlueBackCover from "../Images/BlueBackCover.png";
import IphonScreen from "../Images/ca4743afbe2b7ad35b293256b2fc1866.jpg";
import Icon from "../Images/fluent_design-ideas-20-regular.png";
import Ellipse from "../Images/Ellipse 7.png";

const Services = () => {
    return (
        <section id="services"
                 className=" overflow-hidden relative flex justify-center items-center bg-[#0e0e36] py-20 ">
            <div
                className="absolute custom-animate-pulse inset-0 m-auto max-w-xs h-[357px] blur-[1000px] sm:max-w-md md:max-w-lg"
                style={{background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)"}}></div>
            <div className="container relative z-10 mx-auto ">
                <div className="flex justify-center">
                    <div className="flex items-center relative">
                        <div
                            className="  w-[55px] h-[55px] bg-gradient-to-r from-orange-600 to-amber-400 rounded-full  customShadow"></div>
                        <h1 className=" relative right-10 text-white z-10 md:text-5xl text-2xl font-bold font-['Roboto'] ">My services</h1>
                    </div>
                </div>
                <div className="flex justify-center px-5 mt-10">
                    <p className="max-w-4xl text-center font-bold font-['Roboto'] text-sm">If you're looking for a developer with expertise in a stack typically associated with web
                        development, here's a brief description of the MEAN stack, which is a popular choice</p>
                </div>

                <div className="lg:flex flex-none justify-center mt-10">


                    <div className="block lg:hidden pb-20">
                        <div className="flex justify-center">
                            <div className="w-[244.63px] h-[494.98px] z-20 p-3 flex justify-center overflow-hidden">
                                <img className="absolute w-[244.63px] h-[494.98px]" src={BlueBackCover || undefined}
                                     alt="BlueBackCover"/>
                                <img className="absolute mt-3  w-[228.63px] h-[470.98px] rounded-3xl "
                                     src={IphonScreen || undefined} alt="IphonScreen"/>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between  gap-5">
                        <div className="flex lg:flex-row-reverse">
                            <div className="px-3">
                                <div className="relative w-[68px] h-[68px] flex justify-center items-center">
                                    <img className="absolute" src={Ellipse || undefined} alt="Ellipse"/>
                                    <img className="absolute" src={Icon || undefined} alt="Ellipse"/>
                                </div>
                            </div>

                            <div className="md:text-left lg:text-right">
                                <h1 className="  text-white text-2xl font-bold font-['Roboto']">Front-End</h1>
                                <p className=" text-white text-base pt-5 font-bold font-['Roboto']">
                                    As well as making responsive front-end development with popular javascript
                                    frameworks such as React.js, familiar with Vue.js, HTML5, CSS3, Bootstrap4&5,and
                                    MaterialUI.
                                </p>
                            </div>
                        </div>

                        <div className="flex pt-5 lg:flex-row-reverse">
                            <div className="px-3">
                                <div className="relative w-[68px] h-[68px] flex justify-center items-center">
                                    <img className="absolute" src={Ellipse || undefined} alt="Ellipse"/>
                                    <img className="absolute" src={Icon || undefined} alt="Icon"/>
                                </div>
                            </div>

                            <div className="md:text-left lg:text-right">
                                <h1 className="  text-white text-2xl font-bold font-['Roboto']">Back-End</h1>
                                <p className=" text-white text-base pt-5 font-bold font-['Roboto']">
                                    Utilising node.js, express.js, mongoDB, firebase, heroku, including REST APIs, and
                                    more. Building e-services, e-commerce, e-learning and more website and web
                                    applications. </p>
                            </div>
                        </div>
                        <div className="flex   lg:flex-row-reverse">
                            <div className="px-3">
                                <div className="relative w-[68px] h-[68px] flex justify-center items-center">
                                    <img className="absolute" src={Ellipse || undefined} alt="Ellipse"/>
                                    <img className="absolute" src={Icon || undefined} alt="Icon"/>
                                </div>
                            </div>

                            <div className="lg:text-right">
                                <h1 className="  text-white text-2xl font-bold font-['Roboto']">Template</h1>
                                <p className=" text-white text-base pt-5 font-bold font-['Roboto']">
                                    As well as making responsive web template with HTML5, CSS3, Bootstrap4&5,
                                    Tailwind-CSS and Metaril UI.
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="lg:block hidden">
                        <div className="w-[244.63px] h-[494.98px] z-20 p-3 flex justify-center overflow-hidden">
                            <img className="absolute w-[244.63px] h-[494.98px]" src={BlueBackCover || undefined}
                                 alt="BlueBackCover"/>
                            <img className="absolute mt-3  w-[228.63px] h-[470.98px] rounded-3xl "
                                 src={IphonScreen || undefined} alt="IphonScreen"/>
                        </div>
                    </div>


                    <div className="flex flex-col justify-between gap-5">
                        <div className="flex pt-5">


                            <div className="px-3">
                                <div className="relative w-[68px] h-[68px] flex justify-center items-center">
                                    <img className="absolute" src={Ellipse || undefined} alt="Ellipse"/>
                                    <img className="absolute" src={Icon || undefined} alt="Icon"/>
                                </div>
                            </div>

                            <div>
                                <h1 className=" text-left text-white text-2xl  font-bold font-['Roboto']">Full-Stack
                                    Development</h1>
                                <p className="text-left text-white text-base pt-5 font-bold font-['Roboto']"> Full-stack
                                    developers are proficient in both frontend and backend development, allowing them to
                                    work on the entire web application development process.</p>
                            </div>

                        </div>
                        <div className="flex pt-5">


                            <div className="px-3">
                                <div className="relative w-[68px] h-[68px] flex justify-center items-center">
                                    <img className="absolute" src={Ellipse || undefined} alt="Ellipse"/>
                                    <img className="absolute" src={Icon || undefined} alt="Icon"/>
                                </div>
                            </div>

                            <div>
                                <h1 className=" text-left text-white text-2xl font-bold font-['Roboto']">Web
                                    Hosting and Maintenance</h1>
                                <p className="text-left text-white text-base pt-5  font-bold font-['Roboto']">After
                                    development, websites and applications need hosting and ongoing maintenance to
                                    ensure they remain secure, updated, and operational.</p>
                            </div>

                        </div>
                        <div className="flex pt-5">


                            <div className="px-3">
                                <div className="relative w-[68px] h-[68px] flex justify-center items-center">
                                    <img className="absolute" src={Ellipse || undefined} alt="Ellipse"/>
                                    <img className="absolute" src={Icon || undefined} alt="Icon"/>
                                </div>
                            </div>

                            <div>
                                <h1 className=" text-left text-white text-2xl  font-bold font-['Roboto']">E-commerce
                                    Development</h1>
                                <p className="text-left text-white text-base pt-5 font-bold font-['Roboto']">Specialized
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