import React, { useState } from 'react';
import Thumbnail from "../Images/Thumbnail.png"
import Cover from "../Images/Cover.png"
import Project1 from "../Images/project1.jpg";
import Project2 from "../Images/project2.jpg";
import Project3 from "../Images/project3.jpg";
import Project4 from "../Images/project4.jpg";
import Project5 from "../Images/project5.jpg";
import Project6 from "../Images/project6.jpeg";
import Modals from './Modals';


const Portfolio = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <section className=' w-screen  bg-neutral-800 py-10 px-5'>
            .
            <Modals showModal={showModal} setShowModal={setShowModal} />

            <div className="container mx-auto">
                <div className="flex justify-center">
                    <div className="relative  w-[55px] h-[55px] bg-gradient-to-r from-orange-600 to-amber-400 rounded-full right-24 customShadow"></div>
                    <h1 className="text-white z-10 text-[50px] font-bold font-['Roboto'] absolute">Portfolio</h1>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-2 mt-10">
                    <div onClick={() => setShowModal(true)}>
                        <img className="  h-96 w-full  animate-pulse" src={Project1} alt="" />
                    </div>
                    <div onClick={() => setShowModal(true)}>
                        <img className=" h-96 w-full  animate-pulse" src={Project2} alt="" />
                    </div>
                    <div onClick={() => setShowModal(true)}>
                        <img className=" h-96 w-full  animate-pulse" src={Project3} alt="" />
                    </div>
                    <div onClick={() => setShowModal(true)}>
                        <img className=" h-96 w-full  animate-pulse" src={Project4} alt="" />
                    </div>
                    <div onClick={() => setShowModal(true)}>
                        <img className=" h-96 w-full  animate-pulse" src={Project5} alt="" />
                    </div>
                    <div onClick={() => setShowModal(true)}>
                        <img className=" h-96 w-full  animate-pulse" src={Project6} alt="" />
                    </div>
                    <div onClick={() => setShowModal(true)}>
                        <img className=" h-96 w-full  animate-pulse" src={Thumbnail} alt="" />
                    </div>
                    <div onClick={() => setShowModal(true)}>
                        <img className=" h-96 w-full  animate-pulse" src={Cover} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;