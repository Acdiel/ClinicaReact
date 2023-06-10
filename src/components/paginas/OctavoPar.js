import React from 'react'
import './StylesNew.css'
import octavopar from '/clinicav2/src/assets/images/8vopar.jpg';

function OctavoPar() {

    return(
        <section>
      <div className="banner">
        <img height="300px" className="banner-principal" src={octavopar} alt="fondo-banner" />
      </div>
      <br />
      <div className="container">
        <section className="s-m" style={{ marginTop: '0px', marginBottom: '0px' }}>
          <div className="wrap">
            <h2 className="titulo-1">8vo Par</h2>
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
                    <div id="ContentplaceholderMain_C016_Col00" className="sf_colsIn img-esp" data-placeholder-label="Galería" data-sf-element="Galería">
                    </div>
                    <div id="ContentplaceholderMain_C016_Col01" className="sf_colsIn" data-placeholder-label="Contenido" data-sf-element="Contenido">
                      <p>Hipoacusia, tinnitus, vértigo y/o desequilibrio son síntomas de un mal funcionamiento del octavo par o nervio auditivo, denominado así porque es el octavo nervio que emerge del cráneo, encargado de transmitir la información de la audición y del equilibrio, desde el oído interno hasta el cerebro<br /><br />
                        Estos trastornos pueden ocurrir tanto en niños como en adultos y lo más probable es que sean causados por una enfermedad que haya dañado el nervio auditivo. En los pequeños, las patologías más conocidas que pueden perjudicar el octavo par son las paperas y la meningitis, además de ciertos trastornos neurológicos hereditarios. Asimismo, la rubéola contraída durante el embarazo puede dañar el octavo par del feto y ser causa de sordera en el recién nacido. <br /><br />
                        En tanto, en los adultos, estos trastornos se producen por causas virales o de otra naturaleza, como alteraciones circulatorias, enfermedades metabólicas (diabetes mellitus) o, incluso, tumores del oído interno o patologías neurológicas</p>
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

export default OctavoPar