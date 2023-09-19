import React, { useState } from "react";
import { Link } from "react-router-dom";
import { faBars, faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/Slices/Auth-Slice";

const Navbar = () => {
  const dispatch = useDispatch();
  const links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Capsules", link: "/" },
  ];
  const [open, setOpen] = useState(false);
  const user = useSelector((state) => state.auth);

  return (
    <nav className="w-full sticky top-0 left-0">
      <div className="md:flex items-center justify-between bg-black py-4 md:px-10 px-7">
        <div className="cursor-pointer flex items-center">
          <Link to="/">
            <img
              src={`${process.env.PUBLIC_URL}/assets/logo.jpg`}
              className="w-72"
              alt="logo"
            />
          </Link>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer text-2xl md:hidden bg-white px-2 rounded"
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static text-white bg-black md:z-auto z-[1000] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in ${
            open ? "top-20" : "top-[-490px]"
          }`}
        >
          {links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:opacity-0 before:transition-all before:duration-500 before:bg-white hover:before:w-full hover:before:opacity-100"
              >
                {link.name}
              </a>
            </li>
          ))}
          {user?.token ? (
            <>
              <li className="md:ml-8 text-xl md:my-0 my-7 ">
                {user.user.username}
              </li>
              <li
                onClick={() => dispatch(logout())}
                className="md:ml-8 text-xl md:my-0 my-7 cursor-pointer"
              >
                Logout
              </li>
            </>
          ) : (
            <a href="/user">
              <FontAwesomeIcon
                icon={faPerson}
                className="md:ml-8 text-2xl md:my-0 my-7 cursor-pointer"
              />
            </a>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
