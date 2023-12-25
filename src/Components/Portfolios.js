import React from "react";
import Modals from "./Modals";
import portfolioData from "../data/portfolioData";
import LazyLoader from "../utilitis/LazyLoader";
import OnClickSound from "../utilitis/OnClickSound";

const Portfolios = () => {
  return (
    <section
      id="portfolio"
      className="relative  bg-[#0e0e36] py-10 px-5 overflow-hidden"
    >
      <div
        className="absolute  inset-0  blur-[118px] radial-gradient"
      /* style={{
         background:
           "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
       }}*/
      ></div>

      <div className="relative z-10 container mx-auto">
        <div className="flex justify-center">
          <div className="relative  w-[55px] h-[55px] bg-gradient-to-tl from-[#17113a] to-[#8907c0]  animate-spin  rounded-full right-28 customShadow"></div>
          <h1
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="2000"
              className="text-white z-10 md:text-5xl text-2xl font-bold font-['Roboto'] absolute tracking-[4px]">
            {portfolioData?.portfolios?.title}
          </h1>
        </div>
        <div className="flex justify-center  mt-10">
          <p
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="2000"
              className="max-w-4xl  font-bold font-['Roboto'] text-base text-slate-400 tracking-[2px] md:text-center text-justify">
            {portfolioData?.portfolios?.description}
          </p>
        </div>
        <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="2000"
            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-2 my-24">
          {portfolioData?.portfolios?.future.map((data) =>
            data?.id ? (
              <div
                key={data?.id}
                onClick={() => document.getElementById(data?.id).showModal()}
              >
                <LazyLoader>
                  <img
                      onClick={()=>OnClickSound("/keypress.mp3")}
                      data-aos="flip-left"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"
                    className=" w-full h-full cursor-pointer "
                    src={data?.images?.[0]}
                    height="100%"
                    width="100%"
                    alt="protfoliocover"
                    loading="lazy"
                  />
                </LazyLoader>
                <Modals data={data} />
              </div>
            ) : null
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolios;
