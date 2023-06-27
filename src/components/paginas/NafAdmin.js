import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from './UserContext';
import gifImage from '/clinicav2/src/assets/images/giphy.gif';
import clinicanaf3 from '/clinicav2/src/assets/images/CLINICANAF3.png';
import './signup.css';

function NafAdmin() {
  const { user } = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [selectedTab, setSelectedTab] = useState(null); // Agregamos un estado para mantener el botón seleccionado
  const [medicalHistory, setMedicalHistory] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3002/api/users');
        setUsers(response.data.users);
      } catch (error) {
        console.error('Error al obtener los usuarios:', error);
      }

      try {
        const response = await axios.get('http://localhost:3002/api/medical-history');
        setMedicalHistory(response.data.medicalHistory);
      } catch (error) {
        console.error('Error al obtener el historial médico:', error);
      }
    };

    const checkUserRole = async () => {
      try {
        const response = await axios.get(`http://localhost:3002/api/user-role/${user.name}`);
        setIsAdmin(response.data.isAdmin);
        fetchUsers();
      } catch (error) {
        console.error(error);
      }
    };

    if (user && user.name) {
      checkUserRole();
    }
  }, [user]);

  const deleteUser = async (userID) => {
    try {
      await axios.delete(`http://localhost:3002/api/delete-user/${userID}`);
      const updatedUsers = users.filter((user) => user.id !== userID);
      setUsers(updatedUsers);
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
    }
  };
  

  const deleteMedicalRecord = async (recordid) => {
    try {
      await axios.delete(`http://localhost:3002/api/delete-medical-record/${recordid}`);
      const updatedMedicalHistory = medicalHistory.filter((record) => record.Id !== recordid);
      setMedicalHistory(updatedMedicalHistory);
    } catch (error) {
      console.error('Error al eliminar el registro del historial médico:', error);
    }
  };
  

  const toggleTab = (tab) => {
    if (selectedTab === tab) {
      setSelectedTab(null); // Si se selecciona el mismo botón, se deselecciona
    } else {
      setSelectedTab(tab);
    }
  };

  return (
    <div>
      {!isAdmin && <h1 style={{ color: 'red' }}>No puedes entrar aquí.</h1>}
      {!isAdmin && <img src={gifImage} alt="GIF" />}
      {isAdmin && (
        <div className="section" style={{ backgroundColor: '#262626' }}>
          <nav className="navbar d-flex justify-content-center align-items-center" style={{ backgroundColor: 'black' }}>
            <div>
              <h1>ADMIN MENU</h1>
            </div>
          </nav>
          <nav className="navbar navbar-expand-lg bg-body-tertiary" id="navbar_admin">
            <a className="navbar-brand" href="/">
              <img src={clinicanaf3} style={{ width: '200px' }} alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <button
                    className={`nav-link active ${selectedTab === 'users' ? 'active' : ''}`}
                    aria-current="page"
                    style={{ color: 'white' }}
                    id="barraprincipal"
                    onClick={() => toggleTab('users')}
                  >
                    Usuarios
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link active ${selectedTab === 'historial' ? 'active' : ''}`}
                    aria-current="page"
                    style={{ color: 'white' }}
                    id="barraprincipal"
                    onClick={() => toggleTab('historial')}
                  >
                    Horas Agendadas
                  </button>
                </li>
              </ul>
            </div>
          </nav>
          <div className="container">
            <div className="col-12 text-center align-self-center py-5">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                    <div id="card-front-admin">
                      <div className="center-wrap">
                        <div className="section text-center">
                          {selectedTab === 'users' && (
                            <div style={{ textAlign: 'justify' }}>
                              <h2>Usuarios</h2>
                              {users.map((user) => (
                                <div
                                  key={user.ID}
                                  style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}
                                >
                                  <span style={{ marginRight: '0.5rem' }}>{user.username}</span>
                                  <button onClick={() => deleteUser(user.ID)}>Eliminar</button>
                                  <p>Valor de userId: {user.ID}</p>
                                </div>
                              ))}
                            </div>
                          )}

                          {selectedTab === 'historial' && (
                            <div style={{ textAlign: 'justify' }}>
                              <h2>Historial Médico</h2>
                              {medicalHistory.map((record) => (
                                <div
                                  key={record.user_id}
                                  style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}
                                >
                                  <span>{record.username}</span> - {record.fecha} - {record.hora}
                                  <button onClick={() => deleteMedicalRecord(record.id)}>Eliminar</button>
                                  
                                </div>
                              ))}
                            </div>
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
