import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Al cargar la aplicación, intenta leer el estado del usuario desde el almacenamiento local
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    // Guardar el estado del usuario en el almacenamiento local al iniciar sesión
    localStorage.setItem('user', JSON.stringify(userData));
    // Guardar el ID de usuario en el almacenamiento local
    localStorage.setItem('userId', userData.id);
  };

  const logout = () => {
    setUser(null);
    // Eliminar el estado del usuario del almacenamiento local al cerrar sesión
    localStorage.removeItem('user');
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
