import React from 'react';
import clinica1 from '/clinicav2/src/assets/images/clinica1.jpg';

function Sucursales() {

    return(
        <section style={{backgroundColor: 'white'}}>
      <br />
      <div className="container">
        <h1 className="clinicas-text">Clinicas</h1>
        <br />
        <div className="card" style={{ width: '30rem' }}>
          <img src={clinica1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title" style={{ fontSize: '24px' }}>
              Clinica NAF Concon
            </h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item" id="letras">
              Ubicación
              <br />
              <a href="https://goo.gl/maps/ZVVwbtqfLMVxnWbB8" style={{ color: 'black' }}>
                Av. Blanca Estela, Concon
              </a>
            </li>
            <li className="list-group-item" id="letras">
              Cómo llegar
              <br />
              <br />
              +569 84320812
            </li>
            <li className="list-group-item" id="letras">
              Llamar
            </li>
          </ul>
          <div className="card-body">
            <button type="button" className="btn btn-dark btn-lg">
              <a href="/#" className="card-link" style={{ textDecoration: 'none', color: 'white' }}>
                Conocer más
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
    );

}

export default Sucursales