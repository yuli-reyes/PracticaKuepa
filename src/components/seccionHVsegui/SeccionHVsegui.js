import './seccionHVsegui.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Swal from "sweetalert2";


import {
  Link  
} from "react-router-dom";

function SeccionHVsegui(){

	const mostrarAccion=()=>{
	Swal.fire({
	  title: '¿Estás seguro de eliminar?',
	  icon: 'warning',
	  showCancelButton: true,
	  confirmButtonColor: '#7DB346',
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

		<div className="container-fluid seccionhv">
			<div className="row max-vh-100">
				<div className="cajaperfil col-12 col-md-4 col-lg-4">
					<div className="fondooscuro text-center">
						<div className="fotoegre">
							<img src="https://img.freepik.com/foto-gratis/joven-graduado-contra-pared-grunge-espacio-copia-alegre-gran-sonrisa_1187-16129.jpg?size=626&ext=jpg" width="200px"/>
						</div>
						<div className="nombre">
							<h4>EDWIN ALEXANDER GUTIERREZ DIAZ</h4>
						</div>
					</div>
					<div className="fondoverde">
						<div>
							<h5>Datos del Egresado</h5>
						</div>
						<div>
							<p>C.C 1032450436</p>
							<p>Celular: 302 678 9850</p>
							<p>Teléfono Fijo: 255 70 08</p>
							<p>Dirección: Calle 75 #43-50</p>
							<p>Correo: juanito@gmail.com</p>
						</div>
						<div className="text-center">
							<Link to="/formegresados"><button className="btn-editar mt-3">ACTUALIZAR DATOS EGRESADO</button></Link>
						</div>

					</div>
				</div>


				<div className="cajadatos col-12 col-md-8 col-lg-8">
				<div className="bordeverde">

				</div>				
					<div className="linean">
						<h5>Datos Académicos</h5>
					</div>
					<div className="table-responsive">
						<table>
						  <tr className="tablas">
						    <th>Fecha de Registro</th>
						    <th>Programa</th>
						    <th>Institución</th>
						    <th>Estado</th>
						    <th>Fecha de Graduación</th>
						    <th>Acciones</th>
						  </tr>
						  <tr>
						    <td>21/07/2021</td>
						    <td>Técnico Front-End</td>
						    <td>Kuepa</td>
						    <td>Graduado</td>
						    <td>20 de Julio 2021</td>
						    <td className="icono-acciones"><a><Link to="/formulariodatosacademicos"><FontAwesomeIcon icon={faPencilAlt} className="pencil" /></Link></a>						    
						    <a onClick={()=>{mostrarAccion()}} role="button"><FontAwesomeIcon icon={faTrashAlt} className="trash"/></a></td>
						  </tr>
						</table>
					</div>
					<div className="linean">
						<h5>Datos Laborales</h5>
					</div>
					<div className="table-responsive">
						<table>
						  <tr className="tablas">
						    <th>Fecha de Registro</th>
						    <th>Nombre de la Empresa</th>
						    <th>Dirección de la Empresa</th>
						    <th>Fecha de Ingreso</th>
						    <th>Tipo de Contrato</th>
						    <th>Salario</th>
						    <th>Cargo</th>
						    <th>Acciones</th>
						  </tr>
						  <tr>
						    <td>21/07/2021</td>
						    <td>Globant</td>
						    <td>Calle 180 #10-57</td>						    
						    <td>01/07/2021</td>
						    <td>Término Indefinido</td>
						    <td>3 Salarios mínimos</td>
						    <td>Front-End Junior</td>
						    <td className="icono-acciones"><a><Link to="/formulariodatosacademicos"><FontAwesomeIcon icon={faPencilAlt} className="pencil" /></Link></a>						    
						    <a onClick={()=>{mostrarAccion()}} role="button"><FontAwesomeIcon icon={faTrashAlt} className="trash"/></a></td>
						  </tr>
						</table>
					</div>
				</div>
			</div>
		</div>


		);
}

export default SeccionHVsegui;