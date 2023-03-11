import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
      className="fixed top-0 left-0 right-0 z-50 flex flex-wrap items-center justify-between md:px-12 lg:px-24 py-4 bg-white backdrop-blur-lg shadow-md"
      data-aos="fade-down"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <div className="flex items-center w-[50px] h-[50px]">
            <img src="/logo-himatif.png" alt="" className="object-cover" />
            <Link to="/" className="">
              <button className="pl-2 text-2xl font-semibold text-[#020181]">
                Himatif
              </button>
            </Link>
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
              <Link
                className="px-3 py-2 inline-block lg:flex items-center text-md uppercase font-bold leading-snug"
                to="/"
              >
                <button
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  className="ml-2 flex items-center text-[20px] font-medium"
                >
                  Home
                </button>
              </Link>
            </li>
            <li className="">
              <Link
                className="px-3 py-2 inline-block lg:flex items-center text-md uppercase font-bold leading-snug"
                to="/regist"
              >
                <button
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  className="ml-2 flex items-center text-[20px] font-medium"
                >
                  Regist
                </button>
              </Link>
            </li>
            <li className="">
              <Link
                className="px-3 py-2 inline-block lg:flex items-center text-md uppercase font-bold leading-snug"
                to="/peserta"
              >
                <button
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  className="ml-2 flex items-center text-[20px] font-medium"
                >
                  Peserta
                  <i className="text-lg leading-lg"></i>
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
