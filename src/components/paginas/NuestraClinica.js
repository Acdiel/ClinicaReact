import React from 'react'
import nosotros2 from '/clinicav2/src/assets/images/nosotros2.png';

function NuestraClinica() {

    return(
        <section style={{backgroundColor: 'white'}}>
      {/* BANNER PRINCIPAL */}
      <div className="banner">
        <img className="banner-principal" src={nosotros2} alt="fondo-banner" />
      </div>
      <br />
      <div className="container">
        <section className="s-m" style={{ marginTop: '0px', marginBottom: '0px' }}>
          <div className="wrap">
            <h2 className="titulo-1">¿Quiénes somos?</h2>
            <br />
          </div>
        </section>
        <section>
          <div className="wrap">
            <div className="detalle-esp">
              <div className="clear"></div>
              <div className="row">
                <div className="col-md-12">
                  <div className="texto-esp formatea_contenido img-float">
                    <div
                      id="ContentplaceholderMain_C016_Col00"
                      className="sf_colsIn img-esp"
                      data-placeholder-label="Galería"
                      data-sf-element="Galería"
                    ></div>
                    <div
                      id="ContentplaceholderMain_C016_Col01"
                      className="sf_colsIn"
                      data-placeholder-label="Contenido"
                      data-sf-element="Contenido"
                    >
                      <p>
                        <strong>CLINICA NAF </strong>es la red de atención médica privada más importante del país con un
                        amplio campo clínico en el que se forman los médicos del mañana.
                      </p>
                      <p>
                        En <strong>2013</strong>, la <strong>Pontificia Universidad Católica de Chile se asoció con
                        CHRISTUS Health</strong>, una de las 10 instituciones de salud más grandes de Estados Unidos y
                        perteneciente a la Orden de las Hermanas de la Caridad del Verbo Encarnado, con el propósito de
                        <strong>expandir su red de salud tanto en Chile como en América Latina.</strong>
                      </p>
                      <p>
                        La nueva<strong> CLINICA NAF</strong> cuenta con once centros médicos entre los que se cuentan
                        tres centros de salud familiar que operan en zonas de alta vulnerabilidad en la V Región.
                        Además, tiene una amplia red de unidades de toma de muestra para exámenes de laboratorio, un
                        hospital y dos clínicas. Cerca de mil médicos y más de cuatro mil personas dedican su trabajo a
                        cuidar de la salud de las personas.
                      </p>
                      <p>
                        Nuestro compromiso es<strong>entregar medicina de confianza</strong> en un modelo de atención
                        centrado en los pacientes y sus familias.
                      </p>
                      <p>
                        En cada una de nuestras acciones buscamos promover una cultura de calidad y seguridad y el
                        constante desarrollo de nuestro personal así como ser un campo clínico modelo para la formación
                        de<strong> profesionales de excelencia</strong>, respetuosos de la dignidad de las personas y de
                        una moral basada en los principios cristianos, como servicio a Chile y a la Iglesia.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
    );

}

export default NuestraClinica