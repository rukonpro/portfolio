import React from 'react';
import AddressIcon from "../Images/addressIcon.png";
import EmailIcon from "../Images/email-icon.png";
import PhoneIcon from "../Images/phone-icon.png";
import SkypeIcon from "../Images/skype-icon.png";
import LinkdinIcon from "../Images/linkedin-square-icon.svg";
const Contact = () => {
    return (
        <section id="contact" className='relative bg-neutral-800 py-10 '>
            <div className="absolute inset-0    blur-[1000px]  w" style={{ background: "linear-gradient(190.89deg, rgb(123, 0, 247) 5.73%, rgba(95, 17, 189, 0.37) 15.74%, rgba(82, 10, 94, 0.39) 56.49%, rgba(197, 68, 255, 0.58) 115.91%)" }}></div>
            <div className='container mx-auto '>
                <div className="flex justify-start">
                    <div className="relative -inset-3   w-[55px] h-[55px] bg-gradient-to-r from-orange-600 to-amber-400 rounded-full customShadow" />
                    <h1 className="text-white z-10 text-5xl font-bold font-['Roboto'] absolute">GET IN TOUCH</h1>
                </div>


                <div className='pt-24 '>
                    <div className='grid md:grid-cols-2 md:gap-2'>

                        <div className='grid grid-cols-2 md:gap-5 md:pb-0 pb-16'>

                            <div className="m-4 p-[1px] rounded-full  bg-gradient-to-r from-orange-600 via-red-400 to-amber-400  shadow-md shadow-amber-500/30">
                                <input className=" px-2 py-2 w-full rounded-full focus:outline-none bg-neutral-800 text-white font-bold font-['Roboto'] "
                                    type="text"
                                    name="fname"
                                    id="fname"
                                    placeholder='Firs Name' />
                            </div>
                            <div className="m-4 p-[1px] rounded-full  bg-gradient-to-r from-orange-600 via-red-400 to-amber-400  shadow-md shadow-amber-500/30">
                                <input className=" px-2 py-2 w-full rounded-full focus:outline-none bg-neutral-800 text-white font-bold font-['Roboto'] "
                                    type="text"
                                    name="lname"
                                    id="lname"
                                    placeholder='Last Name' />
                            </div>
                            <div className="col-span-2 m-4 p-[1px] rounded-full  bg-gradient-to-r from-orange-600 via-red-400 to-amber-400  shadow-md shadow-amber-500/30">
                                <input className=" px-2 py-2 w-full rounded-full focus:outline-none bg-neutral-800 text-white font-bold font-['Roboto'] "
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder='example@gmail.com' />
                            </div>
                            <div className="col-span-2 m-4 p-[1px] rounded-md   bg-gradient-to-r from-orange-600 via-red-400 to-amber-400  shadow-md shadow-amber-500/30">
                                <textarea className=" px-2 py-2 w-full rounded-md h-48 focus:outline-none bg-neutral-800 text-white font-bold font-['Roboto'] "
                                    type="text"
                                    name="massage"
                                    id="email"
                                    placeholder='Your massage' />
                            </div>

                            <div className='col-span-2 flex justify-center text-white font-bold font-["Roboto"] '>

                                <button type='submit' className="w-[167px] h-[49px] bg-gradient-to-r from-orange-600/90 to-amber-400 rounded-[86.50px] customShadow" >
                                    Send
                                </button>
                            </div>
                        </div>


                        <div className=" relative bg-gradient-to-bl from-violet-950/90 from-5%  via-slate-900/90 via-60% to-rose-950/90 rounded-[7px] p-5 mx-5">
                            <div className="absolute inset-0    blur-[1000px]  w" style={{ background: "linear-gradient(106.89deg, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%,rgba(192, 132, 252, 0.11) 5.73%,  rgba(79, 70, 229, 0.4) 115.91%)" }}></div>

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
        </section>
    );
};

export default Contact;