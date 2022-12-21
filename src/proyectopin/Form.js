import {Link} from 'react-router-dom';


 const Form = ({user, handleChange, handleSubmit, sucess, error}) =>{
  const disabled = !(user.nombre && user.mail && user.mensaje)
  return(
    <body>
      <div><h1 className="titulouno">PetLover</h1>
          <form className="forminicio" onSubmit={handleSubmit}>
         <label className='nombrelabel' htmlFor="nombre">Nombre:</label>
              <input className="inputs" value={user.nombre}  onChange={handleChange} name="nombre" type="text" placeholder="Juan"/><br/>
              <label  className='nombrelabel' htmlFor="mail">email</label>
              <input className="inputs" value={user.email} onChange={handleChange} name="mail" type="email" placeholder="jperez@mail.com"/><br/>
              <label  className='nombrelabel' htmlFor="mensaje">mensaje</label>
              <textarea className="inputs" value={user.mensaje} onChange={handleChange} name="mensaje" placeholder="Deja tu mensaje..."/>
              <input className='botons' disabled={disabled} type="submit"/>
          </form>
          {sucess && <p>Mensaje enviado correctamente!</p>}
          {error && <p>Ocurrio un error al intentar enviar el mensaje!</p>}

      </div>
      <Link to="/"><button className="Botonhome">Home</button></Link>
      </body>
  )
}
  
  
  export default Form ; 
 








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


  