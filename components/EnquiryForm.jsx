import React from "react";
import Image from "next/image";
import MainLogo from "../public/logo_firstpackers&movers.png";
import { FiSend } from "react-icons/fi";
import { useState } from "react";
import axios from "axios";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactno: "",
    budget: "",
    items: "",
  });

  const handleChange = (e) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  async function sendMail(e) {
    e.preventDefault();

    await fetch("/api/mail", {
      method: "post",
      body: JSON.stringify(formData),
    });
    console.log(formData);

    await axios
      .post("/api/formAPI", {
        formData: formData,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    setShowModal(false);
  }

  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        class="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-white"
        method="post"
      >
        <h1 class="text-2xl font-bold dark:text-black">Send a message</h1>

        <label
          for="fullname"
          class="text-black font-semibold mt-8 dark:text-blackpy-2 mb-2"
        >
          Full name<span class="text-red-500 dark:text-red">*</span>
        </label>
        <input
          id="fullName"
          value={formData.fullName}
          onChange={handleChange}
          type="text"
          name="fullName"
          class="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-black-500 font-normal text-black"
          required
        />

        <label
          for="email"
          class="text-gray-500 font-semibold mt-4 dark:text-black py-2"
        >
          E-mail<span class="text-red-500">*</span>
        </label>
        <input
          id="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          name="email"
          class="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1font-normal ring-black-500 font-normal text-black"
          required
        />

        <label
          for="phone"
          class="text-gray-500 font-semibold mt-4 dark:text-black py-2"
        >
          Contact number: <span class="text-red-500">*</span>
        </label>
        <input
          id="contactno"
          value={formData.contactno}
          onChange={handleChange}
          type="tel"
          name="contactno"
          class="bg-transparent border-b py-2 pl-4 font-normal focus:outline-none focus:rounded-md focus:ring-1 ring-black-500 text-black"
          pattern="[7-9]{1}[0-9]{9}"
          required
        />

        <label
          for="budget"
          class="text-gray-500 mt-4 font-semibold dark:text-black py-2"
        >
          Select your budget :
        </label>

        <select
          required
          id="budget"
          value={formData.budget}
          onChange={handleChange}
          name="budget"
          class="bg-blue-100 border-b py-2 pl-4 font-normal focus:outline-none focus:rounded-md focus:ring-1 ring-black-500 text-black"
        >
          <option value="choose a valid option">
            {" "}
            Please choose an option
          </option>
          <option value="less than 6000"> less than 6000</option>
          <option value="7000-10000">7000-10000</option>
          <option value="10000-15000">10000-15000</option>
          <option value="15000+">more than 15000</option>
        </select>

        <label
          for="items"
          class="text-gray-500 font-semibold mt-4 dark:text-black py-2"
        >
          Items
        </label>
        <textarea
          id="items"
          value={formData.items}
          onChange={handleChange}
          name="items"
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

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
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
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Full Name:{" "}
                    <span className="text-black ">{formData.fullName}</span>
                  </p>
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Email: <span className="text-black ">{formData.email}</span>
                  </p>
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Contact:{" "}
                    <span className="text-black ">{formData.contactno}</span>
                  </p>

                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Budget:{" "}
                    <span className="text-black ">{formData.budget}</span>
                  </p>
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Items: <span className="text-black ">{formData.items}</span>
                  </p>
                </div>
                {/*footer*/}
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
                    type="button"
                    onClick={sendMail}
                  >
                    Send Enquiry
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default EnquiryForm;
