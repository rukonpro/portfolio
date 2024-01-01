import React from 'react';
import Blog37 from "../../Images/Rectangle_37.webp";
import Blog38 from "../../Images/Rectangle_38.webp";
import Blog39 from "../../Images/Rectangle_39.webp";
import Blog40 from "../../Images/Rectangle_40.webp";

const Blog = () => {
    return (
        <section id="blogs" className="relative  bg-[#0e0e36]     overflow-x-hidden px-5 py-10">
            <div className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
                 style={{background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)"}}></div>
            <article
                className="relative  z-10 flex-none md:flex justify-around items-center backdrop-blur-3xl  backdrop-opacity-70 ">
                <div>
                    <div className="flex justify-center">
                        <div
                            className="relative  w-[55px] h-[55px] bg-gradient-to-bl transition from-[#17113a] to-[#8907c0]  animate-spin rounded-full right-16 top-2  customShadow "></div>
                        <h1
                            data-aos="fade-up"
                            data-aos-anchor-placement="center-center"
                            data-aos-duration="1000"
                            className="text-white z-10 md:text-5xl text-2xl font-bold  absolute tracking-[4px]">Blogs</h1>
                    </div>

                    <div className="grid md:grid-cols-3 grid-cols-2  pt-10">
                        <div className="md:col-span-1 col-span-1 flex md:justify-start justify-center">
                            <img
                                data-aos="fade-left"
                                data-aos-anchor-placement="top-bottom"
                                data-aos-duration="2000"
                                src={Blog40 || undefined} height="100%" width="100%" alt="blog"
                                loading="lazy"/>
                        </div>
                        <div className="md:col-span-1 col-span-1 flex md:justify-start justify-center">
                            <img
                                data-aos="fade-down"
                                data-aos-anchor-placement="top-bottom"
                                data-aos-duration="2000"
                                src={Blog37 || undefined} height="100%" width="100%" alt="blog"
                                loading="lazy"/>
                        </div>
                        <div className="md:col-span-1 col-span-1 flex md:justify-start justify-center">
                            <img
                                data-aos="fade-right"
                                data-aos-anchor-placement="top-bottom"
                                data-aos-duration="2000"
                                src={Blog38 || undefined} height="100%" width="100%" alt="blog"
                                loading="lazy"/>
                        </div>
                        <div className="md:col-span-3 flex justify-center">
                            <img
                                data-aos="fade-up"
                                data-aos-duration="2000"
                                src={Blog39 || undefined} height={250} width={250} alt="blog" loading="lazy"/>
                        </div>
                    </div>
                </div>
            </article>

            <div className="flex justify-center pt-5">
                <button type="button"
                        className="text-white text-lg font-bold  w-64 border py-2 px-5 rounded-lg hover:bg-[#350b70] shadow-2xl shadow-fuchsia-300 active:shadow-md active:shadow-fuchsia-100/30">
                    All Blogs
                </button>
            </div>
        </section>
    );
};

export default Blog;