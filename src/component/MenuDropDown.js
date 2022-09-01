import { Popover } from "@headlessui/react";
import { menuItemsData } from "./menuItemsData";
import React from "react";

export default function MenuDropDown() {
  return (
    <>
      {menuItemsData.map((menu, index) => {
        return (
          <React.Fragment key={index}>
            <Popover.Group
              as="li"
              key={index.toString()}
              className="flex justify-center text-sm font-roboto text-white lg:text-base first-of-type:lg:pl-0 first-of-type:lg:justify-start last-of-type:lg:pr-1 last-of-type:lg:justify-end"
            >
              <Popover className="relative ">
                {({ open }) => (
                  <>
                    <Popover.Button
                      as="button"
                      
                      className={`${
                        open && "text-second"
                      } m-auto flex place-content-center transition-all duration-100 outline-none hover:scale-90 px-2 py-1 `}
                    >
                      {menu.link ? <>{menu.link}</> : `${menu.title}`}
                    </Popover.Button>
                    {menu.submenu ? (
                      <Popover.Panel
                        as="ul"
                        id="menu"
                        className={`flex flex-col list-none bg-second lg:absolute z-50 lg:shadow lg:shadow-white/50`}
                      >
                        {menu.submenu.map((sub, index) => {
                          return (
                            <li
                              key={index}
                              className={`transition-color duration-500 ${
                                open && "hover:bg-orange"
                              } whitespace-nowrap flex justify-center text-sm  text-white lg:text-base lg:justify-start group cursor-pointer`}
                              onClick={() => !open}
                            >
                              <p
                                onClick={() =>
                                  window.scrollTo({
                                    top: 0,
                                    left: 0,
                                    behavior: "smooth",
                                  })
                                }
                                className="transition-transform group-hover:scale-95 w-full"
                              >
                                {sub.link}
                              </p>
                            </li>
                          );
                        })}
                      </Popover.Panel>
                    ) : (
                      ""
                    )}
                  </>
                )}
              </Popover>
            </Popover.Group>
          </React.Fragment>
        );
      })}
    </>
  );
}
