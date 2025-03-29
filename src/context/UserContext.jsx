import { createContext, useState } from "react";

export const UserContext = createContext({})

export const UserProvider = ({children}) => {
  const [token, setToken] = useState('');
  const [email, setEmail] = useState('')

  const login = async (email, password) => {
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', { method: "POST", body: JSON.stringify({ email, password }) })
      const data = await res.json()

      setToken(data.token)
      setEmail(data.email)
      return data
    } catch (error) {
      console.error(error)
      alert('Login Error')
    }
  }

  const register = async (email, password) => {
      try {
      const body = JSON.stringify({email, password})

      const res = await fetch('http://localhost:5000/api/auth/register', { method: "POST", body })
      const data = await res.json()
      
      setToken(data.token)
      setEmail(data.email)
      return data
    } catch (error) {
      console.error(error)
      alert('Register Error')
    }
  }

  const profile = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/auth/me', { headers: { Authorization: `Bearer ${token}` } })
      const data = await res.json()

      setEmail(data.email)
    } catch (error) {
      console.error(error)
      alert('Profile Error')
    }
  }

  const logout = () => {
    setToken('');
  };

  return (
    <UserContext.Provider value={{
        token,
        email,
        logout,
        login,
        profile,
        register
    }}>{children}</UserContext.Provider>
  );
}