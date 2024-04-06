import React, { useEffect, createContext, useContext, useState } from "react";
import { useLocation } from "react-router-dom";

const MyContext = createContext();

const MyProvider = (props) => {
  const [showMessageBox, setShowMessageBox] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessageBox(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname]);
  const handleClose = () => {
    setShowMessageBox(false);
  };
  return (
    <MyContext.Provider value={{ showMessageBox, handleClose }}>
      {props.children}
    </MyContext.Provider>
  );
};

const useMyContext = () => {
  return useContext(MyContext);
};

export { MyContext, MyProvider, useMyContext };
