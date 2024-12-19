import React from 'react'
import { MdFlight } from "react-icons/md";
import { FaHotel } from "react-icons/fa6";
import { FaBusAlt } from "react-icons/fa";
import { FaTrainSubway } from "react-icons/fa6";
import { MdHolidayVillage } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";

const service = () => {
  return (
   <>
   <section className="about-us pb-6 pt-10 bg-center" id="services">
      <div className="container mx-auto px-8">
        <div className="section-title mb-6 w-1/2 mx-auto text-center">
          <h2 className="text-3xl font-bold">
            <span className="text-3xl font-bold">Our Services</span>
          </h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </p>
        </div>
        <div className="about-us">
          <div className="flex flex-wrap -mx-4">
            {/* Card 1 */}
            <div className="lg:w-1/3 md:w-1/2 sm:w-full mb-6 px-4">
              <div className="about-us-item p-6 border rounded-lg shadow-md bg-white hover:bg-red-500 hover:text-white ease-in-out transform hover:scale-105 transition duration-300 h-full">
                <div className="about-us-content text-center">
                  <div className="about-us-icon mb-4">
                    <MdFlight className="text-blue-500 text-5xl mx-auto group-hover:text-white" />
                  </div>
                  <h4 className="font-bold text-xl mb-2">Flight Ticket Booking</h4>
                  <p className="text-md">
                    Fly to your dream destinations at unbeatable prices. With seamless booking and 24/7 support, your next adventure is just a click away.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="lg:w-1/3 md:w-1/2 sm:w-full mb-6 px-4">
              <div className="about-us-item group p-6 border rounded-lg shadow-md bg-white hover:bg-red-500 hover:text-white ease-in-out transform hover:scale-105 transition duration-300 h-full">
                <div className="about-us-content text-center">
                  <div className="about-us-icon mb-4">
                    <FaHotel className="text-blue-500 text-5xl mx-auto" />
                  </div>
                  <h4 className="text-gray-800 font-semibold text-xl mb-2 group-hover:text-white transition duration-300">Hotel Booking</h4>
                  <p className="text-gray-600 text-md group-hover:text-white transition duration-300">
                    Find your perfect stay at unbeatable prices. Book your ideal hotel in just a few clicks and enjoy exclusive deals.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="lg:w-1/3 md:w-1/2 sm:w-full mb-6 px-4">
              <div className="about-us-item group p-6 border rounded-lg shadow-md bg-white hover:bg-red-500 hover:text-white ease-in-out transform hover:scale-105 transition duration-300 h-full">
                <div className="about-us-content text-center">
                  <div className="about-us-icon mb-4">
                    <FaBusAlt className="text-blue-500 text-5xl mx-auto" />
                  </div>
                  <h4 className="text-gray-800 font-semibold text-xl mb-2 group-hover:text-white transition duration-300">Bus Booking</h4>
                  <p className="text-gray-600 text-md group-hover:text-white transition duration-300">
                    Drive your way to convenience! Book a car in minutes and enjoy seamless journeys at unbeatable rates.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 4 */}
            <div className="lg:w-1/3 md:w-1/2 sm:w-full mb-6 px-4">
              <div className="about-us-item group p-6 border rounded-lg shadow-md bg-white hover:bg-red-500 hover:text-white ease-in-out transform hover:scale-105 transition duration-300 h-full">
                <div className="about-us-content text-center">
                  <div className="about-us-icon mb-4">
                    <FaTrainSubway className="text-blue-500 text-5xl mx-auto" />
                  </div>
                  <h4 className="text-gray-800 font-semibold text-xl mb-2 group-hover:text-white transition duration-300">Train Booking</h4>
                  <p className="text-gray-600 text-md group-hover:text-white transition duration-300">
                    Access major train networks across the country with flexible scheduling and multiple comfort classes.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 5 */}
            <div className="lg:w-1/3 md:w-1/2 sm:w-full mb-6 px-4">
              <div className="about-us-item group p-6 border rounded-lg shadow-md bg-white hover:bg-red-500 hover:text-white ease-in-out transform hover:scale-105 transition duration-300 h-full">
                <div className="about-us-content text-center">
                  <div className="about-us-icon mb-4">
                    <MdHolidayVillage className="text-blue-500 text-5xl mx-auto" />
                  </div>
                  <h4 className="text-gray-800 font-semibold text-xl mb-2 group-hover:text-white transition duration-300">Holiday Package&apos;s</h4>
                  <p className="text-gray-600 text-md group-hover:text-white transition duration-300">
                    Explore curated vacation packages designed for unforgettable experiences. Enjoy exclusive deals for every destination.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 6 */}
            <div className="lg:w-1/3 md:w-1/2 sm:w-full mb-6 px-4">
              <div className="about-us-item group p-6 border rounded-lg shadow-md bg-white hover:bg-red-500 hover:text-white ease-in-out transform hover:scale-105 transition duration-300 h-full">
                <div className="about-us-content text-center">
                  <div className="about-us-icon mb-4">
                    <FaMoneyBillWave className="text-blue-500 text-5xl mx-auto" />
                  </div>
                  <h4 className="text-gray-800 font-semibold text-xl mb-2 group-hover:text-white transition duration-300"> Recharge & Bill Pay</h4>
                  <p className="text-gray-600 text-md group-hover:text-white transition duration-300">
                    Get expert travel guides and tips for your next adventure. Make every trip seamless and enjoyable with our advice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   </section>
   </>
  )
}

export default service;
