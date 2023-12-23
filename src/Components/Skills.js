import React from 'react';
import PortfolioData from "../data/portfolioData";
import LazyImageLoader from "../utilitis/LazyImageLoader";
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
                            className="  w-[55px] h-[55px] bg-gradient-to-tl from-[#816aff] to-[#d066fd] rounded-full  customShadow"></div>
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
                        <LazyImageLoader>
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
                        </LazyImageLoader>
                    </div>


                    <div className={`${bgGradientColor2} p-2 mt-3 rounded-3xl`}>
                        <h1 className={`${bgGradientColor2} text-2xl p-2 rounded-full  my-2 font-bold font-[Roboto]`}>Comfortable: </h1>
                        <LazyImageLoader>
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
                        </LazyImageLoader>
                    </div>


                    <div className={`${bgGradientColor3} p-2 mt-3 rounded-3xl`}>
                        <h1 className={`${bgGradientColor3} text-2xl p-2 rounded-full  my-2 font-bold font-[Roboto]`}>Familiar: </h1>
                        <LazyImageLoader>
                            <ul className="flex gap-1 flex-wrap  justify-between">
                                {
                                    PortfolioData?.skills?.familiar?.map((data, i) =>
                                        <li id={data + i} key={data}
                                            className={`${bgGradientColor3} px-2 py-1 text-base font-bold font-['Roboto'] rounded-full`}>{data}</li>
                                    )
                                }
                            </ul>
                        </LazyImageLoader>
                    </div>


                    <div className={`${bgGradientColor4} p-2 mt-3 rounded-3xl`}>
                        <h1 className={`${bgGradientColor4} text-2xl p-2 rounded-full  my-2 font-bold font-[Roboto]`}>Tools: </h1>
                        <LazyImageLoader>
                            <ul className="flex gap-1 flex-wrap justify-between">
                                {
                                    PortfolioData?.skills?.tools?.map((data, i) =>
                                        <li id={data + i} key={data}
                                            className={`${bgGradientColor4} px-2 py-1 text-base font-bold font-['Roboto'] rounded-full`}>{data}</li>
                                    )
                                }
                            </ul>
                        </LazyImageLoader>
                    </div>


                </div>
*/}


                <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-2 grid-cols-1 px-3 pb-16">

                    <LazyImageLoader>
                        <div>
                            <h1 className={`text-[#f8cafb] text-2xl p-2   my-2 font-bold font-[Roboto]`}>Experienced:</h1>
                            <div className={`grid grid-cols-4 sm:grid-cols-6 md:grid-cols-5 lg:grid-cols-10  gap-1`}>
                                {
                                    PortfolioData?.skills?.experienced?.map(({title,logo,color},index)=>{
                                        return (
                                            <div
                                                key={title}
                                                id={title+index+logo+color}
                                                className={`bg-gradient-to-tl from-[#0e0e36] to-[${color}]  rounded-[10px] flex justify-center items-center`}>
                                                <LazyImageLoader>
                                                    {logo?
                                                        <img className=" p-1 " height="100%" width="100%"
                                                             src={logo}
                                                             alt={title}/>:<span className="text-xs">{title}</span>}
                                                </LazyImageLoader>

                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </LazyImageLoader>


                    <LazyImageLoader>
                        <div>
                            <h1 className={`text-[#f8cafb] text-2xl p-2   my-2 font-bold font-[Roboto]`}>Comfortable:</h1>
                            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-5 lg:grid-cols-10  gap-1">
                                {
                                    PortfolioData?.skills?.comfortable?.map(({title,logo,color},index)=>{
                                        return (
                                            <div
                                                key={title}
                                                id={title+index+logo+color}
                                                className={`bg-gradient-to-tl from-[#0e0e36] to-[${color}]  rounded-[10px] flex justify-center items-center`}>
                                                <LazyImageLoader>
                                                    {logo?
                                                        <img className=" p-1 " height="100%" width="100%"
                                                             src={logo}
                                                             alt={title}/>:<span className="text-xs">{title}</span>}
                                                </LazyImageLoader>

                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </LazyImageLoader>

                    <LazyImageLoader>
                        <div>
                            <h1 className={`text-[#f8cafb] text-2xl p-2   my-2 font-bold font-[Roboto]`}>Tools:</h1>
                            <div
                                className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-5 lg:grid-cols-10 justify-center  gap-1">
                                {
                                    PortfolioData?.skills?.tools?.map(({title,logo,color},index)=>{
                                        return (
                                            <div
                                                key={title}
                                                id={title+index+logo+color}
                                                className={`bg-gradient-to-tl from-[#0e0e36] to-[${color}]  rounded-[10px] flex justify-center items-center`}>
                                                <LazyImageLoader>
                                                    {logo?
                                                        <img className=" p-1 " height="100%" width="100%"
                                                             src={logo}
                                                             alt={title}/>:<span className="text-xs">{title}</span>}
                                                </LazyImageLoader>

                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </LazyImageLoader>

                    <LazyImageLoader>
                        <div>
                            <h1 className={`text-[#f8cafb] text-2xl p-2   my-2 font-bold font-[Roboto]`}>Familiar:</h1>
                            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-5 lg:grid-cols-10  gap-1">
                                {
                                    PortfolioData?.skills?.familiar?.map(({title,logo,color},index)=>{
                                        return (
                                            <div
                                                key={title}
                                                id={title+index+logo+color}
                                                className={`bg-gradient-to-tl from-[#0e0e36] to-[${color}]  rounded-[10px] flex justify-center items-center`}>
                                                <LazyImageLoader>
                                                    {logo?
                                                        <img className=" p-1 " height="100%" width="100%"
                                                             src={logo}
                                                             alt={title}/>:<span className="text-xs">{title}</span>}
                                                </LazyImageLoader>

                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </LazyImageLoader>


                </div>


            </div>

        </section>
    );
};

export default Skills;