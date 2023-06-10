import React from 'react';
import clinicanaf3 from '/clinicav2/src/assets/images/CLINICANAF3.png'
import home from '/clinicav2/src/assets/images/home.png'

const NavbarDos = () => {
  return (
    <header>
      <nav className="navbar bg-body-tertiary" style={{ backgroundColor: '#ffffff', boxShadow: 'rgba(0, 0, 0, 0.1) 1px 2px 7px' }}>
        <div className="container-fluid d-flex justify-content-between">
          <a className="nav-link active" href="/">
            <img src={home} className="home-icono" style={{ width: '36px' }} alt="" />
            <span style={{ color: '#000000', display: 'unset', textTransform: 'none' }}> Volver al sitio público</span>
          </a>
          <a className="nav-link active" href='/#'>
            <img src={clinicanaf3} style={{ width: '200px' }} alt="" />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default NavbarDos;
