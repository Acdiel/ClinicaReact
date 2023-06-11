import React, { useState } from "react";
import './SeleccionadorHoras.css';
//import {Grid} from '@material-ui/core';

const SeleccionadorHoras = ({ setSelectedHour }) => {

  const [activeButton, setActiveButton] = useState(null);


  const handleClick = (buttonId) => {
    if (activeButton === buttonId) {
      setActiveButton(null);
      setSelectedHour('');
    } else {
      setActiveButton(buttonId);
      setSelectedHour(getHour(buttonId));
    }

    // ... Código adicional que deseas ejecutar en el evento de clic del botón ...
  };

  const getButtonColor = (buttonId) => {
    if (activeButton === buttonId) {
      return { backgroundColor: 'white', color: 'black' };
    } else {
      return { backgroundColor: '#641c34', color: 'white' };
    }
  };

  const getHour = (buttonId) => {
    switch (buttonId) {
      case 1:
        return '09:00 - 10:00';
      case 2:
        return '10:00 - 11:00';
      case 3:
        return '11:00 - 12:00';
      case 4:
        return '12:00 - 13:00';
      case 5:
        return '13:00 - 14:00';
      case 6:
        return '14:00 - 15:00';
      case 7:
        return '15:00 - 16:00';
      case 8:
        return '16:00 - 17:00';
      case 9:
        return '17:00 - 18:00';
      default:
        return '';
    }
  };

  return (

    <React.Fragment>

    <div
      style={{
        borderRadius: "8px",
        border: "1px solid black",
        width: "200px",
        background: "#F2F2F0",
      }}
    > <div style={{ borderBottom: "1px solid black"}}>
        <h6 style={{ margin: 10, textAlign: 'center' }}>Selecciona una hora:</h6>
      </div>
      <div style={{ borderBottom: "1px solid black", textAlign: 'center', background: '#641c34'}}>
        <button
          
          style={
            getButtonColor(1)
          }
          onClick={() => handleClick(1)}
          
        >
          09:00 - 10:00
        </button>
        </div>

        <div style={{ borderBottom: "1px solid black", textAlign: 'center', background: '#641c34'}}>

        <button
          style={
            getButtonColor(2)
          }
          onClick={() => handleClick(2)}

        >
          10:00 - 11:00
        </button>
        </div>

        <div style={{ borderBottom: "1px solid black", textAlign: 'center', background: '#641c34'}}>

        <button
          
          style={
            getButtonColor(3)
          }
          onClick={() => handleClick(3)}
          
        >
          11:00 - 12:00
        </button>
        </div>
        <div style={{ borderBottom: "1px solid black", textAlign: 'center', background: '#641c34'}}>
        <button
          
          style={
            getButtonColor(4)
          }
          onClick={() => handleClick(4)}
        >
          12:00 - 13:00
        </button>
        </div>
        <div style={{ borderBottom: "1px solid black", textAlign: 'center', background: '#641c34'}}>
        <button
          
          style={
            getButtonColor(5)
          }
          onClick={() => handleClick(5)}
          
        >
          13:00 - 14:00
        </button>
        </div>
        <div style={{ borderBottom: "1px solid black", textAlign: 'center', background: '#641c34'}}>
        <button
          
          style={
            getButtonColor(6)
          }
          onClick={() => handleClick(6)}
          
        >
          14:00 - 15:00
        </button>
        </div>
        <div style={{ borderBottom: "1px solid black", textAlign: 'center', background: '#641c34'}}>
        <button
          
          style={
            getButtonColor(7)
          }
          onClick={() => handleClick(7)}
          
        >
          15:00 - 16:00
        </button>
        </div>
        <div style={{ borderBottom: "1px solid black", textAlign: 'center', background: '#641c34'}}>
        <button
          
          style={
            getButtonColor(8)
          }
          onClick={() => handleClick(8)}
          
        >
          16:00 - 17:00
        </button>
        </div>
        <div style={{ borderBottom: "1px solid black", textAlign: 'center', background: '#641c34'}}>
        <button
          
          style={
            getButtonColor(9)
          }
          onClick={() => handleClick(9)}
          
        >
          17:00 - 18:00
        </button>
      </div>

    

    </div>
        
    
    
    </React.Fragment>
  );
};

export default SeleccionadorHoras;
