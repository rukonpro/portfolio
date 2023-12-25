import React from 'react';
import Marquee from "react-fast-marquee";

import PortfolioData from "../../data/portfolioData";
import LazyLoader from "../../Helpers/LazyLoader";
import OnClickSound from "../../Helpers/OnClickSound";
const Skills = () => {


 /*   const bgGradientColor1 = "bg-gradient-to-tl from-[#0e0e36] to-[#125353]";
    const bgGradientColor2 = "bg-gradient-to-tl from-[#0e0e36] to-[#5c0c63]";
    const bgGradientColor3 = "bg-gradient-to-tl from-[#0e0e36] to-[#1c0c66]";
    const bgGradientColor4 = "bg-gradient-to-tl from-[#0e0e36] to-[#98632e]";*/


    return (
        <section id="skills"
            className=" overflow-hidden relative flex justify-center items-center bg-[#0e0e36] pt-20 ">
            <div
                className="absolute custom-animate-pulse inset-0 blur-[118px] radial-gradient"></div>
            <div className="container relative z-10 mx-auto ">
                <div className="flex justify-center">
                    <div className="flex items-center relative">
                        <div
                            className="  w-[55px] h-[55px] bg-gradient-to-tl from-[#17113a] to-[#8907c0]  animate-spin rounded-full  customShadow"></div>
                        <h1 className=" relative right-10 text-white z-10 md:text-5xl text-2xl font-bold font-['Roboto'] ">Skills</h1>
                    </div>
                </div>

                <div className="flex justify-center px-5 mt-10">
                    <p className="max-w-4xl  font-bold font-['Roboto'] text-base text-slate-400 tracking-[2px] md:text-center text-justify"> I
                        am a dynamic MERN stack developer passionate about transforming ideas into powerful and
                        user-friendly
                        web applications. With a strong foundation in MongoDB, Express.js, React, and Node.js, I
                        specialize in
                        building seamless, responsive, and scalable solutions.</p>
                </div>
{/*
                <div className="pt-10 px-5 grid md:grid-cols-2 lg:grid-cols-4 gap-3 text-[#fccdff] ">


                    <div className={`${bgGradientColor1} p-2 mt-3 rounded-3xl `}>
                        <h1 className={`${bgGradientColor1} text-2xl p-2 rounded-full  my-2 font-bold font-[Roboto]`}>Experienced: </h1>
                        <LazyLoader>
                            <ul className="flex gap-1 flex-wrap  justify-between">
                                {
                                    PortfolioData?.skills?.experienced?.map((data, i) =>
                                        <li
                                            id={data + i}
                                            key={data}
                                            className={`${bgGradientColor1} px-2 py-1 text-base font-bold font-['Roboto'] rounded-full`}>{data}</li>
                                    )
                                }
                            </ul>
                        </LazyLoader>
                    </div>


                    <div className={`${bgGradientColor2} p-2 mt-3 rounded-3xl`}>
                        <h1 className={`${bgGradientColor2} text-2xl p-2 rounded-full  my-2 font-bold font-[Roboto]`}>Comfortable: </h1>
                        <LazyLoader>
                            <ul className="flex gap-1 flex-wrap  justify-between">
                                {
                                    PortfolioData?.skills?.comfortable?.map((data, i) =>
                                        <li
                                            id={data + i}
                                            key={data}
                                            className={`${bgGradientColor2} px-2 py-1 text-base font-bold font-['Roboto'] rounded-full`}>{data}</li>
                                    )
                                }
                            </ul>
                        </LazyLoader>
                    </div>


                    <div className={`${bgGradientColor3} p-2 mt-3 rounded-3xl`}>
                        <h1 className={`${bgGradientColor3} text-2xl p-2 rounded-full  my-2 font-bold font-[Roboto]`}>Familiar: </h1>
                        <LazyLoader>
                            <ul className="flex gap-1 flex-wrap  justify-between">
                                {
                                    PortfolioData?.skills?.familiar?.map((data, i) =>
                                        <li id={data + i} key={data}
                                            className={`${bgGradientColor3} px-2 py-1 text-base font-bold font-['Roboto'] rounded-full`}>{data}</li>
                                    )
                                }
                            </ul>
                        </LazyLoader>
                    </div>


                    <div className={`${bgGradientColor4} p-2 mt-3 rounded-3xl`}>
                        <h1 className={`${bgGradientColor4} text-2xl p-2 rounded-full  my-2 font-bold font-[Roboto]`}>Tools: </h1>
                        <LazyLoader>
                            <ul className="flex gap-1 flex-wrap justify-between">
                                {
                                    PortfolioData?.skills?.tools?.map((data, i) =>
                                        <li id={data + i} key={data}
                                            className={`${bgGradientColor4} px-2 py-1 text-base font-bold font-['Roboto'] rounded-full`}>{data}</li>
                                    )
                                }
                            </ul>
                        </LazyLoader>
                    </div>


                </div>
*/}


                <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-2 grid-cols-1 px-3 pb-16">

                        <div>
                            <h1 className={`text-[#f8cafb] text-2xl p-2   my-2 font-bold font-[Roboto]`}>Experienced:</h1>
                            <Marquee
                                speed={15}
                                pauseOnHover={true}
                            >
                                {
                                    PortfolioData?.skills?.experienced?.map(({title,logo,color},index)=>{
                                        return (
                                            <div
                                                key={title}
                                                id={title+index+logo+color}
                                                style={{background:`linear-gradient(to top right, #0e0e36, ${color})`}}
                                                data-aos="fade-right"
                                                data-aos-offset="10"
                                                data-aos-duration="2000"
                                                data-aos-easing="ease-in-sine"
                                                onClick={() => OnClickSound("/keypress.mp3")}
                                                className={`rounded-[10px] flex justify-center items-center h-[70px] w-[70px] p-2 hover:scale-[1.5] hover:skew-y-2 skew-x-2 hover:z-[2] hover:transition-all transition-all cursor-pointer select-none mx-3`}>
                                                    {logo?
                                                        <img
                                                            data-aos="zoom-out-left"
                                                            data-aos-offset="10"
                                                            data-aos-duration="3000"
                                                            data-aos-easing="ease-in-sine"
                                                            className=" p-1 hover:z-[2]"
                                                            height="100%"
                                                            width="100%"
                                                            src={logo}
                                                            alt={title}
                                                        />:<span
                                                            data-aos="zoom-out-left"
                                                            data-aos-offset="10"
                                                            data-aos-duration="3000"
                                                            data-aos-easing="ease-in-sine"
                                                            className="text-xs text-[#f8cafb] hover:z-[2]">{title}</span>}

                                            </div>
                                        )
                                    })
                                }
                            </Marquee>
                        </div>



                    <LazyLoader>
                        <div>
                            <h1 className={`text-[#f8cafb] text-2xl p-2   my-2 font-bold font-[Roboto]`}>Comfortable:</h1>
                            <Marquee
                                direction={"right"}
                                pauseOnHover={true}
                            >
                                {
                                    PortfolioData?.skills?.comfortable?.map(({title,logo,color},index)=>{
                                        return (
                                            <div
                                                key={title}
                                                id={title+index+logo+color}
                                                style={{background:`linear-gradient(to top right, #0e0e36, ${color})`}}
                                                className={` rounded-[10px] flex justify-center items-center h-[70px] w-[70px] p-2 hover:scale-[1.5] hover:skew-y-2 skew-x-2 hover:z-[2] hover:transition-all transition-all cursor-pointer select-none mx-3`}
                                                onClick={() => OnClickSound("/keypress.mp3")}
                                                data-aos="fade-left"
                                                data-aos-offset="10"
                                                data-aos-duration="1500"
                                                data-aos-easing="ease-in-sine"
                                            >
                                                    {logo?
                                                        <img
                                                            data-aos="zoom-out-right"
                                                            data-aos-offset="10"
                                                            data-aos-duration="3000"
                                                            data-aos-easing="ease-in-sine"
                                                            className=" p-1 "
                                                            height="100%"
                                                            width="100%"
                                                            src={logo}
                                                            alt={title}/>:<span
                                                            data-aos="zoom-out-right"
                                                            data-aos-offset="10"
                                                            data-aos-duration="2500"
                                                            data-aos-easing="ease-in-sine"
                                                            className="text-[#f8cafb] text-xs">{title}</span>}

                                            </div>
                                        )
                                    })
                                }
                            </Marquee>
                        </div>
                    </LazyLoader>

                    <LazyLoader>
                        <div>
                            <h1 className={`text-[#f8cafb] text-2xl p-2   my-2 font-bold font-[Roboto]`}>Tools:</h1>
                            <Marquee
                                pauseOnHover={true}
                            >
                                {
                                    PortfolioData?.skills?.tools?.map(({title,logo,color},index)=>{
                                        return (
                                            <div
                                                key={title}
                                                id={title+index+logo+color}
                                                style={{background:`linear-gradient(to top right, #0e0e36, ${color})`}}
                                                className={`rounded-[10px] flex justify-center items-center h-[70px] w-[70px] p-2 hover:scale-[1.5] hover:skew-y-2 skew-x-2 hover:z-[2] hover:transition-all transition-all cursor-pointer select-none mx-3`}
                                                onClick={() => OnClickSound("/keypress.mp3")}
                                                data-aos="fade-right"
                                                data-aos-offset="10"
                                                data-aos-duration="1500"
                                                data-aos-easing="ease-in-sine"
                                            >
                                                       {logo?
                                                        <img
                                                            data-aos="zoom-out-left"
                                                            data-aos-offset="10"
                                                            data-aos-duration="3000"
                                                            data-aos-easing="ease-in-sine"
                                                            className=" p-1 "
                                                            height="100%"
                                                            width="100%"
                                                            src={logo}
                                                            alt={title}/>:<span
                                                            data-aos="zoom-out-left"
                                                            data-aos-offset="10"
                                                            data-aos-duration="2500"
                                                            data-aos-easing="ease-in-sine"
                                                            className="text-[#f8cafb] text-xs">{title}</span>}
                                            </div>
                                        )
                                    })
                                }
                            </Marquee>
                        </div>
                    </LazyLoader>

                    <LazyLoader>
                        <div>
                            <h1 className={`text-[#f8cafb] text-2xl p-2   my-2 font-bold font-[Roboto]`}>Familiar:</h1>
                            <Marquee
                                speed={15}
                                pauseOnHover={true}
                                direction={"right"}
                            >
                                {
                                    PortfolioData?.skills?.familiar?.map(({title,logo,color},index)=>{
                                        return (
                                             <div
                                                key={title}
                                                id={title + index + logo + color}
                                                style={{background:`linear-gradient(to top right, #0e0e36, ${color})`}}
                                                className={` rounded-[10px] flex justify-center items-center h-[70px] w-[70px] p-2 hover:scale-[1.5] hover:skew-y-2 skew-x-2 hover:z-[2] hover:transition-all transition-all cursor-pointer select-none mx-3`}
                                                data-aos="fade-left"
                                                data-aos-offset="10"
                                                data-aos-duration="1500"
                                                data-aos-easing="ease-in-sine"
                                                onClick={() => OnClickSound("/keypress.mp3")}
                                             >

                                                    {logo ?<img
                                                        data-aos="zoom-out-right"
                                                        data-aos-offset="10"
                                                        data-aos-duration="2500"
                                                        data-aos-easing="ease-in-sine"
                                                        className=" p-1 "
                                                        height="100%"
                                                        width="100%"
                                                        src={logo}
                                                        alt={title}/> : <span
                                                        data-aos="zoom-out-right"
                                                        data-aos-offset="10"
                                                        data-aos-duration="3000"
                                                        data-aos-easing="ease-in-sine"
                                                        className="text-[#f8cafb] text-xs">title</span>}
                                             </div>
                                        )
                                    })
                                }
                            </Marquee>
                        </div>
                    </LazyLoader>


                </div>


            </div>

        </section>
    );
};

export default Skills;