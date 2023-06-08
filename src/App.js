import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navegacion/Navbar';
import Inicio from './components/paginas/Inicio';
import OctavoPar from './components/paginas/OctavoPar';
import AgendarHora from './components/paginas/AgendarHora';
import Contacto from './components/paginas/Contacto';
import Electrococleografia from './components/paginas/Electrococleografia';
import LavadoOidos from './components/paginas/LavadoOidos';
import NuestraClinica from './components/paginas/NuestraClinica';
import SignUp from './components/paginas/SignUp';
import Sucursales from './components/paginas/Sucursales';
import Welcome from './components/paginas/Welcome';

function App() {
  return (
    <div className='App'>

      <Router>
        <Navbar/>
          <Routes>
            <Route exact path="/" element={<Inicio/>}/>
            <Route exact path="/octavopar" element={<OctavoPar/>}/>
            <Route exact path="/agendarhora" element={<AgendarHora/>}/>
            <Route exact path="/Contacto" element={<Contacto/>}/>
            <Route exact path="/Electrococleografia" element={<Electrococleografia/>}/>
            <Route exact path="/lavadooidos" element={<LavadoOidos/>}/>
            <Route exact path="/nuestraclinica" element={<NuestraClinica/>}/>
            <Route exact path="/signup" element={<SignUp/>}/>
            <Route exact path="/sucursales" element={<Sucursales/>}/>
            <Route exact path="/welcome" element={<Welcome/>}/>
          </Routes>
        </Router>
      </div>
  );
}

export default App;
