import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AgraImg, BangkokImg, DubaiImg, GoaImg, KashmirImg, KeralaImg, MaldivesImg, OOtyImg, ShimlaImg } from '../utilis/Images'

const Destination = () => {
  return (
    <>
<section className="trending py-12 bg-gray-100">
  <div className="container mx-auto">
    <div className="section-title mb-12 w-2/4 lg:w-1/2 mx-auto text-center">
      <h4 className="mb-2 text-theme1 text-lg font-semibold uppercase tracking-wide">
        Top Destinations
      </h4>
      <h2 className="mb-4 text-3xl lg:text-4xl font-bold text-gray-800">
        Explore <span className="text-theme">Top Destinations</span>
      </h2>
      <p className="text-gray-600">
        Discover the world&apos;s most popular travel destinations with our
        exclusive tour packages. Unforgettable experiences await!
      </p>
    </div>
    <div className="flex flex-wrap -mx-4 px-8">
      {[
        { img: GoaImg, title: "Goa", subtitle: "Bagha Beach", tours: 32 },
        { img: KeralaImg, title: "Munnar ", subtitle: "Kerala", tours: 15 },
        { img: OOtyImg, title: "OOty", subtitle: "TamilNadu", tours: 22 },
        { img: KashmirImg, title: "Kashmir", subtitle: "Gulmarg", tours: 25 },
        { img: ShimlaImg, title: "Shimla", subtitle: "Himachal Pradesh", tours: 12 },
        { img: AgraImg, title: "Agra ", subtitle: "Taj Mahal", tours: 10 },
        { img: DubaiImg, title: "Dubai", subtitle: "Dubai city", tours: 18 },
        { img: BangkokImg, title: "Thailand", subtitle: "thailand", tours: 15 },
        { img: MaldivesImg, title: "Maldives", subtitle: "Asia", tours: 20 },
      ].map((dest, index) => (
        <div key={index} className="w-full lg:w-1/3 xl:w-1/3 px-4 mb-8">
          <div className="relative overflow-hidden rounded-lg shadow-lg bg-white group">
            <div className="overflow-hidden">
              <Image
                src={dest.img}
                alt={dest.title}
                className="w-full h-80 object-cover transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-1"
              />
            </div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 transition-opacity duration-300 group-hover:opacity-90">
              <h5 className="text-white mb-1 font-bold">
                <Link href="tour-grid.html">{dest.title}</Link>
              </h5>
              <h3 className="text-white font-bold text-xl">{dest.subtitle}</h3>
              <span className="text-sm text-white font-bold bg-theme py-1 px-3 mt-2 inline-block rounded self-end">
                {dest.tours} Tours
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    </>
  )
}

export default Destination