import './login.css';
import logokuepa from '../../img/logokuepa.png';
import logotitulando from '../../img/logotitulando.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate,faUnlockAlt  } from '@fortawesome/free-solid-svg-icons';
import Botonlogin from '../../components/botonlogin/Botonlogin';
import Swal from "sweetalert2";

function Login(){

  const mostrarBienvenida=()=>{
    Swal.fire({
      title: 'Bienvenido',
      text: 'Has iniciado sesión con éxito.',
      imageUrl: 'https://icyjellyshot.000webhostapp.com/otrasimagenes/logotitulandopeque%C3%B1a.png',
      timer: 10000,
      imageWidth: 400,
      imageHeight: 99,
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#30A296'         
      
    })
  }

  const mostrarError=()=>{
    Swal.fire({
      icon: 'error',
      title: 'Datos incorrectos',
      text: 'Inténtalo de nuevo.',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#30A296'
})
  }

const handleSubmit=(e)=>{
    let usuario="yulidiana"
    let contrasena="123abc"    
    let user=e.target.querySelector("#usuario").value
    let password=e.target.querySelector("#clave").value
    e.preventDefault()

    if (usuario===user && contrasena===password) {
        mostrarBienvenida()
        window.location.replace("/dashboard")
    }
    else{
      mostrarError()      
    }
  }

  return(

    <div className="fondo">      
      <div className="container-fluid body">
        <div className="logokuepa">
          <img src={logokuepa} width="130px" alt="logokuepa"/>                    
        </div>
          <div className="logotitulando">
            <img src={logotitulando} width="250px" alt="logotitulando"/>
          </div>
            <div className="row">
              <div className="col-sm-12 col-md-12">
                  <form onSubmit={handleSubmit} className="box">
                    <h2 className="tituloingresar">INGRESAR</h2>

                      <div className="input-group mb-3 mt-4 cajainput text-center">
                        <span className="input-group-text"><FontAwesomeIcon icon={faUserGraduate} className="icon"/></span>
                        <input type="text" id="usuario" placeholder="Usuario" />
                      </div> 
                      <div className="input-group mb-3 cajainput ">
                        <span className="input-group-text"><FontAwesomeIcon icon={faUnlockAlt} className="icon"/></span>
                        <input type="password" id="clave" placeholder="Contraseña" />
                      </div>                                
                      <div className="mt-4">
                       <Botonlogin />
                      </div>
                  </form>                   
              </div>
            </div>
      </div>
     </div>

    );
}

export default Login;