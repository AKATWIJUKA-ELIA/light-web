"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import image from "../../public/images/logo.png";
import "../../styles/nav.css";
import "../../styles/index.css";
import { FaChevronDown } from "react-icons/fa";
import { HiBars3 } from "react-icons/hi2";
import { HiOutlineBars3 } from "react-icons/hi2";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const [sticky, setSticky] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);

  const handleStickyNavbar = () => {
    if (window.scrollY >= 100) {
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
        className={`header fixed top-0 left-0 z-40 flex w-full items-center backdrop-blur-sm mt-[-8px] 
            ${sticky ? " bg-dark !fixed !z-[9999] ! bg-opacity-100 shadow-sticky backdrop-blur-md fade-in !transition dark:! dark:!bg-opacity-100": "absolute" }`
      }
      >
        <div className=" mt-10 container">
          <div className=" relative flex items-center justify-between">
            <div className=" w-60 relative z-10">
              <Link
                href="/"
                className={`header-logo block fade-in-slower`}
              >
                <div className="md:ml-32   ">
                  <Image
                  className="rounded-lg bg-gradient-to-r from-indigo-600 to-purple-700 dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src={image}
                  alt="Light Logo"
                  width={120}
                  height={20}
                  priority
                  />
                  </div>
              </Link>
                  
            </div>
            <div className="flex fade-in backdrop-blur-sm justify-between transform bg-transparent">
              <div>
                <button
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  {/* <HiBars3 className=" size-12"/> */}
                  {/* <HiBarsArrowDown /> */}
                  <HiOutlineBars3/>
                  {/* <span
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
                  /> */}
                </button>

                <nav
                  id="navbarCollapse"
                  className={`navbar hidden lg:block absolute mr-10 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-primary py-4 px-6 duration-300 ease-out transition-transform transform dark:border-body-color/20 dark:bg-white lg:visible lg:static lg:w-auto lg:border-none lg:bg-dark lg:p-0 lg:opacity-100`}
                >
                  <ul className="block lg:flex  bg-white lg:space-x-8 top-0 left-0 h-full  text-black">
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
                          Services
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
                        Projects
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
                          About
                        </span>
                        <span className="my-1 ml-2 dark:text-dark ">
                          <FaChevronDown className={"drop"} />
                        </span>
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/contact"
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
