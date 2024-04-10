import React from "react";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";

export default function Testimonials({ testimonials }) {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
            Testimonials
          </h1>
          <div className="flex flex-wrap -m-4">
            {testimonials.map((testimonials, i) => {
              return (
                <div className="p-4 md:w-1/2 w-full" key={i}>
                  <div className="h-full bg-gray-100 p-8 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="block w-5 h-5 text-gray-400 mb-4"
                      viewBox="0 0 975.036 975.036"
                    >
                      <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                    </svg>
                    <p className="leading-relaxed mb-6 text-black">
                      {testimonials.testimonial}
                    </p>
                    <a className="inline-flex items-center">
                      <img
                        alt="testimonial"
                        src="https://dummyimage.com/106x106"
                        className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                      />
                      <span className="flex-grow flex flex-col pl-4">
                        <span className="title-font font-medium text-gray-900">
                          {testimonials.fullName}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {testimonials.email}
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              );
            })}
            <div className="p-4 md:w-1/2 w-full">
              {/* <div className="h-full bg-gray-100 p-8 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed mb-6">{testimonials.testimonial}</p>
              <a className="inline-flex items-center">
                <img alt="testimonial" src="https://dummyimage.com/107x107" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900">Alper Kamu</span>
                  <span className="text-gray-500 text-sm">DESIGNER</span>
                </span>
              </a>
            </div> */}
            </div>
          </div>
        </div>
      </section>
      {/* <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
              {testimonials.map((testimonials, i) => {
                return (
                  <div class="h-full text-center" key={i}> */}
      {/* <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"/> */}
      {/* <p class="leading-relaxed">{testimonials.testimonial}</p>
                    <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                    <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                      {testimonials.fullName}
                    </h2>
                    <p class="text-gray-500">{testimonials.location}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center pt-2 pb-10 px-6 ">
          <div class="text-white text-center w-36 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            <Link href="/testimonialform">ADD</Link>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export async function getStaticProps() {
  const mongoose = require("mongoose");
  const Testimonial = require("../models/testimonialSchema");

  await mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
    })
    .then(() => console.log("DB connected"));

  const testimonials = await Testimonial.find().sort({ createdAt: "desc" });
  console.log(testimonials);
  return {
    props: {
      testimonials: JSON.parse(JSON.stringify(testimonials)),
    },
  };
}
