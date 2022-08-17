import { useState } from "react";
import { FaBars, FaWindowClose } from "react-icons/fa";
import { EmailData, WhatsappData } from "./ContactData";
import MenuDropDown from "./MenuDropDown";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  
  return (
    <>
      <nav className="flex flex-wrap items-center px-0 py-2 bg-main mt-2 md:mt-4 lg:mt-8 lg:py-4">
        <div className="container mx-auto flex flex-wrap items-center justify-center">
          <div className="w-full relative flex items-center justify-between md:justify-end lg:w-auto lg:static lg:block">
            <div className="hidden text-white md:flex space-x-3 lg:hidden mr-4">
              <WhatsappData />
              <EmailData />
            </div>
            <div className="lg:hidden w-full mr-4">
              <SearchBar />
            </div>
            <div>
              <button
                onClick={() => setNavbarOpen(!navbarOpen)}
                className={`relative cursor-pointer text-2xl text-white leading-none px-0 py-1 rounded bg-transparan block hover:text-second ${
                  navbarOpen && "text-second"
                } outline-none focus:outline-none lg:hidden`}
                type="button"
              >
                <FaBars
                  className={`absolute opacity-1  duration-300 ${
                    navbarOpen &&
                    " -translate-y-1 opacity-0 transition-all duration-300"
                  }`}
                />
                <FaWindowClose
                  className={`relative opacity-0 -bottom-1 -translate-y-1 transition-all duration-300 ${
                    navbarOpen &&
                    "opacity-100  -translate-y-1 transition-all duration-300"
                  }`}
                />
              </button>
            </div>
          </div>
          <div
            className={
              "lg:flex w-full lg:border-0" +
              (navbarOpen ? " flex border-t-2 border-t-orange mt-2" : " hidden")
            }
          >
            <ul onClick={()=>{setNavbarOpen(false)}} className="mt-2 flex flex-col grow list-none lg:mt-0 lg:flex-row  lg:justify-between">
              <MenuDropDown></MenuDropDown>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
