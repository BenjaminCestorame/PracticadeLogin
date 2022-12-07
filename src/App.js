import './App.css';
import Actores from './proyectopin/Practicaapi' 
import {Routes,Route} from 'react-router-dom';
import Contact from './proyectopin/Indexsu';


function App() {
  return (
    <div className="App">
      <Routes> 
      <Route path='/' element={<Actores/>}></Route>
          <Route path='/Formulariodecontacto' element={<Contact/>}></Route>
      </Routes>

       
             
            
        </div>

  );
}

export default App;



{/* <Contact/> */}
          {/* <Barradenavegacion/>
       {/* <Barritas/> */}
        {/* <Actores/>   */} 