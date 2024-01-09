import React from 'react';
import ProfilePhoto from '../../Images/myprofile.webp';
import LazyLoader from "../../Helpers/LazyLoader";


const About = () => {
    return (
        <section id="about" className='relative bg-[#121837] px-5 py-28'>
            <div className="relative z-10">
                <div className='max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-10 items-center'>
                    <div className=" flex lg:justify-start justify-center items-center text-center  ">
                        <div
                            data-aos="fade-up"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                            className=" w-full h-full object-cover rounded-lg overflow-hidden ">
                            <LazyLoader>
                                <img
                                    className='  object-contain scale-x-[-1] !transform rotate-X-190 '
                                    src={ProfilePhoto || undefined}
                                    alt="profilephoto" height="100%" width="100%" loading="lazy"/>
                            </LazyLoader>
                          {/*  <h1
                                data-aos="fade-up"
                                data-aos-anchor-placement="bottom-bottom"
                                className="text-white  md:text-3xl text-2xl font-bold  tracking-[2px] p-5  ">MD.
                                RUKON UDDIN</h1>*/}
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className="relative ">
                                <div>
                                    <div
                                        className="absolute w-[55px] h-[55px] bg-gradient-to-tl from-[#17113a] to-[#8907c0]  animate-spin rounded-full customShadow "
                                    ></div>
                                    <h1
                                        data-aos="fade-up"
                                        data-aos-easing="linear"
                                        data-aos-duration="1300"
                                        className="absolute top-3 text-white  md:text-5xl text-2xl font-bold  tracking-[4px] ">About
                                        me</h1>
                                </div>
                            </div>

                            <article
                                data-aos="fade-up"
                                data-aos-easing="linear"
                                data-aos-duration="1000"
                                className="text-white  md:text-xl text-base   tracking-[1px] pt-20"><span

                                className='text-2xl font-extrabold'>Hello!</span> <br/>

                                I am a <span
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="bottom-bottom"
                                    className='font-bold'>Web Developer</span>,
                                <span
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="bottom-bottom"
                                    className='font-bold'> React Developer</span>,
                                <span
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="bottom-bottom"
                                    className='font-bold'>MERN stack developer</span>, or a
                                <span
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="bottom-bottom"
                                    className='font-bold'>JavaScript</span> enthusiast.
                                <br/>
                                <br/>
                                I have good knowledge of building web applications with

                                <span
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="bottom-bottom"
                                    className='font-bold'>React.js</span> for the client-side,
                                <span
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="bottom-bottom"
                                    className='font-bold'> Node.js / express.js</span> for the server-side, and
                                <span
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="bottom-bottom"
                                    className='font-bold'>MongoDB</span>
                                for the database. I’m curious, and I enjoy work
                                that challenges me to learn something new and stretch in a different direction.I do my
                                best to stay on top of changes in the state of the art so that I can meet challenges
                                with tools well suited to the job at hand.

                                <br/>
                                <br/>

                                I am currently available for a job. If your company needs a
                                <span
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="bottom-bottom"
                                    className='font-bold'>React developer,  web developer, or MERN stack developer,</span>
                                then get in touch.
                            </article>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0   blur-[150px]   radial-gradient"></div>
        </section>
    );
};

export default About;