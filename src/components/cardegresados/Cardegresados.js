import './cardegresados.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faEdit} from '@fortawesome/free-solid-svg-icons';
import estudiante from './graduate-student.jpg';


function Cardegre() {
	return(

		<div className="container-fluid cajacards">
			<div className="row mt-3 justify-content-start">						
				<div className="col-sm-12 col-md-3">
					<button className="boton"><FontAwesomeIcon icon={ faPlusCircle } className="icono"/> NUEVO EGRESADO</button>
				</div>
				<div className="col-sm-12 col-md-9">				
					<button className="boton"><FontAwesomeIcon icon={ faEdit } className="icono"/> HISTORIAL EGRESADOS</button>
				</div>
			</div>
			<div>
				<div className="row mt-5 filacard">	
					<div className="card mb-3 col-sm-12 col-md-4">
						<div className="card-title">
							<h5>Yuli Viviana Reyes</h5>
						</div>
					  	<div className="row g-0">
							    <div className="col-md-6 text-center cajafoto">
							      <img src={ estudiante } className="foto" width="180px"/>
							    </div>
							    <div className="col-md-6">
							            <div className="card-body">
									        <p>CC: 1032456890</p>
									        <p>Celular:312 3456578</p>
									        <p>Front-End</p>								        			        
								        </div>
								</div>
						</div>
						<div className="row">
							<div className="col-sm-12 col-md-12 text-center">
							<button className="btn-ver">VER MAS</button>
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
						<div className="card-title">
							<h5>Yuli Viviana Reyes</h5>
						</div>
					  	<div className="row g-0">
							    <div className="col-md-6 text-center cajafoto">
							      <img src={ estudiante } className="foto" width="180px"/>
							    </div>
							    <div className="col-md-6">
							            <div className="card-body">
									        <p>CC: 1032456890</p>
									        <p>Celular:312 3456578</p>
									        <p>Front-End</p>								        			        
								        </div>
								</div>
						</div>
						<div className="row">
							<div className="col-sm-12 col-md-12 text-center">
							<button className="btn-ver">VER MAS</button>
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
						<div className="card-title">
							<h5>Yuli Viviana Reyes</h5>
						</div>
					  	<div className="row g-0">
							    <div className="col-md-6 text-center cajafoto">
							      <img src={ estudiante } className="foto" width="180px"/>
							    </div>
							    <div className="col-md-6">
							            <div className="card-body">
									        <p>CC: 1032456890</p>
									        <p>Celular:312 3456578</p>
									        <p>Front-End</p>								        			        
								        </div>
								</div>
						</div>
						<div className="row">
							<div className="col-sm-12 col-md-12 text-center">
							<button className="btn-ver">VER MAS</button>
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