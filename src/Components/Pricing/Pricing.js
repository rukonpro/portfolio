import React from "react";
import OnClickSound from "../../Helpers/OnClickSound";
import portfolioData from "../../data/portfolioData";
const Pricing= () => {

    return (
        <section className='relative py-14 px-5 bg-gray-950 '>
            <div className='absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl  radial-gradient' ></div>
            <div className="relative max-w-[1200px] mx-auto text-gray-300 sm:px-4 md:px-8">
                <div className='max-w-xl mx-auto space-y-3 px-4 sm:text-center sm:px-0'>
                    <h1 className="bg-gradient-to-r from-[#9e31f7ff] to-[#344dedff] text-transparent bg-clip-text font-boldd"
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-center"
                        data-aos-duration="1000"
                    >
                        {portfolioData?.pricing?.title}
                    </h1>
                    <p className='bg-gradient-to-r from-[#9e31f7ff] to-[#344dedff] text-transparent bg-clip-text text-3xl font-semibold sm:text-4xl'
                       data-aos="fade-up"
                       data-aos-anchor-placement="center-center"
                       data-aos-duration="1000"
                    >
                        {portfolioData?.pricing?.subtitle}
                    </p>
                    <div className='max-w-xl'>
                        <p className="text-slate-300 tracking-[2px]"
                           data-aos="fade-up"
                           data-aos-anchor-placement="center-center"
                           data-aos-duration="1000"
                        >
                            {portfolioData?.pricing?.description}
                        </p>
                    </div>
                </div>
                <ol className='mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                    {
                        portfolioData?.pricing?.future?.map((item, index) =>{

                            return(
                                (
                                    <li key={index}
                                             className={`relative  mt-5  flex-1 flex flex-col hover:shadow-sky-500/20 shadow-2xl sm:mt-0 sm:rounded-xl sm:max-w-md    bg-gradient-to-t from-gray-950 to-[#3b056d]   rounded-lg  hover:border-orange-500 hover:bg-gradient-to-b   border-transparent `}
                                    >
                                        <div className="p-4 py-8 space-y-4 border-b border-gray-700  md:p-8">
                                            <h2 className='text-gray-200 font-medium tracking-[3px] '
                                                data-aos="fade-up"
                                                data-aos-anchor-placement="center-center"
                                                data-aos-duration="1000"
                                            >
                                                {item.name}
                                            </h2>
                                            <div className='text-orange-500 text-3xl font-semibold'
                                                 data-aos="fade-up"
                                                 data-aos-anchor-placement="center-center"
                                                 data-aos-duration="1000"
                                            >
                                                ${item.price} <span className="text-xl font-normal">/mo</span>
                                            </div>
                                            <p className="text-gray-400 tracking-[1px]"
                                               data-aos="fade-up"
                                               data-aos-anchor-placement="center-center"
                                               data-aos-duration="1000"
                                            >
                                                {item.desc}
                                            </p>

                                            <button
                                                onClick={() => {
                                                    OnClickSound("/keypress.mp3").catch()
                                                    document.getElementById("contactModal").showModal()
                                                }}
                                                className='px-3 py-3 rounded-lg w-full font-bold text-sm duration-150 text-white  bg-gradient-to-tr from-[#39056b] to-[#9a69fe] hover:bg-gradient-to-r active:bg-cyan-700 tracking-[3px]'
                                                data-aos="fade-up"
                                                data-aos-anchor-placement="center-center"
                                                data-aos-duration="1000"
                                            >
                                                Get Started
                                            </button>

                                        </div>
                                        <ul className='p-4 py-8 space-y-3 md:p-8'>
                                            {
                                                item.features.map((featureItem, idx) => (
                                                    <li key={idx} className='flex items-center gap-5'
                                                        data-aos="fade-up"
                                                        data-aos-anchor-placement="center-center"
                                                        data-aos-duration="1000"
                                                    >
                                                        <svg
                                                            xmlns='http://www.w3.org/2000/svg'
                                                            className={`h-5 w-5 ${item.isMostPop ? "text-cyan-600" : ""}`}
                                                            viewBox='0 0 20 20'
                                                            fill='currentColor'>
                                                            <path
                                                                fillRule='evenodd'
                                                                d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                                clipRule='evenodd'></path>
                                                        </svg>
                                                        <p className="tracking-[1px] "
                                                           data-aos="fade-up"
                                                           data-aos-anchor-placement="center-center"
                                                           data-aos-duration="1000"
                                                        >{featureItem}</p>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </li>
                                )
                            )
                        })
                    }
                </ol>
            </div>
        </section>
    );
};
export  default  Pricing;