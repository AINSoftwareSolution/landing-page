import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mx-auto my-3">
      <footer className="text-center text-white bg-gray-900 py-6">
        <section className="mt-5 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h6 className="text-lg font-bold uppercase mb-4">EASYBOOKINGS.IN</h6>
                <p className="text-gray-300">
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>
              <div>
                <h6 className="text-lg font-bold uppercase mb-4">Products</h6>
  
                <ul>
                  <li className="mb-2">
                    <Link href="/#home" className="text-gray-300 hover:text-white">
                      Home
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/#" className="text-gray-300 hover:text-white">
                      About
                    </Link>
                </li>
                  <li className="mb-2">
                    <Link href="/#services" className="text-gray-300 hover:text-white">
                      Services
                    </Link>
                  </li>   
                </ul>
                <ul className="flex space-x-2">
    <li className="text-lg">We Support:</li>
  
<li className="text-lg">
  <FaCcMastercard className="text-4xl" />
</li>
    
<li className="text-lg">
  <FaCcMastercard className="text-4xl" />
</li>
    
<li className="text-lg">
  <FaCcMastercard className="text-4xl" />
</li>
   
<li className="text-lg">
  <FaCcMastercard className="text-4xl" />
</li>
    
<li className="text-lg">
  <FaCcMastercard className="text-4xl" />
</li>
</ul>

              </div>
              {/* Useful Links */}
              <div>
                <h6 className="text-lg font-bold uppercase mb-4">Useful Links</h6>
              
                <ul>
                  <li>
                    <button
                      type="button"
                      className="py-2 px-4 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 font-bold rounded-lg text-md text-center"
                    >
                      Call Now
                    </button>
                  </li>
                  <div className="flex flex-wrap-mx-6 space-x-6 px-8 py-8">
            <Link href="#" className="text-white text-2xl hover:text-gray-300">
            <FaFacebook />

            </Link>
            <Link href="#" className="text-white text-2xl hover:text-gray-300">
            <FaInstagramSquare /> 
            </Link>
            <Link href="#" className="text-white text-2xl hover:text-gray-300">
            <FaLinkedinIn />
            </Link>
            <Link href="#" className="text-white text-2xl hover:text-gray-300">
            <FaGithub />
            </Link>
          </div>
                </ul>
                
              </div>

              {/* Contact */}
              <div>
                <h6 className="text-lg font-bold uppercase mb-4">Contact</h6>
          
                <ul>
                  <li className="mb-2">
                    <i className="fas fa-home mr-2"></i>
                    New York, NY 10012, US
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-envelope mr-2"></i>
                    info@example.com
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-phone mr-2"></i> + 01 234 567 88
                  </li>
                  <li>
                    <i className="fas fa-print mr-2"></i> + 01 234 567 89
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Copyright */}
        <div className="text-center p-3 bg-black bg-opacity-20 text-gray-400">
          © 2024 Copyright:
          <Link
            href="https://landingpage.com/"
            className="text-gray-400 hover:text-gray-300"
          >
            landingpage.com
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
