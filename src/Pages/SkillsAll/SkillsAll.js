import React, {useEffect} from 'react';
import Navigation from "../../Components/Navigatons/Navigation";
import portfolioData from "../../data/portfolioData";
import {useParams} from "react-router-dom";
import SkillsCard from "../../Components/Skills/SkillsCard";
import ScrollingBottomToTop from "../../Helpers/ScrollingBottomToTop";
import BackButton from "../../Helpers/BackButton";
const SkillsAll = () => {

    const {id}=useParams();

    const skills=portfolioData?.skills?.find(data=>data?.title===id);

    useEffect(() => {
        ScrollingBottomToTop()
    }, []);

    return (
        <div className=" bg-[#0e0e36] min-h-screen overflow-hidden ">
            <Navigation/>
            <div className="absolute custom-animate-pulse inset-0 blur-[118px] radial-gradient"></div>

            <div className="max-w-[1200px] relative  z-10 mx-auto px-5 py-20">
                <div className="flex justify-between items-center py-3"
                     data-aos="fade-up"
                     data-aos-anchor-placement="bottom-bottom"
                     data-aos-duration="1000"
                >
                    <h1 className={`text-white text-xl  font-bold  pt-15 `}>All {id}</h1>
                   <BackButton/>
                </div>
                <div>

                    <ol className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  gap-5">
                        {
                            skills?.data?.map((data, index) => {
                                return (
                                    <li key={index}
                                        data-aos="fade-up"
                                        data-aos-anchor-placement="bottom-bottom"
                                        data-aos-duration="1000"
                                    >
                                        <SkillsCard data={data}/>
                                    </li>
                                )
                            })
                        }
                    </ol>

                    <div className="flex justify-center py-3">
                        <BackButton/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SkillsAll;