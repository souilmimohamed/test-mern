import { IoLogoReact } from "react-icons/io5";
import { BsList, BsThreeDotsVertical, BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import { CgProfile } from "react-icons/cg";
import { BsFiles } from "react-icons/bs";
import { AiOutlineLogout, AiOutlineShoppingCart } from "react-icons/ai";
import { GrFavorite } from "react-icons/gr";
import { FaUsers, FaWarehouse } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { loggedIn, logout, userData } = useContext(AuthContext);
  const [profileOpen, setProfileOpen] = useState(false);
  useEffect(() => {
    document.addEventListener("click", () => {
      setProfileOpen(false);
    });
  }, [profileOpen]);
  return (
    <>
      <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
        <IoLogoReact className="text-4xl text-blue-400" />
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-blue-600 p-3"
            onClick={() => setMenuOpen(true)}
          >
            <BsList className="text-3xl" />
          </button>
        </div>
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
          <li>
            <a
              className="text-sm text-gray-400 hover:text-gray-500 font-bold"
              href="#"
            >
              Home
            </a>
          </li>
          <li className="text-gray-300">
            <BsThreeDotsVertical />
          </li>

          <li>
            <a
              className="text-sm text-gray-400 hover:text-gray-500 font-bold"
              href="#"
            >
              Categories
            </a>
          </li>
          <li className="text-gray-300">
            <BsThreeDotsVertical />
          </li>

          <li>
            <a
              className="text-sm text-gray-400 hover:text-gray-500 font-bold"
              href="#"
            >
              Contact Us
            </a>
          </li>
        </ul>
        {!loggedIn && (
          <button
            className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-200 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200"
            onClick={() => navigate("signIn")}
          >
            Sign In
          </button>
        )}
        {!loggedIn && (
          <button
            className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
            onClick={() => navigate("signUp")}
          >
            Sign up
          </button>
        )}
        {loggedIn && (
          <button
            className="hidden lg:inline-block py-1 px-2 bg-gra200 hover:bg-gray-200 text-base text-black font-bold rounded-xl transition duration-200"
            onMouseEnter={() => setProfileOpen(true)}
          >
            <CgProfile className="inline-block mr-2 -mt-1" />
            {userData && userData.fullname}
          </button>
        )}
        {profileOpen && (
          <div className="bg-white absolute top-16 right-4 w-32 rounded-md shadow-md p-2 z-40">
            <button className="p-1 rounded-lg font-bold w-full text-sm mt-1 text-black hover:bg-gray-200 text-left">
              <BsFiles className="inline-block mr-2" />
              My Orders
            </button>
            <button className="relative p-1 rounded-lg font-bold w-full text-sm mt-1 text-black hover:bg-gray-200 text-left">
              <div className="absolute top-0 right-0 px-1 bg-green-500 rounded-full">
                0
              </div>
              <AiOutlineShoppingCart className="inline-block mr-2" />
              My Cart
            </button>
            <button className="relative p-1 rounded-lg font-bold w-full text-sm mt-1 text-black hover:bg-gray-200 text-left">
              <div className="absolute top-0 right-0 px-1 bg-green-500 rounded-full">
                0
              </div>
              <GrFavorite className="inline-block mr-2" />
              Favorites
            </button>

            {userData && userData.isAdmin && (
              <>
                <button className="p-1 rounded-lg font-bold w-full text-sm mt-1 text-black hover:bg-gray-200 text-left">
                  <FaUsers className="inline-block mr-2" />
                  Users
                </button>
                <button
                  className="p-1 rounded-lg font-bold w-full text-sm mt-1 text-black hover:bg-gray-200 text-left"
                  onClick={() => navigate("/products")}
                >
                  <FaWarehouse className="inline-block mr-2" />
                  Products
                </button>
              </>
            )}
            <button
              className="p-1 rounded-lg font-bold w-full text-sm mt-1 text-black hover:bg-gray-200 text-left"
              onClick={() => logout()}
            >
              <AiOutlineLogout className="inline-block mr-2" />
              Sign out
            </button>
          </div>
        )}
      </nav>
      <div className={`navbar-menu relative z-50 ${!menuOpen && "hidden"}`}>
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none" href="#">
              <IoLogoReact className="text-4xl text-blue-400" />
            </a>
            <button className="navbar-close" onClick={() => setMenuOpen(false)}>
              <AiOutlineClose />
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  href="#"
                >
                  Categories
                </a>
              </li>

              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  href="#"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <a
                className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-200 hover:bg-gray-100 rounded-xl"
                href="#"
              >
                Sign in
              </a>
              <a
                className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl"
                href="#"
              >
                Sign Up
              </a>
            </div>
            <p className="my-4 text-xs text-center text-gray-400">
              <span>Copyright © 2023</span>
            </p>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
