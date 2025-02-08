"use client";
import { useState } from "react";
import {
  ChevronsRight,
  ChevronsLeft,
  House,
  BookCopy,
  Utensils,
  Users,
  ChartNoAxesCombined,
  Cog,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getNavItems } from "../../utils/NavItems";

export default function AuthenticatedLayout({ children }) {
  const active_path = usePathname();

  const [navbar_state, setNavbarState] = useState(false);

  // get nav items for the navbar
  const navItems = getNavItems(navbar_state);

  return (
    <div className="flex flex-row h-full w-full">
      <nav
        className={`fixed md:relative ${
          navbar_state ? "w-64" : "w-10 md:w-20"
        } h-full bg-white py-4 px-2 flex flex-col justify-center items-center rounded-e-lg shadow-lg transition-all duration-300`}
      >
        <div
          className={`absolute top-2 w-full text-center text-white ${
            navbar_state ? "" : "hidden"
          } transition-all ease duration-300`}
        >
          <h1 className="font-bold text-sm text-black">MenuMaker.io</h1>
        </div>
        <div
          onClick={() => setNavbarState(!navbar_state)}
          className={`absolute top-1 text-white ${
            navbar_state ? "right-2" : "text-2xl"
          }`}
        >
          {navbar_state ? (
            <ChevronsRight size={30} color="black" className="cursor-pointer" />
          ) : (
            <ChevronsLeft size={30} color="black" className="cursor-pointer" />
          )}
        </div>
        <div
          className={`w-full flex justify-center items-center ${
            navbar_state ? "" : "hidden"
          }`}
        >
          <div className="w-[90%] bg-gray-50 px-2 py-1 rounded-xl my-4 text-center shadow-sm shadow-gray-200">
            <span className="text-md font-light">user@email.com</span>
          </div>
        </div>
        <div
          className={`h-[80%] w-full border-t flex flex-col justify-start items-center ${
            navbar_state ? "" : "hidden md:flex"
          }`}
        >
          <ul className="text-black">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="block my-2 py-2 px-1 text-lg font-medium cursor-pointer"
              >
                <li className="flex items-center">
                  {active_path === item.path ? item.icon_active : item.icon}
                  <span
                    className={`ms-4 ${
                      active_path === item.path ? "text-black" : "text-gray-500"
                    } ${
                      navbar_state ? "" : "hidden"
                    }  transition-all ease duration-300`}
                  >
                    {item.label}
                  </span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </nav>

      <main className="flex-1">{children}</main>
    </div>
  );
}
