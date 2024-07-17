"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import image from "../../public/images/logo.png";
import "../../styles/nav.css";
import "../../styles/index.css";
import { FaChevronDown } from "react-icons/fa";
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
    
  return (
    <>
      <header
        className={`header fixed top-0 left-0 z-40 flex w-full items-center  mt-[-8px] 
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
            <div className="flex fade-in justify-between transform bg-transparent">
              <div>
                <button
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <HiOutlineBars3/>
                </button>

                <nav
                  id="navbarCollapse"
                  className={`navbar hidden md:block absolute mr-10 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-primary py-4 px-6 duration-300 ease-out transition-transform transform dark:border-body-color/20 dark:bg-white lg:visible lg:static lg:w-auto lg:border-none lg:bg-dark lg:p-0 lg:opacity-100`}
                >
                  <ul className="block lg:flex  bg-black backdrop-blur-sm lg:space-x-8 top-0 left-0 mr-8 h-full  text-white">
                    <li className="group relative">
                      <Link
                        href="."
                        className={`nav hover ml-3 flex py-2 text-white text-md  font-bold group-hover:opacity-70 lg:mr-5 lg:inline-flex lg:py-6 lg:px-0`}
                        
                      >
                        <span className={""}>
                          Home
                        </span>
                        <span className="my-1 ml-2  font-bold">
                          <FaChevronDown className={"drop"} />
                        </span>
                      </Link>
                    </li>

                    <li>
                      <Link
                        href=""
                        className={`nav hover flex py-2  text-white  font-bold group-hover:opacity-70 lg:mr-5 lg:inline-flex lg:py-6 lg:px-0`}
                       
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
                        href="/projects"
                        className={`nav hover flex py-2  text-white  font-bold group-hover:opacity-70 lg:mr-5 lg:inline-flex lg:py-6 lg:px-0`}
                        
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
                        className={`nav hover flex py-2  text-white  font-bold group-hover:opacity-70 lg:mr-5 lg:inline-flex lg:py-6 lg:px-0`}
                       
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
                        className={`nav hover flex py-2  text-white  font-bold group-hover:opacity-70 lg:mr-5 lg:inline-flex lg:py-6 lg:px-0`}
                        
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
    </>
  );
};

export default Header;
