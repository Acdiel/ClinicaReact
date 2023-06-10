import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'jquery-validation';
import './signup.css';
import 'jquery/dist/jquery.min.js';
import 'jquery-validation/dist/jquery.validate.min.js';
import 'jquery-validation/dist/additional-methods.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function Welcome() {
    const [ultimoCliente, setUltimoCliente] = useState(null);

    useEffect(() => {
        axios
            .get('http://localhost:3080/clientes')
            .then(response => {
                const clientes = response.data;
                if (clientes.length > 0) {
                    const ultimoCliente = clientes[clientes.length - 1];
                    setUltimoCliente(ultimoCliente);
                }
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <section>
            <div className="section">
                <div className="row full-height justify-content-center">
                    <div className="col-12 text-center align-self-center py-5">
                        <div className="section pb-5 pt-5 pt-sm-2 text-center">
                            <div className="card-3d-wrap mx-auto">
                                <div className="card-3d-wrapper">
                                    <div className="card-front">
                                        <div className="center-wrap">
                                            <div className="section text-center">
                                                {ultimoCliente && (
                                                    <form action="#myform" id="formulario" name="formulario">
                                                        <h3>
                                                            Bienvenido <span id="primer-nombre">{ultimoCliente.nombre}</span> !!
                                                        </h3>
                                                        <br />
                                                        <div className="form-group">
                                                            Correo : <span id="el-correo">{ultimoCliente.correo}</span> <br /> <br />
                                                            Contraseña : <span id="la-password">{ultimoCliente.password}</span> <br /> <br />
                                                        </div>
                                                    </form>
                                                )}
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

export default Welcome;
