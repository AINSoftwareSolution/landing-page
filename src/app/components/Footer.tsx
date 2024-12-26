import Link from "next/link";
import React from "react";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
} from "react-icons/fa";
import { LogoImg } from "../utilis/Images";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white">
      <footer className="py-12">
        <div className="container mx-auto px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
            <div
  className="relative " 
>
  <Image
    src={LogoImg}
    alt="Logo"
    width={225}
    height={225}
    priority
    className="object-contain rounded-lg " 
  />
</div>


              <p className="text-gray-400 mt-4 ">
              At EasyBookings.in, we simplify your travel plans with a full range of services to meet all your needs.
              </p>
            </div>

            {/* Column 2 */}
            <div>
              <h6 className="text-lg font-bold uppercase mb-4">Products</h6>
              <ul>
                <li className="mb-2">
                  <Link
                    href="/#home"
                    className="text-gray-400 hover:text-white"
                  >
                    Home
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/#about"
                    className="text-gray-400 hover:text-white"
                  >
                    About
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/#services"
                    className="text-gray-400 hover:text-white"
                  >
                    Services
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h6 className="text-lg font-bold uppercase mb-4">Follow Us</h6>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  <FaFacebook />
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  <FaInstagram />
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  <FaLinkedin />
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  <FaGithub />
                </Link>
              </div>
              <h6 className="text-lg font-bold uppercase mt-6 mb-4">
                We Support
              </h6>
              <div className="flex space-x-4">
                <FaCcVisa className="text-4xl text-gray-400 hover:text-white" />
                <FaCcMastercard className="text-4xl text-gray-400 hover:text-white" />
                <FaCcPaypal className="text-4xl text-gray-400 hover:text-white" />
              </div>
            </div>

            {/* Column 4 */}
            <div>
              <h6 className="text-lg font-bold uppercase mb-4">Contact Us</h6>
              <ul>
                <li className="mb-2">
                  <span className="block text-gray-400">
                    The VUE , Office No. 09, Parge Colony, Kondhwa, Pune, 411048
                  </span>
                </li>
                <li className="mb-2">
                  <span className="block text-gray-400">info@easybookings.in</span>
                </li>
                <li className="mb-2">
                  <span className="block text-gray-400">+91-7709502204</span>
                </li>
                
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center bg-black bg-opacity-20 py-4">
          <p className="text-sm text-gray-500">
            © 2024 Copyright:{" "}
            <Link
              href="https://Easybooking.in/"
              className="text-gray-400 hover:text-white"
            >
              Easybookings.in
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
