import {
  HiOutlineMoon,
  HiOutlineShoppingCart,
  HiOutlineSun,
} from "react-icons/hi";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaClipboardList,
  FaHome,
  FaPhone,
  FaSignInAlt,
  FaUser,
  FaUtensils,
} from "react-icons/fa";
import Menu from "../ui/MenuNabra";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { DarkModeContext } from "../context/DarkMoode";
import useLogout from "../authentication/useLogout";

function Header() {
  const navigate = useNavigate();
  const { isDark, setIsDark } = useContext(DarkModeContext);
  const cartItems = useSelector((state) => state.cart.cartitem);
  const quantity = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);
  const { logOut } = useLogout();

  return (
    <header className="fixed top-0 left-0 z-40 w-full bg-white shadow-md dark:bg-slate-800 dark:text-white">
      <div className="flex items-center justify-between px-3 py-3">
        <NavLink to="/" className="h-10">
          <img
            src="/images/Logo.png"
            alt="AnyoneCusine"
            className="h-full w-full object-cover"
          />
        </NavLink>
        <div className="flex items-center gap-2">
          <ul className="hidden items-center gap-2 md:flex md:text-sm">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-2 py-1 transition-colors duration-300 hover:text-amber-600 ${
                    isActive ? "text-amber-600" : ""
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/myorder"
                className={({ isActive }) =>
                  `px-2 py-1 transition-colors duration-300 hover:text-amber-600 ${
                    isActive ? "text-amber-600" : ""
                  }`
                }
              >
                My Orders
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu"
                className={({ isActive }) =>
                  `px-2 py-1 transition-colors duration-300 hover:text-amber-600 ${
                    isActive ? "text-amber-600" : ""
                  }`
                }
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `px-2 py-1 transition-colors duration-300 hover:text-amber-600 ${
                    isActive ? "text-amber-600" : ""
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `px-2 py-1 transition-colors duration-300 hover:text-amber-600 ${
                    isActive ? "text-amber-600" : ""
                  }`
                }
              >
                Contact us
              </NavLink>
            </li>
          </ul>
          <div className="flex items-center gap-3">
            <div
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-gray-200 transition-all duration-300 hover:bg-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700"
              onClick={() => setIsDark((prev) => !prev)}
            >
              {isDark ? (
                <HiOutlineSun className="text-xl text-amber-500" />
              ) : (
                <HiOutlineMoon className="text-xl" />
              )}
            </div>
            <div
              className="relative flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-amber-500 transition-all duration-300 hover:bg-amber-600 md:mr-4"
              onClick={() => navigate("/cart")}
            >
              <HiOutlineShoppingCart className="text-xl text-slate-100" />
              {quantity > 0 && (
                <span className="absolute top-[-3px] right-[-10px] flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs text-slate-50">
                  {quantity}
                </span>
              )}
            </div>
            <div
              className="hidden h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-gray-200 transition-all duration-300 hover:bg-slate-300 md:flex dark:bg-slate-600 dark:hover:bg-slate-700"
              onClick={logOut}
            >
              <FaSignInAlt className="text-amber-600 dark:text-white" />
            </div>
          </div>
          <Menu>
            <Menu.Toggle open="open" />
            <Menu.List>
              <Menu.Button icon={<FaHome />} name="Home" path="/" />
              <Menu.Button
                icon={<FaClipboardList />}
                name="My Orders"
                path="/myorder"
              />
              <Menu.Button icon={<FaUtensils />} name="Menu" path="/menu" />
              <Menu.Button icon={<FaUser />} name="About" path="/about" />
              <Menu.Button
                icon={<FaPhone />}
                name="Contact us"
                path="/contact"
              />
              <Menu.Button
                icon={<FaSignInAlt />}
                name="Log Out"
                onClick={logOut}
              />
            </Menu.List>
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
