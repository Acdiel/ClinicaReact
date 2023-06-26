import React, { useState, useContext } from 'react';
import { Grid } from '@material-ui/core';
import axios from 'axios';
import { UserContext } from './UserContext';
import SeleccionadorHoras from "./SeleccionadorHoras";
import { DayPicker } from 'react-day-picker';
import { es } from 'date-fns/locale';
import 'react-day-picker/dist/style.css';

const css = `
.my-today {
  font-weight: bold;
  font-size: 140%;
  color: red;
  background-size: cover;
}
.my-selected:not([disabled]) {
  font-weight: bold;
  background: #641c34;
  color: white;
}

.rdp-caption_label {
  text-transform: uppercase;
}

body {
  background-color: white !important;
}

.footer {
  position: fixed;
  padding-left: 80px;
  padding-top: 5px;
}
`;

function AgendarHora() {
  const { user } = useContext(UserContext); // Obtener el contexto de usuario
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [showButton, setShowButton] = useState(false);
  const [selected, setSelected] = useState();
  const [selectedHour, setSelectedHour] = useState('');

  const handleDoctorChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedDoctor(selectedValue);
    setShowButton(selectedValue !== '');
  };

  const disabledDays = [
    { before: new Date() }, // Deshabilitar días pasados
    { daysOfWeek: [7] }, // Deshabilitar domingos
  ];

  const handleReservarHora = async () => {
    try {
      const response = await axios.post('http://localhost:3002/api/agendar-cita', {
        userId: user.id,
        username: user.name, // Pasar el ID del usuario
        fecha: selected.toISOString(), // Convertir la fecha seleccionada a un formato compatible con MySQL
        hora: selectedHour,
        doctorId: selectedDoctor,
      });

      console.log(response.data);

      // Aquí podrías mostrar una notificación o redirigir al usuario a una página de éxito
      window.location.href = '/exito';

    } catch (error) {
      console.error(error);
      // Manejo de errores
    }
  };

  return (
    <section className="section" style={{ color: 'black'}}>
      <Grid container>
        <Grid item xs={12} sm={6} md={4} style={{ paddingLeft: 20, paddingTop: 50 }}>
          <div className="AgendarHora">
            <style>{css}</style>
            <div
              style={{
                borderRadius: '8px',
                boxShadow: 'rgba(0, 0, 0, 0.1) 1px 2px 7px',
                width: '320px',
                height: '330px',
                background: 'white'
              }}
            >
              <DayPicker
                locale={es}
                mode="single"
                selected={selected}
                onSelect={setSelected}
                disabled={disabledDays}
                modifiersClassNames={{
                  selected: 'my-selected',
                  today: 'my-today'
                }}
                style={{ paddingTop: 10 }}
              />
            </div>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={4} style={{ paddingTop: 30 }}>
          {selected && (
            <SeleccionadorHoras
              activeButton={selectedHour}
              setActiveButton={setSelectedHour}
              setSelectedHour={setSelectedHour}
            />
          )}
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          {selected && (
            <div className="formulario">
              <h4 style={{ paddingTop: 30 }}>Elige un Doctor para tu cita:</h4>
              <div className="botonReservar" style={{ paddingTop: 30 }}>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  value={selectedDoctor}
                  onChange={handleDoctorChange}
                  required
                >
                  <option disabled value="">Selecciona un Doctor</option>
                  <option value="1">Dr. Milo</option>
                  <option value="2">Dr. Colacao</option>
                </select>

                {showButton && (
                  <button
                    type="button"
                    style={{ marginTop: 30 }}
                    className="btn btn-primary"
                    onClick={handleReservarHora} // Agregar el evento onClick para reservar la hora
                  >
                    Reservar Hora
                  </button>
                )}
              </div>
            </div>
          )}
        </Grid>
      </Grid>
    </section>
  );
}

export default AgendarHora;
