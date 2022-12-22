import './App.css';
import {Routes,Route, } from 'react-router-dom';
import Contact from './proyectopin/Indexsu';
import Iniciando from './proyectopin/Hola';



function App() {
  return (
    <div className="App">
      <Routes> 
      <Route path='/' element={<Iniciando/>}></Route>
      <Route path='/Formulario' element={<Contact/>}></Route>
      </Routes>
    </div>

  );
}

export default App;
