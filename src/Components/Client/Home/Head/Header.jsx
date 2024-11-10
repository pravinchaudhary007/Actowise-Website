import { useContext } from "react";
import { EventContext } from "../../Context/EventContext.jsx";
import { CgMenuMotion } from "react-icons/cg";
import { Drawer } from "@mui/material";
import Logo from "./Logo.jsx";
import { BiSolidMobileVibration } from "react-icons/bi";
import { NavLink } from "react-router-dom";


const Header = () => {
  const { hendleToggleMenu, Menu, DrawerList, isSticky } =
    useContext(EventContext);

  return (
    <>
      <header className="select-none  relative w-full">
        <ul className="flex  justify-between lg:px-14 md:px-10  sm:px-8 px-4 py-2   items-center">
          {/* Logo & Company name  */}

          <li>
            <Logo text={`text-white`} animation={"animate-reverse-spin"} />
          </li>

          {/* Link Toggle Menu icon  */}

          <li>
            <div>
              <CgMenuMotion
                onClick={hendleToggleMenu}
                className={`lg:h-8 lg:w-8 sm:h-7 sm:w-7 h-6 w-6 ${
                  isSticky ? "text-black" : "text-white"
                }  cursor-pointer duration-1000 ease-in transition-transform hover:scale-125   ${
                  Menu ? "rotate-180 ease-in" : "rotate-0 ease-out"
                }`}
              />
            </div>
          </li>
        </ul>

        <div className="absolute md:-top-2 md:left-1/2 md:-translate-x-1/2  md:block hidden  w-48 h-10 rounded-lg z-50">
          <div className="absolute z-50 inset-0 flex justify-center  items-center">
           <NavLink to={'/service'}><div className={` ${isSticky ? "text-white bg-black " :"text-black bg-white"} shadow-xl drop-shadow-lg font-semibold py-2 px-4 rounded text-base`}>
              <p className={`flex justify-between  items-center gap-2`}>Quick Contact <BiSolidMobileVibration className="h-6 animate-pulse  w-6"/></p>
            </div></NavLink> 
          </div>
          <div className={`h-12 w-full  z-0 scale-0 animate-pulse-smooth ${isSticky ? "bg-black" :"bg-white"} rounded-md outline-none opacity-40  absolute top-0`}></div>
        </div>

        <Drawer anchor="right" open={Menu} onClose={hendleToggleMenu}>
          {DrawerList}
        </Drawer>
      </header>
    </>
  );
};

export default Header;
