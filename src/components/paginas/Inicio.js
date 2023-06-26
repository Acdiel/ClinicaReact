import React from 'react';
import './StylesNew.css';
import oto3 from '/clinicav2/src/assets/images/oto3.jpg';
import oto4 from '/clinicav2/src/assets/images/oto4.jpg';
import otorrinolaringologia from '/clinicav2/src/assets/images/Otorrinolaringología.png';
import examenes2 from '/clinicav2/src/assets/images/examenes2.png';
import medicos2 from '/clinicav2/src/assets/images/medicos2.png';
import hospitalizacion2 from '/clinicav2/src/assets/images/hospitalizacion2.png';
import sucursales2 from '/clinicav2/src/assets/images/sucursales2.png';

const Inicio = () => {


    return(
<section style={{backgroundColor: 'white'}} className='Inicio'>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img height="400px" width="400px" src={oto3} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img height="400px" width="400px" src={oto4} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img height="400px" width="400px" src={otorrinolaringologia} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

<div id="fondo-azul">Clinica NAV</div>
<div id="panel">
  <p><strong>El oído y el olfato son sentidos esenciales</strong> en la vida de toda persona. Sin embargo, es común que
    por algún resfrío
    o enfermedad estos se vean afectados. Por eso, en Clínica NAF contamos con un <strong>íntegro equipo de
      médicos
      otorrinolaringólogos</strong> que te darán el diagnóstico y tratamiento adecuado. </p>
</div>

<div className="container">
  <div className="fila">
    <div className="logos">
      <a href="/#" style={{ textDecoration: 'none', color: 'black' }}>
        <img alt='' className="logosimg" src={examenes2} />
        <h6 style={{ fontSize: '20px' }}>Exámenes y procedimientos</h6>
        <p style={{ fontSize: '17px' }}>Agenda tus exámenes y procedimientos</p>
      </a>
    </div>
    <div className="logos">
      <a href="/#" style={{ textDecoration: 'none', color: 'black' }}>
        <img alt='' className="logosimg" src={medicos2} />
        <h6 style={{ fontSize: '20px' }}>Nuestros médicos</h6>
        <p style={{ fontSize: '17px' }}>Busca a tu médico por área o especialidad</p>
      </a>
    </div>
    <div className="logos">
      <a href="/#" style={{ textDecoration: 'none', color: 'black' }} >
        <img alt='' className="logosimg" src={hospitalizacion2} />
        <h6 style={{ fontSize: '20px' }}>Hospitalización</h6>
        <p style={{ fontSize: '17px' }}>Conoce todo el proceso para tu intervención</p>
      </a>
    </div>
    <div className="logos">
      <a href="/sucursales" style={{ textDecoration: 'none', color: 'black' }}>
        <img alt='' className="logosimg" src={sucursales2} />
        <h6 style={{ fontSize: '20px' }}>Sucursales</h6>
        <p style={{ fontSize: '17px' }}>Conoce nuestras clínicas, centros médicos.</p>
      </a>
    </div>
  </div>
</div>

<div className="container">
  <div className="roww">
    <div>
      <br />
      <h2 className="subtitle-blue" style={{color: 'black'}}>¿Qué es la otorrinolaringología?</h2>
      <p style={{color: 'black'}}>Se trata de una especialidad médico-quirúrgica que se encarga de prevenir, diagnosticar y tratar las enfermedades que afectan la boca, garganta, oído, nariz y cuello.</p>

      <p style={{color: 'black'}}>Nuestros especialistas pueden realizar tratamientos a través del uso de fármacos, así como también de intervenciones quirúrgicas como:</p>

      <ul className="listas">
        <li>Amigdalectomía</li>
        <li>Adenoidectomía</li>
        <li>Cirugía de oídos</li>
        <li>Cirugía de cavidades perinasales</li>
      </ul>
    </div>
  </div>
</div>

        </section>
    );
}
export default Inicio;