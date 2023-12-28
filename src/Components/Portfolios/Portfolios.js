import React from "react";
import Modals from "./Modals";
import portfolioData from "../../data/portfolioData";
import LazyLoader from "../../Helpers/LazyLoader";
import OnClickSound from "../../Helpers/OnClickSound";

const Portfolios = () => {
  return (
    <section
      id="portfolio"
      className="relative  bg-[#0e0e36] py-10 px-5 overflow-hidden"
    >
      <div
        className="absolute  inset-0  blur-[118px] radial-gradient"
      ></div>

      <div className="relative z-10 container mx-auto">
        <div className="flex justify-center">
          <div
              className="relative  w-[55px] h-[55px] bg-gradient-to-tl from-[#17113a] to-[#8907c0]  animate-spin  rounded-full right-28 customShadow"></div>
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
            className="grid grid-cols-1 md:grid-cols-2 items-center  gap-5 pt-24 pb-10">
          {portfolioData?.portfolios?.future.map((data,index) =>
              data?.id ? (
                  <div
                      data-aos="fade-up"
                      data-aos-anchor-placement="center-bottom"
                      data-aos-duration="1000"
                      key={data?.id}
                      onClick={() => document.getElementById(data?.id).showModal()}
                      className="bg-[#0d1247] hover:bg-[#280f5f] h-full flex items-center py-[16px] px-[32px] font-[400] rounded-2xl "
                  >
                    <LazyLoader>
                      <div className="grid grid-cols-3 gap-5 items-center">

                        <div className="col-span-1">
                          <h1 className="text-[24px] text-white lg:text-[40px]">{data?.title.split(" ")[0].slice(0,30)}</h1>
                        </div>
                        <div className="col-span-2">
                          <img
                              onClick={() => OnClickSound("/keypress.mp3")}
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
        <div className="flex justify-center">
          <button type="button"
                  className="font-bold border py-2 px-5 rounded-lg hover:bg-[#350b70] shadow-2xl shadow-fuchsia-300 active:shadow-xl active:shadow-fuchsia-100/30">
            ALl Project
          </button>
        </div>


      </div>
    </section>
  );
};

export default Portfolios;
