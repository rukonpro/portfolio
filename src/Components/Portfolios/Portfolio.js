import React from 'react';
import Carousel from "./Carousel";
import Github from "../../Images/github.png";
import Live from "../../Images/live.png";
import Global from "../../Images/global.png";
import LazyLoader from "../../Helpers/LazyLoader";
import OnClickSound from "../../Helpers/OnClickSound";
const Portfolio = ({ data }) => {
    return (
        <div className="text-[#fccdff]">
            <div>
               <LazyLoader>
                   <Carousel images={data?.images} />
               </LazyLoader>
            </div>

            <div>
                <div className='flex  justify-between flex-wrap pb-4'>
                    <a href={data?.links?.liveLink} aria-label={data?.title} target="_blank" rel="noopener noreferrer">
                        <h1 className='text-lg font-semibold border-b border-purple-500 bg-gradient-to-r from-[#9e31f7ff] to-[#344dedff] text-transparent bg-clip-text  mt-5'>{data?.title}</h1>
                    </a>

                    <ol className='flex gap-4 mt-5'>
                        {data?.links?.liveLink && <li>
                            <a
                                href={data?.links?.liveLink}
                                onClick={()=>OnClickSound("/keypress.mp3")}
                                target="_blank"
                                aria-label={data?.title}
                                rel="noopener noreferrer"
                                className='text-[#454545]'
                            >
                                <LazyLoader>
                                    <img className='h-10 w-10' src={Live || undefined} height="100%" width="100%"
                                         alt="Live" loading="lazy"/>
                                </LazyLoader>

                            </a>
                        </li>}
                        {data?.links?.fontEndCode && <li>
                            <a
                               onClick={()=>OnClickSound("/keypress.mp3")}
                               href={data?.links?.fontEndCode}
                               aria-label={data?.title}
                               target="_blank"
                               rel="noopener noreferrer">
                                <LazyLoader>
                                    <img className='h-10 w-10' src={Github || undefined} height="100%" width="100%"
                                         alt="Github" loading="lazy"/>
                                </LazyLoader>
                            </a>

                        </li>}
                        {data?.links?.backEndCode && <li>
                            <a
                               onClick={()=>OnClickSound("/keypress.mp3")}
                               href={data?.links?.backEndCode}
                               aria-label={data?.title} target="_blank"
                               rel="noopener noreferrer">
                                <LazyLoader>
                                    <img className='h-10 w-10' src={Global || undefined} height="100%" width="100%"
                                         alt="Global" loading="lazy"/>
                                </LazyLoader>
                            </a>
                        </li>}
                    </ol>
                </div>


                <article className='text-justify mb-3'>
                    <span className='font-bold   underline underline-offset-[5px]'>Description: </span>
                    <span className='text-base '>{data?.description}</span>
                </article>


                <h1 className='font-bold mb-3   underline underline-offset-[5px]'>Technology:</h1>

                <div className='border rounded-md p-2'>

                    <ul className='flex flex-wrap justify-center'>
                        {data?.technology?.map((t, i) =>
                            <li key={i}
                                className='px-5 py-1 m-1 border bg-gradient-to-br from-inherit to-transparent rounded-full text-sm font-bold text-white'>{t}</li>
                        )}
                    </ul>
                </div>


                <br />


                <h1 className='font-bold   underline underline-offset-[5px]'>Points:</h1>
                <ol className='list-disc'>
                    {
                        data.point.map((p, i) =>

                            <li key={i} className=' text-justify mt-2'>{p}</li>
                        )
                    }
                </ol>

            </div>
        </div>
    );
};

export default Portfolio;