import React from "react"


const Login = () => {

    return (
        <section id="contact" className=' relative bg-gray-900 h-screen py-10 '>
            <div className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg" style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>

            <div className='relative  z-10 container mx-auto  px-5'>

                <div className="flex justify-center">
                    <div className="flex px-8 ">
                        <div className="relative -inset-3   w-[55px] h-[55px] bg-gradient-to-r from-orange-600 to-amber-400 rounded-full customShadow" />
                        <h1 className="text-white z-10 md:text-5xl text-2xl font-bold font-['Roboto'] absolute">Login</h1>
                    </div>
                </div>


                <div className='py-10 '>
                    <div className='grid md:grid-cols-2 md:gap-2'>

                        <div className=" bg-gray-900 relative  md:p-5 mx-5 rounded-lg">
                            <div className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg" style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>
                            <div className="relative z-10">

                                <h1 className="text-white text-2xl font-bold font-['Roboto']">CONTACT INFO</h1>
                                <br />
                                <article className="text-white text-lg font-bold font-['Roboto'] text-justify">"Ready to bring your digital vision to life. Let's connect and discuss how I can elevate your online presence. Reach out for web development expertise in HTML, CSS, JavaScript, and more. Looking forward to collaborating with you!"</article>


                            </div>



                        </div>



                        <div className='grid grid-cols-2 md:gap-5 gap-y-3 gap-x-1  px-5 md:mt-0 mt-16  border rounded rounded-lg py-5'>

                            <input className=" col-span-2 px-2 px-5 py-2 w-full rounded-full  border bg-gray-800 text-white font-bold font-['Roboto'] "
                                type="email"
                                name="email"
                                id="email"
                                placeholder='example@gmail.com' />

                            <input className=" col-span-2 px-5 py-2 w-full rounded-full border bg-gray-800 text-white font-bold font-['Roboto'] "
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password" />

                            <div className='col-span-2 flex justify-center text-white font-bold font-["Roboto"] '>

                                <button type='submit' className=" w-full py-2  rounded-[86.50px] bg-gray-700 shadow-2xl shadow-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 "  >
                                    Login
                                </button>
                            </div>
                            <div className="col-span-2 flex justify-center ">
                                <p className="text-white text-xs">Are you not Registered? <span className="text-blue-500/80">Please Register</span></p>
                            </div>

                        </div>




                    </div>


                </div>
            </div>
        </section>
    )
}
export default Login;