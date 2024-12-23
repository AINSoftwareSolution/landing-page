import Destination from "./components/Destination";
import Service from "./components/service";
import { AboutImg, BeachImg, BusImg, FlightImg, HotelImg, MountainImg, RoadImg, TrainImg } from "./utilis/Images";
import Testimonial from "./components/Testimonial";
import About from "./about-us/page";
import Image from "next/image";
export default function Home() {
  return (
    <>
       <div className="service mt-20 ">
    <div className="flex flex-wrap">
      {/* Card 1 */}
      <div className="lg:w-1/4 md:w-1/2 sm:w-full mb-0">
        <div className="service-content text-center">
          <Image
            src={FlightImg}
            alt="About"
            className="w-full h-[90vh] object-cover"
          />
        </div>
      </div>
      {/* Card 2 */}
      <div className="lg:w-1/4 md:w-1/2 sm:w-full mb-0">
        <div className="service-content text-center">
          <Image
            src={HotelImg}
            alt="About"
            className="w-full h-[90vh] object-cover"
          />
        </div>
      </div>
      {/* Card 3 */}
      <div className="lg:w-1/4 md:w-1/2 sm:w-full mb-0">
        <div className="service-content text-center">
          <Image
            src={TrainImg}
            alt="About"
            className="w-full h-[90vh] object-cover"
          />
        </div>
      </div>
      {/* Card 4 */}
      <div className="lg:w-1/4 md:w-1/2 sm:w-full mb-0">
        <div className="service-content text-center">
          <Image
            src={BusImg}
            alt="About"
            className="w-full h-[90vh] object-cover"
          />
        </div>
      </div>
    </div>
  </div>
  
      <About />
    <Service />   
    <Destination /> 
     <Testimonial /> 
    </>
  );
}
