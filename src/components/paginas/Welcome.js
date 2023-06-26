import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { UserContext } from './UserContext';
import moment from 'moment';
import { useNavigate, Navigate } from 'react-router-dom';
import './signup.css'

function Welcome() {
  const { user, logout } = useContext(UserContext);
  const [horasAgendadas, setHorasAgendadas] = useState([]);
  const [newPassword, setNewPassword] = useState('');
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Hook useNavigate para redirigir

  useEffect(() => {
    const fetchHorasAgendadas = async () => {
      try {
        const response = await axios.get(`http://localhost:3002/api/horas-agendadas/${user.name}`);
        setHorasAgendadas(response.data.horasAgendadas);
      } catch (error) {
        console.error(error);
      }
    };

    if (user && user.name) {
      fetchHorasAgendadas();
    }
  }, [user]);

  const handleUpdatePassword = async () => {
    try {
      await axios.put('http://localhost:3002/api/update-password', {
        username: user.name,
        newPassword: newPassword,
      });

      setNewPassword('');
      setUpdateSuccess(true);
      setErrorMessage('');
    } catch (error) {
      console.error(error);
      setErrorMessage('Error al actualizar la contraseña.');
    }
  };

  const handleDeleteAccount = async () => {
    try {
      await axios.delete('http://localhost:3002/api/delete-account', {
        data: { username: user.name },
      });

      setDeleteSuccess(true);
      setErrorMessage('');
    } catch (error) {
      console.error(error);
      setErrorMessage('Error al eliminar la cuenta.');
    }
  };

  useEffect(() => {
    if (deleteSuccess) {
      logout(); // Cerrar sesión
      // Redireccionar al inicio de sesión
      navigate('/login', { replace: true });
    }
  }, [deleteSuccess, logout, navigate]);

  return (

    <section style={{ backgroundColor: '#E6F5F5' }} className='section_welcome'>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="section">
              <div className="card-3d-wrap mx-auto">
                <div className="card-3d-wrapper">
                  <div className="card-front">
                    <div className="center-wrap">
                      <div className="section text-center">
                        {user && user.name ? (
                          <form action="#myform" id="formulario" name="formulario">
                            <h3 style={{ color: '#641c34' }}>
                              Bienvenido <span id="primer-nombre">{user.name}</span> !!
                            </h3>
                            <br />
                            <h5 style={{ color: '#641c34' }}>Tus horas agendadas:</h5>
                            {/* Renderizar las horas agendadas */}
                            {horasAgendadas.map((hora) => (
                              <div key={hora.id} style={{ color: 'black' }}>
                                Fecha: {moment(hora.fecha).format('DD/MM/YYYY')}, Hora: {hora.hora}, Doctor: {hora.doctor_id === 1 ? 'Doctor Milo' : 'Doctor Colacao'}
                              </div>
                            ))}
                            <br />
                            
                          </form>
                        ) : (
                          <Navigate to="/login" replace />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="section">
              <div className="card-3d-wrap mx-auto" style={{width: '300px', height: '150px'}}>
                <div className="card-3d-wrapper">
                  <div className="card-front">
                    <div className="center-wrap">
                      <div className="section text-center">
                        <h5 style={{ color: '#641c34' }}>Actualizar contraseña:</h5>
                        <input
                          type="password"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          placeholder="Nueva contraseña"
                          required
                        />
                        <button type="button" className='btn mt-4' onClick={handleUpdatePassword}>
                          Actualizar contraseña
                        </button>
                        <br />
                        {updateSuccess && <div>Contraseña actualizada exitosamente</div>}
                        {errorMessage && <div>{errorMessage}</div>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
                
                          
              <div className="card-front" style={{marginTop: 250, width: '250px', height: '100px', marginLeft: 80}}>
                      <div className="section text-center" >
                      <button type="button" className='btn mt-4' onClick={handleDeleteAccount}>
                              Eliminar cuenta
                            </button>
                            {deleteSuccess && <div>Cuenta eliminada exitosamente</div>}
                      </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Welcome;
