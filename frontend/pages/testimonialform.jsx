import React from "react";
import Image from "next/image";
import MainLogo from "../public/logo_firstpackers&movers.png";
import { FiSend } from "react-icons/fi";
import { useState } from "react";
import axios from "axios";

const EnquiryForm = () => {
  //   const [formData, setFormData] = useState({
  //     fullName: "",
  //     location: "",
  //     items: "",
  //   });

  //   const handleChange = (e) => {
  //     setFormData((prevFormData) => {
  //       return {
  //         ...prevFormData,
  //         [e.target.name]: e.target.value,
  //       };
  //     });
  //   };

  const [fullName, setFullName] = useState("");
  const [location, setLocation] = useState("");
  const [testimonial, setTestimonial] = useState("");

  const handleSubmit = () => {
    // e.preventDefault();
    // setShowModal(true);
    const testimonialObj = {
      fullName: fullName,
      location: location,
      testimonial: testimonial,
    };
    console.log(testimonialObj);
    axios.post("api/newTestimonial", testimonialObj).then(() => {
      alert("Testimonial added");
    });
  };

  //   const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        class="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-white"
        // method="post"
      >
        <h1 class="text-2xl font-bold dark:text-black">Write a testimonial</h1>

        <label
          for="fullname"
          class="text-black font-semibold mt-8 dark:text-blackpy-2 mb-2"
        >
          Full name<span class="text-red-500 dark:text-red">*</span>
        </label>
        <input
          id="fullName"
          //   value={formData.fullName}
          onChange={(event) => setFullName(event.target.value)}
          type="text"
          //   name="fullName"
          class="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-black-500 font-normal text-black"
          required
        />

        <label
          for="location"
          class="text-gray-500 font-semibold mt-4 dark:text-black py-2"
        >
          Location<span class="text-red-500">*</span>
        </label>
        <input
          id="location"
          //   value={formData.location}
          onChange={(event) => setLocation(event.target.value)}
          type="text"
          //   name="location"
          class="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1font-normal ring-black-500 font-normal text-black"
          required
        />

        <label
          for="items"
          class="text-gray-500 font-semibold mt-4 dark:text-black py-2"
        >
          Testimonial<span class="text-red-500">*</span>
        </label>
        <textarea
          id="testimonial"
          //   value={formData.items}
          onChange={(event) => setTestimonial(event.target.value)}
          //   name="items"
          required
          class="bg-blue-100 border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-black-500 font-normal text-black"
        ></textarea>
        <div class="flex flex-row items-center justify-start">
          <button
            class="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center"
            type="submit"
          >
            Send
            <FiSend className=" ml-2 text-1xl cursor-pointer color-white hover:text-blue-600" />
            <path
              d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
              fill="currentColor"
            />
          </button>
        </div>
      </form>

      {/* Modal starts */}

      {/* {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
            
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Enquiry Details</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Full Name:{" "}
                    <span className="text-black ">{formData.fullName}</span>
                  </p>
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    locationion: <span className="text-black ">{formData.location}</span>
                  </p>
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Testimonial: <span className="text-black ">{formData.items}</span>
                  </p>
                </div>
              
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null} */}
    </div>
  );
};

export default EnquiryForm;
