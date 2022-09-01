export default function Dropdown({ submenus, menuItemsOpen, setMenuOpen }) {
  return (
    <ul
      className={`${
        menuItemsOpen
          ? "block"
          : "hidden"
      } ml-2 border-l-[1px] border-second/20 lg:absolute lg:z-[10000] lg:inset-0 lg:bg-main lg:m-0 lg:w-fit lg:whitespace-nowrap `}
    >
      {submenus.map((submenu, index) => (
        <li onClick={()=>setMenuOpen(false)} key={index} className={`text-slate200 lg:`}>
          {submenu.link}
        </li>
      ))}
    </ul>
  );
}
