import React from 'react';
import bannernotas from '/clinicav2/src/assets/images/banner-notas.jpg';

function LavadoOidos() {

    return(
        <section style={{backgroundColor: 'white'}}>
      {/* BANNER PRINCIPAL */}
      <div className="banner">
        <img className="banner-principal" src={bannernotas} alt="fondo-banner" />
      </div>
      <br />
      <div className="container">
        <section className="s-m" style={{ marginTop: '0px', marginBottom: '0px' }}>
          <div className="wrap">
            <h2 className="titulo-1">Lavado de Oidos</h2>
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
                        Realizamos lavados de oído con profesionales capacitados y con el instrumental necesario,
                        recuerda que los tapones de cerumen pueden ser <strong>oclusivos</strong> o{' '}
                        <strong>semioclusivos</strong>, lo que te puede llegar a disminuir hasta un 30% tu audición.
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

export default LavadoOidos