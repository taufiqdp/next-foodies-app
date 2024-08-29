"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black shadow border-b-2 border-neutral-700 w-full fixed top-0 left-0 z-50">
      <div className="md:h-16 h-20 mx-auto md:px-4 container flex items-center justify-center">
        <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
          <ul
            className={`md:flex justify-between ${
              isOpen ? "block" : "hidden"
            } md:block`}
          >
            <li className="md:px-4 md:py-2 hover:text-rose-50">
              <Link href="/">Home</Link>
            </li>
            <li className="md:px-4 md:py-2 hover:text-rose-50">
              <Link href="/meals">Meals</Link>
            </li>
            <li className="md:px-4 md:py-2 hover:text-rose-50">
              <Link href="/community">Community</Link>
            </li>
            <li className="md:px-4 md:py-2 hover:text-rose-50">
              <Link href="/about">About</Link>
            </li>
            <li className="md:px-4 md:py-2 hover:text-rose-50">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden order-1 flex ml-4 fixed right-5">
          <button className="text-gray-500 focus:outline-none">
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
