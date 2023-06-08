import React from 'react'

function Contacto() {

    return(
        <div className="section">
      <div className="row full-height justify-content-center">
        <div className="col-12 text-center align-self-center py-5">
          <div className="section pb-5 pt-5 pt-sm-2 text-center">
            <div className="card-3d-wrap mx-auto">
              <div className="card-3d-wrapper">
                <div className="card-front">
                  <div className="center-wrap">
                    <div className="section text-center">
                      <form action="#myform" id="formulario" name="formulario">
                        <h3>Completa con tus datos:</h3>
                        <br />
                        <div className="form-group">
                          Nombre: <input type="text" id="nombre" name="input_nombre" /> <br /> <br />
                          Apellido: <input type="text" id="apellido" name="input_apellido" /> <br /> <br />
                          Telefono: <input type="text" disabled id="mob" /> <br /> <br />
                          Email: <input type="text" id="email" name="input_email" /> <br /> <br />
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

export default Contacto