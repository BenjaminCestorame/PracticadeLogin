  import Perrito from './Perrito1.png';
  import Perrito2 from './Perrito2.jpg';
  import Perrito3 from './Perrit3.jpg';
  import './Practicaapi.css';
 
  
  function Barritas(){ 

    return (
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={Perrito} className="Perritos" alt="..."></img>
        </div>
        <div class="carousel-item">
          <img src={Perrito2} className="Perritos" alt="..."></img>
        </div>
        <div class="carousel-item">
          <img src={Perrito3} className="Perritos" alt="..."></img>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Anterior</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Siguiente</span>
      </button>
    </div>

    )}

     export default Barritas;