import React from "react";
import CarouselComponent from "../components/CarouselComponent";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center bg-gray-100 py-10">
        <div className="w-4/5">
          <h1 className="text-3xl text-center font-bold mb-8">
            First Packers and Movers welcomes you!
          </h1>
          <CarouselComponent />
        </div>
      </div>

      {/*  FOUNDER'S CORNER  */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Meet the Founder
            </h2>
            <div className="text-center">
              <p className="font-semi-bold text-lg text-gray-700">
                First Packers and Movers has been in successfully running for 12
                years, always delivering stellar results to all clients. The
                venture started with the aim to satisfy cients and make the
                process of shifting homes and offices easier and hassle-free.
                Here is the Man Behind the Show! Get to know the visionary who
                started it all, the driving force behind our success.
              </p>
            </div>
          </div>
          <div className="mt-12 flex items-center justify-center">
            <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg">
              <img
                className="w-full h-80 object-cover rounded-t-lg"
                src="https://t3.ftcdn.net/jpg/03/96/78/06/360_F_396780640_mO95sH5ITG2sD3RdOd7fh3olapEkupXW.jpg"
                alt="Founder"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  Shashikant Bhoite
                </h3>
                <p className="text-lg text-gray-600">Proprietor</p>
                <p className="mt-4 text-gray-700">
                  Introducing Shashikant Bhoite, the visionary entrepreneur
                  behind our Mumbai-based business. With 12 years of industry
                  expertise, he leads our team with passion, excellence, and a
                  commitment to providing exceptional moving and packing
                  services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
