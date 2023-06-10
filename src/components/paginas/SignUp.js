import React, { useEffect } from 'react';
import $ from 'jquery';
import 'jquery-validation';
import './signup.css'; // Asegúrate de tener el archivo signup.css en la misma ubicación
import 'jquery/dist/jquery.min.js';
import 'jquery-validation/dist/jquery.validate.min.js';
import 'jquery-validation/dist/additional-methods.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

/* global jQuery */

function SignUp() {
    useEffect(() => {
      $('#formulario').validate({
        rules: {
          log_nombre: { 
            required: true,
            solo_letras: true,
          },
          log_email: {
            required: true,
            email: true,
          },
          log_pass: {
            required: true,
            passwordCheck: true,
          },
        },
        messages: {
          log_nombre: { 
            required: "Ingresa un nombre",
          },
          log_email: {
            required: "Ingresa un email",
          },
          log_pass: {
            required: "Ingresa una contraseña",
          },
        },
        submitHandler: function (form) {
          var nombre = $("#log_nombre").val();
          var correo = $("#log_email").val();
          var password = $("#log_pass").val();
          myFunction(nombre, correo, password);

          $.ajax({
            url: "http://localhost:3080/clientes", // URL del endpoint para crear un nuevo cliente en el servidor
            type: "POST",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify({ nombre, correo, password }),
            success: function (response) {
              // Manejar la respuesta del servidor
              alert(response);
              console.log(response);
        
              // Redirigir a la página de bienvenida
              window.open("/welcome", "_blank");
            },
            error: function (xhr, status, error) {
              // Manejar el error de la petición AJAX
              console.log(error);
            },
          });
  
          localStorage.setItem('primer-nombre', nombre);
          localStorage.setItem('el-correo', correo);
          localStorage.setItem('la-password', password);
        },
      });
    }, []);
  
    // ABRIR PESTAÑA NUEVA
    function myFunction(nombre, correo, password) {
      window.open("/welcome");
    }
  
  
    $.validator.addMethod("solo_letras", function(value, element) {
      return /[a-z," "]/.test(value);
    }, "Deben ser solo letras");

    jQuery.extend(jQuery.validator.messages, {
        required: "Este campo es obligatorio.",
        remote: "Por favor, corrige este campo.",
        email: "Por favor, introduce una dirección de correo válida.",
        url: "Por favor, introduce una URL válida.",
        date: "Por favor, introduce una fecha válida.",
        dateISO: "Por favor, introduce una fecha válida (ISO).",
        number: "Por favor, introduce un número válido.",
        digits: "Por favor, introduce sólo dígitos.",
        creditcard: "Por favor, introduce un número de tarjeta de crédito válido.",
        equalTo: "Por favor, introduce el mismo valor de nuevo.",
        accept: "Por favor, introduce un valor con una extensión válida.",
        maxlength: jQuery.validator.format("Por favor, no introduzcas más de {0} caracteres."),
        minlength: jQuery.validator.format("Por favor, introduce al menos {0} caracteres."),
        rangelength: jQuery.validator.format("Por favor, introduce un valor entre {0} y {1} caracteres de longitud."),
        range: jQuery.validator.format("Por favor, introduce un valor entre {0} y {1}."),
        max: jQuery.validator.format("Por favor, introduce un valor menor o igual a {0}."),
        min: jQuery.validator.format("Por favor, introduce un valor mayor o igual a {0}.")
      });
      
      $.validator.addMethod("passwordCheck", function(value, element) {
        if (this.optional(element)) {
          return true;
        } else if (!/[A-Z]/.test(value)) {
          return false;
        } else if (!/[a-z]/.test(value)) {
          return false;
        } else if (!/[0-9]/.test(value)) {
          return false;
        }
      
        return true;
      }, "Debe contener al menos una mayúscula, minúscula y números.");

    return(

     <div>

        <div className="section">
        <div className="container">
          <form action="" id="formulario" name="formulario">
            <div className="row full-height justify-content-center">
              <div className="col-12 text-center align-self-center py-5">
                <div className="section pb-5 pt-5 pt-sm-2 text-center">
                  <h6 className="mb-0 pb-3">
                    <span>Iniciar Sesión </span>
                    <span>Registrarse</span>
                  </h6>
                  <input
                    className="checkbox"
                    type="checkbox"
                    id="reg-log"
                    name="reg-log"
                  />
                  <label htmlFor="reg-log"></label>
                  <div className="card-3d-wrap mx-auto">
                    <div className="card-3d-wrapper">
                      <div className="card-front">
                        <div className="center-wrap">
                          <div className="section text-center">
                            <h4 className="mb-4 pb-3">Iniciar Sesión</h4>
                            <div className="form-group">
                              <input
                                type="email"
                                name="logemail"
                                className="form-style"
                                placeholder="Correo"
                                id="logemail"
                                autoComplete="off"
                              />
                              <i className="input-icon uil uil-at"></i>
                            </div>
                            <div className="form-group mt-2">
                              <input
                                type="password"
                                name="logpass"
                                className="form-style"
                                placeholder="Contraseña"
                                id="logpass"
                                autoComplete="off"
                              />
                              <i className="input-icon uil uil-lock-alt"></i>
                            </div>
                            <a href="/#" className="btn mt-4">
                              Entrar
                            </a>
                            <p className="mb-0 mt-4 text-center">
                              <a href="#0" className="link">
                              ¿Olvidaste tu contraseña?
                               </a>
                             </p>
                           </div>
                         </div>
                       </div>
                       <div className="card-back">
                         <div className="center-wrap">
                           <div className="section text-center">
                             <h4 className="mb-4 pb-3">Registrarse</h4>
                             <div className="form-group">
                               <input
                                 type="text"
                                 name="log_nombre"
                                 className="form-style"
                                 placeholder="Nombre"
                                 id="log_nombre"
                                 autoComplete="off"
                               />
                               <i className="input-icon uil uil-user"></i>
                             </div>
                             <div className="form-group mt-2">
                               <input
                                 type="email"
                                 name="log_email"
                                 className="form-style"
                                 placeholder="Correo"
                                 id="log_email"
                                 autoComplete="off"
                               />
                               <i className="input-icon uil uil-at"></i>
                             </div>
                             <div className="form-group mt-2">
                               <input
                                 type="password"
                                 name="log_pass"
                                 className="form-style"
                                 placeholder="Contraseña"
                                 id="log_pass"
                                 autoComplete="off"
                               />
                               <i className="input-icon uil uil-lock-alt"></i>
                             </div>
                             <input
                               type="submit"
                               className="btn mt-4"
                               value="Registrarse"
                             />
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </form>
         </div>
       </div>
       </div>
    );

}

export default SignUp