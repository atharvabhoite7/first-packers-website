import React from "react";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";

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

const testimonials = ({ testimonials }) => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
              {testimonials.map((testimonials, i) => {
                return (
                  <div class="h-full text-center" key={i}>
                    {/* <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"/> */}
                    <p class="leading-relaxed">{testimonials.testimonial}</p>
                    <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                    <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                      {testimonials.fullName}
                    </h2>
                    <p class="text-gray-500">{testimonials.email}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center pt-2 pb-10 px-6 ">
          <div class="text-white text-center w-36 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">

          
          <Link
            href="/testimonialform"
            
          >
            ADD
          </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default testimonials;
