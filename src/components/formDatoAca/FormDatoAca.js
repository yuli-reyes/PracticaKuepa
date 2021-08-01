import './formDatoAca.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff,faSave  } from '@fortawesome/free-solid-svg-icons';
import estudiante from '../cardegresados/graduate-student.jpg';



function FormDatoAca(){
	return(
		<div className="general container-fluid">
				<form>
					<div className="row">
							<div className="fotoform col-sm-12 col-md-6">
							  <img src={ estudiante } width="300px"/>
							</div>  
	                        <div className="col-sm-12 col-md-6">
								<div className="row">									
										<input type="text" placeholder="Programa:" className="form-control mt-3" name="programa"></input>
										<input type="text" placeholder="Institución:" className="form-control mt-3" name="institucion"></input>
										<input type="date" placeholder="Fecha de graduación:" className="form-control mt-3" name="fecha"></input>
										<textarea className="mt-3" name="intereses" placeholder="Otros intereses:" cols="50" rows="8"></textarea>							
								</div>
								<div className="row">
						
									<div className="col-sm-12 col-md-6 text-center mt-5">
										<button className="btncerrar"><FontAwesomeIcon icon={ faPowerOff } /> CERRAR</button>
									</div>
									<div className="col-sm-12 col-md-6 text-center mt-5"> 
										<button className="btnguardar"><FontAwesomeIcon icon={  faSave } /> GUARDAR CAMBIOS</button>
									</div>
								</div>

							</div>
					</div>
					
				</form>					 
						
		</div>
		);
}

export default FormDatoAca;
