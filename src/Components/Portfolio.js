import React from 'react';
import Modals from './Modals';
import portfolioData from "../data/portfolioData";


const Portfolio = () => {
    // const [showModal, setShowModal] = useState(false);


    return (
        <section id="portfolio" className=' relative w-screen  bg-neutral-800 py-10 px-5'>
            <div className="absolute inset-0    blur-[1000px]  w" style={{ background: "linear-gradient(-200.89deg, rgb(123, 0, 247) 5.73%, rgba(95, 17, 189, 0.37) 15.74%, rgba(82, 10, 94, 0.39) 56.49%, rgba(197, 68, 255, 0.58) 115.91%)" }}></div>



            <div className="container mx-auto">
                <div className="flex justify-center">
                    <div className="relative  w-[55px] h-[55px] bg-gradient-to-r from-orange-600 to-amber-400 rounded-full right-24 customShadow"></div>
                    <h1 className="text-white z-10 text-[50px] font-bold font-['Roboto'] absolute">Portfolio</h1>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-2 mt-10">

                    {
                        portfolioData?.map(data=>
                           data?.id?
                               <div key={data?.id} onClick={() => document.getElementById(data?.id).showModal()}>
                                   <img className="  h-52 w-full  animate-pulse" src={data?.images?.[0]} alt="" />
                                   <Modals  data={data} />
                               </div>:null

                        )
                    }

                </div>
            </div>
        </section>
    );
};

export default Portfolio;