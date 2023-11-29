import React from 'react';
import Modals from './Modals';
import portfolioData from "../data/portfolioData";


const Portfolio = () => {
    // const [showModal, setShowModal] = useState(false);


    return (
        <section id="portfolio" className=' w-screen  bg-neutral-800 py-10 px-5'>



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
                                   <img className="  h-96 w-full  animate-pulse" src={data?.logo} alt="" />
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