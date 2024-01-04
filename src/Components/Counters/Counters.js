import React from 'react';
import CountUp from 'react-countup';
import { InView } from 'react-intersection-observer';
const Counters = () => {



    const counter=[
        {
            title:"Year Experience",
            end:3,
            start:0,
        },{
            title:"Complete Projects",
            end:50,
            start:0,
        },{
            title:"Github Contributions",
            end:100,
            start:0,
        },
    ]

    return (
        <div className="relative  overflow-hidden">
            <div className="absolute -inset-full bg-[#0e0e36]/85 "></div>
            <div className="relative z-10">
                <div className="w-full max-w-[1200px] mx-auto py-28  px-5">
                    <div className="grid grid-cols-3 gap-4 md:gap-5 items-center justify-center">
                        {counter?.map((counter, index) => (
                            <InView key={index} trackVisibility rootMargin="0px 0px" delay={100}>
                                {({inView, ref}) => (
                                    <div
                                        ref={ref}
style={{
    boxShadow:"0 0 5px 0 #a855f7",
}}
                                        className="border border-purple-500 rounded-xl p-3 md:p-5 text-center bg-gradient-to-tr from-[#9c69fe]/20 to-[#260b4b] h-full"
                                    >
                                        <p
                                            style={{
                                             textShadow:"rgb(167, 92, 238) -0.5px 0px, rgb(131, 21, 236) -1px 0px," +
                                                 " rgb(131, 28, 230) -1.5px 0px, rgb(134, 22, 242) -2px 0px, rgb(121, 0, 236) -2.5px 0px",
                                            }}
                                            className=" font-serif font-extrabold text-3xl sm:text-5xl md:text-7xl lg:text-9xl md:p-5 bg-gradient-to-r from-[#816aff] to-[#d066fd] text-transparent bg-clip-text">
                                            {counter?.title==="Year Experience"?0:""}<CountUp end={inView ? counter?.end : 0} start={counter?.start}/>
                                            +
                                        </p>
                                        <h1 className="md:text-3xl sm:text-2xl text-sm text-[#fccdff]">{counter?.title}</h1>
                                    </div>
                                )}
                            </InView>
                        ))}
                    </div>
                </div>
            </div>

            <video  className="blur-[1px] object-cover  w-full h-full fixed top-0 left-0 z-[-1] overflow-hidden" autoPlay={true} muted loop>
                <source src="/Music/codingVideo.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default Counters;