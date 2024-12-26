import Destination from "./components/Destination";
import Service from "./components/service";
import { AboutImg, BeachImg, BusImg, FlightImg, HotelImg, MountainImg, RoadImg, TrainImg } from "./utilis/Images";
import Testimonial from "./components/Testimonial";
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
  {/* Welcome section start */}
  <div className="welcome mt-20">
  <div className="text-center px-4">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
      <strong>Welcome To</strong> 
      <strong className="text-blue-600"> Easy</strong>
      <strong className="text-orange-500"> Bookings</strong>
      <strong className="text-blue-600">.in</strong>
    </h1>
  </div>
</div>

  {/* welcome section end */}
    <Service />   
    <Destination /> 
     <Testimonial /> 
    </>
  );
}
