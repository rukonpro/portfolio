import React from 'react';
import ProfilePhoto from '../Images/profilePhoto.webp';
import LazyLoader from "../utilitis/LazyLoader";

const About = () => {

    return (
        <section id="about" className='relative bg-slate-950 px-5 py-10'>
            <div className="relative z-10">
                <div className='container mx-auto grid lg:grid-cols-2 '>
                    <div className=" flex lg:justify-start justify-center items-center text-center  ">
                        <div className="md:w-[350px] w-[292px]">
                            <LazyLoader>
                                <img className='rounded-full object-contain scale-x-[-1]'
                                    src={ProfilePhoto || undefined}
                                    alt="profilephoto" height="100%" width="100%" loading="lazy" />
                            </LazyLoader>
                            <h1 className="text-white  md:text-3xl text-2xl font-bold font-['Roboto'] tracking-[2px]">MD. Rukon Uddin</h1>
                        </div>
                    </div>
                    <div>
                        <div className='pt-10'>
                            <div className="relative ">
                                <div>
                                    <div className="absolute w-[55px] h-[55px] bg-gradient-to-tl from-[#17113a] to-[#8907c0]  animate-spin rounded-full customShadow "></div>
                                    <h1 className="absolute top-3 text-white  md:text-5xl text-2xl font-bold font-['Roboto'] tracking-[4px] ">About me</h1>
                                </div>
                            </div>

                            <article className="text-white  md:text-xl text-base   font-['Roboto'] pt-10 tracking-[1px] mt-10"><span
                                className='text-2xl font-extrabold'>Hello!</span> <br />
                                I am a <span className='font-bold'>Web Developer</span>,<span className='font-bold'> React Developer</span>, <span
                                    className='font-bold'>MERN stack developer</span>, or a <span
                                        className='font-bold'>JavaScript</span> enthusiast.
                                <br />
                                <br />
                                I have good knowledge of building web applications with <span
                                    className='font-bold'>React.js</span> for the client-side, <span
                                        className='font-bold'> Node.js / express.js</span> for the server-side, and <span
                                            className='font-bold'>MongoDB</span> for the database. I’m curious, and I enjoy work
                                that challenges me to learn something new and stretch in a different direction.I do my
                                best to stay on top of changes in the state of the art so that I can meet challenges
                                with tools well suited to the job at hand.

                                <br />
                                <br />

                                I am currently available for a job. If your company needs a <span className='font-bold'>React developer,  web developer, or MERN stack developer,</span> then
                                get in touch.</article>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0   blur-[150px]   radial-gradient"></div>
        </section>
    );
};

export default About;