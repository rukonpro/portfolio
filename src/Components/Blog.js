import React from 'react';
import Blog37 from "../Images/Rectangle 37.png";
import Blog38 from "../Images/Rectangle 38.png";
import Blog39 from "../Images/Rectangle 39.png";
import Blog40 from "../Images/Rectangle 40.png";

const Blog = () => {
    return (
        <section id="blogs" className="relative  bg-[#0e0e36]     overflow-x-hidden">
            <div className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
                 style={{background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)"}}></div>
            <article
                className="relative py-10 z-10 flex-none md:flex justify-around items-center backdrop-blur-3xl  backdrop-opacity-70 ">
                <div>
                    <div className="flex justify-center">
                        <div
                            className="relative  w-[55px] h-[55px] bgGradient rounded-full right-16 top-2 customShadow "></div>
                        <h1 className="text-white z-10 md:text-5xl text-2xl font-bold font-['Roboto'] absolute">Blogs</h1>
                    </div>

                    <div className="grid md:grid-cols-3 grid-cols-2  pt-10">
                        <div className="md:col-span-1 col-span-1 flex md:justify-start justify-center">
                            <img className=" " src={Blog40 || undefined} alt=""/>
                        </div>
                        <div className="md:col-span-1 col-span-1 flex md:justify-start justify-center">
                            <img className=" " src={Blog37 || undefined} alt=""/>
                        </div>
                        <div className="md:col-span-1 col-span-1 flex md:justify-start justify-center">
                            <img className=" " src={Blog38 || undefined} alt=""/>
                        </div>
                        <div className="md:col-span-3 col-span-1 flex justify-center">
                            <img className=" " src={Blog39 || undefined} alt=""/>
                        </div>


                    </div>
                </div>
            </article>
        </section>
    );
};

export default Blog;