

$(document).ready(function() {
    $( "#subm").click(function(){
    var nombre = $("#nombre").val();
    var apellido = $("#apellido").val();
    var mob = $("#mob").val();
    var email = $("#email").val();
    $( "#p1" ).append("Nombre : " +nombre);
    $( "#p1" ).append("<br> Apellido: " +apellido);
    $( "#p1" ).append("<br> Numero de telefono: " +mob);
    $( "#p1" ).append("<br> Correo Electronico: " +email);
    });
    });
