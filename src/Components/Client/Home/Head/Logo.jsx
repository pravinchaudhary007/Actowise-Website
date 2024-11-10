/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import Globle from "../../../../assets/Globle.png";
import { useContext } from "react";
import {EventContext} from "../../Context/EventContext.jsx"

const Logo = ({text,animation}) => {
  const { isSticky} = useContext(EventContext);
 
  return (
    <NavLink to={"/"}>
      <div className="flex items-center cursor-pointer  gap-2">
        <img
          src={Globle}
          alt="Image Logo"
         className={`lg:h-16 lg:w-16 md:h-14 md:w-14 sm:h-10 sm:w-10 h-9 w-9 drop-shadow-xl  bg-transparent transition-transform duration-1000  ${isSticky  ? animation : "" } `}
        />
        <div className={`w-fit  text-center ${isSticky  ? "text-black" : text }`}>
          <h1 className={`md:text-xl sm:text-lg text-base uppercase  font-semibold`}>Globle Tech Cloud</h1>
          <p className={`md:text-xs sm:text-[8pt]  text-[7pt] font-light `}>Web Service Company</p>
        </div>
      </div>
    </NavLink>
  );
};

export default Logo;
