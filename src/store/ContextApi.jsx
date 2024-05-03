import React, { useEffect, createContext, useContext, useState } from "react";
import { useLocation } from "react-router-dom";

const MyContext = createContext();

const MyProvider = (props) => {
  const [showMessageBox, setShowMessageBox] = useState(false);
  const [properties, setProperties] = useState([]);
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

  useEffect(() => {
    fetch("https://api.maninderrealestate.com/api/admin/property/list/all")
      .then((response) => response.json())
      .then((data) => {
        if (data.status && data.data) {
          setProperties(data.data);
          
        } else {
          console.error("Failed to fetch properties:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching properties:", error);
      });
  }, []);

  return (
    <MyContext.Provider value={{ showMessageBox, handleClose, properties }}>
      {props.children}
    </MyContext.Provider>
  );
};

const useMyContext = () => {
  return useContext(MyContext);
};

export { MyContext, MyProvider, useMyContext };
