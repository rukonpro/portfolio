import React from 'react';

const Modals = ({ showModal, setShowModal }) => {

    return showModal ? (

        <div
            className="fixed inset-0 z-50 overflow-y-auto"

        >
            <div onClick={() => setShowModal(false)} className="fixed inset-0 w-full h-full bg-black opacity-40"></div>

            <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative p-4 mx-auto headerBg  rounded-md shadow-lg">
                    <div className="mt-3 sm:flex bg-gradient-to-tl backdrop-blur-3xl bg-slate-900/50 backdrop-opacity-70 backdrop-hue-rotate-15">
                        <div className="flex items-center justify-center flex-none w-12 h-12 mx-auto bg-red-100 rounded-full">
                            {/* SVG icon */}
                        </div>

                        <div className="mt-2 text-center sm:ml-4 sm:text-left">
                            <h4 className="text-lg font-medium text-gray-800">
                                Delete account?
                            </h4>

                            <p className="mt-2 text-sm leading-relaxed text-gray-500">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua.
                            </p>

                            <div className="items-center gap-2 mt-3 sm:flex">
                                <button
                                    className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                                    onClick={() => setShowModal(false)}
                                >
                                    Delete
                                </button>

                                <button
                                    className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                                    onClick={() => setShowModal(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    ) : null
};

export default Modals;