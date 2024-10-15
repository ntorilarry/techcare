import React from "react";
import { HiBars3, HiOutlineXMark } from "react-icons/hi2";
import { HorizontalDot, Search } from "../../../assets";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const PatientsSidebar = ({ navigation, sidebarOpen, setSidebarOpen }) => {
  return (
    <div>
      <Dialog
        open={sidebarOpen}
        onClose={setSidebarOpen}
        className="relative z-50 lg:hidden"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 flex">
          <DialogPanel
            transition
            className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <TransitionChild>
              <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                <button
                  type="button"
                  onClick={() => setSidebarOpen(false)}
                  className="-m-2.5 p-2.5"
                >
                  <span className="sr-only">Close sidebar</span>
                  <HiOutlineXMark
                    aria-hidden="true"
                    className="h-6 w-6 text-white"
                  />
                </button>
              </div>
            </TransitionChild>
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
              <div className="flex h-16 shrink-0 items-center justify-between">
                <p className="font-bold text-primary text-xl">Patients</p>
                <img
                  src={Search}
                  className=" my-auto"
                  aria-hidden="true"
                  alt=""
                />
              </div>
              <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                  <li>
                    <ul role="list" className="-mx-2 space-y-1">
                      {navigation.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-[#D8FCF7] text-primary"
                                : "text-primary hover:bg-[#D8FCF7]",
                              "group flex gap-x-3 w-full justify-between items-center px-3 py-1 text-sm font-bold"
                            )}
                          >
                            <div className="flex gap-x-2 space-y-2">
                              <img
                                src={item.avatar}
                                className="w-10 h-10 my-auto"
                                aria-hidden="true"
                                alt=""
                              />
                              <div>
                                <p>{item.name}</p>
                                <p className="text-[#707070] font-normal">
                                  {item.gender}, {item.age}{" "}
                                </p>
                              </div>
                            </div>

                            <img
                              src={HorizontalDot}
                              className=" my-auto"
                              aria-hidden="true"
                              alt=""
                            />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <div className="hidden lg:fixed lg:h-full lg:flex  lg:w-72 lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col gap-y-5 overflow-y-auto rounded-3xl bg-white px-6">
          <div className="flex h-16 shrink-0 items-center justify-between">
            <p className="font-bold text-primary text-xl">Patients</p>
            <img src={Search} className=" my-auto" aria-hidden="true" alt="" />
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-[#D8FCF7] text-primary"
                            : "text-primary hover:bg-[#D8FCF7]",
                          "group flex gap-x-3 w-full justify-between items-center px-3 py-1 text-sm font-bold"
                        )}
                      >
                        <div className="flex gap-x-2 space-y-2">
                          <img
                            src={item.avatar}
                            className="w-10 h-10 my-auto"
                            aria-hidden="true"
                            alt=""
                          />
                          <div>
                            <p>{item.name}</p>
                            <p className="text-[#707070] font-normal">
                              {item.gender}, {item.age}{" "}
                            </p>
                          </div>
                        </div>

                        <img
                          src={HorizontalDot}
                          className=" my-auto"
                          aria-hidden="true"
                          alt=""
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
        <button
          type="button"
          onClick={() => setSidebarOpen(true)}
          className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
        >
          <span className="sr-only">Open sidebar</span>
          <HiBars3 aria-hidden="true" className="h-6 w-6" />
        </button>
        <div className="flex-1 text-sm font-semibold leading-6 text-gray-900">
          Patients
        </div>
        <a href="#">
          <span className="sr-only">Your profile</span>
          <img
            alt=""
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            className="h-8 w-8 rounded-full bg-gray-50"
          />
        </a>
      </div>
    </div>
  );
};

export default PatientsSidebar;
