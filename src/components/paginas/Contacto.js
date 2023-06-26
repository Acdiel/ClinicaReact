import React, { useState } from 'react';

function Contacto() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [nombreError, setNombreError] = useState('');
  const [apellidoError, setApellidoError] = useState('');
  const [telefonoError, setTelefonoError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;

    if (nombre.trim() === '') {
      setNombreError('Por favor, ingresa tu nombre');
      isValid = false;
    } else {
      setNombreError('');
    }

    if (apellido.trim() === '') {
      setApellidoError('Por favor, ingresa tu apellido');
      isValid = false;
    } else {
      setApellidoError('');
    }

    if (telefono.trim() === '') {
      setTelefonoError('Por favor, ingresa tu teléfono');
      isValid = false;
    } else {
      setTelefonoError('');
    }

    if (email.trim() === '') {
      setEmailError('Por favor, ingresa tu correo electrónico');
      isValid = false;
    } else if (!isValidEmail(email)) {
      setEmailError('Por favor, ingresa un correo electrónico válido');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (isValid) {

      console.log('Datos del formulario:');
      console.log('Nombre:', nombre);
      console.log('Apellido:', apellido);
      console.log('Teléfono:', telefono);
      console.log('Email:', email);


      alert('Formulario enviado correctamente');

      setNombre('');
      setApellido('');
      setTelefono('');
      setEmail('');
    }
  };

  const isValidEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  return (
    <div className="section" style={{ backgroundColor: 'white', color: 'black' }}>
      <div className="row full-height justify-content-center">
        <div className="col-12 text-center align-self-center py-5">
          <div className="section pb-5 pt-5 pt-sm-2 text-center" style={{paddingRight: 100}}>
            <div className="card-3d-wrap mx-auto">
              <div className="card-3d-wrapper">
                <div className="card-front" style={{width: '600px'}}>
                  <div className="center-wrap">
                    <div className="section text-center">
                      <form onSubmit={handleSubmit} id="formulario" name="formulario">
                        <h3>Completa con tus datos:</h3>
                        <br />
                        <div className="form-group">
                          Nombre:{' '}
                          <input
                            type="text"
                            id="nombre"
                            name="input_nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                          />
                          {nombreError && <span style={{ color: 'red' }}>{nombreError}</span>}
                          <br /> <br />
                          Apellido:{' '}
                          <input
                          type="text"
                          id="apellido"
                          name="input_apellido"
                          value={apellido}
                          onChange={(e) => setApellido(e.target.value)}
                        />
                        {apellidoError && <span style={{ color: 'red' }}>{apellidoError}</span>}
                        <br /> <br />
                        Teléfono:{' '}
                        <input
                          type="text"
                          id="telefono"
                          name="input_telefono"
                          value={telefono}
                          onChange={(e) => setTelefono(e.target.value)}
                        />
                        {telefonoError && <span style={{ color: 'red' }}>{telefonoError}</span>}
                        <br /> <br />
                        Email:{' '}
                        <input
                          type="text"
                          id="email"
                          name="input_email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        {emailError && <span style={{ color: 'red' }}>{emailError}</span>}
                        <br /> <br />
                        <input type="submit" id="subm" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p id="p1"></p>
  </div>
);
}

export default Contacto;
