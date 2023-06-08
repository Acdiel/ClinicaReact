$("#formulario").validate({

    rules: {
        log_nombre: {
          required: true,
          solo_letras: true,
          dos_nombres: true,
        },
        log_email:{
            required:true,
            email:true
            
        },
        log_pass:{
            required:true,
            passwordCheck:true
        }
      },
      messages:{
          log_nombre: {
              required: "Ingresa un nombre"
          },
          log_email:{
              required: "Ingresa un email",
          },
          log_pass:{
            required: "Ingresa una contraseña"
          }

      },

      submitHandler: function(form) {
        form.submit();
        var nombre = $("#log_nombre").val()
        var correo = $("#log_email").val()
        var password = $("#log_pass").val()
        myFunction(nombre,correo,password);
  
        localStorage.setItem('primer-nombre',nombre)
        localStorage.setItem('el-correo',correo)
        localStorage.setItem('la-password', password)
        
      }
   });

   // ABRIR PESTAÑA NUEVA

   function myFunction(nombre,correo,password){
    window.open("welcome.html")
    }

    // RESTRICCIONES DE CARACTERES

   jQuery.validator.addMethod("dos_nombres", function(value, element) {
    return /\s/.test(value);
  }, "Debe ingresar un apellido tambien");

  jQuery.validator.addMethod("solo_letras", function(value, element) {
    return /[a-z," "]/.test(value);
  }, "Deben sor solo letras");

  // CAMBIAR TEXTO DE LOS ERRORES 
  jQuery.extend(jQuery.validator.messages, {
    required: "This field is required.",
    remote: "Please fix this field.",
    email: "Por favor ingrese un email correcto.",
    url: "Please enter a valid URL.",
    date: "Please enter a valid date.",
    dateISO: "Please enter a valid date (ISO).",
    number: "Please enter a valid number.",
    digits: "Please enter only digits.",
    creditcard: "Please enter a valid credit card number.",
    equalTo: "Please enter the same value again.",
    accept: "Please enter a value with a valid extension.",
    maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
    minlength: jQuery.validator.format("Please enter at least {0} characters."),
    rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
    range: jQuery.validator.format("Please enter a value between {0} and {1}."),
    max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
    min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
});

jQuery.validator.addMethod("passwordCheck",function(value, element, param) {
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
        },
        "Debe contener al menos una mayúscula, minúscula y números.");