import Image from "next/image";
import Destination from "./components/Destination";
import Service from "./components/service";
import { BannerImg, BeachImg, MountainImg, RoadImg } from "./utilis/Images";
import Testimonial from "./components/Testimonial";
// import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <>
      <section className=" w-full">
        <div
          className=" mx-auto flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `url(${BannerImg.src})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            height: "90vh",
          }}
        >      
        </div>
      </section>
    <Service />   
    <Destination /> 
     <Testimonial /> 
    </>
  );
}
