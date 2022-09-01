import { useState } from "react";
import MenuItems from "./MenuItems";
import { menuItemsData } from "./menuItemsData";
import logoPbaHeader from "../assets/img/logo-pba.png";
import SearchBar from "./SearchBar";

export default function NavNew() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <nav className="mt-2 bg-main">
        <div className={`container mx-auto py-2 ${navOpen && "flex justify-end items-center"} `}>
          <div className="w-full space-x-3 flex justify-between">
            <div className="w-full">
              <SearchBar />
            </div>
            {/* button nav untuk membuka nav */}
            <button
              onClick={() => setNavOpen(true)}
              className={`${
                navOpen ? "invisible" : "visible"
              } active:outline-none space-y-1`}
            >
              <span
                className={`${
                  navOpen && "-rotate-45"
                } block h-[3px] w-5 bg-white rounded-full origin-right transition-transform duration-300`}
              ></span>
              <span
                className={`${
                  navOpen && "opacity-0"
                } block h-[3px] w-5 bg-white rounded-full transition-opacity duration-200`}
              ></span>
              <span
                className={`${
                  navOpen && "rotate-45"
                } block h-[3px] w-5 bg-white rounded-full origin-right transition-transform duration-300`}
              ></span>
            </button>
          </div>

          {/* button nav untuk menutup nav */}
          <button
            onClick={() => setNavOpen(false)}
            className={`${
              navOpen ? "visible" : "invisible"
            } fixed z-[10000]  active:outline-none space-y-1`}
          >
            <span
              className={`${
                navOpen && "-rotate-45"
              } block h-[3px] w-5 bg-white shadow-white shadow-md rounded-full origin-right transition-transform duration-300`}
            ></span>
            <span
              className={`${
                navOpen && "opacity-0"
              } block h-[3px] w-5 bg-white shadow-white shadow-md rounded-full transition-opacity duration-200`}
            ></span>
            <span
              className={`${
                navOpen && "rotate-45"
              } block h-[3px] w-5 bg-white shadow-white shadow-md rounded-full origin-right transition-transform duration-300`}
            ></span>
          </button>

          {/* button full screen untuk menutup nav */}
          <button
            onClick={() => setNavOpen(false)}
            className={`${
              navOpen === true ? "visible opacity-100" : "invisible opacity-0"
            } active:outline-none fixed h-screen w-screen inset-0 z-[9999] transition-opacity duration-300 bg-slate800/60`}
          ></button>

          <div
            className={`${
              navOpen === true && "translate-x-full"
            } fixed z-[10000] bg-main h-screen w-60 top-0 -left-60 transition-transform duration-500 p-4`}
          >
            <div className="">
              <img src={logoPbaHeader} alt="Logo-Inaifas-Header" />
            </div>
            <div className="my-2">
              <ul>
                {menuItemsData.map((menu, index) => (
                  <MenuItems menu={menu} setNavOpen={setNavOpen} key={index} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
