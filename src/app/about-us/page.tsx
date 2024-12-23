"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { AboutImg } from "../utilis/Images";
import AOS from "aos";
import 'aos/dist/aos.css';
const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
    
  return (

    <>
      <div className="bg-white" id="about">
        <div className="container px-12 py-8" data-aos="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Image Section */}
            <div className="flex justify-center items-center" data-aos="zoom-out" data-aos-delay="100">
              <Image
                src={AboutImg}
                alt="About easybooking"
                className="w-full max-w-md md:max-w-lg h-auto object-cover rounded-lg"
              />
            </div>
            {/* Text Section */}
            <div className="space-y-4 md:space-y-6" data-aos="zoom-out" data-aos-delay="100">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-700">
                Welcome to EasyBookings.in
              </h2>
              <p className="text-gray-700">
              At EasyBookings.in, we simplify your travel plans with a full range of services to meet all your needs. Whether you&apos;re booking flights to your dream destination, securing a comfortable hotel for your stay, arranging a smooth train journey, or finding affordable bus tickets for your trip, we&apos;ve got you covered. Our platform offers seamless booking, unbeatable prices, and 24/7 customer support to ensure your travel experience is effortless and enjoyable from start to finish.
              </p>
            </div>
          </div>
        </div>
      </div>                     
    </>
  );
};
export default About;
