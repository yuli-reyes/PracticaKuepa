import './formegre.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { powerOff } from '@fortawesome/free-solid-svg-icons';
import estudiante from '../cardegresados/graduate-student.jpg';



function Formegre(){

	return(
		<div className="general container-fluid">
				<form>
					<div className="row">
							<div className="fotoform col-sm-12 col-md-4">
							  <img src={ estudiante } width="200px"/>
							</div>  
	                        <div className="col-sm-12 col-md-8">
								<div className="row">
									<div className="col-sm-12 col-md-6 text-center">
										<input type="text" placeholder="Nombre:" className="form-control mt-3" name="nombre"></input>
										<input type="text" placeholder="Direccion de Residencia:" className="form-control mt-3" name="direccion"></input>
										<input type="text" placeholder="Correo electrónico:" className="form-control mt-3" name="correo"></input>

									</div>
									<div className="col-sm-12 col-md-6 text-center">
										<input type="text" placeholder="Documento:" className="form-control mt-3" name="documento"></input>
										<input type="text" placeholder="Teléfono fijo:" className="form-control mt-3" name="telefono"></input>
										<input type="text" placeholder="Celular:" className="form-control mt-3" name="celular"></input>
									</div>
							  	</div>	
							</div>
					</div>
					<div className="row">
						<div className="col-sm-12 col-md-4 text-center mt-5">
							<button className="botonfoto">CARGAR FOTO</button>
						</div>
						<div className="col-sm-12 col-md-4 text-center mt-5">
							<button className="btncerrar">CERRAR</button>
						</div>
						<div className="col-sm-12 col-md-4 text-center mt-5"> 
							<button className="btnguardar">GUARDAR CAMBIOS</button>
						</div>
					</div>
				</form>					 
						
		</div>
		);
}

export default Formegre;