import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaTelegram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-yellow-50 dark:bg-slate-900 dark:text-white">
      <div className="container mx-auto px-7">
        <div className="grid gap-6 border-b-1 py-2 pb-12 md:grid-cols-4">
          <div>
            <div className="h-20 w-20 cursor-pointer overflow-hidden rounded-full border-2 border-amber-600 shadow-lg dark:border-slate-700">
              <img
                src="/images/favicon.png"
                alt="Anyone"
                className="h-full w-full"
              />
            </div>
            <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">
              Experience authentic Ethiopian flavors delivered straight to your
              door. Our traditional dishes are prepared with love and care.
            </p>
            <ul className="mt-6 flex items-center gap-3 text-xl">
              <li className="text-slate-600 transition-colors duration-300 hover:text-amber-600 dark:text-slate-300 dark:hover:text-slate-500">
                <Link>
                  <FaFacebook />
                </Link>
              </li>
              <li className="text-slate-600 transition-colors duration-300 hover:text-amber-600 dark:text-slate-300 dark:hover:text-slate-500">
                <Link>
                  <FaInstagram />
                </Link>
              </li>
              <li className="text-slate-600 transition-colors duration-300 hover:text-amber-600 dark:text-slate-300 dark:hover:text-slate-500">
                <Link>
                  <FaTelegram />
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <h1 className="mb-3 text-xl font-semibold">Quick Links</h1>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="hover:underline">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:underline">
                <Link to="menu">Menu</Link>
              </li>
              <li className="hover:underline">
                <Link to="/myorder">My order</Link>
              </li>
              <li className="hover:underline">
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <h1 className="mb-3 text-xl font-semibold">Contact Us</h1>
            <div className="flex flex-col gap-2 text-sm text-slate-700 dark:text-slate-300">
              <p>123 Bole Road, Addis Ababa</p>
              <p>+251 936571967</p>
              <p>AnyoneCusine@gmail.com</p>
            </div>
          </div>
          <div className="mt-8">
            <h1 className="mb-3 text-xl font-semibold">Opening Hours</h1>
            <div className="flex flex-col gap-2 text-sm text-slate-700 dark:text-slate-300">
              <p>Monday - Friday: 9:00 AM - 10:00 PM</p>
              <p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8 text-center text-sm text-slate-700 dark:text-slate-300">
        © 2025 ANYone Cuisine. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
