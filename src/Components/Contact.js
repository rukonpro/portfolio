import React from 'react';
import AddressIcon from "../Images/location.png";
import EmailIcon from "../Images/gmail.png";
import PhoneIcon from "../Images/phone-call.png";
import SkypeIcon from "../Images/skype.png";
import LinkdinIcon from "../Images/linkedin.png";
import Whatsapp from "../Images/whatsapp.png";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import { useForm } from "react-hook-form";

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()


    const sendEmail = (data) => {


        const templateParams = {
            fullName: data.fname + " " + data.lname,
            email: data?.email,
            subject: data?.subject,
            massage: data?.massage,

        };




        emailjs.send('rukonpro_2lgvw3n', 'rukonpro_u2antxj', templateParams, "user_sMNanZ38ggdHIXPN6PNqZ")
            .then(function (response) {
                if (response.status === 200) {
                    Swal.fire({
                        title: "Email send is success",
                        text: "Thank you for email",
                        icon: "success"
                    });
                    reset();
                }


            }, function (error) {
                Swal.fire({
                    title: "Sorry! somthing wrong please try again...",
                    text: error.text,
                    icon: "error"
                });
            });
    };



    return (
        <section id="contact" className=' relative bg-slate-950 py-10 '>
            <div className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg" style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>

            <div className='relative  z-10 container mx-auto '>
                <div className="flex px-8 ">
                    <div className="relative -inset-3   w-[55px] h-[55px] bg-gradient-to-r from-orange-600 to-amber-400 rounded-full customShadow" />
                    <h1 className="text-white z-10 md:text-5xl text-2xl font-bold font-['Roboto'] absolute">GET IN TOUCH</h1>
                </div>
                <div className='md:pt-24 pt-12 '>
                    <div className='grid md:grid-cols-2 md:gap-2'>
                        <form onSubmit={handleSubmit(sendEmail)} className='grid grid-cols-2 md:gap-5 gap-y-3 gap-x-1 md:pb-0 px-5 pb-16'>
                            <div>
                                <label className='text-white'>First Name:</label>
                                <input className=" mt-2 px-5 py-2 w-full rounded-full border bg-gradient-to-l   from-[#263458] to-[#111827] text-white font-bold font-['Roboto'] "

                                    {...register("fname", { required: true })}
                                    type="fname"
                                    name="fname"
                                    id="fname"
                                    placeholder='Rukon' />
                                {errors.fname && <span className='text-xs text-red-500'>First Name field is required.</span>}


                            </div>
                            <div>
                                <label className='text-white'>Last Name:</label>
                                <input className=" mt-2 px-5 py-2 w-full rounded-full  border bg-gradient-to-l   from-[#263458] to-[#111827] text-white font-bold font-['Roboto'] "
                                    {...register("lname", { required: true })}
                                    type="lname"
                                    name="lname"
                                    id="lname"
                                    placeholder='Uddin' />
                                {errors.lname && <span className='text-xs text-red-500'>Last Name field is required.</span>}
                            </div>
                            <div className='col-span-2'>
                                <label className='text-white'>Email address:</label>
                                <input className=" mt-2  px-5 py-2 w-full rounded-full  border bg-gradient-to-l   from-[#263458] to-[#111827] text-white font-bold font-['Roboto'] "
                                    {...register("email", { required: true })}
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder='example@gmail.com' />
                                {errors.email && <span className='text-xs text-red-500'>Email field is required.</span>}
                            </div>

                            <div className='col-span-2'>
                                <label className='text-white'>Subject:</label>
                                <input className=" mt-2  px-5 py-2 w-full rounded-full  border bg-gradient-to-l   from-[#263458] to-[#111827] text-white font-bold font-['Roboto'] "
                                    {...register("subject", { required: true })}
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    placeholder='Subject' />
                                {errors.subject && <span className='text-xs text-red-500'>Subject field is required.</span>}
                            </div>

                            <div className='col-span-2'>
                                <label className='text-white'>Massage:</label>
                                <textarea className=" mt-2  px-2 py-2 w-full rounded-md h-48  border bg-gradient-to-l   from-[#263458] to-[#111827] text-white font-bold font-['Roboto'] "
                                    {...register("massage", { required: true })}
                                    name="massage"
                                    id="massage"
                                    placeholder='Your massage' />
                                {errors.massage && <span className='text-xs text-red-500'>Massage field is required.</span>}
                            </div>

                            <div className='col-span-2 flex justify-center text-white font-bold font-["Roboto"] '>
                                <button type='submit' className="w-[167px] h-[49px]  border rounded-[86.50px] bg-gradient-to-l   from-[#263458] to-[#111827] shadow-2xl shadow-indigo-600 hover:bg-gradient-to-tr active:bg-gradient-to-r "  >
                                    Send
                                </button>
                            </div>
                        </form>
                        <div className=" bg-gray-950 relative  p-5 mx-5">
                            <div className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg" style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>
                            <div className="relative z-10">
                                <h1 className="text-white text-2xl font-bold font-['Roboto']">CONTACT INFO</h1>
                                <br />
                                <article className="text-white text-lg font-bold font-['Roboto'] text-justify">"Ready to
                                    bring your digital vision to life. Let's connect and discuss how I can elevate your
                                    online presence. Reach out for web development expertise in HTML, CSS, JavaScript,
                                    and more. Looking forward to collaborating with you!"
                                </article>
                                <br />
                                <address
                                    className="text-white text-sm font-bold font-['Roboto'] flex gap-2 items-center">
                                    <img src={AddressIcon} alt="AddressIcon" className='h-6 w-6' />
                                    <span>Address: Sunamganj, Sylhet, Bangladesh.</span
                                    ></address>
                                <br />
                                <h5 className="text-white text-sm font-bold font-['Roboto'] flex gap-2 items-center">
                                    <img src={EmailIcon} alt="EmailIcon" className='h-6 w-6' />Email:
                                    <span>
                                        <a className="text-white text-sm font-bold font-['Roboto']"
                                            href="mailto:rukon.js@gmail.com">rukon.js@gmail.com</a>
                                    </span>
                                </h5>
                                <br />
                                <h5 className="text-white text-sm font-bold font-['Roboto'] flex items-center gap-2">
                                    <img src={PhoneIcon} alt="PhoneIcon" className='h-6 w-6' />Phone:
                                    <span>
                                        <a className="text-white text-sm font-bold font-['Roboto']"
                                            href="tel:+8801765459224">+8801765459224</a>
                                    </span>
                                </h5>
                                <br />
                                <h5 className="text-white text-sm font-bold font-['Roboto'] flex items-center gap-2">
                                    <img src={Whatsapp} alt="PhoneIcon" className='h-6 w-6' />Whatsapp:
                                    <span>
                                        <a className="text-white text-sm font-bold font-['Roboto']"
                                            href="tel:+8801765459224">+8801765459224</a>
                                    </span>
                                </h5>
                                <br />
                                <h5 className="text-white text-sm font-bold font-['Roboto'] flex items-center gap-2">
                                    <img src={SkypeIcon} alt="SkypeIcon" className='h-6 w-6' /> Skype: <span>
                                        <a className="text-white text-sm font-bold font-['Roboto']"
                                            href="https://join.skype.com/invite/yXu1Kxuk8hZF?fbclid=IwAR0_F5FZQG1sYISeOdnT_dB3PTJqS1bxp4OOI590YbfpZE9gGmw4rs_pYYU"> live:.cid.adbc52c0d5ebc624</a>
                                    </span>
                                </h5>
                                <br />
                                <h5 className="text-white text-sm font-bold font-['Roboto'] flex items-center gap-2">
                                    <img src={LinkdinIcon} alt="SkypeIcon" className='h-6 w-6' /> Linkdin: <span>
                                        <a className="text-white text-sm font-bold font-['Roboto']"
                                            href="https://join.skype.com/invite/yXu1Kxuk8hZF?fbclid=IwAR0_F5FZQG1sYISeOdnT_dB3PTJqS1bxp4OOI590YbfpZE9gGmw4rs_pYYU"> Rukon Uddin</a>
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