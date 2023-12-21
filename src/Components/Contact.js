import React from "react";
import AddressIcon from "../Images/location.webp";
import EmailIcon from "../Images/gmail.webp";
import PhoneIcon from "../Images/phone-call.webp";
import SkypeIcon from "../Images/skype.webp";
import LinkdinIcon from "../Images/linkedin.webp";
import Whatsapp from "../Images/whatsapp.webp";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const Contact = () => {
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
            Swal.fire({
              title: "Email send is success",
              text: "Thank you for email",
              icon: "success",
              timer: 200,
            });
            reset();
          }
        },
        function (error) {
          Swal.fire({
            title: "Sorry! somthing wrong please try again...",
            text: error.text,
            icon: "error",
            timer: 200,
          });
        }
      );
  };

  return (
    <section id="contact" className=" relative bg-slate-950 py-10 ">
      <div
        className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
        style={{
          background:
            "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
        }}
      ></div>

      <div className="relative  z-10 container mx-auto ">
        <div className="flex px-8 ">
          <div className="relative -inset-3   w-[55px] h-[55px] bg-gradient-to-tl from-[#816aff] to-[#d066fd] rounded-full customShadow" />
          <h1 className="text-[#fdccffff] z-10 md:text-5xl text-2xl font-bold font-['Roboto'] absolute tracking-[4px]">
            GET IN TOUCH
          </h1>
        </div>
        <div className="md:pt-24 pt-12 ">
          <div className="grid md:grid-cols-2 md:gap-2">
            <form
              onSubmit={handleSubmit(sendEmail)}
              className="grid grid-cols-2 md:gap-5 gap-y-3 gap-x-1 md:pb-0 px-5 pb-16"
            >
              <div>
                <label className="text-white">First Name:</label>
                <input
                  className=" mt-2 px-5 py-2 w-full rounded-full border  border-purple-500  focus:outline-purple-400 bg-gradient-to-l focus:bg-gradient-to-r  from-[#5f3391ff] to-[#020617ff] text-white font-bold font-['Roboto'] "
                  {...register("fname", { required: true })}
                  type="fname"
                  name="fname"
                  id="fname"
                  placeholder="Rukon"
                />
                {errors.fname && (
                  <span className="text-xs text-red-500">
                    First Name field is required.
                  </span>
                )}
              </div>
              <div>
                <label className="text-white">Last Name:</label>
                <input
                  className=" mt-2 px-5 py-2 w-full rounded-full   border border-purple-500  focus:outline-purple-400 bg-gradient-to-l focus:bg-gradient-to-r   from-[#5f3391ff] to-[#020617ff] text-white font-bold font-['Roboto'] "
                  {...register("lname", { required: true })}
                  type="lname"
                  name="lname"
                  id="lname"
                  placeholder="Uddin"
                />
                {errors.lname && (
                  <span className="text-xs text-red-500">
                    Last Name field is required.
                  </span>
                )}
              </div>
              <div className="col-span-2">
                <label className="text-white">Email address:</label>
                <input
                  className=" mt-2  px-5 py-2 w-full rounded-full   border border-purple-500  focus:outline-purple-400 bg-gradient-to-l focus:bg-gradient-to-r   from-[#5f3391ff] to-[#020617ff] text-white font-bold font-['Roboto'] "
                  {...register("email", { required: true })}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@gmail.com"
                />
                {errors.email && (
                  <span className="text-xs text-red-500">
                    Email field is required.
                  </span>
                )}
              </div>

              <div className="col-span-2">
                <label className="text-white">Subject:</label>
                <input
                  className=" mt-2  px-5 py-2 w-full rounded-full   border border-purple-500  focus:outline-purple-400 bg-gradient-to-l focus:bg-gradient-to-r   from-[#5f3391ff] to-[#020617ff] text-white font-bold font-['Roboto'] "
                  {...register("subject", { required: true })}
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                />
                {errors.subject && (
                  <span className="text-xs text-red-500">
                    Subject field is required.
                  </span>
                )}
              </div>

              <div className="col-span-2">
                <label className="text-white">Massage:</label>
                <textarea
                  className=" mt-2  px-2 py-2 w-full rounded-md h-48  border border-purple-500  focus:outline-purple-400 bg-gradient-to-l focus:bg-gradient-to-r   from-[#5f3391ff] to-[#020617ff]  text-white font-bold font-['Roboto'] "
                  {...register("massage", { required: true })}
                  name="massage"
                  id="massage"
                  placeholder="Your massage"
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
                  id="emailSubmit"
                  className="w-[167px] h-[49px]  border border border-purple-500  focus:outline-purple-400 rounded-[86.50px] bg-gradient-to-l   from-[#5f3391ff] to-[#111827] shadow-2xl shadow-indigo-600 hover:bg-gradient-to-tr active:bg-gradient-to-r "
                >
                  Send
                </button>
              </div>
            </form>
            <div className=" bg-gray-950 relative  p-5 mx-5">
              <div
                className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
                style={{
                  background:
                    "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
                }}
              ></div>
              <div className="relative z-10">
                <h1 className="text-white text-2xl font-bold font-['Roboto'] tracking-[4px]">
                  CONTACT INFO
                </h1>
                <br />
                <article className="text-[#fdccffff] text-base font-bold font-['Roboto'] text-justify tracking-[2px]">
                  "Ready to bring your digital vision to life. Let's connect and
                  discuss how I can elevate your online presence. Reach out for
                  web development expertise in HTML, CSS, JavaScript, and more.
                  Looking forward to collaborating with you!"
                </article>
                <br />
                <address className="text-white text-sm font-bold font-['Roboto'] flex gap-2 items-center">
                  <img
                    src={AddressIcon || undefined}
                    height="100%"
                    width="100%"
                    alt="AddressIcon"
                    className="h-6 w-6"
                    loading="lazy"
                  />
                  <span>Address: Sunamganj, Sylhet, Bangladesh.</span>
                </address>
                <br />
                <address className="text-white text-sm font-bold font-['Roboto'] flex gap-2 items-center">
                  <img
                    src={EmailIcon || undefined}
                    alt="EmailIcon"
                    height="100%"
                    width="100%"
                    className="h-6 w-6"
                    loading="lazy"
                  />
                  Email:
                  <span>
                    <a
                      className="text-white text-sm font-bold font-['Roboto']"
                      href="mailto:rukon.js@gmail.com"
                    >
                      rukon.js@gmail.com
                    </a>
                  </span>
                </address>
                <br />
                <address className="text-white text-sm font-bold font-['Roboto'] flex items-center gap-2">
                  <img
                    src={PhoneIcon || undefined}
                    alt="PhoneIcon"
                    height="100%"
                    width="100%"
                    className="h-6 w-6"
                    loading="lazy"
                  />
                  Phone:
                  <span>
                    <a
                      className="text-white text-sm font-bold font-['Roboto']"
                      href="tel:+8801765459224"
                    >
                      +8801765459224
                    </a>
                  </span>
                </address>
                <br />
                <address className="text-white text-sm font-bold font-['Roboto'] flex items-center gap-2">
                  <img
                    src={Whatsapp || undefined}
                    height="100%"
                    width="100%"
                    alt="PhoneIcon"
                    className="h-6 w-6"
                    loading="lazy"
                  />
                  Whatsapp:
                  <span>
                    <a
                      className="text-white text-sm font-bold font-['Roboto']"
                      href="tel:+8801765459224"
                    >
                      +8801765459224
                    </a>
                  </span>
                </address>
                <br />
                <address className="text-white text-sm font-bold font-['Roboto'] flex items-center gap-2">
                  <img
                    src={SkypeIcon || undefined}
                    height="100%"
                    width="100%"
                    alt="SkypeIcon"
                    className="h-6 w-6"
                    loading="lazy"
                  />{" "}
                  Skype:{" "}
                  <span>
                    <a
                      className="text-white text-sm font-bold font-['Roboto']"
                      href="https://join.skype.com/invite/yXu1Kxuk8hZF?fbclid=IwAR0_F5FZQG1sYISeOdnT_dB3PTJqS1bxp4OOI590YbfpZE9gGmw4rs_pYYU"
                    >
                      {" "}
                      live:.cid.adbc52c0d5ebc624
                    </a>
                  </span>
                </address>
                <br />
                <address className="text-white text-sm font-bold font-['Roboto'] flex items-center gap-2">
                  <img
                    src={LinkdinIcon || undefined}
                    height="100%"
                    width="100%"
                    alt="SkypeIcon"
                    className="h-6 w-6"
                    loading="lazy"
                  />{" "}
                  Linkdin:{" "}
                  <span>
                    <a
                      className="text-white text-sm font-bold font-['Roboto']"
                      href="https://join.skype.com/invite/yXu1Kxuk8hZF?fbclid=IwAR0_F5FZQG1sYISeOdnT_dB3PTJqS1bxp4OOI590YbfpZE9gGmw4rs_pYYU"
                    >
                      {" "}
                      Rukon Uddin
                    </a>
                  </span>
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
