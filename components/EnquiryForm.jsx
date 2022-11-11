import React from "react";
import Image from "next/image";
import MainLogo from "../public/logo_firstpackers&movers.png";
import { FiSend } from "react-icons/fi";

const EnquiryForm = () => {
  return (
    <form class="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-white">
      <h1 class="text-2xl font-bold dark:text-black">Send a message</h1>

      <label
        for="fullname"
        class="text-black font-semibold mt-8 dark:text-blackpy-2 mb-2"
      >
        Full name<span class="text-red-500 dark:text-red">*</span>
      </label>
      <input
        type="text"
        name="fullname"
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
        type="tel"
        name="phone"
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
        name="budget"
        id="budget"
        class="bg-transparent border-b py-2 pl-4 font-normal focus:outline-none focus:rounded-md focus:ring-1 ring-black-500 text-black"
      >
        <option value="6000+"> more than 6000</option>
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
        name="items"
        class="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-black-500 font-normal text-black"
      ></textarea>
      <div class="flex flex-row items-center justify-start">
        <button class="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center">
          Send
          <FiSend className=" ml-2 text-1xl cursor-pointer color-white hover:text-blue-600" />
          <path
            d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
            fill="currentColor"
          />
        </button>
      </div>
    </form>

    //     <form className="grid-rows-3 justify-center items-center">
    //       {/* NAME */}
    //       <div className="flex py-2">
    //         <label htmlFor="name" className="px-4">
    //           Name
    //         </label>
    //         <input
    //           id="name"
    //           className="w-2/12 bg-gray-100 shadow-inner rounded-l p-2 "
    //           type="text"
    //         />
    //       </div>
    //       {/* EMAIL */}
    //       <div className="flex py-2">
    //         <label htmlFor="email" className="px-4 content-center">
    //           Email
    //         </label>
    //         <input
    //           className="w-2/12 bg-gray-100 shadow-inner rounded-l p-2 flex"
    //           id="email"
    //           type="email"
    //         />
    //       </div>

    //       {/* CONTACT NUMBER */}
    //       <div className="flex">
    //         <label for="phone" className="px-4 py-2">
    //           Contact number:
    //         </label>
    //         <input
    //           type="tel"
    //           id="phone"
    //           name="phone"
    //           pattern="[1-9]{1}[0-9]{9}"
    //           className="w-2/12 bg-gray-100 shadow-inner rounded-l p-2 flex-initial"
    //         />
    //       </div>

    //       {/* ITEMS to shift */}
    //       <div className="flex py-2">
    //         <label htmlFor="message" className="px-4">
    //           Items
    //         </label>
    //         <textarea
    //           className="w-4/12 bg-gray-100 shadow-inner rounded-l p-2 flex-initial"
    //           id="items"
    //         />
    //       </div>

    // {/* BUDGET */}
    // <div className="px-4">
    // <label for="budget">Select your budget :</label>

    // <select name="budget" id="budget" className="w-2/12 ml-2">
    //   <option value="volvo"> more than 6000</option>
    //   <option value="saab">7000-10000</option>
    //   <option value="mercedes">10000-15000</option>
    //   <option value="audi">more than 15000</option>
    // </select>
    // </div>
    //       <button
    //         className="flex my-4 mx-6 justify-center content-center py-1 bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded"
    //         type="submit"
    //       >
    //         Submit
    //       </button>
    //     </form>
  );
};

export default EnquiryForm;
