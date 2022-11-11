import React from "react";
import Image from "next/image";
import MainLogo from "../public/logo_firstpackers&movers.png";
import { FiSend } from "react-icons/fi";
import "tw-elements";

const EnquiryForm = () => {
  return (
    <div>
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
          <button
            class="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center"
            data-bs-toggle="modal"
            data-bs-target="#exampleModalCenteredScrollable"
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

      <div
        class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="exampleModalCenteredScrollable"
        tabindex="-1"
        aria-labelledby="exampleModalCenteredScrollable"
        aria-modal="true"
        role="dialog"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable relative w-auto pointer-events-none">
          <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                class="text-xl font-medium leading-normal text-gray-800"
                id="exampleModalCenteredScrollableLabel"
              >
                Modal title
              </h5>
              <button
                type="button"
                class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body relative p-4">
              <p>
                This is some placeholder content to show a vertically centered
                modal. We've added some extra copy here to show how vertically
                centering the modal works when combined with scrollable modals.
                We also use some repeated line breaks to quickly extend the
                height of the content, thereby triggering the scrolling. When
                content becomes longer than the predefined max-height of modal,
                content will be cropped and scrollable within the modal.
              </p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <p>Just like that.</p>
            </div>
            <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button
                type="button"
                class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryForm;
