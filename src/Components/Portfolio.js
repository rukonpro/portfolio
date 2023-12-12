import React from 'react';
import Modals from './Modals';
import portfolioData from "../data/portfolioData";


const Portfolio = () => {
    return (
        <section id="portfolio" className='relative bg-[#090718] py-10 px-5 overflow-hidden'>
            <div className="absolute inset-0 m-auto   blur-[1000px] "
                 style={{
                     background: "linear-gradient(200.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233," +
                         " 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)"
                 }}></div>
            <div className="relative z-10 container mx-auto">
                <div className="flex justify-center">
                    <div
                        className="relative  w-[55px] h-[55px] bg-gradient-to-r from-orange-600 to-amber-400 rounded-full right-24 customShadow"></div>
                    <h1 className="text-white z-10 md:text-5xl text-2xl font-bold font-['Roboto'] absolute">Portfolio</h1>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-2 mt-10">

                    {
                        portfolioData?.portfolios?.map(data =>
                            data?.id ?
                                <div key={data?.id} onClick={() => document.getElementById(data?.id).showModal()}>
                                    <img className=" w-full h-full cursor-pointer " src={data?.images?.[0]} alt=""/>
                                    <Modals data={data}/>
                                </div> : null
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Portfolio;