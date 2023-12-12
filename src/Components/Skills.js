import React from 'react';
import PortfolioData from "../data/portfolioData";

const Skills = () => {


    const bgGradientColor1 = "bg-gradient-to-tr from-[#030b55ec] to-[#04ff6da1]";
    const bgGradientColor2 = "bg-gradient-to-tr from-[#030b55ec] to-[#008ac0f5]";
    const bgGradientColor3 = "bg-gradient-to-tr from-[#030b55ec] to-[#b402fab7]";
    const bgGradientColor4 = "bg-gradient-to-tr from-[#030b55ec] to-[#805a4ff5]";


    return (
        <section id="skills"
            className=" overflow-hidden relative flex justify-center items-center bg-[#0e0e36] pt-20 ">
            <div
                className="absolute custom-animate-pulse inset-0 m-auto max-w-xs h-[357px] blur-[1000px] sm:max-w-md md:max-w-lg"
                style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>
            <div className="container relative z-10 mx-auto ">
                <div className="flex justify-center">
                    <div className="flex items-center relative">
                        <div
                            className="  w-[55px] h-[55px] bg-gradient-to-r from-orange-600 to-amber-400 rounded-full  customShadow"></div>
                        <h1 className=" relative right-10 text-white z-10 md:text-5xl text-2xl font-bold font-['Roboto'] ">Skills</h1>
                    </div>
                </div>


                <div className="p-10 grid md:grid-cols-2 lg:grid-cols-4 gap-3 text-white">

                    <div className={`${bgGradientColor1} p-2 mt-3 rounded-3xl`}>
                        <h1 className={`${bgGradientColor1} text-2xl p-2 rounded-full  my-2 font-bold font-[Roboto]`}>Experienced: </h1>
                        <ul className="flex gap-1 flex-wrap md:justify-center justify-between">
                            {
                                PortfolioData?.skills?.experienced?.map((data) =>
                                    <li key={data}
                                        className={`${bgGradientColor1} px-2 py-1 text-base font-bold font-['Roboto'] rounded-full`}>{data}</li>
                                )
                            }
                        </ul>
                    </div>

                    <div className={`${bgGradientColor2} p-2 mt-3 rounded-3xl`}>
                        <h1 className={`${bgGradientColor2} text-2xl p-2 rounded-full  my-2 font-bold font-[Roboto]`}>Comfortable: </h1>
                        <ul className="flex gap-1 flex-wrap md:justify-center justify-between">
                            {
                                PortfolioData?.skills?.comfortable?.map((data) =>
                                    <li key={data}
                                        className={`${bgGradientColor2} px-2 py-1 text-base font-bold font-['Roboto'] rounded-full`}>{data}</li>
                                )
                            }
                        </ul>
                    </div>
                    <div className={`${bgGradientColor3} p-2 mt-3 rounded-3xl`}>
                        <h1 className={`${bgGradientColor3} text-2xl p-2 rounded-full  my-2 font-bold font-[Roboto]`}>Familiar: </h1>
                        <ul className="flex gap-1 flex-wrap md:justify-center justify-between">
                            {
                                PortfolioData?.skills?.familiar?.map((data) =>
                                    <li key={data}
                                        className={`${bgGradientColor3} px-2 py-1 text-base font-bold font-['Roboto'] rounded-full`}>{data}</li>
                                )
                            }
                        </ul>
                    </div>
                    <div className={`${bgGradientColor4} p-2 mt-3 rounded-3xl`}>
                        <h1 className={`${bgGradientColor4} text-2xl p-2 rounded-full  my-2 font-bold font-[Roboto]`}>Tools: </h1>
                        <ul className="flex gap-1 flex-wrap md:justify-center justify-between">
                            {
                                PortfolioData?.skills?.tools?.map((data) =>
                                    <li key={data}
                                        className={`${bgGradientColor4} px-2 py-1 text-base font-bold font-['Roboto'] rounded-full`}>{data}</li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;