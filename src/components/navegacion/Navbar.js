import React, { useContext } from 'react';
import { UserContext } from '../paginas/UserContext';
import '../navegacion/Nav.css';
import clinicanaf3 from '/clinicav2/src/assets/images/CLINICANAF3.png'
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
//import {faUser} from '@fortawesome/free-solid-svg-icons'; 

const Navbar = () => {

  const { user, logout } = useContext(UserContext);

  const handleLogout = () => {
    logout();
  };
  
    return( 
        <header>
        <nav className="navbar " style={{ backgroundColor: '#641c34' }}>
          <div className="container-fluid d-flex justify-content-between">
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" style={{ width: '200px' }} placeholder="Buscar" aria-label="Search" />
            </form>

            {user ? (
            <>
              <span>Hola, {user.name}</span>
              <button onClick={handleLogout}>Cerrar sesión</button>
            </>
          ) : (

            <a href="/login" style={{ color: '#ffffff', display: 'unset', textTransform: 'none', textDecoration: 'none' }}>Iniciar sesión</a>
          )}
          </div>
        </nav>
              
        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundColor: '#ffffff', boxShadow: 'rgba(0, 0, 0, 0.1) 4px 4px 8px' }}>
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                <img src={clinicanaf3} style={{ width: '200px' }} alt="" />
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/nuestraclinica" style={{ color: 'black' }} id="barraprincipal">Nuestra Clínica</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/contacto" style={{ color: 'black' }} id="barraprincipal">Contacto</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="barraprincipal" href="/#" style={{ color: 'black' }} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Servicios
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="/#">Función Nasal</a></li>
                      <li><a className="dropdown-item" href="/#">Impedanciometría</a></li>
                      <li><a className="dropdown-item" href="/#">Audiometría</a></li>
                      <li><a className="dropdown-item" href="/#">Pruebas de disfuncion tubaria</a></li>
                      <li><a className="dropdown-item" href="/octavopar">Octavo Par</a></li>
                      <li><a className="dropdown-item" href="/#">Vhit</a></li>
                      <li><a className="dropdown-item" href="/#">Vemps</a></li>
                      <li><a className="dropdown-item" href="/electrococleografia">Electrococleografia</a></li>
                      <li><a className="dropdown-item" href="/lavadooidos">Lavado de oidos</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">         
                    <a className="nav-link" style={{ color: 'black' }} href='/#' id="barraprincipal">Noticias</a>
                  </li>
                </ul>
                <button type="button" className="btn_agendarhora">          
              <a href="/agendarhora" className="card-link" style={{ textDecoration: 'none', color: 'white' }}>Agendar Hora</a>
                </button>

            
              </div>
            </div>
          </nav>

        </header>

    )
}

export default Navbar