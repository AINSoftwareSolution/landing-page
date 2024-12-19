"use client";
import React, { useState, useEffect } from "react";
import { MdKeyboardArrowDown, MdMenu, MdClose } from "react-icons/md";
import Link from "next/link";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled || menuOpen ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-2 py-4 lg:px-12 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span
            className={`text-xl font-bold ${
              isScrolled || menuOpen ? "text-gray-900" : "text-white"
            }`}
          >
            Logo
          </span>
        </Link>

        {/* Hamburger icon for mobile */}
        <button
          className={`text-2xl md:hidden block ${
            isScrolled || menuOpen ? "text-gray-900" : "text-black"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <MdClose size={24} />
          ) : (
            <MdMenu size={24} />
          )}
        </button>

        {/* Navbar items */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex md:items-center absolute md:static top-full left-0 right-0 md:bg-transparent transition-all duration-300`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 font-medium md:bg-transparent bg-white p-4 md:p-0 space-y-4 md:space-y-0">
            <li>
              <Link
                href="/#home"
                className={`block py-2 px-3 rounded font-semibold md:hover:bg-transparent md:hover:text-blue-700 ${
                  isScrolled || menuOpen
                    ? "text-gray-900 hover:bg-gray-100"
                    : "text-white"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/#about"
                className={`block py-2 px-3 rounded font-semibold md:hover:bg-transparent md:hover:text-blue-700 ${
                  isScrolled || menuOpen
                    ? "text-gray-900 hover:bg-gray-100"
                    : "text-white"
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/#services"
                className={`block py-2 px-3 rounded font-semibold md:hover:bg-transparent md:hover:text-blue-700 ${
                  isScrolled || menuOpen
                    ? "text-gray-900 hover:bg-gray-100"
                    : "text-white"
                }`}
              >
                Services
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="py-2 px-4 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 font-bold rounded-lg text-md text-center"
              >
                Call Now
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar