import './cardSeguimiento.css';
import estudiante from './graduate-student.jpg';
import Swal from "sweetalert2";
import {
  Link  
} from "react-router-dom";
import { useState,useEffect } from 'react';
import { db } from '../../firebase';


function Cardsegui() {


	const [datos, setEgresados] = useState([])


	const getDatos = async () =>{
		db.collection ('datos').onSnapshot((querySnapshot)=>{
		const docs = [];
		querySnapshot.forEach ((doc) =>{
			docs.push({...doc.data(), id:doc.id});
			});
			setEgresados(docs);
		});
	};

	const onDeleteLink = id =>{

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
			db.collection('datos').doc(id).delete();
			Swal.fire(
			'¡Eliminado!',
			'La información ha sido eliminada.',
			'success'
			)
		}
		})
			
	}
		
useEffect(()=>{

	getDatos();

},[]) 

// setValues({
// ...values,
// nombre:doc.data().nombre,
// documento: doc.data().documento
// })

	return(

		<div className="container-fluid cajacards">
			<div>
				<div className="row mt-5 filacard">	
				{datos.map (egresado => (
					<div className="card mb-3 col-sm-12 col-md-4">
						<div className="card-title">
							<h5>{egresado.nombre}</h5>
						</div>
					  	<div className="row g-0">
							    <div className="col-md-6 text-center cajafoto">
							      <img src={ estudiante } className="foto" width="180px" alt="fotoestudiante"/>
							    </div>
							    <div className="col-md-6">
							            <div className="card-body">
									        <p>CC: {egresado.documento}</p>
									        <p>Celular: {egresado.celular}</p>
									        <p>Programa: <br></br>{egresado.programa}</p>								        			        
								        </div>
								</div>
						</div>
						<div className="row">
							<div className="col-sm-12 col-md-12 text-center">
							<Link to ={`/hvseguimiento/${egresado.id}`}><button className="btn-ver">VER MAS</button></Link>
							</div>
						</div>
				      	<div className="row mt-3">
					  		<div className="col-sm-12 col-md-7 text-center">
					  			<Link to="/formseguimiento"><button className="btn-registro">REGISTRAR SEGUIMIENTO</button></Link>
					      	</div>
					      	<div className="col-sm-12 col-md-5 text-center">
					      		<button className="btn-eliminars" onClick={()=>{onDeleteLink(egresado.id)}}>ELIMINAR</button>
					      	</div>
				      	</div>  	  	
					</div>					
				))}		
				</div>
			</div>
		</div>

		);
}
export default Cardsegui;

