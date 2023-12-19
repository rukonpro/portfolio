import React from 'react';
import Blog37 from "../Images/Rectangle_37.webp";
import Blog38 from "../Images/Rectangle_38.webp";
import Blog39 from "../Images/Rectangle_39.webp";
import Blog40 from "../Images/Rectangle_40.webp";

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
                        <h1 className="text-white z-10 md:text-5xl text-2xl font-bold font-['Roboto'] absolute tracking-[4px]">Blogs</h1>
                    </div>

                    <div className="grid md:grid-cols-3 grid-cols-2  pt-10">
                        <div className="md:col-span-1 col-span-1 flex md:justify-start justify-center">
                            <img src={Blog40 || undefined} height="100%" width="100%" alt="blog"
                                 loading="lazy"/>
                        </div>
                        <div className="md:col-span-1 col-span-1 flex md:justify-start justify-center">
                            <img src={Blog37 || undefined} height="100%" width="100%" alt="blog"
                                 loading="lazy"/>
                        </div>
                        <div className="md:col-span-1 col-span-1 flex md:justify-start justify-center">
                            <img  src={Blog38 || undefined} height="100%" width="100%" alt="blog"
                                 loading="lazy"/>
                        </div>
                        <div className="md:col-span-1 col-span-1 col-start-2 flex justify-center">
                            <img  src={Blog39 || undefined} height="100%" width="100%" alt="blog" loading="lazy"/>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default Blog;