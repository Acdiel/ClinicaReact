import React, { useEffect, useState} from 'react';
import $ from 'jquery';
import 'jquery-validation';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";


/* global jQuery */

function SignUp() {
  useEffect(() => {
    $('#formulario').validate({
      rules: {
        username: {
          required: true,
          solo_letras: true,
        },
        email: {
          required: true,
          email: true,
        },
        password: {
          required: true,
          passwordCheck: true,
        },
      },
      messages: {
        username: {
          required: 'Ingresa un nombre',
        },
        email: {
          required: 'Ingresa un email',
        },
        password: {
          required: 'Ingresa una contraseña',
        },
      },
    });

    $.validator.addMethod('solo_letras', function (value, element) {
      return /[a-z," "]/.test(value);
    }, 'Deben ser solo letras');

    jQuery.extend(jQuery.validator.messages, {
      required: 'Este campo es obligatorio.',
      remote: 'Por favor, corrige este campo.',
      email: 'Por favor, introduce una dirección de correo válida.',
      url: 'Por favor, introduce una URL válida.',
      date: 'Por favor, introduce una fecha válida.',
      dateISO: 'Por favor, introduce una fecha válida (ISO).',
      number: 'Por favor, introduce un número válido.',
      digits: 'Por favor, introduce sólo dígitos.',
      creditcard: 'Por favor, introduce un número de tarjeta de crédito válido.',
      equalTo: 'Por favor, introduce el mismo valor de nuevo.',
      accept: 'Por favor, introduce un valor con una extensión válida.',
      maxlength: jQuery.validator.format('Por favor, no introduzcas más de {0} caracteres.'),
      minlength: jQuery.validator.format('Por favor, introduce al menos {0} caracteres.'),
      rangelength: jQuery.validator.format('Por favor, introduce un valor entre {0} y {1} caracteres de longitud.'),
      range: jQuery.validator.format('Por favor, introduce un valor entre {0} y {1}.'),
      max: jQuery.validator.format('Por favor, introduce un valor menor o igual a {0}.'),
      min: jQuery.validator.format('Por favor, introduce un valor mayor o igual a {0}.'),
    });

    $.validator.addMethod('passwordCheck', function (value, element) {
      if (this.optional(element)) {
        return true;
      } else if (!/[A-Z]/.test(value)) {
        return false;
      } else if (!/[a-z]/.test(value)) {
        return false;
      } else if (!/[0-9]/.test(value)) {
        return false;
      }

      return true;
    }, 'Debe contener al menos una mayúscula, minúscula y números.');
  }, []);

  // REGISTRARSE
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [captchaValue, setCaptchaValue] = useState('');
  const [errorMessage2, setErrorMessage2] = useState('');


  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (captchaValue === '') {
      setErrorMessage('Por favor, verifica que no eres un robot.');
      return;
    }
    
    try {
      const response = await axios.post('http://localhost:3002/api/register', {
        username,
        email,
        password,
      });

      console.log(response.data);

      setUsername('');
      setEmail('');
      setPassword('');
      setRegistrationSuccess(true);
      setErrorMessage2('');
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 400) {
        setErrorMessage2('Estos datos de usuario ya existen.');
      } else {
        setErrorMessage2('Error al registrar el usuario.');
      }
    }
  };

    

  if (registrationSuccess) {
    return (
      <div>
        <div className="section_signup">
          <div className="container">
            <div className="row full-height justify-content-center">
              <div className="col-12 text-center align-self-center py-5">
                <div className="section pb-5 pt-5 pt-sm-2 text-center">
                  <div className="card-3d-wrap mx-auto">
                    <div className="card-3d-wrapper">
                      <div className="card-front">
                        <div className="center-wrap">
                          <div className="section text-center">
                            <h4 className="mb-4 pb-3">Registro exitoso</h4>
                            <p>Tu registro se ha realizado correctamente.</p>
                            <a href="/login" className="btn mt-4">Ir a la página de inicio de sesión</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
                      <div className="card-front" style={{ height: '500px'}}>
                        <div className="center-wrap">
                          <div className="section text-center">
                            <h4 className="mb-4 pb-3">Registrarse</h4>
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-style"
                                placeholder="Nombre"
                                id="username"
                                name="username"
                                autoComplete="off"
                                value={username}
                                onChange={handleUsernameChange}
                              />
                              <i className="input-icon uil uil-user"></i>
                            </div>
                            <div className="form-group mt-2">
                              <input
                                type="email"
                                className="form-style"
                                placeholder="Correo"
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
                            <div className='form-group mt-2 recaptcha'>
                            <ReCAPTCHA
                            sitekey="6LcQJNImAAAAAOLpmMQv3EETM5I4_3t5KkVPsM6H"
                            onChange={handleCaptchaChange}
                            />
                            {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                            </div> 
                            <button type="submit" className="btn mt-4">Registrarse</button>
                            {errorMessage2 && <div style={{color: '#efb810'}}>{errorMessage2}</div>}
                          </div>
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

export default SignUp;
