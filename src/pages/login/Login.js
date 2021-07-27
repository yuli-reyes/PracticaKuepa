import './login.css';
import logokuepa from '../../img/logokuepa.png';
import logotitulando from '../../img/logotitulando.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate,faUnlockAlt  } from '@fortawesome/free-solid-svg-icons';

function Login(){
  return(

    <div className="fondo">      
      <div className="container-fluid body">
        <div className="logokuepa">
          <img src={logokuepa} width="130px" />                    
        </div>
          <div className="logotitulando">
            <img src={logotitulando} width="250px"/>
          </div>
            <div className="row">
              <div className="col-sm-12 col-md-12">
                  <form className="box">
                    <h2 className="tituloingresar">INGRESAR</h2>

                      <div className="input-group mb-3 mt-4 cajainput text-center">
                        <span className="input-group-text"><FontAwesomeIcon icon={faUserGraduate} className="icon"/></span>
                        <input type="text" id="usuario" placeholder=" Usuario" />
                      </div> 
                      <div className="input-group mb-3 cajainput ">
                        <span className="input-group-text"><FontAwesomeIcon icon={faUnlockAlt} className="icon"/></span>
                        <input type="text" id="clave" placeholder=" Contraseña" />
                      </div>                                
                      <div className="mt-4">
                        <button className="btn-inicio">INICIAR SESIÓN</button>
                      </div>
                  </form>                   
              </div>
            </div>
      </div>
     </div>

    );
}

export default Login;