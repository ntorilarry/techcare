import { HiOutlineXMark } from "react-icons/hi2";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { HiBars3 } from "react-icons/hi2";
import {
  Avatar,
  Logo,
  MenuDot,
  Messages,
  Overview,
  Patients,
  Schedule,
  Settings,
  Transactions,
} from "../assets";
import { NavLink } from "react-router-dom";

const navigation = [
  { name: "Overview", href: "/overview", icon: `${Overview}` },
  { name: "Patients", href: "/patients", icon: `${Patients}` },
  { name: "Schedule", href: "/schedule", icon: `${Schedule}` },
  { name: "Message", href: "/message", icon: `${Messages}` },
  { name: "Transactions", href: "/transactions", icon: `${Transactions}` },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white fixed top-0 left-0 right-0  mx-6 my-3.5 z-50 lg:rounded-full">
      <nav className="mx-auto w-full flex items-center justify-between p-4">
        <a href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <img alt="" src={Logo} className="h-8 w-auto" />
        </a>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary"
          >
            <span className="sr-only">Open main menu</span>
            <HiBars3 aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `text-sm flex items-center gap-2 font-bold leading-6 text-primary ${
                  isActive ? "bg-[#01F0D0] rounded-full px-3 py-2" : ""
                }`
              }
            >
              <img
                src={item.icon}
                className="w-4 h-4"
                aria-hidden="true"
                alt=""
              />
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className="hidden lg:flex">
          <div className="relative">
            <div className="flex items-center gap-x-3">
              <img className="h-10 w-10 rounded-full " src={Avatar} alt="" />
              <div className="block ml-2 ">
                <h1
                  className="text-sm font-bold text-primary"
                  aria-hidden="true"
                >
                  Dr. Jose Simmons
                </h1>
                <p
                  className="text-sm font-regular text-primary"
                  aria-hidden="true"
                >
                  General Practitioner
                </p>
              </div>
              <div className="w-px h-6 bg-gray-200"></div>
              <div className="flex">
                <img className=" h-7 w-7 " src={Settings} alt="" />
                <img className=" h-7 w-7 " src={MenuDot} alt="" />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden "
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0  right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <img alt="" src={Logo} className="h-8 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <HiOutlineXMark aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) =>
                      `-mx-3 flex gap-2 rounded-lg px-3 py-2 text-base font-bold leading-7 text-primary hover:bg-gray-50 ${
                        isActive ? "bg-[#01F0D0] rounded-full px-3 py-2" : ""
                      }`
                    }
                  >
                    <img
                      src={item.icon}
                      className="w-4 h-4 my-auto"
                      aria-hidden="true"
                      alt=""
                    />
                    {item.name}
                  </NavLink>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};
export default Header;
