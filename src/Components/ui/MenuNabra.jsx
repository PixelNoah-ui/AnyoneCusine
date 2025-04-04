import { createContext, useContext, useRef, useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Link } from "react-router-dom";
import useOutsideClickHandler from "../hooks/useOutsideClickHandler";

const MenuContext = createContext();

function Menu({ children }) {
  const [openMenu, setOpenMenu] = useState("");
  const open = setOpenMenu;
  const close = () => setOpenMenu();

  return (
    <MenuContext.Provider value={{ close, open, setOpenMenu, openMenu }}>
      {children}
    </MenuContext.Provider>
  );
}

function Toggle({ open }) {
  const { setOpenMenu } = useContext(MenuContext);

  return (
    <div className="ml-2 flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 md:hidden dark:bg-slate-600 dark:transition-colors dark:duration-300 dark:hover:bg-slate-700">
      <HiOutlineMenu
        className="cursor-pointer text-xl"
        onClick={() => setOpenMenu(open)}
      />
    </div>
  );
}

function List({ children }) {
  const { openMenu, close } = useContext(MenuContext);

  return (
    <div
      className={`absolute top-0 right-0 z-50 h-screen w-full transform bg-white py-3 transition-transform duration-300 ease-in-out dark:bg-slate-800 ${
        openMenu ? "translate-x-0" : "translate-x-full"
      } sm:w-80 md:hidden`}
    >
      <div className="flex items-center justify-between border-b-1 px-8 pb-5">
        <div className="h-8">
          <img
            src="/images/Logo.png"
            alt="AnyoneCusine"
            className="h-full object-cover"
          />
        </div>
        <HiOutlineX
          className="cursor-pointer text-2xl text-slate-800 transition-colors duration-300 hover:text-slate-500 dark:text-white dark:hover:text-sky-100"
          onClick={close}
        />
      </div>
      {children}
    </div>
  );
}

function Button({ icon, name, path, onClick }) {
  const { close } = useContext(MenuContext);
  const ref = useRef();
  useOutsideClickHandler(ref, close);

  return (
    <li className="mt-4 list-none px-4" ref={ref}>
      <Link
        to={path}
        className="flex items-center justify-center gap-3 rounded-sm py-3 transition-colors duration-300 hover:bg-gray-100 sm:justify-start sm:pl-3 dark:hover:bg-slate-700"
        onClick={() => {
          if (name === "Log Out" && typeof onClick === "function") {
            onClick();
          } else {
            close();
          }
        }}
      >
        <span className="text-xl text-amber-600">{icon}</span>
        <span>{name}</span>
      </Link>
    </li>
  );
}

Menu.Toggle = Toggle;
Menu.List = List;
Menu.Button = Button;
export default Menu;
