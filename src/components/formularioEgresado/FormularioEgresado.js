import './formularioEgresado.css';
import estudiante from '../cardegresados/graduate-student.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';







const FormularioEgresado = (props) =>{

	const inicialStateValues={
		fechaRegistro: new Date().toString(),
		nombre:'',
		documento:'',
		direccion:'',
		correo:'',
		telefono:'',
		celular:'',
		usuariokuepa:'',
		codigo:'',
		programa:'',
		institucion:'',
		fechaGrado:'',
		intereses:''
	};

	const [values, setValues] = useState(inicialStateValues);

	const handleInputChange = (e) => {
		const {name, value} = e.target;
		setValues({...values, [name]: value})

	};

	const handleSubmit = (e) =>{
		e.preventDefault();
		props.addOrEdit(values);
 		setValues({...inicialStateValues})
		
	};


	return(

	<div className="container-fluid ">
		<form onSubmit={ handleSubmit } >
				<div className="titulo text-center">
					<h3>DATOS EGRESADO</h3>
				</div>
			<div className="row cajaformulario">				
				<div className="col-sm-12 col-md-3 text-center ">
					 <img src={estudiante} width="250px" className="imgestudent"/>	
				     <label className="mt-3">CARGAR FOTO</label>
					<input type="file" className="form-control" name="foto" />				
				</div>				
					<div className="col-sm-12 col-md-9">
						<div className="row">
							<div className="col-sm-12 col-md-4">
								<input type="text" className="form-control mt-3" name="nombre" onChange={ handleInputChange} value={values.nombre} placeholder="Nombre Completo:"/>				
							</div>
							<div className="col-sm-12 col-md-4">
							 	<input type="text" className="form-control mt-3"  name="documento" onChange={ handleInputChange} value={values.documento} placeholder="Documento:"/>				
							</div>
							<div className="col-sm-12 col-md-4">
								<input type="text" className="form-control mt-3"  name="direccion" onChange={ handleInputChange} value={values.direccion} placeholder="Dirección de Residencia:"/>				
							</div>
						</div>
						<div className="row">
							<div className="col-sm-12 col-md-4">
								<input type="text" className="form-control mt-3"  name="correo" onChange={ handleInputChange} value={values.correo} placeholder="Correo electrónico:"/>				
							</div>
							<div className="col-sm-12 col-md-4">
							 	<input type="text" className="form-control mt-3"  name="telefono" onChange={ handleInputChange} value={values.telefono} placeholder="Teléfono fijo:"/>				
							</div>
							<div className="col-sm-12 col-md-4">
								<input type="text" className="form-control  mt-3"  name="celular" onChange={ handleInputChange} value={values.celular} placeholder="Celular:"/>				
							</div>
						</div>
						<div className="row">
							<div className="col-sm-12 col-md-6">
								<input type="text" className="form-control mt-3"  name="usuariokuepa" onChange={ handleInputChange} value={values.usuariokuepa} placeholder="Usuario Kuepa:"/>				
							</div>
							<div className="col-sm-12 col-md-6">
							 	<input type="text" className="form-control  mt-3"  name="codigo" onChange={ handleInputChange} value={values.codigo} placeholder="Código:"/>				
							</div>
						</div>										
					</div>
			</div>

				<div className="titulo text-center">
					<h3>DATOS ACADÉMICOS</h3>
				</div>
				<div className="cajaestudios">						
					<div className="row mt-3">
							<div className="col-sm-12 col-md-6">
								<input type="text" className="form-control mb-3"  name="programa" onChange={ handleInputChange} value={values.programa} placeholder="Programa:"/>
								<input type="text" className="form-control mb-3" name="institucion" onChange={ handleInputChange} value={values.institucion} placeholder="Institución:" />
								<div className="row">
									<div className="col-sm-12 col-md-4 fecha">
									<label className="mb-3">Fecha de Graduación</label>
									</div>
									<div className="col-sm-12 col-md-8">
									<input type="date" className="form-control mb-3" name="fechaGrado" onChange={ handleInputChange} value={values.fecha}/>
									</div>
								</div>										
							</div>
							<div className="col-sm-12 col-md-6 mt-2">
								<textarea className="form-control" placeholder="Otros intereses:" name="intereses" onChange={ handleInputChange} value={values.intereses} rows="5"></textarea>
							</div>
					</div>
					<div className="col-sm-12 col-md-12 text-center mt-3">
						<button className="btn-save" type="submit"><FontAwesomeIcon icon={ faSave } /> GUARDAR</button>						
					</div>
				</div>											
		</form>			
	</div>


 );
}
export default FormularioEgresado;