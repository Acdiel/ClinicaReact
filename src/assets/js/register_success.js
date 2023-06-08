var nombre = localStorage.getItem('primer-nombre');
var correo = localStorage.getItem('el-correo');
var password = localStorage.getItem('la-password');

document.getElementById('primer-nombre').textContent = nombre;
document.getElementById('el-correo').textContent = correo;
document.getElementById('la-password').textContent = password;