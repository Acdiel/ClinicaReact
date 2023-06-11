import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navegacion/Navbar';
import NavbarDos from './components/navegacion/NavbarDos';
import Inicio from './components/paginas/Inicio';
import OctavoPar from './components/paginas/OctavoPar';
import SignUp from './components/paginas/SignUp';
import Contacto from './components/paginas/Contacto';
import Electrococleografia from './components/paginas/Electrococleografia';
import LavadoOidos from './components/paginas/LavadoOidos';
import NuestraClinica from './components/paginas/NuestraClinica';
import Welcome from './components/paginas/Welcome';
import Sucursales from './components/paginas/Sucursales';
import AgendarHora from './components/paginas/AgendarHora';
import Reserva from './components/paginas/Reserva';


function App() {

  let navbarComponent;

  if (window.location.pathname === '/signup' || window.location.pathname === '/agendarhora') {
    navbarComponent = <NavbarDos />;
  } else {
    navbarComponent = <Navbar />;
  }

  return (
    <div className='App'>

      <Router>
          {navbarComponent}
      
          <Routes>
            <Route exact path="/" element={<Inicio/>}/>
            <Route exact path="/octavopar" element={<OctavoPar/>}/>
            <Route exact path="/signup" element={<SignUp/>}/>
            <Route exact path="/Contacto" element={<Contacto/>}/>
            <Route exact path="/Electrococleografia" element={<Electrococleografia/>}/>
            <Route exact path="/lavadooidos" element={<LavadoOidos/>}/>
            <Route exact path="/nuestraclinica" element={<NuestraClinica/>}/> 
            <Route exact path="/welcome" element={<Welcome/>}/>
            <Route exact path="/sucursales" element={<Sucursales/>}/>
            <Route exact path="/agendarhora" element={<AgendarHora/>}/>
            <Route exact path="/reserva" element={<Reserva/>}/>
            
          </Routes>
        </Router>
        
      </div>
  );
}

export default App;
