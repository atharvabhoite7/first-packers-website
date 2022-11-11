import React from "react";
import { FaInstagram, FaWhatsapp, FaWhatsappSquare } from "react-icons/fa";

import { CiMail } from "react-icons/ci";


function Footer() {
  return (
    <>
      <div className="bg-blue-200 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
        <div className="p-5 ">
          <ul>
            <p className="text-black font-bold text-3xl pb-6">
              First <span className="text-black">Packers & Movers</span>
            </p>
            <div className="flex gap-6 pb-5">
              <a href="tel:+919594460101">
                <FaInstagram className="text-2xl cursor-pointer hover:text-blue-600" />
              </a>

              <a href="mailto:firstpackers1@gmail.com">
              <CiMail className="text-2xl cursor-pointer hover:text-red-700" />
              </a>
              
              {/* <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" /> */}
              <FaWhatsapp className="text-2xl cursor-pointer hover:text-green-600" />
              {/* <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" /> */}
            </div>
          </ul>
        </div>
        <div className="p-5">
          {/* <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Product</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Stocks
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Futures & Options
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Mutual Funds
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Fixed deposits
            </li>
          </ul> */}
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Company</p>
            <li className="text-gray-900 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              About
            </li>
            <li className="text-gray-900 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Our Services
            </li>
            <li className="text-gray-900 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Pricing
            </li>
            <li className="text-gray-900 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Testimonials
            </li>
            <li className="text-gray-900 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Offers
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Support</p>
            <li className="text-gray-900 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Contact Us
            </li>
            <li className="text-gray-900 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Locations
            </li>
            <li className="text-gray-900 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Terms of Service
            </li>
            <li className="text-gray-900 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Privacy Policy
            </li>
            <li className="text-gray-900 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              For Enterprise
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center bg-black">
        <h1 className=" text-stone-300 font-semibold">
          © 2022 First Packers & Movers | All Rights Reserved
        </h1>
      </div>
    </>
  );
}

export default Footer;
