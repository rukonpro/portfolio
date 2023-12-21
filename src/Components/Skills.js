import React from 'react';
import PortfolioData from "../data/portfolioData";
import LazyImageLoader from "../utilitis/LazyImageLoader";
import HtmlIcon from "../SkillsLogo/html-1.svg";
import JsIcon from "../SkillsLogo/javascript-1.svg";
import NodeJsIcon from "../SkillsLogo/nodejs-3.svg";
import CSSIcon from "../SkillsLogo/css-3.svg";
import MongoDBIcon from "../SkillsLogo/mongodb-icon-1.svg";
import FireBaseIcon from "../SkillsLogo/firebase-1.svg";
import Bootstrap from "../SkillsLogo/bootstrap-5-1.svg";
import ReactIcon from "../SkillsLogo/react-2.svg";
import ReduxIcon from "../SkillsLogo/redux.svg";
import GraphQLIcon from "../SkillsLogo/graphql-logo-2.svg";
import ApolloIcon from "../SkillsLogo/apollo-graphql-1.svg";
import NextJSIcon from "../SkillsLogo/next-js.svg";
import TailwindCSSIcon from "../SkillsLogo/tailwind-css-2.svg";
import MaterialUIIcon from "../SkillsLogo/material-ui-1.svg";
const Skills = () => {


    const bgGradientColor1 = "bg-gradient-to-tl from-[#0e0e36] to-[#125353]";
    const bgGradientColor2 = "bg-gradient-to-tl from-[#0e0e36] to-[#5c0c63]";
    const bgGradientColor3 = "bg-gradient-to-tl from-[#0e0e36] to-[#1c0c66]";
    const bgGradientColor4 = "bg-gradient-to-tl from-[#0e0e36] to-[#98632e]";


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


                <div >
                    <div className=" flex flex-row gap-4  justify-center flex-wrap flex-1">
                        <div
                            className="bg-gradient-to-tl from-[#0e0e36] to-[#61dafb] h-28  w-28 p-1 rounded-tr-[30px] flex justify-center items-center">
                            <img className=" p-5 " height="100%" width="100%" src={ReactIcon || undefined}
                                 alt="ReactIcon"/>
                        </div>
                        <div
                            className="bg-gradient-to-tl from-[#0e0e36] to-[#ffffff] h-28  w-28 p-1 rounded-tr-[30px] flex justify-center items-center">
                            <img className=" p-5 " height="100%" width="100%" src={NextJSIcon || undefined}
                                 alt="NextJSIcon"/>
                        </div>
                        <div
                            className="bg-gradient-to-tl from-[#0e0e36] to-[#764abc] h-28  w-28 p-1 rounded-tr-[30px] flex justify-center items-center">
                            <img className=" p-5 " height="100%" width="100%" src={ReduxIcon || undefined}
                                 alt="ReduxIcon"/>
                        </div>
                        <div
                            className="bg-gradient-to-tl from-[#0e0e36] to-[#e34f26] h-28  w-28 p-1 rounded-tr-[30px] flex justify-center items-center">
                            <img className=" p-5 " height="100%" width="100%" src={HtmlIcon || undefined} alt="html"/>
                        </div>
                        <div
                            className="bg-gradient-to-tl from-[#0e0e36] to-[#e9ca32] h-28  w-28 p-1 rounded-tr-[30px] flex justify-center items-center">
                            <img className=" p-5 " height="100%" width="100%" src={JsIcon || undefined}
                                 alt="javascript"/>
                        </div>
                        <div
                            className="bg-gradient-to-tl from-[#0e0e36] to-[#599636] h-28  w-28 p-1 rounded-tr-[30px] flex justify-center items-center">
                            <img className=" p-5 " height="100%" width="100%" src={MongoDBIcon || undefined}
                                 alt="javascript"/>
                        </div>
                        <div
                            className="bg-gradient-to-tl from-[#0e0e36] to-[#00d486] h-28  w-28 p-1 rounded-tr-[30px] flex justify-center items-center">
                            <img className=" p-5 " height="100%" width="100%" src={NodeJsIcon || undefined}
                                 alt="NodeJS"/>
                        </div>
                        <div
                            className="bg-gradient-to-tl from-[#0e0e36] to-[#1b73ba] h-28  w-28 p-1 rounded-tr-[30px] flex justify-center items-center">
                            <img className=" p-5 " height="100%" width="100%" src={CSSIcon || undefined} alt="CSS"/>
                        </div>
                        <div
                            className="bg-gradient-to-tl from-[#0e0e36] to-[#06b6d4] h-28  w-28 p-1 rounded-tr-[30px] flex justify-center items-center">
                            <img className=" p-5 " height="100%" width="100%" src={TailwindCSSIcon || undefined}
                                 alt="TailwindCSSIcon"/>
                        </div>
                        <div
                            className="bg-gradient-to-tl from-[#0e0e36] to-[#00b0ff] h-28  w-28 p-1 rounded-tr-[30px] flex justify-center items-center">
                            <img className=" p-5 " height="100%" width="100%" src={MaterialUIIcon || undefined}
                                 alt="MaterialUIIcon"/>
                        </div>
                        <div
                            className="bg-gradient-to-tl from-[#0e0e36] to-[#463277] h-28  w-28 p-1 rounded-tr-[30px] flex justify-center items-center">
                            <img className=" p-5 " height="100%" width="100%" src={Bootstrap || undefined}
                                 alt="Bootstrap"/>
                        </div>
                        <div
                            className="bg-gradient-to-tl from-[#0e0e36] to-[#fea611] h-28  w-28 p-1 rounded-tr-[30px] flex justify-center items-center">
                            <img className=" p-5 " height="100%" width="100%" src={FireBaseIcon || undefined}
                                 alt="FireBaseIcon"/>
                        </div>
                        <div
                            className="bg-gradient-to-tl from-[#0e0e36] to-[#ffffff] h-28  w-28 p-1 rounded-tr-[30px] flex justify-center items-center">
                            <img className=" p-5 " height="100%" width="100%" src={ApolloIcon || undefined}
                                 alt="ApolloIcon"/>
                        </div>
                        <div
                            className="bg-gradient-to-tl from-[#0e0e36] to-[#e535ab] h-28  w-28 p-1 rounded-tr-[30px] flex justify-center items-center">
                            <img className=" p-5 " height="100%" width="100%" src={GraphQLIcon || undefined}
                                 alt="GraphQLIcon"/>
                        </div>

                    </div>
                </div>


            </div>

        </section>
    );
};

export default Skills;