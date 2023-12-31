import React, {useEffect} from 'react';
import Navigation from "../../Components/Navigatons/Navigation";
import portfolioData from "../../data/portfolioData";
import {useParams} from "react-router-dom";
import SkillsCard from "../../Components/Skills/SkillsCard";
import Arrow from "../../Images/arrow.png"
const SkillsAll = () => {

    const {id}=useParams();

    const skills=portfolioData?.skills?.find(data=>data?.title===id);


    useEffect(() => {
        if(skills?.descriptions){
            document.getElementById("skillsDescriptions").innerHTML=skills?.descriptions;
        }
    }, [skills?.descriptions]);

    return (
        <div>

            <Navigation/>

            <section id="skills"
                     className="   overflow-y-auto relative flex justify-center items-center bg-[#0e0e36] py-20 px-5">
                <div className="absolute custom-animate-pulse inset-0 blur-[118px] radial-gradient"></div>
                <div className="max-w-[1200px] relative z-10 mx-auto">
                    <div className="flex justify-between items-center py-3">
                        <h1 className={`text-[#f8cafb] text-3xl  font-bold font-[Roboto] pt-15 pb-3`}>{id}</h1>
                        <button type="button"
                                onClick={() => window.history.back()}
                        >
                            <img className="h-12" src={Arrow || undefined} alt=""/>
                        </button>
                    </div>


                    <div>
                        {skills?.descriptions&&<p id="skillsDescriptions" className="pb-10"></p>}

                    </div>
                    <ol className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  gap-5">
                        {
                            skills?.data?.map((data, index) => {
                                return (
                                    <li key={index}>
                                        <SkillsCard data={data}/>
                                    </li>
                                )
                            })
                        }
                    </ol>

                    <div className="flex justify-center py-3">
                        <button type="button"
                                onClick={() => window.history.back()}
                        >
                            <img className="h-12" src={Arrow || undefined} alt=""/>
                        </button>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default SkillsAll;