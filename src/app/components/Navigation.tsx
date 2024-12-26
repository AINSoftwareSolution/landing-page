"use client";
import React, { useState, useEffect } from "react";
import { MdKeyboardArrowDown, MdMenu, MdClose } from "react-icons/md";
import Link from "next/link";
import { LogoImg } from "../utilis/Images";
import Image from "next/image";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-colors duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
   <div className="container mx-auto px-2 lg:px-12 flex items-center justify-between">
  <Link
    href="/#home"
    className="flex items-center space-x-3 rtl:space-x-reverse"
  >
    <div
      className="relative p-4"
      style={{
        background: "rgba(255, 255, 255, 0.3)", 
        boxShadow: "0 0 15px rgba(255, 255, 255, 0.6)", 
        backdropFilter: "blur(10px)", 
      }}
    >
      {/* Logo image */}
      <Image
        src={LogoImg}
        alt="Logo"
        width={225}
        height={225}
        priority
        className="object-contain"
        style={{
          filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))",
        }}
      />
    </div>
  </Link>

  {/* Hamburger icon for mobile */}
  <button
    className="text-2xl md:hidden block text-gray-900"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    {menuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
  </button>

  {/* Navbar items */}
  <div
    className={`${
      menuOpen ? "block" : "hidden"
    } md:flex md:items-center absolute md:static top-full left-0 right-0 bg-white md:bg-transparent transition-all duration-300`}
  >
    <ul className="flex flex-col md:flex-row md:space-x-6 font-medium bg-white md:bg-transparent p-4 md:p-0 space-y-4 md:space-y-0">
      <li>
        <Link
          href="/#home"
          className="block py-2 px-3 rounded font-semibold text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/#about"
          className="block py-2 px-3 rounded font-semibold text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          href="/#services"
          className="block py-2 px-3 rounded font-semibold text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
        >
          Services
        </Link>
      </li>
      <li>
        <a
          href="tel:+91-7709502204"
          className="py-2 px-4 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 font-bold rounded-lg text-md text-center inline-block"
        >
          Call Now
        </a>
      </li>
    </ul>
  </div>
</div>


    </div>
  );
};

export default Navbar;
