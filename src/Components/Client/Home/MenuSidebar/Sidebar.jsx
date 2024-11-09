import { useContext } from "react";
import { EventContext } from "../../Context/EventContext.jsx";
import Logo from "../Head/Logo";
import { CgClose } from "react-icons/cg";

const Sidebar = () => {
  const { hendleToggleMenu} = useContext(EventContext);

  return (
    <>
      <aside className="py-2 select-none">
        <nav className="flex justify-between items-center lg:mr-[54px] md:mr-[38px] mx-4 sm:mr-8">
          <Logo text={"text-Black"} animation={"animate-none"}/>
          <CgClose
            onClick={hendleToggleMenu}
            className={`lg:h-8 lg:w-8 sm:h-7  sm:w-7 h-6 w-6 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110`}
          />
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
