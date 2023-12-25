import React  from 'react';
import OnClickSound from "../../Helpers/OnClickSound";
import Contact from "./Contact";

const ContactModal = () => {
    return (
        <dialog id="contactModal" className="modal ">

            <div className="modal-box p-0 shadow-2xl shadow-[#3f223a80] w-11/12 max-w-5xl text-white bg-gradient-to-tl to-[#060212] via-[#021a30] from-[#410b42] relative">
                <form method="dialog" className=" absolute z-20 right-0">
                    <button
                        onClick={() => OnClickSound("/keypress.mp3")}
                        className="btn btn-sm btn-circle btn-ghost  right-2 top-2 relative text-purple-500 text-3xl z-10 ">✕
                    </button>
                </form>

                <div className="relative z-10 ">
                   <Contact/>
                </div>
            </div>
        </dialog>
    );
};

export default ContactModal;