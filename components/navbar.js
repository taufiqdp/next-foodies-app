"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import logoImg from "@/assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black shadow border-b-2 border-neutral-700 w-full fixed top-0 left-0 z-50">
      <div
        className={`${
          isOpen ? "h-40" : "h-16"
        } md:h-16 mx-auto md:px-4 container flex items-center justify-between transition-all duration-300 ease-in-out`}
      >
        {/* <div className="md:absolute md:left-4 order-2 md:order-1 mx-auto">
          <Link href="/">
            <Image src={logoImg} alt="Logo" width={50} height={50} />
          </Link>
        </div> */}

        <div className="text-gray-500 w-full">
          <ul
            className={`${
              isOpen
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0 md:opacity-100 md:max-h-[500px]"
            } md:flex md:justify-center px-4 transition-all duration-300 ease-in-out overflow-hidden`}
          >
            <li className="md:px-4 md:py-2 hover:text-rose-50">
              <Link href="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className="md:px-4 md:py-2 hover:text-rose-50">
              <Link href="/meals" onClick={toggleMenu}>
                Meals
              </Link>
            </li>
            <li className="md:px-4 md:py-2 hover:text-rose-50">
              <Link href="/community" onClick={toggleMenu}>
                Community
              </Link>
            </li>
            <li className="md:px-4 md:py-2 hover:text-rose-50">
              <Link href="/about" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li className="md:px-4 md:py-2 hover:text-rose-50">
              <Link href="/contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="order-3 md:hidden flex fixed right-3 top-5">
          <button
            className="text-gray-500 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
