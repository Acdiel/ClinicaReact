import React from 'react';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

function Reserva() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const fecha = params.get('fecha');
  const hora = params.get('hora');
  const doctor = params.get('doctor');

  const fechaFormateada = format(new Date(fecha), 'dd MMMM yyyy', { locale: es });

  return (
    <section className="section">
      <div className="container">
        <h2>Resumen de la reserva:</h2>
        <p>Fecha: {fechaFormateada}</p>
        <p>Hora: {hora}</p>
        <p>Doctor: {getDoctorName(doctor)}</p>
      </div>
    </section>
  );
}

// Función para obtener el nombre del doctor según el valor seleccionado
function getDoctorName(doctorId) {
  switch (doctorId) {
    case '1':
      return 'Dr. Milo';
    case '2':
      return 'Dr. Colacao';
    default:
      return '';
  }
}

export default Reserva;
