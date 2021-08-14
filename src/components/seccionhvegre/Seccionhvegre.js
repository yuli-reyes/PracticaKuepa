import './seccionhvegre.css';
import {useParams} from 'react-router-dom';
import {db} from  '../../firebase';
import React, {useEffect,useState} from 'react';
import {
  Link  
} from "react-router-dom";


function Seccionhvegre(){

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
			<div className="row min-vh-100">
				<div className="cajaperfil col-12 col-md-4 col-lg-4">
					<div className="fondooscuro text-center">
						<div className="fotoegre">
							<img src="https://img.freepik.com/foto-gratis/joven-graduado-contra-pared-grunge-espacio-copia-alegre-gran-sonrisa_1187-16129.jpg?size=626&ext=jpg" width="200px"/>
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
							<Link to="/formegresados"><button className="btn-editar mt-3">EDITAR</button></Link>
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
						  <tr className="tabla">
						    <th>Fecha de Registro</th>
						    <th>Programa</th>
						    <th>Usuario Kuepa</th>
						    <th>Código</th>
						    <th>Institución</th>
						    <th>Fecha de Graduación</th>
						    <th>Intereses</th>
						  </tr>
						  <tr>
						    <td>{dato.fechaRegistro}</td>
						    <td>{dato.programa}</td>
						    <td>{dato.usuariokuepa}</td>
						    <td>{dato.codigo}</td>
						    <td>{dato.institucion}</td>						    
						    <td>{dato.fechaGrado}</td>
						    <td>{dato.intereses}</td>						    
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