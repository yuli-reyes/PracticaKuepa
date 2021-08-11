import './seccionhvegre.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Swal from "sweetalert2";
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



	const mostrarAccion=()=>{
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
							<p>C.C {dato.documento }</p>
							<p>Celular:{dato.celular}</p>
							<p>Teléfono Fijo:{dato.telefono}</p>
							<p>Dirección: {dato.direccion}</p>
							<p>Correo: {dato.correo}</p>
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
						    <th>Acciones</th>
						  </tr>
						  <tr>
						    <td>{dato.fechaRegistro}</td>
						    <td>{dato.programa}</td>
						    <td>{dato.usuariokuepa}</td>
						    <td>{dato.codigo}</td>
						    <td>{dato.institucion}</td>						    
						    <td>{dato.fechaGrado}</td>
						    <td>{dato.intereses}</td>
						    <td className="icono-acciones"><a><Link to="/formulariodatosacademicos"><FontAwesomeIcon icon={faPencilAlt} className="pencil" /></Link></a>						    
						    <a onClick={()=>{mostrarAccion()}} role="button"><FontAwesomeIcon icon={faTrashAlt} className="trash"/></a></td>
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