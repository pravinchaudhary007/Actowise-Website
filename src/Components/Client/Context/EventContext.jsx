/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import { createContext, useEffect, useState } from "react";
import Sidebar from "../Home/MenuSidebar/Sidebar";

const EventContext = createContext();

const EventProvider = ({ children }) => {
  const [Menu, setMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const hendleToggleMenu = () => {
    setMenu((prevMenu) => !prevMenu);
  };


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 48) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const DrawerList = (
    <Box
      sx={{
        width: {
          xs: "320px",
          sm: "410px",
          md: "512px",
          lg: "640px",
        },
      }}
      role="presentation"
    >
      <Sidebar />
    </Box>
  );

  return (
    <EventContext.Provider
      value={{
        hendleToggleMenu,
        Menu,
        DrawerList,
        isSticky,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export { EventProvider, EventContext };
