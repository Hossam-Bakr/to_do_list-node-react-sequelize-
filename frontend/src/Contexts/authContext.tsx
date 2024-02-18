import React, { useState, createContext } from "react";
import { ChildrenProps } from "./deleteContext";

export interface UserDataProps {
  name: string;
  email: string;
  password: string;
}

const AuthContext = createContext<AuthType | null>(null);

export const AuthProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

export type AuthType = {
  userData: UserDataProps;
  setUserData: Function;
};
