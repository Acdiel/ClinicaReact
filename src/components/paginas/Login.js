import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from './UserContext';
import './signup.css';

function Login() {
  const { login } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3002/api/login', {
        email,
        password,
      });

      console.log(response.data);

      login(response.data.user);

      setEmail('');
      setPassword('');
      setError('');

      navigate('/');
    } catch (error) {
      console.error(error);
      setError('Credenciales inválidas. Por favor, verifique su email y contraseña.');
    }
  };

  return (
    <div>
      <div className="section">
        <div className="container">
          <form action="" id="formulario" name="formulario" onSubmit={handleSubmit}>
            <div className="row full-height justify-content-center">
              <div className="col-12 text-center align-self-center py-5">
                <div className="section pb-5 pt-5 pt-sm-2 text-center">
                  <div className="card-3d-wrap mx-auto">
                    <div className="card-3d-wrapper">
                      <div className="card-front">
                        <div className="center-wrap">
                          <div className="section text-center">
                            <h4 className="mb-4 pb-3">Iniciar Sesión</h4>
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-style"
                                placeholder="Email"
                                id="email"
                                name="email"
                                autoComplete="off"
                                value={email}
                                onChange={handleEmailChange}
                              />
                              <i className="input-icon uil uil-at"></i>
                            </div>
                            <div className="form-group mt-2">
                              <input
                                type="password"
                                className="form-style"
                                placeholder="Contraseña"
                                id="password"
                                name="password"
                                autoComplete="off"
                                value={password}
                                onChange={handlePasswordChange}
                              />
                              <i className="input-icon uil uil-lock-alt"></i>
                            </div>
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                            <button type="submit" className="btn mt-4">
                              Iniciar Sesión
                            </button>
                          </div>
                          <p className="mb-0 mt-4 text-center">
                            <a href="/signup" className="link" style={{ color: '#641c34' }}>
                              ¿No tienes cuenta? Regístrate aquí.
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
