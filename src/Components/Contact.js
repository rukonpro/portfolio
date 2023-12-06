import React from 'react';
import AddressIcon from "../Images/addressIcon.png";
import EmailIcon from "../Images/email-icon.png";
import PhoneIcon from "../Images/phone-icon.png";
import SkypeIcon from "../Images/skype-icon.png";
import LinkdinIcon from "../Images/linkedin-square-icon.svg";
const Contact = () => {
    return (
        <section id="contact" className=' relative bg-gray-900 py-10 '>
            <div className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg" style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>

            <div className='relative  z-10 container mx-auto '>
                <div className="flex px-8 ">
                    <div className="relative -inset-3   w-[55px] h-[55px] bg-gradient-to-r from-orange-600 to-amber-400 rounded-full customShadow" />
                    <h1 className="text-white z-10 md:text-5xl text-2xl font-bold font-['Roboto'] absolute">GET IN TOUCH</h1>
                </div>


                <div className='md:pt-24 pt-10 '>
                    <div className='grid md:grid-cols-2 md:gap-2'>

                        <div className='grid grid-cols-2 md:gap-5 gap-y-3 gap-x-1 md:pb-0 px-5 pb-16'>

                            <input className=" px-5 py-2 w-full rounded-full border bg-gray-800 text-white font-bold font-['Roboto'] "
                                   type="text"
                                   name="fname"
                                   id="fname"
                                   placeholder='Firs Name' />
                            <input className=" px-5 py-2 w-full rounded-full  border bg-gray-800 text-white font-bold font-['Roboto'] "
                                   type="text"
                                   name="lname"
                                   id="lname"
                                   placeholder='Last Name' />
                            <input className=" col-span-2 px-2 px-5 py-2 w-full rounded-full  border bg-gray-800 text-white font-bold font-['Roboto'] "
                                   type="email"
                                   name="email"
                                   id="email"
                                   placeholder='example@gmail.com' />
                            <textarea className=" col-span-2 px-2 py-2 w-full rounded-md h-48  border bg-gray-800 text-white font-bold font-['Roboto'] "
                                      name="massage"
                                      id="email"
                                      placeholder='Your massage' />
                            <div className='col-span-2 flex justify-center text-white font-bold font-["Roboto"] '>

                                <button type='submit' className="w-[167px] h-[49px]  rounded-[86.50px] bg-gray-700 shadow-2xl shadow-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 "  >
                                    Send
                                </button>
                            </div>
                        </div>


                        <div className=" bg-gray-900 relative  p-5 mx-5">
                            <div className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg" style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>
                            <div className="relative z-10">

                                <h1 className="text-white text-2xl font-bold font-['Roboto']">CONTACT INFO</h1>
                                <br />
                                <article  className="text-white text-lg font-bold font-['Roboto'] text-justify">"Ready to bring your digital vision to life. Let's connect and discuss how I can elevate your online presence. Reach out for web development expertise in HTML, CSS, JavaScript, and more. Looking forward to collaborating with you!"</article>
                                <br />
                                <address className="text-white text-sm font-bold font-['Roboto'] flex gap-2 items-center">
                                    <img src={AddressIcon} alt="AddressIcon" className='h-6 w-6' />
                                    <span>Address: Sunamganj, Sylhet, Bangladesh.</span
                                    ></address>
                                <br />
                                <h5 className="text-white text-sm font-bold font-['Roboto'] flex gap-2 items-center">
                                    <img src={EmailIcon} alt="EmailIcon" className='h-6 w-6' />Email:
                                    <span>
                                                                <a className="text-white text-sm font-bold font-['Roboto']" href="mailto:rukon.js@gmail.com">rukon.js@gmail.com</a>
                                                            </span>
                                </h5>

                                <br />
                                <h5 className="text-white text-sm font-bold font-['Roboto'] flex items-center gap-2">
                                    <img src={PhoneIcon} alt="PhoneIcon" className='h-6 w-6' />Phone:
                                    <span>
                                                                <a className="text-white text-sm font-bold font-['Roboto']" href="tel:+8801765459224">+8801765459224</a>
                                                            </span>
                                </h5>
                                <br />
                                <h5 className="text-white text-sm font-bold font-['Roboto'] flex items-center gap-2">
                                    <img src={SkypeIcon} alt="SkypeIcon" className='h-6 w-6' /> Skype:  <span>
                                                                <a className="text-white text-sm font-bold font-['Roboto']" href="https://join.skype.com/invite/yXu1Kxuk8hZF?fbclid=IwAR0_F5FZQG1sYISeOdnT_dB3PTJqS1bxp4OOI590YbfpZE9gGmw4rs_pYYU"> live:.cid.adbc52c0d5ebc624</a>
                                                            </span>

                                </h5>
                                <br />
                                <h5 className="text-white text-sm font-bold font-['Roboto'] flex items-center gap-2">
                                    <img src={LinkdinIcon} alt="SkypeIcon" className='h-6 w-6' /> Linkdin:  <span>
                                                                <a className="text-white text-sm font-bold font-['Roboto']" href="https://join.skype.com/invite/yXu1Kxuk8hZF?fbclid=IwAR0_F5FZQG1sYISeOdnT_dB3PTJqS1bxp4OOI590YbfpZE9gGmw4rs_pYYU"> Rukon Uddin</a>
                                                            </span>

                                </h5>
                            </div>



                        </div>

                    </div>


                </div>
            </div>
        </section>
    );
};

export default Contact;