
import './Practicaapi.css';
import Imagen1 from './dog-logo.webp';
import Perrito from './Perrito1.png';
import Perrito2 from './Perrito2.jpg';
import Perrito3 from './Perrit3.jpg';
import {Link} from 'react-router-dom';

   
  function Actores(){
   
    
      return(
          <body id="L">            
        <nav className="navbar navbar-expand-lg " >
        <div className="container-fluid">
        <div>{<img src={Imagen1} class='imgRedonda'/>}</div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Quienessomos">who we are?</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Refugio">Refugios</a>
              </li>
              <li class="nav-item">
               <Link to="/Formulariodecontacto"> <a class="nav-link disabled">Contacto</a></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
           
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
           <section className="Dos-pantallas"> 
                <div className="Quienes-somos"> 
                      <h1 className="Titulo1" id="Quienessomos">who we are? </h1> 
                      <p className="Primerparrafo"> 
                          Somos una empresa dedicada a la proteccion 
                           busqueda consientisacion y rescate de animales en peligro y situacion de calle 
                         sin fines de lucro. 
                      </p>
                      <button className="Boton">Mas aqui</button>
                </div>
                <div className="Ft-pantalla"></div>
           </section>
           <div className='Linea'></div>
           <section className="Lineas"> 
                 <div className="Pantallapartida2"> 
                      <h1 className="Titulo2"id="Refugio">Refugios:</h1>
                      <p className="Parrafo2">Ah lo largo de toda la Arg diariamente los animales sufren de maltrato 
                        tanto en las calles como en sus hogares si quieres ayudar abajo hay algunos de los refugios con los que trabajamos 
                        para rescate y cuidado de los animales 
                      </p>
                      <div className="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Refugio:Blablabla
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="Barritaparamover">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 class="accordion-header" id="headingTwo" >
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       Refugio: Blablabla
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="Barritaparamover">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       Refugio:Blablabla
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="Barritaparamover">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
    </div> 
    
         <div className="Pantalladeotrocolor">
       <div className="contenedor"></div>  
     </div>      
                </section>
              </body>
                        )};
  
  
  
  export default Actores ; 
 








  // const [actores,setListado]=useState([]); 
// useEffect(()=>{ 
//           const obtenerpersonajes= async ()=>{ 
//              const url= 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type'
//                const result=await axios.get(url);
//                console.log(result.data)
//                 setListado(result.data)
//              } 
//              obtenerpersonajes()
//             },[] 
//          )
    
//           console.log(actores);

  //       <div>  
    //           <h1 className="titulo1">Citas para perros.</h1>
    //      <ul>
    //             {actores.map(productos=>{
    //                 return(
    //                 <ProductCard productos={productos}/>
    //                 )
                   
    //                       } )}
    //    </ul>
                                 
    //       </div>


  