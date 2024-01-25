import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about" },
    { title: "Faq", path: "/faq" },
    { title: "Contact Us", path: "/contact" },
  ];

  return (
    <>
    <div className="flex justify-between items-center px-10 h-24 mx-auto text-white w-full md:px-15 sticky bg-black z-40 top-0">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">
      <Link to='/'>REACT.</Link>
      </h1>
      <ul className="hidden w-max items-center md:flex">
        {navItems.map((item, index) => (
          <li key={index} className="p-8 w-max">
            <Link className="hover:text-[#00df9a]" to={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full mt-6 text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
        {navItems.map((item, index) => (
          <li key={index} className="px-2 py-4 border-b border-gray-600 text-md" >
            <Link onClick={()=>setNav(false)} to={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
    <Outlet />
    </>
  );
};

export default Navbar;
