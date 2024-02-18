import React, { useEffect, useState } from "react";
import GlobalStyle from "./global";
import ContextProviders from "./contextProviders";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import ProtectedRoute from "./Routes/Route";
import Signup from "./Pages/Signup";
import axios from "axios";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<UserData | undefined>(undefined);
  const [userToken, setUserTOken] = useState("");

  const handleLogin = (userData: UserData, token: string) => {
    setIsLoggedIn(true);
    setUserData(userData);
    setUserTOken(token);
  };

  useEffect(() => {
    console.log("user-Data", userData);
    console.log("user-token", userToken);
  }, [userData, userToken]);

  const logoutHandler = () => {
    axios
      .get("http://127.0.0.1:3000/api/v1/user/logout")
      .then((response) => {
        console.log(response);
        setIsLoggedIn(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ContextProviders>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute priv={true}>
                <Home
                  userToken={userToken}
                  userData={userData}
                  onLogout={logoutHandler}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <ProtectedRoute priv={false}>
                <Signup />
              </ProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={
              isLoggedIn ? (
                <Home
                  userToken={userToken}
                  userData={userData}
                  onLogout={logoutHandler}
                />
              ) : (
                <ProtectedRoute priv={false}>
                  <Login onLogin={handleLogin} />
                </ProtectedRoute>
              )
            }
          />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </ContextProviders>
  );
}

export default App;

export type UserData = {
  createdAt: string;
  email: string;
  id: number;
  name: string;
  updatedAt: string;
};
