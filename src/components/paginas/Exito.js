import React from 'react';


function Exito() {

  return (
    <section style={{ backgroundColor: 'white' }}>
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
                            <h3>
                              Su hora ha sido agendada con éxito !!
                            </h3>
                            <br />
                          </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Exito;
