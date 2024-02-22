import React, { createContext, useContext, useState } from "react";
const loginDataId = createContext();

export const LoginDataIdProvider = ({ children }) => {
    const [formData, setFormdata] = useState({
      email:"",password:""
      });
  return (
    <loginDataId.Provider value={{ formData, setFormdata }}>
      {children}
    </loginDataId.Provider>
  );
};

export const LoginDataID = () => {
  const context = useContext(loginDataId);
  if (!context) {
    throw new Error("There is some error in loginform. ");
  }
  return context;
};