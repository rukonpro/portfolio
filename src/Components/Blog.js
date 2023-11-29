import React from 'react';
import Blog37 from "../Images/Rectangle 37.png";
import Blog38 from "../Images/Rectangle 38.png";
import Blog39 from "../Images/Rectangle 39.png";
import Blog40 from "../Images/Rectangle 40.png";
import Bloc41 from "../Images/Rectangle 41.png";
import Blog42 from "../Images/Rectangle 42.png";

const Blog = () => {
    return (
        <section id="blogs" className="myServiceContainer  w-screen  bg-slate-800 py-10 px-5  overflow-x-hidden">
            <div className="flex-none md:flex justify-around items-center backdrop-blur-3xl  backdrop-opacity-70 ">
                <div>
                    <div className="flex justify-center">
                        <div className="relative  w-[55px] h-[55px] bgGradient rounded-full right-16 top-2 customShadow"></div>
                        <h1 className="text-white z-10 text-[50px] font-bold font-['Roboto'] absolute">Blogs</h1>
                    </div>

                    <div className="grid md:grid-cols-3 grid-cols-2  pt-10">
                        <div className="md:col-span-1 col-span-1 flex md:justify-start justify-center">
                            <img className=" " src={Blog37} alt="" />
                        </div>
                        <div className="md:col-span-1 col-span-1 flex md:justify-start justify-center">
                            <img className=" " src={Blog37} alt="" />
                        </div>
                        <div className="md:col-span-1 col-span-1 flex md:justify-start justify-center">
                            <img className=" " src={Blog38} alt="" />
                        </div>
                        <div className="md:col-span-3 col-span-1 flex justify-center">
                            <img className=" " src={Blog39} alt="" />
                        </div>
                        <div className="md:col-span-1 col-span-1 flex md:justify-start justify-center">
                            <img className="" src={Blog40} alt="" />
                        </div>
                        <div className="md:col-span-1 col-span-1 flex md:justify-start justify-center">
                            <img className="" src={Bloc41} alt="" />
                        </div>
                        <div className="md:col-span-1 col-span-2 flex  justify-center">
                            <img className=" " src={Blog42} alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;