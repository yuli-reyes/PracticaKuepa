import './seccionHVsegui.css';
import {useParams} from 'react-router-dom';
import {db} from  '../../firebase';
import React, {useEffect,useState} from 'react';

import {
  Link  
} from "react-router-dom";

function SeccionHVsegui(){

	
	const {id}=useParams()
	const [dato,setDato] = useState({})

  const getDatos = async () =>{

  await db.collection ('datos').doc(id).get()
  .then(response=>{
  	console.log(response.data())
  	setDato(response.data())

  })
 
  };
  useEffect(()=>{
  	getDatos()
  },[])

	return(

		<div className="container-fluid seccionhv">
			<div className="row max-vh-100">
				<div className="cajaperfil col-12 col-md-4 col-lg-4">
					<div className="fondooscuro text-center">
						<div className="fotoegre">
							<img src="https://img.freepik.com/foto-gratis/joven-graduado-contra-pared-grunge-espacio-copia-alegre-gran-sonrisa_1187-16129.jpg?size=626&ext=jpg" width="200px" alt="jovengraduado"/>
						</div>
						<div className="nombre">
							<h4>{dato.nombre}</h4>
						</div>
					</div>
					<div className="fondoverde">
						<div>
							<h5>Datos del Egresado</h5>
						</div>
						<div>
							<p><strong>C.C </strong>{dato.documento}</p>
							<p><strong>Celular: </strong>{dato.celular}</p>
							<p><strong>Teléfono Fijo: </strong>{dato.telefono}</p>
							<p><strong>Dirección: </strong>{dato.direccion}</p>
							<p><strong>Correo: </strong>{dato.correo}</p>
						</div>
						<div className="text-center">
							<Link to="/dashboard"><button className="btn-editar mt-3">ACTUALIZAR DATOS EGRESADO</button></Link>
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
						  </tr>
						  <tr>
						    <td>{dato.fechaRegistro}</td>
						    <td>{dato.programa}</td>
						    <td>{dato.institucion}</td>
						    <td>Graduado</td>
						    <td>20 de Julio 2021</td>				
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
						  </tr>
						  <tr>
						    <td>21/07/2021</td>
						    <td>Globant</td>
						    <td>Calle 180 #10-57</td>						    
						    <td>01/07/2021</td>
						    <td>Término Indefinido</td>
						    <td>3 Salarios mínimos</td>
						    <td>Front-End Junior</td>
						  </tr>
						</table>
					</div>
				</div>
			</div>
		</div>


		);
}

export default SeccionHVsegui;