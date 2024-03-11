// Packages
import { createContext,useState } from 'react'


export let AuthContext = createContext();

export default function AuthContextProvider({children}) {


    let [login ,setLogin] = useState(false);

    function loginUser () {
        setLogin(true);
    }

    function logoutUser () {
        setLogin(false);
    }

    let contextValues = {
        login,
        loginUser,
        logoutUser
    }

  return (
    <>
     <AuthContext.Provider value={contextValues}>
        {children}
     </AuthContext.Provider>
    </>
  )
}
