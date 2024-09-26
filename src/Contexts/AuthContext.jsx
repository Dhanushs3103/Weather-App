//packages
import { createContext, useState } from "react";

//creating the context
export let AuthContext = createContext();

//creating context provider
export function AuthContextProvider({ children }) {
  let [login, setLogin] = useState(false);
  function handleLogin() {
    setLogin(true);
  }
  function handleLogout() {
    setLogin(false);
  }
  let authValues = { login, handleLogin, handleLogout };
  return (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  );
}
