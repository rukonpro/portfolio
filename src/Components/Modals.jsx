import React from 'react';
import Carousel from "./Carousel";
import Github from "../Images/github.png";
import Live from "../Images/live.png";
import Global from "../Images/global.png";

const Modals = ({ data }) => {

    return (
        <dialog id={data?.id} className="modal">
            <div className="modal-box text-white bg-gradient-to-tl to-[#060212] via-[#021a30] from-[#410b42] ">
                <form method="dialog" >
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-2xl text-red-500 z-10">✕</button>
                </form>
                <div >
                    <Carousel images={data?.images} />
                </div>

                <div>
                    <div className='flex  justify-between flex-wrap pb-4'>
                        <a href={data?.links?.liveLink} target="_blank" rel="noopener noreferrer">
                            <h1 className='text-lg font-semibold underline underline-offset-4  mt-5'>{data?.title}</h1>
                        </a>

                        <ol className='flex gap-4 mt-5'>
                            <li>
                                <a
                                    href={data?.links?.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='text-[#454545]'
                                >
                                    <img className='h-10 w-10' src={Live} alt="" />

                                </a>
                            </li>
                            <li>
                                <a href={data?.links?.fontEndCode} target="_blank" rel="noopener noreferrer">
                                    <img className='h-10 w-10' src={Github} alt="" />
                                </a>

                            </li>
                            <li>
                                <a href={data?.links?.fontEndCode} target="_blank" rel="noopener noreferrer">
                                    <img className='h-10 w-10' src={Global} alt="" />
                                </a>
                            </li>
                        </ol>
                    </div>



                    <article className='text-justify mb-3' >
                        <span className='font-bold'>Description: </span>
                        <span className='text-base'>{data?.description}</span>
                    </article>


                    <h1 className='font-bold mb-3'>Technology:</h1>

                    <div className='border rounded-md p-2'>

                        <ul className='flex flex-wrap justify-center'>
                            {data?.technology?.map(t =>
                                <li className='px-5 py-1 m-1 border bg-gradient-to-br from-inherit to-transparent rounded-full text-sm font-bold text-white'>{t}</li>
                            )}
                        </ul>
                    </div>


                    <br />

                    <h1 className='font-bold'>Points:</h1>
                    <ol className='list-disc'>
                        {
                            data.point.map((p) =>

                                <li className=' text-justify mt-2'>{p}</li>
                            )
                        }
                    </ol>

                </div>
            </div>
        </dialog>
    )
};

export default Modals;