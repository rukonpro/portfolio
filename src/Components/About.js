import React from 'react';
import ProfilePhoto from '../Images/profilePhoto.webp';
import LazyImageLoader from "../utilitis/LazyImageLoader";

const About = () => {

    return (
        <section id="about" className='relative bg-slate-950 px-5 py-10'>
            <div className="relative z-10">
                <div className='container mx-auto grid lg:grid-cols-2 '>
                    <div className=" flex lg:justify-start justify-center items-center text-center  ">
                        <div className="md:w-[350px] w-[292px]">
                            <LazyImageLoader>
                                <img className='rounded-full object-contain scale-x-[-1]'
                                     src={ProfilePhoto || undefined}
                                     alt="profilephoto" loading="lazy"/>
                            </LazyImageLoader>
                            <h5 className="text-white text-lg font-bold font-['Roboto']">Certifications</h5>
                            <h1 className="text-white md:text-3xl text-2xl font-bold font-['Roboto']">MD. Rukon Uddin</h1>
                        </div>
                    </div>
                    <div>
                        <div className='pt-10'>
                            <div
                                className="w-[55px] h-[55px] bg-gradient-to-r from-orange-600 to-amber-400 rounded-full customShadow ">
                                <div className='absolute px-5'>
                                    <h1 className="text-white md:text-5xl text-2xl font-bold font-['Roboto'] ">About
                                        me</h1>
                                </div>
                            </div>
                            <article className="text-white md:text-xl text-base   font-['Roboto'] pt-10"><span
                                className='text-2xl font-extrabold'>Hello!</span> <br/>
                                I am a <span className='font-bold'>Web Developer</span>,<span className='font-bold'> React Developer</span>, <span
                                    className='font-bold'>MERN stack developer</span>, or a <span
                                    className='font-bold'>JavaScript</span> enthusiast.
                                <br/>
                                <br/>
                                I have good knowledge of building web applications with <span
                                    className='font-bold'>React.js</span> for the client-side, <span
                                    className='font-bold'> Node.js / express.js</span> for the server-side, and <span
                                    className='font-bold'>MongoDB</span> for the database. I’m curious, and I enjoy work
                                that challenges me to learn something new and stretch in a different direction.I do my
                                best to stay on top of changes in the state of the art so that I can meet challenges
                                with tools well suited to the job at hand.

                                <br/>
                                <br/>

                                I am currently available for a job. If your company needs a <span className='font-bold'>React developer,  web developer, or MERN stack developer,</span> then
                                get in touch.</article>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
                 style={{background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)"}}></div>
        </section>
    );
};

export default About;