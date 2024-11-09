import { useContext } from "react";
import { EventContext } from "../../Context/EventContext.jsx";
import { CgMenuMotion } from "react-icons/cg";
import { Drawer } from "@mui/material";
import Logo from "./Logo.jsx";

const Header = () => {
  const { hendleToggleMenu, Menu, DrawerList ,isSticky} = useContext(EventContext);

   
  return (
    <>
      <header className="select-none   ">
        <ul className="flex justify-between lg:px-14 md:px-10  sm:px-8 px-4 py-2   items-center">

          {/* Logo & Company name  */}

          <li>
            <Logo text={`text-white`} animation={'animate-reverse-spin'}/>
          </li>

          {/* Link Toggle Menu icon  */}

          <li>
            <div>
              <CgMenuMotion onClick={hendleToggleMenu} 
                 className={`lg:h-8 lg:w-8 sm:h-7 sm:w-7 h-6 w-6 ${isSticky ? "text-black" : "text-white"}  cursor-pointer duration-1000 ease-in transition-transform hover:scale-125   ${
              Menu ? "rotate-180 ease-in" : "rotate-0 ease-out"
            }`} />
            </div>
          </li>
        </ul>

        <Drawer anchor="right" open={Menu} onClose={hendleToggleMenu}>
          {DrawerList}
        </Drawer>
      </header>
    </>
  );
};

export default Header;
