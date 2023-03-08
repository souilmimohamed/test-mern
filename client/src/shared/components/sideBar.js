import { useState } from "react";
import { Menus } from "../../constants";
import { AiOutlineArrowLeft, AiFillEnvironment } from "react-icons/ai";
import { BsSearch, BsChevronBarDown } from "react-icons/bs";
const SideBar = ({ children, title }) => {
  const [open, setOpen] = useState(true);
  const [subMenuOpen, setsubMenuOpen] = useState(false);
  return (
    <div className="flex">
      <div
        className={`bg-black h-screen p-5 pt-8 ${
          open ? "w-72" : "w-20"
        } duration-300 relative`}
      >
        <AiOutlineArrowLeft
          className={`bg-gray-300 text-black text-3xl rounded-full absolute -right-3 top-9 border border-black cursor-pointer ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex">
          <AiFillEnvironment
            className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left float-left font-medium text-2xl duration-300 ${
              !open && "scale-0"
            }`}
          >
            Appname
          </h1>
        </div>
        <div
          className={`flex items-center rounded-md bg-gray-300 mt-6 ${
            !open ? "px-2.5" : "px-4"
          } py-2 `}
        >
          <BsSearch
            className={`text-black text-lg block float-left cursor-pointer ${
              open && "mr-2"
            } `}
          />
          <input
            type={"search"}
            className={`text-base bg-transparent w-full text-black focus:outline-none ${
              !open && "hidden"
            }`}
          />
        </div>
        <ul className="py-7">
          {Menus.map((menu, index) => (
            <>
              <li
                key={index}
                className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-400 rounded-md ${
                  menu.spacing ? "mt-9" : "mt-2"
                }`}
              >
                <span className="text-2xl block float-left">{menu.icon}</span>
                <span
                  className={`text-base font-medium flex-1 duration-200 ${
                    !open && "hidden"
                  }`}
                >
                  {menu.title}
                </span>
                {menu.submenu && open && (
                  <BsChevronBarDown
                    className={`${subMenuOpen && "rotate-180"} duration-200`}
                    onClick={() => {
                      setsubMenuOpen(!subMenuOpen);
                    }}
                  />
                )}
              </li>
              {menu.submenu && subMenuOpen && open && (
                <ul>
                  {menu.submenuItems.map((submenuItem, index) => (
                    <li
                      key={index}
                      className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-gray-400 rounded-md"
                    >
                      {submenuItem.title}
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>
      </div>
      <div className="p-7">
        <h1 className="text-2xl font-semibold">{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default SideBar;
