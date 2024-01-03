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
        <div className="relative overflow-hidden">
            <div className="absolute -inset-full bg-[#0e0e36]/85 "></div>
            <div id="CounterContent">
                <div className="w-full max-w-[1200px] mx-auto md:py-24 sm:px-5">
                    <div className="grid grid-cols-3 gap-2 md:gap-5 items-center justify-center">
                        {counter?.map((counter, index) => (
                            <InView key={index} trackVisibility rootMargin="0px 0px" delay={100}>
                                {({inView, ref}) => (
                                    <div
                                        ref={ref}
                                        className="border border-purple-500 rounded-xl p-3 md:p-5 text-center bg-gradient-to-tr from-[#9c69fe]/20 to-[#260b4b] h-full"
                                    >
                                        <p className="text-3xl md:text-6xl md:p-5 bg-gradient-to-r from-[#816aff] to-[#d066fd] text-transparent bg-clip-text">
                                            <CountUp end={inView ? counter?.end : 0} start={counter?.start}/>
                                            +
                                        </p>
                                        <h1 className="md:text-3xl text-sm text-[#fccdff]">{counter?.title}</h1>
                                    </div>
                                )}
                            </InView>
                        ))}
                    </div>
                </div>
            </div>

            <video id="video-background" className="blur-[1px]" autoPlay={true} muted loop>
                <source src="/Music/codingVideo.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default Counters;