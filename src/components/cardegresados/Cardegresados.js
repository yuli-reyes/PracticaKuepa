import './cardegresados.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faEdit} from '@fortawesome/free-solid-svg-icons';
import estudiante from './graduate-student.jpg';


function Cardegre() {
	return(

		<div className="container-fluid cajacards">
			<div className="row mt-3">						
				<div className="col-sm-12 col-md-6">
					<button className="boton"><FontAwesomeIcon icon={ faPlusCircle } className="icono"/> NUEVO EGRESADO</button>				
					<button className="boton"><FontAwesomeIcon icon={ faEdit } className="icono"/> HISTORIAL EGRESADOS</button>
				</div>
			</div>
			<div className="card-deck">
				<div className="row mt-5">	
					<div className="card mb-3 col-sm-12 col-md-4">
					  	<div className="row g-0">
							    <div className="col-md-6 text-center">
							      <img src={ estudiante } className="foto" width="150px"/>
							    </div>
							    <div className="col-md-6">
								      <div className="card-body">
								        <h5 className="card-title">Yuli Viviana Reyes</h5>
								        <p className="card-text">Front-End</p>
								        <button className="btn-ver mt-3">VER MAS</button>						        
								      </div>
								</div>
						</div>
				      	<div className="row mt-3">
					  		<div className="col-sm-12 col-md-6 text-center">
					  			<button className="btn-edit">EDITAR</button>
					      	</div>
					      	<div className="col-sm-12 col-md-6 text-center">
					      		<button className="btn-eliminar">ELIMINAR</button>
					      	</div>
				      	</div>  	  	
					</div>

					<div className="card mb-3 col-sm-12 col-md-4">
					  	<div className="row g-0">
							    <div className="col-md-6 text-center">
							      <img src={ estudiante } className="foto" width="150px"/>
							    </div>
							    <div className="col-md-6">
								      <div className="card-body">
								        <h5 className="card-title">Yuli Viviana Reyes</h5>
								        <p className="card-text">Front-End</p>
								        <button className="btn-ver mt-3">VER MAS</button>						        
								      </div>
								</div>
						</div>
					    <div className="row mt-3">
					  		<div className="col-sm-12 col-md-6 text-center">
					  			<button className="btn-edit">EDITAR</button>
					      	</div>
					      	<div className="col-sm-12 col-md-6 text-center">
					      		<button className="btn-eliminar">ELIMINAR</button>
					      	</div>						      
				   		</div>	  	  	
					</div>

					<div className="card mb-3 col-sm-12 col-md-4">
					  	<div className="row g-0">
							    <div className="col-md-6 text-center">
							      <img src={ estudiante } className="foto" width="150px"/>
							    </div>
							    <div className="col-md-6">
								      <div className="card-body">
								        <h5 className="card-title">Yuli Viviana Reyes</h5>
								        <p className="card-text">Front-End</p>
								        <button className="btn-ver mt-3">VER MAS</button>						        
								      </div>
								</div>
						</div>
					    <div className="row mt-3">
					  		<div className="col-sm-12 col-md-6 text-center">
					  			<button className="btn-edit">EDITAR</button>
					      	</div>
					      	<div className="col-sm-12 col-md-6 text-center">
					      		<button className="btn-eliminar">ELIMINAR</button>
					      	</div>						      
				   		</div>	  	  	
					</div>

				</div>
			</div>
		</div>

		);
}
export default Cardegre;