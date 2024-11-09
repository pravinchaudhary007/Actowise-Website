import { useContext } from "react";
import Header from "./Head/Header";
import { EventContext } from "../Context/EventContext";

const UserHome = () => {
  const { isSticky } = useContext(EventContext);

  return (
    <>
      {/* Background Section */}
      <section className="relative h-screen w-full">
        {/* Background image with opacity effect */}
        <div className={`absolute blur-[2px] saturate-150 inset-0 bg-main bg-cover bg-center bg-no-repeat transition-opacity duration-1000 }`}/>

        {/* Sticky Header */}
        <nav className={`transition-all ease-in-out duration-300 ${ isSticky? "fixed top-0 left-0 w-full bg-white shadow-lg z-50": "relative z-10"}`}>
          <Header />
        </nav>
      </section>

      {/* Content Below */}
      <div className="h-screen bg-gray-100">
        <h2 className="text-center text-3xl pt-10">
          Hello, Welcome to the Home Page!
        </h2>
        <p className="text-center text-lg mt-5">More content below.</p>
      </div>
    </>
  );
};

export default UserHome;
