// import React, { createContext, useContext, useState } from "react";

// const AllSchemaId = createContext();

// export const AllSchemaIdProvider = ({ children }) => {
//   const [ytSchemaId, setYtSchemaId] = useState(null);
//   return (
//     <AllSchemaId.Provider value={{ ytSchemaId, setYtSchemaId }}>
//       {children}
//     </AllSchemaId.Provider>
//   );
// };

// export const useID = () => {
//   const context = useContext(AllSchemaId);
//   if (!context) {
//     throw new Error("useToken must be used within a TokenProvider");
//   }
//   return context;
// };

import React, { createContext, useContext, useState } from "react";

const signupDataId = createContext();

export const SignupDataIdProvider = ({ children }) => {
    const [formData, setFormdata] = useState({
        firstName: "Hello",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
  return (
    <signupDataId.Provider value={{ formData, setFormdata }}>
      {children}
    </signupDataId.Provider>
  );
};

export const SignupDataID = () => {
  const context = useContext(signupDataId);
  if (!context) {
    throw new Error("SignupDataID must be used within a SignupDataIdProvider");
  }
  return context;
};

