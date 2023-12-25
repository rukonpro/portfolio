import React from 'react';
import Portfolio from "./Portfolio";

const Modals = ({ data }) => {

    return (
        <dialog id={data?.id} className="modal">
            <div className="modal-box w-11/12 max-w-5xl text-white bg-gradient-to-tl to-[#060212] via-[#021a30] from-[#410b42] ">

                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button
                        className="btn btn-sm btn-circle  btn-ghost absolute right-2 top-2 text-2xl text-red-500 z-10 ">✕
                    </button>
                </form>

                <Portfolio data={data} />
            </div>
        </dialog>
    )
};

export default Modals;