export default function Dropdown({ submenus, menuItemsOpen, setMenuItemsOpen, setNavOpen }) {
  const close = ()=>{
    setNavOpen(false);
    setMenuItemsOpen(false);
  }
  return (
    <ul
      className={`${
        menuItemsOpen
          ? "block"
          : "hidden"
      } lg:group-hover:block ml-2 border-l-[1px] border-second/20 lg:bg-second lg:absolute lg:z-[1000] lg:ml-0 lg:mt-1 lg:p-0.5 lg:shadow-white lg:shadow-sm lg:rounded-md lg:bg-second/40 lg:drop-shadow-lg lg:backdrop-blur-md`}
    >
      {submenus.map((submenu, index) => (
        <li onClick={()=>close()} key={index} className={`text-slate200 lg:text-base lg:hover:bg-orange lg:rounded-md lg:text-white`}>
          {submenu.link}
        </li>
      ))}
    </ul>
  );
}
