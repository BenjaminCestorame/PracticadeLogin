 
import {Link} from 'react-router-dom';
import Img1 from './Perrit3.jpg'
import Slider1 from './dog-logo.webp';
import Slider2 from './lindo-perro-husky-siberiano-patas-sobre-dibujos-animados-pared_42750-520.webp';
import Slider3 from './totostark210900015.webp'
import './Inicio.css'

  function Iniciando (){ 
     return (
    <body className='A'>
      <div><img src={Img1} className='img1'></img></div> 
        <div className='B'>
          <h1 className='t-12'>PetLover</h1>
          <nav> 
            <ul>
             <li><a href='#Haciendodisplay'>Home</a></li>
             <li><a href='#seccion1'>Section1</a></li>
             <li><a href='#seccion2'>Section2</a></li>
             <Link to="./Formulario"><li><a>Contac</a></li></Link>
            </ul>
          </nav>
        <div className='B1'></div>
        </div>
        <div className='Haciendodisplay' id="Haciendodisplay">
           <h1 className="t-1">Hello world! </h1>
            <p className="p-1">
            Pozdrav svijetu, ovo je moja web stranica, kao i ja dobro, ovo je irski okus
            Pozdrav svijetu, ovo je moja web stranica, kao i ja dobro, ovo je irski okus
            Pozdrav svijetu, ovo je moja web stranica, kao i ja dobro, ovo je irski okus
            Pozdrav svijetu, ovo je moja web stranica, kao i ja dobro, ovo je irski okus
            </p>
          <button className="b-123"> 
             Mas Aqui! 
            </button>
      </div>
      
        <section className='seccion1' id="seccion1">  
        <div className='holadiv'></div>
          <h1 className='t34'> Don't buy pets adopt them <br></br>
                              <h1 className='t35'>do not buy!!</h1>
          </h1>
          <p className='p34'>Pozdrav svijetu, ovo je moja web stranica, kao i ja dobro, ovo je irski okus
          Pozdrav svijetu, ovo je moja web stranica, kao i ja dobro, ovo je irski okus
          Pozdrav svijetu, ovo je moja web stranica, kao i ja dobro, ovo je irski okus
          Pozdrav svijetu, ovo je moja web stranica, kao i ja dobro, ovo je irski okus
          Pozdrav svijetu, ovo je moja web stranica, kao i ja dobro, ovo je irski okus
          Pozdrav svijetu, ovo je moja web stranica, kao i ja dobro, ovo je irski okus
          Pozdrav svijetu, ovo je moja web stranica, kao i ja dobro, ovo je irski okus
          Pozdrav svijetu, ovo je moja web stranica, kao i ja dobro, ovo je irski okus
          Pozdrav svijetu, ovo je moja web stranica, kao i ja dobro, ovo je irski okus 
          Pozdrav svijetu, ovo je moja web stranica, kao i ja dobro, ovo je irski okus
          Pozdrav svijetu, ovo je moja web stranica, kao i ja dobro, ovo je irski okus
          Pozdrav svijetu, ovo je moja web stranica, kao i ja dobro, ovo je irski okus
          Pozdrav svijetu, ovo je moja web stranica, kao i ja dobro, ovo je irski okus
          Pozdrav svijetu, ovo je moja web stranica, kao i ja dobro, ovo je irski okus
          Pozdrav svijetu, ovo je moja web stranica, kao i ja dobro, ovo je irski okus
          Pozdrav svijetu, ovo je moja web stranica, kao i ja dobro, ovo je irski okus
          Pozdrav svijetu, ovo je moja web stranica, kao i ja dobro, ovo je irski okus
                     
          </p>
        </section> 
  <section className='dospantallas12' id="seccion2">
    <div className='Pantalla1'></div> 
    <div className='Pantalla2'></div>
  </section>
  <img src={Img1} className='img2'></img>

  <div className="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className='Lineaparamover'>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className='Lineaparamover'>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className='Lineaparamover'>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>

<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button id='Botoncarrusel' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button id='Botoncarrusel' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button id='Botoncarrusel'type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Slider1} className="d-block" />
    </div>
    <div class="carousel-item">
      <img src={Slider2} className="d-block" />
    </div>
    <div class="carousel-item">
      <img src={Slider3} className="d-block" />
    </div>
  </div>
</div>
 <div className='Ultimodivdeestaparte'>
  <p>2022 ⓒ all rights reserved.</p>
  <h4>PetLover</h4>
</div> 
  </body>
   
     )
  };

  export default Iniciando; 
 


  