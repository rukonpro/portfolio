import React from 'react';
import ProfilePhoto from '../Images/profilePhoto.jpg';
const About = () => {
    return (
        <section className=' w-screen bg-neutral-800 px-5 py-10'>

            <div className='container mx-auto grid md:grid-cols-2 '>
                <div className="w-[292px] text-center ">
                    <img className='rounded-full object-contain scale-x-[-1]' src={ProfilePhoto} alt="" />
                    <h5 className="text-white text-lg font-bold font-['Roboto']">Certifications</h5>
                    <p className="text-white text-[34px] font-bold font-['Roboto']">Israel Gonzalez</p>
                </div>
                <div>
                    <div className='pt-10'>
                        <div className="w-[55px] h-[55px] bg-gradient-to-r from-orange-600 to-amber-400 rounded-full customShadow ">
                            <div className='absolute px-5'>
                                <h1 className="text-white text-6xl font-bold font-['Roboto'] ">About me</h1>
                            </div>
                        </div>
                        <p className="text-white md:text-2xl text-lg  font-bold font-['Roboto'] lg:w-2/3 pt-10">I'm Israel Gonzalez, I'm 27 years old, I currently work independently as a fullstack, UX|UI designer and video game designer.<br /><br />I currently have a video game studio where I spend my time mixing ideas from all my work to generate quality stories that everyone can enjoy.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;