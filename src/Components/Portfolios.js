import React from "react";
import Modals from "./Modals";
import portfolioData from "../data/portfolioData";
import LazyImageLoader from "../utilitis/LazyImageLoader";

const Portfolios = () => {
  return (
    <section
      id="portfolio"
      className="relative  bg-[#0e0e36] py-10 px-5 overflow-hidden"
    >
      <div
        className="absolute custom-animate-pulse inset-1/4  max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
        style={{
          background:
            "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
        }}
      ></div>

      <div className="relative z-10 container mx-auto">
        <div className="flex justify-center">
          <div className="relative  w-[55px] h-[55px] bg-gradient-to-tl from-[#816aff] to-[#d066fd] rounded-full right-24 customShadow"></div>
          <h1 className="text-white z-10 md:text-5xl text-2xl font-bold font-['Roboto'] absolute tracking-[4px]">
            Portfolio
          </h1>
        </div>
        <div className="flex justify-center  mt-10">
          <p className="max-w-4xl  font-bold font-['Roboto'] text-base text-slate-400 tracking-[2px] md:text-center text-justify">
            Welcome to my portfolio! As a MERN stack developer, I specialize in
            crafting dynamic and efficient web applications. Below are some key
            projects that showcase my skills and passion for creating seamless
            user experiences.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-2 my-24">
          {portfolioData?.portfolios?.map((data) =>
            data?.id ? (
              <div
                key={data?.id}
                onClick={() => document.getElementById(data?.id).showModal()}
              >
                <LazyImageLoader>
                  <img
                    className=" w-full h-full cursor-pointer "
                    src={data?.images?.[0]}
                    height="100%"
                    width="100%"
                    alt="protfoliocover"
                    loading="lazy"
                  />
                </LazyImageLoader>
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
