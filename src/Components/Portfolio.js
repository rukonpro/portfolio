import React from 'react';
import Carousel from "./Carousel";
import Github from "../Images/github.png";
import Live from "../Images/live.png";
import Global from "../Images/global.png";
const Portfolio = ({ data }) => {
    return (
        <div>
            <div>
                <Carousel images={data?.images} />
            </div>

            <div>
                <div className='flex  justify-between flex-wrap pb-4'>
                    <a href={data?.links?.liveLink} aria-label={data?.title} target="_blank" rel="noopener noreferrer">
                        <h1 className='text-lg font-semibold underline underline-offset-4  mt-5'>{data?.title}</h1>
                    </a>

                    <ol className='flex gap-4 mt-5'>
                        {data?.links?.liveLink && <li>
                            <a
                                href={data?.links?.liveLink}
                                target="_blank"
                                aria-label={data?.title}
                                rel="noopener noreferrer"
                                className='text-[#454545]'
                            >
                                <img className='h-10 w-10' src={Live || undefined} alt="Live" loading="lazy"/>

                            </a>
                        </li>}
                        {data?.links?.fontEndCode && <li>
                            <a href={data?.links?.fontEndCode}
                               aria-label={data?.title}
                               target="_blank"
                               rel="noopener noreferrer">
                                <img className='h-10 w-10' src={Github || undefined} alt="Github" loading="lazy"/>
                            </a>

                        </li>}
                        {data?.links?.backEndCode && <li>
                            <a href={data?.links?.backEndCode}
                               aria-label={data?.title} target="_blank"
                               rel="noopener noreferrer">
                                <img className='h-10 w-10' src={Global || undefined} alt="Global" loading="lazy" />
                            </a>
                        </li>}
                    </ol>
                </div>


                <article className='text-justify mb-3'>
                    <span className='font-bold'>Description: </span>
                    <span className='text-base'>{data?.description}</span>
                </article>


                <h1 className='font-bold mb-3'>Technology:</h1>

                <div className='border rounded-md p-2'>

                    <ul className='flex flex-wrap justify-center'>
                        {data?.technology?.map((t, i) =>
                            <li key={i}
                                className='px-5 py-1 m-1 border bg-gradient-to-br from-inherit to-transparent rounded-full text-sm font-bold text-white'>{t}</li>
                        )}
                    </ul>
                </div>


                <br />


                <h1 className='font-bold'>Points:</h1>
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