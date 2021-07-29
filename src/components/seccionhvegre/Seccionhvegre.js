import './seccionhvegre.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function Seccionhvegre(){
	return(

		<div className="container-fluid seccionhv">
			<div className="row min-vh-100">
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
						<div>
							<button className="btn-editar">EDITAR</button>
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
						  <tr>
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
						    <td><FontAwesomeIcon icon={faPencilAlt} className="pencil"/><FontAwesomeIcon icon={faTrashAlt} className="trash"/></td>
						  </tr>
						</table>
					</div>
					<div className="linean">
						<h5>Datos Laborales</h5>
					</div>
				</div>
			</div>
		</div>


		);
}

export default Seccionhvegre;