import React from 'react';
import Carousel from "./Carousel";

const Modals = ({ data}) => {

    return (
        <dialog id={data?.id} className="modal">
            <div className="modal-box ">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-10">✕</button>
                </form>
              <div >
                  <Carousel images={data?.logo}/>
              </div>

                <div>
                    <h1>Project 1</h1>
                    <p>7712 Technology Tester jobs available on Indeed.com. Apply to Tester, Quality Assurance Tester, Penetration Tester and more!</p>
                    <p>
                        7712 Technology Tester jobs available on Indeed.com. Apply to Tester, Quality Assurance Tester, Penetration Tester and more!
                    </p>

                </div>
            </div>
        </dialog>
    )
};

export default Modals;