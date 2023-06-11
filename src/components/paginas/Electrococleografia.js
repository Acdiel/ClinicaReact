import React from 'react';
import electrococleografia from '/clinicav2/src/assets/images/Electrococleografia.jpg';

function Electrococleografia() {

    return(
        <section style={{backgroundColor: 'white'}}>
        <div className="banner">
        <img height="200px" className="banner-principal" src={electrococleografia} alt="fondo-banner" />
      </div>

      <br />

      <div className="container">

        <section className="s-m" style={{ marginTop: '0px', marginBottom: '0px' }}>
          <div className="wrap">
            <h2 className="titulo-1">Electrococleografia</h2>
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
                        Es una técnica que permite recoger la actividad de la cóclea en respuesta a un estímulo sonoro.
                        Es una técnica electrofisiológica estrictamente monoaural. Es poco utilizada en la práctica por su
                        carácter invasivo. La ECOG puede ayudar a determinar la lateralidad y a interpretar fenómenos
                        intracocleares como la hidropesía laberíntica.
                        <br />
                        <br />
                        Electrococleografia es un registro de una señal bioelectrica que a través de la cóclea lleva un
                        sonido externo en donde se encuentran distintos tipos de potenciales evocados auditivos, es un
                        examen determinante para la enfermedad de meniere.
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

export default Electrococleografia