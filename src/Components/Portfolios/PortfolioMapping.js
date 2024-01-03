import React from 'react';
import portfolioData from "../../data/portfolioData";
import LazyLoader from "../../Helpers/LazyLoader";
import OnClickSound from "../../Helpers/OnClickSound";
import Modals from "./Modals";

const PortfolioMapping = () => {
    return (
        <React.Fragment>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center  gap-5  pb-10">
                {portfolioData?.portfolios?.future.map((data, index) =>
                    data?.id ? (
                        <div
                            data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom"
                            data-aos-duration="1000"
                            key={index}
                            onClick={() => document.getElementById(data?.id).showModal()}
                            className=" bg-gradient-to-r from-[#0d1247]/30 to-gray-900/30 hover:bg-[#280f5f] h-full flex items-center py-[16px] px-[32px] font-[400] rounded-2xl "
                        >
                            <LazyLoader>
                                <div className="grid grid-cols-3 gap-5 items-center">

                                    <div className="col-span-1">
                                        <h1 className="text-[24px] text-white lg:text-[40px]">{data?.title.split(" ")[0].slice(0, 30)}</h1>
                                    </div>
                                    <div className="col-span-2">
                                        <img
                                            onClick={() => OnClickSound("/Music/keypress.mp3")}
                                            className=" w-full cursor-pointer  rounded-2xl hover:transform  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-x-100  duration-300"
                                            src={data?.images?.[0]}
                                            height="100%"
                                            width="100%"
                                            alt="protfoliocover"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </LazyLoader>
                            <Modals data={data}/>
                        </div>
                    ) : null
                )}

            </div>
        </React.Fragment>
    );
};

export default PortfolioMapping;