import React from "react";
const Pricing= () => {

    const plans = [
        {
            name: "Hourly Rate",
            desc: "My standard hourly rate for MERN stack development is 1200$. This includes:",
            price: 1200,
            isMostPop: true,
            features: [
                "Full-stack development using MongoDB, Express.js, React, and Node.js.",
                "Custom feature development and enhancements.",
                "Code optimization and performance tuning.",
                "Ongoing support and maintenance.",
            ],
        },
        {
            name: "Project-Based Pricing",
            desc: "For larger projects, I am open to discussing project-based pricing. This may include:",
            price: 899,
            isMostPop: false,
            features: [
                "In-depth project analysis and planning.",
                "Fixed pricing for the entire project, providing cost predictability.",
                "Milestone-based payments to ensure progress alignment.",
            ],
        },
        {
            name: "Consulting and Advisory",
            desc: "If you need guidance on an existing MERN stack project or want to explore the feasibility of a" +
                " new venture, I offer consulting services at 1999$. This includes:",
            price: 1999,
            isMostPop: false,
            features: [
                "Code reviews and optimization recommendations.",
                "Technology stack assessment and recommendations.",
                "Strategic planning for scalable and maintainable solutions.",

            ],

        },

    ];

    return (
        <section className='relative py-14 bg-gray-950'>
            <div className='absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]' style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>
            <div className="relative max-w-screen-xl mx-auto text-gray-300 sm:px-4 md:px-8">
                <div className='max-w-xl mx-auto space-y-3 px-4 sm:text-center sm:px-0'>
                    <h1 className="text-cyan-400 font-boldd">
                        Pricing
                    </h1>
                    <p className='text-white text-3xl font-semibold sm:text-4xl'>
                        Pay as you grow
                    </p>
                    <div className='max-w-xl'>
                        <p className="text-slate-300 tracking-[2px]">
                            I offer comprehensive MERN stack development expertise to bring your projects to life. My pricing structure is designed to provide flexibility based on the scope and complexity of your needs.
                        </p>
                    </div>
                </div>
                <div className='mt-16 justify-center gap-4 sm:flex px-5'>
                    {
                        plans.map((item, idx) => (
                            <div key={idx} className={`relative  mt-5  flex-1 flex flex-col hover:shadow-sky-500/20 shadow-2xl sm:mt-0 sm:rounded-xl sm:max-w-md    bg-gradient-to-t from-gray-950 to-[#33064e]    rounded-lg  hover:border-orange-500   border-transparent `} >
                                <div className="p-4 py-8 space-y-4 border-b border-gray-700  md:p-8">
                                    <h2 className='text-gray-200 font-medium tracking-[3px]'>
                                        {item.name}
                                    </h2>
                                    <div className='text-orange-500 text-3xl font-semibold'>
                                        ${item.price} <span className="text-xl font-normal">/mo</span>
                                    </div>
                                    <p className="text-gray-400 tracking-[1px]">
                                        {item.desc}
                                    </p>
                                    <button className='px-3 py-3 rounded-lg w-full font-bold text-sm duration-150 text-white  bg-gradient-to-tr from-gray-950 to-sky-700  hover:bg-gradient-to-r active:bg-cyan-700 tracking-[3px]'>
                                        Get Started
                                    </button>
                                </div>
                                <ul className='p-4 py-8 space-y-3 md:p-8'>
                                    {
                                        item.features.map((featureItem, idx) => (
                                            <li key={idx} className='flex items-center gap-5'>
                                                <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    className={`h-5 w-5 ${item.isMostPop ? "text-cyan-600" : ""}`}
                                                    viewBox='0 0 20 20'
                                                    fill='currentColor'>
                                                    <path
                                                        fillRule='evenodd'
                                                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                        clipRule='evenodd'></path>
                                                </svg>
                                                <p className="tracking-[1px] ">{featureItem}</p>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};
export  default  Pricing;