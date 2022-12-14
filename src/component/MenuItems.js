import { useState } from "react";
import Dropdown from "./Dropdown";
import { FaAngleRight } from "react-icons/fa";

export default function MenuItems({ menu, setNavOpen }) {
  const [menuItemsOpen, setMenuItemsOpen] = useState(false);
  return (
    <li
      onClick={() => setMenuItemsOpen(!menuItemsOpen)}
      // onMouseOver={() => {
      //   setMenuItemsOpen(true);
      // }}
      onMouseLeave={() => setMenuItemsOpen(false)}
      className={`group text-white text-sm py-1 lg:text-base`}
    >
      {menu.submenu ? (
        <>
          <button
            className="active:bg-second/20 active:outline-none focus:outline-none w-full flex justify-between items-center lg:active:bg-none"
          >
            {menu.title}
            <span
              className={`${
                menuItemsOpen && "rotate-90"
              } transition-transform duration-200 lg:hidden`}
            >
              <FaAngleRight />
            </span>
          </button>
          <Dropdown submenus={menu.submenu} menuItemsOpen={menuItemsOpen} setMenuItemsOpen={setMenuItemsOpen} setNavOpen={setNavOpen} />
        </>
      ) : (
        <button onClick={()=>setNavOpen(false)} className={`w-full active:bg-second/20`}>{menu.link}</button>
      )}
    </li>
  );
}
