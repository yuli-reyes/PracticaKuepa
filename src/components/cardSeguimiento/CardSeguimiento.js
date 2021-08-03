import './cardSeguimiento.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import estudiante from './graduate-student.jpg';
import Swal from "sweetalert2";
import {
  Link  
} from "react-router-dom";


function Cardsegui() {

	const mostrarEliminar=()=>{
	Swal.fire({
	  title: '¿Estás seguro de eliminar?',
	  icon: 'warning',
	  showCancelButton: true,
	  confirmButtonColor: '#229185',
	  cancelButtonColor: '#ff0000',
	  cancelButtonText: 'Cancelar',
	  confirmButtonText: 'Si, deseo eliminar'
	}).then((result) => {
	  if (result.isConfirmed) {
	    Swal.fire(
	      '¡Eliminado!',
	      'La información ha sido eliminada.',
	      'success'
	    )
	  }
	})
}



	return(

		<div className="container-fluid cajacards">
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
							<Link to="/hvseguimiento"><button className="btn-ver">VER MAS</button></Link>
							</div>
						</div>
				      	<div className="row mt-3">
					  		<div className="col-sm-12 col-md-7 text-center">
					  			<Link to="/formseguimiento"><button className="btn-registro">REGISTRAR SEGUIMIENTO</button></Link>
					      	</div>
					      	<div className="col-sm-12 col-md-5 text-center">
					      		<button className="btn-eliminars" onClick={()=>{mostrarEliminar()}}>ELIMINAR</button>
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
							<Link to="/hvseguimiento"><button className="btn-ver">VER MAS</button></Link>
							</div>
						</div>
				      	<div className="row mt-3">
					  		<div className="col-sm-12 col-md-7 text-center">
									<Link to="/formseguimiento"><button className="btn-registro">REGISTRAR SEGUIMIENTO</button></Link>					      	</div>
					      	<div className="col-sm-12 col-md-5 text-center">
					      		<button className="btn-eliminars" onClick={()=>{mostrarEliminar()}}>ELIMINAR</button>
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
							<Link to="/hvseguimiento"><button className="btn-ver">VER MAS</button></Link>
							</div>
						</div>
				      	<div className="row mt-3">
					  		<div className="col-sm-12 col-md-7 text-center">
					  			<Link to="/formseguimiento"><button className="btn-registro">REGISTRAR SEGUIMIENTO</button></Link>
					      	</div>
					      	<div className="col-sm-12 col-md-5 text-center">
					      		<button className="btn-eliminars" onClick={()=>{mostrarEliminar()}}>ELIMINAR</button>
					      	</div>
				      	</div>  	  	
					</div>

					
				</div>
			</div>
		</div>

		);
}
export default Cardsegui;