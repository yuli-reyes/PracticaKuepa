import './formegre.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff,faSave  } from '@fortawesome/free-solid-svg-icons';
import estudiante from '../cardegresados/graduate-student.jpg';
import React from 'react';



function Formegre(){

	return(
		<div className="general container-fluid">
				<form>
					<div className="row">
							<div className="fotoform col-sm-12 col-md-4">
							  <img src={ estudiante } width="250px"/>
							</div>  
	                        <div className="col-sm-12 col-md-8">
								<div className="row">
									<div className="col-sm-12 col-md-6 text-center">
										<input type="text" placeholder="Nombre:" className="form-control mt-3" name="nombre"></input>
										<input type="text" placeholder="Direccion de Residencia:" className="form-control mt-3" name="direccion"></input>
										<input type="text" placeholder="Correo electrónico:" className="form-control mt-3" name="correo"></input>
										<input type="text" placeholder="Usuario Kuepa:" className="form-control mt-3" name="usuariokuepa"></input>


									</div>
									<div className="col-sm-12 col-md-6 text-center">
										<input type="text" placeholder="Documento:" className="form-control mt-3" name="documento"></input>
										<input type="text" placeholder="Teléfono fijo:" className="form-control mt-3" name="telefono"></input>
										<input type="text" placeholder="Celular:" className="form-control mt-3" name="celular"></input>
										<input type="text" placeholder="Código Estudiante:" className="form-control mt-3" name="codigo"></input>

									</div>
							  	</div>	
							</div>
					</div>
					<div className="row">
						<div className="col-sm-12 col-md-4 text-center mt-5">
							<label type="text" name="archivo">CARGAR FOTO</label>
							<input type="file" name="archivo"/>
						</div>
						<div className="col-sm-12 col-md-4 text-center mt-5">
							<button className="btncerrar"><FontAwesomeIcon icon={ faPowerOff } /> CERRAR</button>
						</div>
						<div className="col-sm-12 col-md-4 text-center mt-5"> 
							<button className="btnguardar"><FontAwesomeIcon icon={  faSave } /> GUARDAR CAMBIOS</button>
						</div>
					</div>
				</form>					 
						
		</div>
		);
}

export default Formegre;
