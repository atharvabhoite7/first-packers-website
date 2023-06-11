import React from "react";

const Service = () => {
  return (
    <>
      {/* BENEFITS OF CHOOSING OUR SERVICE  */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center font-bold mb-8">
            Why Choose Our Service?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">
                Quick Delivery
              </h3>
              <p className="text-gray-700">
                Enjoy swift delivery of your belongings. Our efficient moving
                services ensure prompt arrival at your new destination.
              </p>
            </div>
            <div className="bg-white rounded shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">
                Reasonable Rates
              </h3>
              <p className="text-gray-700">
                Experience cost-effective moving solutions with our competitive
                rates. Request a quote now and save on your relocation expenses!
              </p>
            </div>
            <div className="bg-white rounded shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">
                Vast Coverage
              </h3>
              <p className="text-gray-700">
                Experience our extensive nationwide coverage. We serve all
                locations across India, ensuring a seamless move wherever you
                go.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl mt-20 text-center font-bold mb-8">
          What Services do we provide?
        </h2>

        {/* SERVICES CARD */}

        {/* house relocation */}
        <div className="container mt-16 mx-auto p-4 md:p-0">
          <div className="shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto">
            <div
              className="bg-cover bg-bottom border w-full md:w-1/3 h-64 md:h-auto relative"
              style={{
                backgroundImage:
                  "url('https://urbanrelocation.in/images/service/home-shifting.jpg')",
              }}
            >
              <div className="absolute text-xl">
                <i className="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer"></i>
              </div>
            </div>
            <div className="bg-white w-full md:w-2/3">
              <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
                <div className="bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
                  <div className="w-full lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left">
                    <h3 className="font-bold text-xl">House Relocation</h3>
                    <p className="mb-0 mt-3 text-grey-dark text-sm italic">
                      {/* Moscow - Russia */}
                      XYZ
                    </p>
                    <hr className="w-1/4 md:ml-0 mt-4  border lg:hidden" />
                  </div>
                  <div className="w-full lg:w-3/5 lg:px-3">
                    <p className="text-md my-6 lg:mt-0 text-justify md:text-left text-sm">
                      At First Packers and Movers, we specialize in house
                      relocation services, ensuring a seamless and hassle-free
                      moving experience. Our dedicated team of professionals is
                      equipped to handle every aspect of the process. From
                      meticulously packing your belongings and furniture with
                      utmost care to securely transporting them to your new
                      home, we prioritize the safety and integrity of your
                      possessions. Our streamlined approach and attention to
                      detail guarantee a smooth transition, allowing you to
                      settle into your new space with peace of mind. Trust First
                      Packers and Movers for a reliable and efficient house
                      relocation solution tailored to your specific needs.
                    </p>
                  </div>
                  <div className="w-full lg:w-1/5 mt-6 lg:mt-0 lg:px-4 text-center md:text-left">
                    <button
                      className="bg-transparent hover:bg-blue-500 text-blue-600 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                      onClick={() => (window.location.href = "/enquiry")}
                    >
                      Enquire now!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* office relocation */}
        <div className="container mt-16 mx-auto p-4 md:p-0">
          <div className="shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto">
            <div
              className="bg-cover bg-bottom border w-full md:w-1/3 h-64 md:h-auto relative"
              style={{
                backgroundImage:
                  "url('https://cdn.create.vista.com/api/media/small/251613186/stock-photo-handsome-movers-wrapping-cardboard-box')",
              }}
            >
              <div className="absolute text-xl">
                <i className="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer"></i>
              </div>
            </div>
            <div className="bg-white w-full md:w-2/3">
              <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
                <div className="bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
                  <div className="w-full lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left">
                    <h3 className="font-bold text-xl">Office Relocation</h3>
                    <p className="mb-0 mt-3 text-grey-dark text-sm italic">
                      abcdef
                    </p>
                    <hr className="w-1/4 md:ml-0 mt-4  border lg:hidden" />
                  </div>
                  <div className="w-full lg:w-3/5 lg:px-3">
                    <p className="text-md my-6 lg:mt-0 text-justify md:text-left text-sm">
                      At First Packers and Movers, we understand the intricacies
                      involved in office relocation, and we are committed to
                      providing a seamless transition for your business. Our
                      experienced team specializes in efficiently handling all
                      aspects of office relocation, including packing and
                      safeguarding your valuable equipment, files, and
                      furniture. We ensure minimal disruption to your business
                      operations by carefully coordinating the move, considering
                      your timelines and requirements. With our expertise in
                      logistics and attention to detail, we guarantee a smooth
                      and organized office relocation experience. Trust First
                      Packers and Movers to handle your office move
                      professionally, allowing you to focus on what matters most
                      - your business.
                    </p>
                  </div>
                  <div className="w-full lg:w-1/5 mt-6 lg:mt-0 lg:px-4 text-center md:text-left">
                    <button
                      onClick={() => (window.location.href = "/enquiry")}
                      className="bg-transparent hover:bg-blue-500 text-blue-600 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    >
                      Enquire now!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* packing unpacking */}
        <div className="container mt-16 mx-auto p-4 md:p-0">
          <div className="shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto">
            <div
              className="bg-cover bg-bottom border w-full md:w-1/3 h-64 md:h-auto relative"
              style={{
                backgroundImage:
                  "url('https://anjanapackersandmovers.com/packers/wp-content/uploads/2019/07/Packing_Unpacking_Services.jpg')",
              }}
            >
              <div className="absolute text-xl">
                <i className="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer"></i>
              </div>
            </div>
            <div className="bg-white w-full md:w-2/3">
              <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
                <div className="bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
                  <div className="w-full lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left">
                    <h3 className="font-bold text-xl">Packing Unpacking</h3>
                    <p className="mb-0 mt-3 text-grey-dark text-sm italic">
                      lmnopq
                    </p>
                    <hr className="w-1/4 md:ml-0 mt-4  border lg:hidden" />
                  </div>
                  <div className="w-full lg:w-3/5 lg:px-3">
                    <p className="text-md my-6 lg:mt-0 text-justify md:text-left text-sm">
                      At First Packers and Movers, we go beyond just relocation
                      services. We offer comprehensive packing and unpacking
                      solutions for your goods and furniture. Our skilled team
                      is trained in efficient packing techniques, ensuring the
                      utmost protection for your belongings during transit. We
                      carefully handle and label each item, making unpacking a
                      breeze at your new location. Whether it's fragile items,
                      bulky furniture, or delicate electronics, we prioritize
                      their safety and ensure they reach their destination
                      intact. Trust First Packers and Movers to handle the
                      meticulous packing and unpacking of your goods, providing
                      you with a stress-free moving experience from start to
                      finish.
                    </p>
                  </div>
                  <div className="w-full lg:w-1/5 mt-6 lg:mt-0 lg:px-4 text-center md:text-left">
                    <button
                      onClick={() => (window.location.href = "/enquiry")}
                      className="bg-transparent hover:bg-blue-500 text-blue-600 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    >
                      Enquire now!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* loading unloading */}
        <div className="container mt-16 mb-8 mx-auto p-4 md:p-0">
          <div className="shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto">
            <div
              className="bg-cover bg-bottom border w-full md:w-1/3 h-64 md:h-auto relative"
              style={{
                backgroundImage:
                  "url('https://assets.website-files.com/5876c7374691a7d805ce8d19/5c06a8e6619e365ce2677433_Blog%20Header.jpg')",
              }}
            >
              <div className="absolute text-xl">
                <i className="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer"></i>
              </div>
            </div>
            <div className="bg-white w-full md:w-2/3">
              <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
                <div className="bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
                  <div className="w-full lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left">
                    <h3 className="font-bold text-xl">Loading Unloading</h3>
                    <p className="mb-0 mt-3 text-grey-dark text-sm italic">
                      {/* Moscow - Russia */}
                      XYZ
                    </p>
                    <hr className="w-1/4 md:ml-0 mt-4  border lg:hidden" />
                  </div>
                  <div className="w-full lg:w-3/5 lg:px-3">
                    <p className="text-md my-6 lg:mt-0 text-justify md:text-left text-sm">
                      When it comes to loading and unloading, First Packers and
                      Movers excels in providing exceptional services. Our
                      dedicated team of professionals understands the importance
                      of these crucial stages in the moving process. With
                      meticulous attention to detail, we ensure the safe and
                      efficient loading of your belongings onto our specially
                      equipped vehicles. Our skilled personnel utilize proper
                      techniques and equipment to securely unload your items at
                      your destination, ensuring their integrity and preventing
                      any damage. Count on First Packers and Movers for seamless
                      loading and unloading services, allowing you to relax and
                      focus on settling into your new space with confidence.
                    </p>
                  </div>
                  <div className="w-full lg:w-1/5 mt-6 lg:mt-0 lg:px-4 text-center md:text-left">
                    <button
                      className="bg-transparent hover:bg-blue-500 text-blue-600 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                      onClick={() => (window.location.href = "/enquiry")}
                    >
                      Enquire now!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
