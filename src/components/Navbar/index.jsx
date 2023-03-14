import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <nav
      className="sticky top-0 left-0 right-0 z-50 flex flex-wrap items-center justify-between md:px-12 lg:px-24 py-4 bg-white backdrop-blur-lg shadow-md"
      data-aos="fade-down"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <div className="flex items-center w-[50px] h-[50px]">
            <img src="/logo-himatif.png" alt="" className="object-cover" />
            <a href="/" className="">
              <button className="pl-2 text-2xl font-semibold text-[#020181]">
                Himatif
              </button>
            </a>
          </div>

          <button
            className=" text-[#020181] cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <GiHamburgerMenu size={30} />
          </button>
        </div>
        <div
          className={
            "lg:flex flex-wrap items-center" + (navbarOpen ? "flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="">
              <a
                className="px-3 py-2 inline-block lg:flex items-center text-md uppercase font-bold leading-snug"
                href="/"
              >
                <button
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  className="ml-2 flex items-center text-[20px] font-semibold"
                >
                  Home
                </button>
              </a>
            </li>
            <li className="">
              <a
                className="px-3 py-2 inline-block lg:flex items-center text-md uppercase font-bold leading-snug"
                href="/daftar"
              >
                <button
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  className="ml-2 flex items-center text-[20px] font-semibold"
                >
                  Daftar
                </button>
              </a>
            </li>
            <li className="">
              <a
                className="px-3 py-2 inline-block lg:flex items-center text-md uppercase font-bold leading-snug"
                href="/peserta"
              >
                <button
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  className="ml-2 flex items-center text-[20px] font-semibold"
                >
                  Peserta
                  <i className="text-lg leading-lg"></i>
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
