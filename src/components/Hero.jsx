import React from "react";
import Typed from "react-typed";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {MdCall} from 'react-icons/md'
import { TbTruckDelivery } from "react-icons/tb";
import { LuShoppingCart } from "react-icons/lu";
import { FaDonate } from "react-icons/fa";

const SimpleSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay:true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:false,
    prevArrow:false,
  };
  return (
    <div className="slider-container w-full">
      <Slider className="" {...settings}>
        <div>
          <img
          className="w-full object-cover opacity-50 h-[610px] " 
            src="https://www.treehugger.com/thmb/LvSRRu3lVNEJhR6EBffMjuTeeVs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/computer--metal-and-iron-dump---11-172261628-cb98d1a1079745e9a13a25f240b8e2f1.jpg"
            alt=""
          />
        </div>
        <div>
        <img
          className="w-full object-cover opacity-50 h-[610px]" 
            src="https://c1.wallpaperflare.com/preview/753/27/613/scrap-scrap-metal-recycling-stainless.jpg"
            alt=""
          />
        </div>
        <div>
        <img
          className="w-full object-cover opacity-50 h-[610px]" 
            src="https://5.imimg.com/data5/SELLER/Default/2022/10/BD/BO/BP/105557973/industrial-plastic-scrap-500x500.jpg"
            alt=""
          />
        </div>
        <div>
        <img
          className="w-full object-cover opacity-50 h-[610px]" 
            src="https://imgtest.mir24.tv/uploaded/images/crops/2017/June/870x489_0x116_detail_crop_185078b684af77118ebd4f2313bb72da.jpg"
            alt=""
          />
        </div>

        <div>
        <img
          className="w-full object-cover opacity-50 h-[610px]" 
            src="https://img1.exportersindia.com/product_images/bc-full/2019/10/5874591/1570081591_p_5102369_1006056.jpeg"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="bg-white relative h-full w-screen">
      <SimpleSlider />
      <div className="w-screen mt-[-96px] h-screen mx-auto text-center flex-col justify-center absolute top-0 flex items-center" >
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
        Welcome to <span className="text-[#2caf2c]">bhangarwala</span>
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Type of Scrap
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["Metals", "Plastics", "Paper and Cardboard","Glass","Electronics","Copper","Aluminium","Furniture"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
         
        </div>
        <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
          we are accepting
          </p>
         
        <p className="md:text-2xl mx-5 text-xl font-bold text-gray-500">
        From metals to electronics, we pick up all types of recyclable scrap to lighten your load and the planet's burden.
        </p>
        <div className="flex gap-4 mb-5 mt-5">
        <button className="flex items-center justify-center gap-2 bg-[#2caf2c] hover:bg-[#258025] w-[180px] md:w-[220px] text-lg font-bold rounded-md mx-auto py-4 text-white">
        <MdCall size={24}/> Call Now
        </button>
        <button className="flex items-center justify-center gap-2 bg-[#2caf2c] hover:bg-[#258025] w-[180px] md:w-[220px] text-lg font-bold rounded-md mx-auto py-4 text-white">
        <LuShoppingCart size={24}/> Sell Now
        </button>
        </div>
        <div className="flex gap-4">
        <button className="flex items-center justify-center gap-2 bg-[#2caf2c] hover:bg-[#258025] w-[180px] md:w-[220px] text-lg font-bold rounded-md mx-auto py-4 text-white">
        <TbTruckDelivery size={24} /> Bulk Sell
        </button>
        <button className="flex items-center justify-center gap-2 bg-[#2caf2c] hover:bg-[#258025] w-[180px] md:w-[220px] text-lg font-bold rounded-md mx-auto py-4 text-white">
        <FaDonate size={24} />  Donate
        </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
