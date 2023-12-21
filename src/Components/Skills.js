import React from 'react';
/*import PortfolioData from "../data/portfolioData";
import LazyImageLoader from "../utilitis/LazyImageLoader";*/
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
import ES6 from "../SkillsLogo/es6.svg";
import MYSQL from "../SkillsLogo/mysql-logo.svg";
import TypeScript from "../SkillsLogo/typescript.svg";
import ReactNative from  "../SkillsLogo/react-native-1.svg";
import Sass from  "../SkillsLogo/sass-1.svg";
import Kotlin from  "../SkillsLogo/kotlin-2.svg";
import Android from  "../SkillsLogo/android-4.svg";
import Git from  "../SkillsLogo/git-icon.svg";
import Github from  "../SkillsLogo/github-icon-1.svg";
import NPM from  "../SkillsLogo/npm.svg";
import Yarn from  "../SkillsLogo/yarn.svg";
import VisualStudioCode from  "../SkillsLogo/visual-studio-code-1.svg";
import Webstorm from  "../SkillsLogo/webstorm-icon.svg";
import Firefox from  "../SkillsLogo/firefox-3.svg";
import Chrome from  "../SkillsLogo/chrome.svg";
import Heroku from  "../SkillsLogo/heroku-4.svg";
import Render from  "../SkillsLogo/renner-1.svg";
import Netlify from  "../SkillsLogo/netlify.svg";
import Figma from  "../SkillsLogo/figma-5.svg";
import Postman from  "../SkillsLogo/postman.svg";
import Varcel from  "../SkillsLogo/vercel.svg";
import Python from  "../SkillsLogo/python-5.svg";
import PHP from  "../SkillsLogo/php-1.svg";
import Laravel from  "../SkillsLogo/laravel-2.svg";
import Django from  "../SkillsLogo/django.svg";
const Skills = () => {


 /*   const bgGradientColor1 = "bg-gradient-to-tl from-[#0e0e36] to-[#125353]";
    const bgGradientColor2 = "bg-gradient-to-tl from-[#0e0e36] to-[#5c0c63]";
    const bgGradientColor3 = "bg-gradient-to-tl from-[#0e0e36] to-[#1c0c66]";
    const bgGradientColor4 = "bg-gradient-to-tl from-[#0e0e36] to-[#98632e]";*/


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


                <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-2 grid-cols-1 px-3">

                    <div>
                        <h1 className={`text-2xl p-2   my-2 font-bold font-[Roboto]`}>Experienced:</h1>
                        <div className={`grid grid-cols-4 sm:grid-cols-6 md:grid-cols-5 lg:grid-cols-10  gap-1`}>
                            <div
                                className="bg-gradient-to-tl from-[#0e0e36] to-[#61dafb]  rounded-[10px] flex justify-center items-center">
                                <img className=" p-1 animate-spin " height="100%" width="100%"
                                     src={ReactIcon || undefined}
                                     alt="ReactIcon"/>

                            </div>
                            <div
                                className="bg-gradient-to-tl from-[#0e0e36] to-[#ffffff]  rounded-[10px] flex justify-center items-center">
                                <img className=" p-1 " height="100%" width="100%" src={NextJSIcon || undefined}
                                     alt="NextJSIcon"/>
                            </div>
                            <div
                                className="bg-gradient-to-tl from-[#0e0e36] to-[#764abc]   rounded-[10px] flex justify-center items-center">
                                <img className=" p-1 " height="100%" width="100%" src={ReduxIcon || undefined}
                                     alt="ReduxIcon"/>
                            </div>
                            <div
                                className="bg-gradient-to-tl from-[#0e0e36] to-[#e34f26]   rounded-[10px] flex justify-center items-center">
                                <img className=" p-1 " height="100%" width="100%" src={HtmlIcon || undefined}
                                     alt="html"/>
                            </div>
                            <div
                                className="bg-gradient-to-tl from-[#0e0e36] to-[#e9ca32]   rounded-[10px] flex justify-center items-center">
                                <img className=" p-1 " height="100%" width="100%" src={JsIcon || undefined}
                                     alt="javascript"/>
                            </div>
                            <div
                                className="bg-gradient-to-tl from-[#0e0e36] to-[#f26522]   rounded-[10px] flex justify-center items-center">
                                <img className=" p-1 rounded-full " height="100%" width="100%" src={ES6 || undefined}
                                     alt="es6"/>
                            </div>
                            <div
                                className="bg-gradient-to-tl from-[#0e0e36] to-[#599636]   rounded-[10px] flex justify-center items-center">
                                <img className=" p-1 " height="100%" width="100%" src={MongoDBIcon || undefined}
                                     alt="MongoDBIcon"/>
                            </div>
                            <div
                                className="bg-gradient-to-tl from-[#0e0e36] to-[#00758f]   rounded-[10px] flex justify-center items-center">
                                <img className=" p-1 " height="100%" width="100%" src={MYSQL || undefined}
                                     alt="MYSQL"/>
                            </div>
                            <div
                                className="bg-gradient-to-tl from-[#0e0e36] to-[#00d486]  rounded-[10px] flex justify-center items-center">
                                <img className=" p-1 " height="100%" width="100%" src={NodeJsIcon || undefined}
                                     alt="NodeJS"/>
                            </div>
                            <div
                                className="bg-gradient-to-tl from-[#0e0e36] to-[#1b73ba]  rounded-[10px] flex justify-center items-center">
                                <img className=" p-1 " height="100%" width="100%" src={CSSIcon || undefined} alt="CSS"/>
                            </div>
                            <div
                                className="bg-gradient-to-tl from-[#0e0e36] to-[#06b6d4] rounded-[10px] flex justify-center items-center">
                                <img className=" p-1 " height="100%" width="100%" src={TailwindCSSIcon || undefined}
                                     alt="TailwindCSSIcon"/>
                            </div>
                            <div
                                className="bg-gradient-to-tl from-[#0e0e36] to-[#00b0ff]   rounded-[10px] flex justify-center items-center">
                                <img className=" p-1 " height="100%" width="100%" src={MaterialUIIcon || undefined}
                                     alt="MaterialUIIcon"/>
                            </div>
                            <div
                                className="bg-gradient-to-tl from-[#0e0e36] to-[#463277]  rounded-[10px] flex justify-center items-center">
                                <img className=" p-1 " height="100%" width="100%" src={Bootstrap || undefined}
                                     alt="Bootstrap"/>
                            </div>
                            <div
                                className="bg-gradient-to-tl from-[#0e0e36] to-[#fea611]  rounded-[10px] flex justify-center items-center">
                                <img className=" p-1 " height="100%" width="100%" src={FireBaseIcon || undefined}
                                     alt="FireBaseIcon"/>
                            </div>
                            <div
                                className="bg-gradient-to-tl from-[#0e0e36] to-[#ffffff] rounded-[10px] flex justify-center items-center">
                                <img className=" p-1 " height="100%" width="100%" src={ApolloIcon || undefined}
                                     alt="ApolloIcon"/>
                            </div>
                            <div
                                className="bg-gradient-to-tl from-[#0e0e36] to-[#e535ab]  rounded-[10px] flex justify-center items-center">
                                <img className=" p-1 animate-spin" height="100%" width="100%"
                                     src={GraphQLIcon || undefined}
                                     alt="GraphQLIcon"/>
                            </div>

                        </div>
                    </div>


                    <div>
                        <h1 className={`text-2xl p-2   my-2 font-bold font-[Roboto]`}>Comfortable:</h1>
                        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-5 lg:grid-cols-10  gap-1">
                            <div
                                className="bg-gradient-to-tl from-[#0e0e36] to-[#61dafb]  rounded-[10px] flex justify-center items-center">
                                <img className=" p-1 animate-spin " height="100%" width="100%"
                                     src={ReactIcon || undefined}
                                     alt="ReactIcon"/>

                            </div>

                            <div
                                className="bg-gradient-to-tl from-[#0e0e36] to-[#764abc]   rounded-[10px] flex justify-center items-center">
                                <img className=" p-1 " height="100%" width="100%" src={ReduxIcon || undefined}
                                     alt="ReduxIcon"/>
                            </div>
                            <div
                                className="bg-gradient-to-tl from-[#0e0e36] to-[#e34f26]   rounded-[10px] flex justify-center items-center">
                                <img className=" p-1 " height="100%" width="100%" src={HtmlIcon || undefined}
                                     alt="html"/>
                            </div>
                            <div
                                className="bg-gradient-to-tl from-[#0e0e36] to-[#e9ca32]   rounded-[10px] flex justify-center items-center">
                                <img className=" p-1 " height="100%" width="100%" src={JsIcon || undefined}
                                     alt="javascript"/>
                            </div>
                            <div
                                className="bg-gradient-to-tl from-[#0e0e36] to-[#599636]   rounded-[10px] flex justify-center items-center">
                                <img className=" p-1 " height="100%" width="100%" src={MongoDBIcon || undefined}
                                     alt="javascript"/>
                            </div>
                            <div
                                className="bg-gradient-to-tl from-[#0e0e36] to-[#00d486]  rounded-[10px] flex justify-center items-center">
                                <img className=" p-1 " height="100%" width="100%" src={NodeJsIcon || undefined}
                                     alt="NodeJS"/>
                            </div>
                            <div
                                className="bg-gradient-to-tl from-[#0e0e36] to-[#1b73ba]  rounded-[10px] flex justify-center items-center">
                                <img className=" p-1 " height="100%" width="100%" src={CSSIcon || undefined} alt="CSS"/>
                            </div>
                            <div
                                className="bg-gradient-to-tl from-[#0e0e36] to-[#06b6d4] rounded-[10px] flex justify-center items-center">
                                <img className=" p-1 " height="100%" width="100%" src={TailwindCSSIcon || undefined}
                                     alt="TailwindCSSIcon"/>
                            </div>
                            <div
                                className="bg-gradient-to-tl from-[#0e0e36] to-[#00b0ff]   rounded-[10px] flex justify-center items-center">
                                <img className=" p-1 " height="100%" width="100%" src={MaterialUIIcon || undefined}
                                     alt="MaterialUIIcon"/>
                            </div>
                            <div
                                className="bg-gradient-to-tl from-[#0e0e36] to-[#463277]  rounded-[10px] flex justify-center items-center">
                                <img className=" p-1 " height="100%" width="100%" src={Bootstrap || undefined}
                                     alt="Bootstrap"/>
                            </div>
                            <div
                                className="bg-gradient-to-tl from-[#0e0e36] to-[#fea611]  rounded-[10px] flex justify-center items-center">
                                <img className=" p-1 " height="100%" width="100%" src={FireBaseIcon || undefined}
                                     alt="FireBaseIcon"/>
                            </div>
                            <div
                                className="bg-gradient-to-tl from-[#0e0e36] to-[#ffffff] rounded-[10px] flex justify-center items-center">
                                <img className=" p-1 " height="100%" width="100%" src={ApolloIcon || undefined}
                                     alt="ApolloIcon"/>
                            </div>
                            <div
                                className="bg-gradient-to-tl from-[#0e0e36] to-[#e535ab]  rounded-[10px] flex justify-center items-center">
                                <img className=" p-1 animate-spin" height="100%" width="100%"
                                     src={GraphQLIcon || undefined}
                                     alt="GraphQLIcon"/>
                            </div>

                        </div>
                    </div>

                    <div>
                        <h1 className={`text-2xl p-2   my-2 font-bold font-[Roboto]`}>Tools:</h1>
                        <div
                            className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-5 lg:grid-cols-10 justify-center  gap-1">
                            <div
                                className="bg-gradient-to-tl from-[#0e0e36] to-[#de4c36]  rounded-[10px] flex justify-center items-center">
                                <img className=" p-1 " height="100%" width="100%"
                                     src={Git || undefined}
                                     alt="Git"/>

                            </div>
                            <div
                                className="bg-gradient-to-tl from-[#0e0e36] to-[#ffffff]  rounded-[10px] flex justify-center items-center">
                                <img className=" p-1 " height="100%" width="100%" src={Github || undefined}
                                     alt="Github"/>
                            </div>
                            <div
                                className="bg-gradient-to-tl from-[#0e0e36] to-[#cb3837]   rounded-[10px] flex justify-center items-center">
                                <img className=" p-1 " height="100%" width="100%" src={NPM || undefined}
                                     alt="NPM"/>
                            </div>
                            <div
                                className="bg-gradient-to-tl from-[#0e0e36] to-[#3398c2]   rounded-[10px] flex justify-center items-center">
                                <img className=" p-1 " height="100%" width="100%" src={Yarn || undefined}
                                     alt="Yarn"/>
                            </div>
                            <div
                                className="bg-gradient-to-tl from-[#0e0e36] to-[#3c99d4]   rounded-[10px] flex justify-center items-center">
                                <img className=" p-1 " height="100%" width="100%" src={VisualStudioCode || undefined}
                                     alt="VisualStudioCode"/>
                            </div>
                            <div
                                className="bg-gradient-to-tl from-[#0e0e36] to-[#00cdd7]   rounded-[10px] flex justify-center items-center">
                                <img className=" p-1 " height="100%" width="100%" src={Webstorm || undefined}
                                     alt="Webstorm"/>
                            </div>
                            <div
                                className="bg-gradient-to-tl from-[#0e0e36] to-[#f52238]  rounded-[10px] flex justify-center items-center">
                                <img className=" p-1 " height="100%" width="100%" src={Firefox || undefined}
                                     alt="Firefox"/>
                            </div>
                            <div
                                className="bg-gradient-to-tl from-[#0e0e36] to-[#f4d911]  rounded-[10px] flex justify-center items-center">
                                <img className=" p-1 " height="100%" width="100%" src={Chrome || undefined}
                                     alt="Chrome"/>
                            </div>
                            <div
                                className="bg-gradient-to-tl from-[#0e0e36] to-[#430098] rounded-[10px] flex justify-center items-center">
                                <img className=" p-1 " height="100%" width="100%" src={Heroku || undefined}
                                     alt="Heroku"/>
                            </div>
                            <div
                                className="bg-gradient-to-tl from-[#0e0e36] to-[#d61f27]   rounded-[10px] flex justify-center items-center">
                                <img className=" p-1 " height="100%" width="100%" src={Render || undefined}
                                     alt="Render"/>
                            </div>
                            <div
                                className="bg-gradient-to-tl from-[#0e0e36] to-[#25c7b7]  rounded-[10px] flex justify-center items-center">
                                <img className=" p-1 " height="100%" width="100%" src={Netlify || undefined}
                                     alt="Netlify"/>
                            </div>
                            <div
                                className="bg-gradient-to-tl from-[#0e0e36] to-[#0acf83]  rounded-[10px] flex justify-center items-center">
                                <img className=" p-1 " height="100%" width="100%" src={Figma || undefined}
                                     alt="Figma"/>
                            </div>
                            <div
                                className="bg-gradient-to-tl from-[#0e0e36] to-[#ff6c37] rounded-[10px] flex justify-center items-center">
                                <img className=" p-1 " height="100%" width="100%" src={Postman || undefined}
                                     alt="Postman"/>
                            </div>
                            <div
                                className="bg-gradient-to-tl from-[#0e0e36] to-[#e9ca32]  rounded-[10px] flex justify-center items-center">
                                <img className=" p-1 " height="100%" width="100%"
                                     src={Varcel || undefined}
                                     alt="Varcel"/>
                            </div>

                        </div>
                    </div>

                    <div>
                        <h1 className={`text-2xl p-2   my-2 font-bold font-[Roboto]`}>Familiar:</h1>
                        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-5 lg:grid-cols-10  gap-1">
                            <div
                                className="bg-gradient-to-tl from-[#0e0e36] to-[#007acc]  rounded-[10px] flex justify-center items-center">
                                <img className=" p-1 rounded-3xl " height="100%" width="100%"
                                     src={TypeScript || undefined}
                                     alt="TypeScript"/>

                            </div>
                            <div
                                className="bg-gradient-to-tl from-[#0e0e36] to-[#61dafb]  rounded-[10px] flex justify-center items-center">
                                <img className=" p-1 " height="100%" width="100%" src={ReactNative || undefined}
                                     alt="ReactNative"/>
                            </div>
                            <div
                                className="bg-gradient-to-tl from-[#0e0e36] to-[#cf649a]   rounded-[10px] flex justify-center items-center">
                                <img className=" p-1 " height="100%" width="100%" src={Sass || undefined}
                                     alt="Sass"/>
                            </div>
                            <div
                                className="bg-gradient-to-tl from-[#0e0e36] to-[#7f52ff]   rounded-[10px] flex justify-center items-center">
                                <img className=" p-1 " height="100%" width="100%" src={Kotlin || undefined}
                                     alt="Kotlin"/>
                            </div>
                            <div
                                className="bg-gradient-to-tl from-[#0e0e36] to-[#3ddb85]   rounded-[10px] flex justify-center items-center">
                                <img className=" p-1 " height="100%" width="100%" src={Android || undefined}
                                     alt="Android"/>
                            </div>
                            <div
                                className="bg-gradient-to-tl from-[#0e0e36] to-[#ffdd55]   rounded-[10px] flex justify-center items-center">
                                <img className=" p-1 " height="100%" width="100%" src={Python || undefined}
                                     alt="Python"/>
                            </div>
                            <div
                                className="bg-gradient-to-tl from-[#0e0e36] to-[#2ba977]   rounded-[10px] flex justify-center items-center">
                                <img className=" p-1 " height="100%" width="100%" src={Django || undefined}
                                     alt="Django"/>
                            </div>

                            <div
                                className="bg-gradient-to-tl from-[#0e0e36] to-[#8993be]   rounded-[10px] flex justify-center items-center">
                                <img className=" p-1 " height="100%" width="100%" src={PHP || undefined}
                                     alt="php"/>
                            </div>

                            <div
                                className="bg-gradient-to-tl from-[#0e0e36] to-[#ff2d20]   rounded-[10px] flex justify-center items-center">
                                <img className=" p-1 " height="100%" width="100%" src={Laravel || undefined}
                                     alt="Laravel"/>
                            </div>
                        </div>
                    </div>


                </div>


            </div>

        </section>
    );
};

export default Skills;