import React, { createContext, useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import User from "./User";

const AuthUserContext = createContext(null);
const AuthOperationContext = createContext({
  login: (_) => console.error("Providerが設定されていません"),
  logout: () => console.error("Providerが設定されていません"),
});

const AuthUserProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const login = async (email, password) => setAuthUser({ email, password });
  const logout = async () => {
    setAuthUser(null);
  };
  return (
    <AuthOperationContext.Provider value={{ login, logout }}>
      <AuthUserContext.Provider value={authUser}>
        {children}
      </AuthUserContext.Provider>
    </AuthOperationContext.Provider>
  );
};

export const PrivateRoute = (props) => {
  const authUser = useAuthUser();
  const isAuthenticated = authUser != null;

  if (isAuthenticated) {
    return props.children;
  } else {
    return <Redirect to={"/login"} />;
  }
};

export const useAuthUser = () => useContext(AuthUserContext);
export const useLogin = () => useContext(AuthOperationContext).login;
export const useLogout = () => useContext(AuthOperationContext).logout;

export default AuthUserProvider;
