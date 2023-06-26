import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from './UserContext'; // Importa el contexto de usuario


import './signup.css';

function NafAdmin() {
    const { user } = useContext(UserContext);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);
  
    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await axios.get('http://localhost:3002/api/users');
          setUsers(response.data.users);
          setLoading(false);
        } catch (error) {
          console.error('Error al obtener los usuarios:', error);
        }
      };
  
      const checkUserRole = async () => {
        try {
          const response = await axios.get(`http://localhost:3002/api/user-role/${user.name}`);
          setIsAdmin(response.data.isAdmin);
          fetchUsers(); // Llama a fetchUsers después de obtener el rol del usuario
        } catch (error) {
          console.error(error);
        }
      };
  
      if (user && user.name) {
        checkUserRole();
      }
    }, [user]);
  
    const deleteUser = async (userId) => {
      try {
        await axios.delete(`http://localhost:3002/api/delete-user/${userId}`);
        const updatedUsers = users.filter((user) => user.id !== userId);
        setUsers(updatedUsers);
      } catch (error) {
        console.error('Error al eliminar el usuario:', error);
      }
    };
  
    return (
      <div>
        {isAdmin && (
          <div className="section" style={{ backgroundColor: 'black', height: '100vh', width: '100vw' }}>
            <div className="container">
              <div className="col-12 text-center align-self-center py-5">
                <div className="section pb-5 pt-5 pt-sm-2 text-center">
                  <h1>ADMIN MENU</h1>
                  <div className="card-3d-wrap mx-auto">
                    <div className="card-3d-wrapper">
                      <div className="card-front">
                        <div className="center-wrap">
                          <div className="section text-center">
                            {loading ? (
                              <p>Cargando usuarios...</p>
                            ) : (
                              <ul>
                                {users.map((user) => (
                                  <li key={user.id}>
                                    {user.username}{' '}
                                    <button onClick={() => deleteUser(user.id)}>Eliminar</button>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  
export default NafAdmin;
