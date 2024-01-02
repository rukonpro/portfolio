import React from 'react';
import Marquee from "react-fast-marquee";
import portfolioData from "../../data/portfolioData";
import LazyLoader from "../../Helpers/LazyLoader";

const Certifications = () => {
    return (
        <div
            className="py-24 relative bg-[#0e0e36]"
        >
            <div className="absolute custom-animate-pulse inset-0 blur-[118px] radial-gradient"></div>
            <div className="relative z-10">
                <div className="flex justify-center">
                    <div className="flex items-center relative">
                        <div
                            className="  w-[55px] h-[55px] bg-gradient-to-tl from-[#17113a] to-[#8907c0]  animate-spin rounded-full  customShadow"></div>
                        <h1
                            data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom"
                            data-aos-duration="1000"
                            className=" relative right-10 text-white z-10 md:text-5xl text-2xl font-bold  ">Certifications</h1>
                    </div>
                </div>

                <div className="pt-10">
                    <Marquee
                        pauseOnHover={true}
                    >
                        <ol className="flex gap-5 mr-5">
                            {
                                portfolioData?.certifications?.map((data, index) => {
                                    return (
                                        <li key={index}>
                                            <LazyLoader>
                                                <img className="object-fill h-52 lg:h-96" src={data?.image}
                                                     alt={data?.title}/>
                                            </LazyLoader>
                                        </li>
                                    )
                                })
                            }
                        </ol>
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default Certifications;