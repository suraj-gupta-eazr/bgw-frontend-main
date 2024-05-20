import React from "react";

const OurService = () => {
  return (
    <>
      <div className="w-full mb-20 px-4  bg-white">
      <h2 className="font-nunito text-4xl text-center mb-12 font-bold "> Get cash for your scrap!</h2>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8">
          <div className="flex-col border-slate-100 border-2 shadow-gray-300 rounded-3xl py-8 px-10 flex gap-3 w-full ">
            <h4 className="font-nunito text-2xl font-bold ">Our Features</h4>
            <ul style={{listStyleType:"disc"}} className="ml-3">
              <li className="service-list font-nunito text-[#797979]">Scrap Metal Recycling</li>
              <li className="service-list font-nunito text-[#797979]">Electronic Waste Recycling</li>
              <li className="service-list font-nunito text-[#797979]">Plastic Recycling</li>
              <li className="service-list font-nunito text-[#797979]">Paper Recycling</li>
              <li className="service-list font-nunito text-[#797979]">Glass Recycling</li>
              <li className="service-list font-nunito text-[#797979]">Battery Recycling</li>
            </ul>
          </div>
          <div className=" flex-col border-slate-100 border-2 shadow-gray-300 rounded-3xl py-8 px-10 flex gap-3 w-full ">
            <h4 className="font-nunito text-2xl font-bold ">Why Choose Us</h4>
            <ul style={{listStyleType:"disc"}} className="ml-3">
              <li className="service-list font-nunito text-[#797979]">Fair Prices</li>
              <li className="service-list font-nunito text-[#797979]">Efficient Service</li>
              <li className="service-list font-nunito text-[#797979]">Environmentally Friendly Practices</li>
              <li className="service-list font-nunito text-[#797979]">Flexible Pickup Options</li>
              <li className="service-list font-nunito text-[#797979]">Trained Staff for Safe Handling</li>
              <li className="service-list font-nunito text-[#797979]">Convenient Drop-off Locations</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full mb-10 px-4  bg-white">
      <h2 className="font-nunito text-4xl text-center mb-12 font-bold ">Testimonials</h2>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8">
          <div className="shadow-slate-50 flex-col border-slate-100 border-2 shadow-xl rounded-3xl py-8 px-10 flex gap-3 w-full ">
            
            <h4 className="font-nunito text-[#797979] ">
            "Great service! Fast and reliable. I've been using their services for years and never been disappointed."
            </h4>
            <h4 className="font-nunito text-2xl font-bold ">- Suleman Khan</h4>
          </div>
          <div className="shadow-xl flex-col border-slate-100 border-2 shadow-slate-50  rounded-3xl py-8 px-10 flex gap-3 w-full ">
            <h4 className="font-nunito text-[#797979]">
            "Excellent company to deal with. The staff is friendly and knowledgeable. Highly recommend!"
            </h4>
            <h4 className="font-nunito text-2xl font-bold ">- Suraj Gupta</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurService;
