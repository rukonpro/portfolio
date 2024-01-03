import React from 'react';
import Swal from "sweetalert2";
import {useForm} from "react-hook-form";
import emailjs from "@emailjs/browser";
import OnClickSound from "../../Helpers/OnClickSound";


const ContactForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const sendEmail = (data) => {
        const templateParams = {
            fullName: data.fname + " " + data.lname,
            email: data?.email,
            subject: data?.subject,
            massage: data?.massage,
        };

        emailjs
            .send(
                "rukonpro_2lgvw3n",
                "rukonpro_u2antxj",
                templateParams,
                "user_sMNanZ38ggdHIXPN6PNqZ"
            )
            .then(
                function (response) {
                    if (response.status === 200) {
                        OnClickSound("/Music/successSound.mp3").then()
                        Swal.fire({
                            title: "Email send is success",
                            text: "Thank you for email",
                            icon: "success",
                        }).then()
                        reset();
                    }
                },
            ).catch(errors=>{
            OnClickSound("/Music/error.mp3").then()
            Swal.fire({
                title: "Sorry! something wrong please try again...",
                text: errors.massage,
                icon: "error",
            }).then()
        })
    };
    return (
        <form onSubmit={handleSubmit(sendEmail)}
              className="grid grid-cols-2 md:gap-5 gap-y-3 gap-x-1 md:pb-0 px-5 pb-16">
            <div>
                <label htmlFor="fname" className="text-white">First Name:</label>
                <input
                    className=" mt-2 px-5 py-2 w-full rounded-full border  border-purple-500  focus:outline-purple-400 bg-gradient-to-l focus:bg-gradient-to-r  from-[#5f3391ff] to-[#020617ff] text-white font-bold "
                    {...register("fname", {required: true})}
                    type="fname"
                    name="fname"
                    id="fname"
                    placeholder="Rukon"
                    onClick={() => OnClickSound("/Music/keypress.mp3")}
                />
                {errors.fname && (
                    <span className="text-xs text-red-500">
                    First Name field is required.
                  </span>
                )}
            </div>
            <div>
                <label htmlFor="lname" className="text-white">Last Name:</label>
                <input
                    className=" mt-2 px-5 py-2 w-full rounded-full   border border-purple-500  focus:outline-purple-400 bg-gradient-to-l focus:bg-gradient-to-r   from-[#5f3391ff] to-[#020617ff] text-white font-bold  "
                    {...register("lname", {required: true})}
                    type="lname"
                    name="lname"
                    id="lname"
                    placeholder="Uddin"
                    onClick={() => OnClickSound("/Music/keypress.mp3")}
                />
                {errors.lname && (
                    <span className="text-xs text-red-500">
                    Last Name field is required.
                  </span>
                )}
            </div>
            <div className="col-span-2">
                <label htmlFor="email" className="text-white">Email address:</label>
                <input
                    className=" mt-2  px-5 py-2 w-full rounded-full   border border-purple-500  focus:outline-purple-400 bg-gradient-to-l focus:bg-gradient-to-r   from-[#5f3391ff] to-[#020617ff] text-white font-bold  "
                    {...register("email", {required: true})}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@gmail.com"
                    onClick={() => OnClickSound("/Music/keypress.mp3")}
                />
                {errors.email && (
                    <span className="text-xs text-red-500">
                    Email field is required.
                  </span>
                )}
            </div>

            <div className="col-span-2">
                <label htmlFor="subject" className="text-white">Subject:</label>
                <input
                    className=" mt-2  px-5 py-2 w-full rounded-full   border border-purple-500  focus:outline-purple-400 bg-gradient-to-l focus:bg-gradient-to-r   from-[#5f3391ff] to-[#020617ff] text-white font-bold  "
                    {...register("subject", {required: true})}
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    onClick={() => OnClickSound("/Music/keypress.mp3")}
                />
                {errors.subject && (
                    <span className="text-xs text-red-500">
                    Subject field is required.
                  </span>
                )}
            </div>

            <div className="col-span-2">
                <label htmlFor="massage" className="text-white">Massage:</label>
                <textarea
                    className=" mt-2  px-2 py-2 w-full rounded-md h-48  border border-purple-500  focus:outline-purple-400 bg-gradient-to-l focus:bg-gradient-to-r   from-[#5f3391ff] to-[#020617ff]  text-white font-bold  "
                    {...register("massage", {required: true})}
                    name="massage"
                    id="massage"
                    placeholder="Your massage"
                    onClick={() => OnClickSound("/Music/keypress.mp3")}
                />
                {errors.massage && (
                    <span className="text-xs text-red-500">
                    Massage field is required.
                  </span>
                )}
            </div>

            <div className='col-span-2 flex justify-center text-white font-bold font-["Roboto"] '>
                <button
                    type="submit"
                    aria-label="Send"
                    id="Send"
                    className="w-[167px] h-[49px]  border  border-purple-500  focus:outline-purple-400 rounded-[86.50px] bg-gradient-to-l   from-[#5f3391ff] to-[#111827] shadow-2xl shadow-indigo-600 hover:bg-gradient-to-tr active:bg-gradient-to-r "
                    onClick={() => OnClickSound("/Music/keypress.mp3")}
                >
                    Send
                </button>
            </div>
        </form>
    );
};

export default ContactForm;