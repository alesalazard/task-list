/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase';

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext)
  if (!context) throw new Error ('There is not auth provider')
  return context
}

export function AuthProvider ({children}) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logout = () => signOut(auth);

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log({currentUser});
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsuscribe();
  }, []);

  return(
    <authContext.Provider value={{ signup, login, user, loading, logout }}>
      {children}
    </authContext.Provider>
  );
}
