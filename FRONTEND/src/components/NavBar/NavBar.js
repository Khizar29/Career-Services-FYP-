import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Disclosure, Transition, Menu } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../../logo-FAST-NU.png";

const navigation = [
  { name: "Home", href: "/home", current: true },
  { name: "Jobs", href: "/jobs", current: false },
  { name: "NewsFeed", href: "/newsfeed", current: false },
  { name: "Profile", href: "/profile", current: false },
  { name: "Directory", href: "/directory", current: false },
  { name: "About", href: "/about", current: false },
  { name: "Contact Us", href: "/contact", current: false },
  { name: "CSO", href: "/cso", current: false },
  { name: "Logout", href: "/login", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <Disclosure as="nav" className="bg-[#004E8F]">
      {({ open }) => (
        <>
          <div className=" mx-auto flex justify-between">
            <div className="flex-shrink-0">
              <img className="w-15 h-12" src={logo} alt="FAST NUCES Logo" />
              <span className="ml-3 text-xl text-gray-100 font-semibold antialiased">
                Career Development Portal
              </span>
            </div>
            <div className="hidden md:flex text-white flex-wrap items-center justify-center text-base tracking-wide">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  exact
                  to={item.href}
                  activeClassName="text-white bg-gray-900"
                  className="mr-8 hover:text-gray-300"
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
            <div className="md:hidden">
              <Disclosure.Button className="text-gray-400 hover:bg-gray-700 hover:text-white">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  exact
                  to={item.href}
                  activeClassName="text-white bg-gray-900"
                  className="block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setClick(false)}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default NavBar;
