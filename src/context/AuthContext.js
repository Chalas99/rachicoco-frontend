import { createContext, useState } from 'react'

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);

  const value={
    authUser,
    setAuthUser
  }
  
  return (
    <AuthContext.Provider value={value}>
      { children }
    </AuthContext.Provider>
  )

}