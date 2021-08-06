import './formegre.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff, faChevronRight  } from '@fortawesome/free-solid-svg-icons';
import estudiante from '../cardegresados/graduate-student.jpg';
import React, { useState } from 'react';




const Formegre =(props) =>{

	const inicialStateValues={
		nombre: '',
		direccion: '',
		correo:'',
		usuariokuepa:'',
		documento:'',
		telefono:'',
		celular:'',
		codigo:''

	};
	const [values, setValues] = useState(inicialStateValues);


	const handleInputChange = (e) => {
		const {name, value} = e.target;
		setValues({...values, [name]: value})

	};

	const handleSubmit = (e) =>{
		e.preventDefault();
		console.log(values)
		
	};

	return(
		<div className="general container-fluid">
				<form onSubmit={ handleSubmit }>
					<div className="row">
							<div className="fotoform col-sm-12 col-md-4">
							  <img src={ estudiante } width="250px"/>
							</div>  
	                        <div className="col-sm-12 col-md-8">
								<div className="row">
									<div className="col-sm-12 col-md-6 text-center">
										<input type="text" placeholder="Nombre:" className="form-control mt-3" name="nombre" onChange={ handleInputChange} required="required"></input>
										<input type="text" placeholder="Direccion de Residencia:" className="form-control mt-3" name="direccion" onChange={ handleInputChange} required="required"></input>
										<input type="email" placeholder="Correo electrónico:" className="form-control mt-3" name="correo" onChange={ handleInputChange} pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}"></input>
										<input type="text" placeholder="Usuario Kuepa:" className="form-control mt-3" name="usuariokuepa" onChange={ handleInputChange} required="required"></input>


									</div>
									<div className="col-sm-12 col-md-6 text-center">
										<input type="text" placeholder="Documento:" className="form-control mt-3" name="documento" onChange={ handleInputChange} required="required"></input>
								<input type="tel" placeholder="Teléfono fijo:" className="form-control mt-3" name="telefono" onChange={ handleInputChange} pattern=""></input>
										<input type="text" placeholder="Celular:" className="form-control mt-3" name="celular" onChange={ handleInputChange} pattern=""></input>
										<input type="text" placeholder="Código Estudiante:" className="form-control mt-3" name="codigo" onChange={ handleInputChange}></input>

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
							<button className="btnguardar"> SIGUIENTE <FontAwesomeIcon icon={ faChevronRight} /></button>
						</div>
					</div>
				</form>					 
						
		</div>
		);
}

export default Formegre;
