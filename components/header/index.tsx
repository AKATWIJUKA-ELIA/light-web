"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


import image from "../../public/images/logo.png";

import "../../styles/nav.css";
import "../../styles/index.css";
import { FaChevronDown } from "react-icons/fa";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const [sticky, setSticky] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);
  const [showModel2, setShowModel2] = useState(false);

  const handleStickyNavbar = () => {
    if (window.scrollY >= 700) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

//   const handleSubmenu = (index) => {
//     if (openIndex === index) {
//       setOpenIndex(-1);
//     } else {
//       setOpenIndex(index);
//     }
//   };
 
  return (
    <>
      <header
        className={`header top-0 left-0 z-40 flex w-full items-center  mt-[-8px] ${
          sticky
            ? " bg-dark !fixed !z-[9999] ! bg-opacity-100 shadow-sticky backdrop-blur-sm fade-in !transition dark:! dark:!bg-opacity-100"
            : "absolute"
        }`}
      >
        <div className="container">
          <div className="relative flex items-center justify-between">
            <div className="w-60 relative z-10">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py-2 lg:py-2" : "py-3"
                }`}
              >
                <Image
                  src={image}
                  alt="logo"
                  width={4572}
                  height={1296}
                  className="w-full dark:hidden"
                />
                <Image
                  src={image}
                  alt="logo"
                  width={100}
                  height={20}
                  className="hidden w-full dark:block"
                />
              </Link>
            </div>
            <div className="flex space-x-20 justify-between transform bg-white">
              <div>
                <button
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>

                <nav
                  id="navbarCollapse"
                  className={`navbar hidden lg:block absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-primary py-4 px-6 duration-300 ease-out transition-transform transform dark:border-body-color/20 dark:bg-white lg:visible lg:static lg:w-auto lg:border-none lg:bg-dark lg:p-0 lg:opacity-100`}
                >
                  <ul className="block lg:flex bg-white lg:space-x-8 top-0 left-0 h-full  text-black">
                    <li className="group relative">
                      <Link
                        href="."
                        className={`nav hover ml-3 flex py-2 text-black text-md  font-bold group-hover:opacity-70 lg:mr-5 lg:inline-flex lg:py-6 lg:px-0`}
                        
                      >
                        <span className={""}>
                          Programs
                        </span>
                        <span className="my-1 ml-2 dark:text-dark  text-bold">
                          <FaChevronDown className={"drop"} />
                        </span>
                      </Link>
                    </li>

                    <li>
                      <Link
                        href=""
                        className={`nav hover flex py-2  text-black  font-bold group-hover:opacity-70 lg:mr-5 lg:inline-flex lg:py-6 lg:px-0`}
                       
                      >
                        <span className={""}>
                          Student life
                        </span>
                        <span className="my-1 ml-2 dark:text-dark ">
                          <FaChevronDown className={"drop"} />
                        </span>
                      </Link>
                    </li>

                    <li>
                      <Link
                        href=""
                        className={`nav hover flex py-2  text-black  font-bold group-hover:opacity-70 lg:mr-5 lg:inline-flex lg:py-6 lg:px-0`}
                        
                      >
                        <span className={""}>
                          Research
                        </span>
                        <span className={"my-1 ml-2 dark:text-dark "}>
                          <FaChevronDown className={"drop"} />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href=""
                        className={`nav hover flex py-2  text-black  font-bold group-hover:opacity-70 lg:mr-5 lg:inline-flex lg:py-6 lg:px-0`}
                       
                      >
                        <span className={""}>
                          Campuses
                        </span>
                        <span className="my-1 ml-2 dark:text-dark ">
                          <FaChevronDown className={"drop"} />
                        </span>
                      </Link>
                    </li>

                    <li>
                      <Link
                        href=""
                        className={`nav hover flex py-2  text-black  font-bold group-hover:opacity-70 lg:mr-5 lg:inline-flex lg:py-6 lg:px-0`}
                        
                      >
                        <span className={""}>
                          Contact Us
                        </span>
                        <span className="my-1 ml-2 text-dark ">
                          <FaChevronDown className={"drop"} />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>

        </div>
      </header>
      
      {/* {navbarOpen && (
        <MobileNav setNavbarOpen={setNavbarOpen} navbarOpen={navbarOpen} />
      )} */}

      
    </>
  );
};

export default Header;
