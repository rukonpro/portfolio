import React from 'react';
import OnClickSound from "../../Helpers/OnClickSound";
import LazyLoader from "../../Helpers/LazyLoader";
import SkillsCard from "./SkillsCard";
import {Link} from "react-router-dom";

const SkillsMapping = ({data}) => {
    return (
        <LazyLoader>
            <div>
                <h1 className={`text-[#f8cafb] text-3xl  font-bold font-[Roboto] pt-15 pb-3`}>{data?.title}</h1>
                <ol className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5">
                    {
                        data?.data?.slice(0, 4).map((data, index) => {
                            return (
                                <li
                                    key={index}
                                    id={data?.title + index + data?.logo + data?.color}
                                    onClick={() => OnClickSound("/keypress.mp3")}
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

                <div className="flex justify-center py-5">
                    <Link to={`all-skills/${data?.title}`}
                          data-aos="fade-up"
                          data-aos-anchor-placement="bottom-bottom"
                          data-aos-duration="1000"
                    >
                        <button type="button"
                                className="text-lg font-bold  w-64 border py-2 px-5 rounded-lg hover:bg-[#350b70] shadow-2xl shadow-fuchsia-300 active:shadow-md active:shadow-fuchsia-100/30">
                            All {data.title}
                        </button>
                    </Link>
                </div>
            </div>
        </LazyLoader>
    );
};

export default SkillsMapping;