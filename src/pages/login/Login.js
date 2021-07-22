import './login.css';
import logokuepa from '../../img/logokuepa.png';
import user from '../../img/user.svg';
import logotitulando from '../../img/logotitulando.png';

function Login(){
  return(

    <div className="container-fluid body">
    <div className="logokuepa">
      <img src={logokuepa} width="100px" />
    </div>
      <div className="logotitulando">
        <img src={logotitulando} width="150px"/>
      </div>
          <div className="row">
            <div className="col-sm-12 col-md-12">
                <form className="box">
                  <h2 className="tituloingresar">INGRESAR</h2>
                    <div className="mt-3">
                      <input type="text" id="usuario" placeholder="Usuario"/>                    
                    </div>
                    <div className="mt-3">
                      <input type="text" id="clave" placeholder="Contraseña"/>
                    </div>
                    <div className="mt-4">
                    <button className="btn-inicio">INICIAR SESIÓN</button>
                    </div>
                </form>
            </div>

          </div>
    </div>
    );
}

export default Login;