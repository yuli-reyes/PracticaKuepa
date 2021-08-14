import './formularioEgresado.css';
import estudiante from '../cardegresados/graduate-student.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import storage from '../../firebase';



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
	useEffect(() => {

		console.log(props.currentId)
		if (props.currentId === ''){
			setValues({...inicialStateValues});
		}else{
			console.log('editando')
			
		}
	},[props.currentId]);

		
	// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
	'use strict'
  
	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	var forms = document.querySelectorAll('.needs-validation')
  
	// Loop over them and prevent submission
	Array.prototype.slice.call(forms)
	  .forEach(function (form) {
		form.addEventListener('submit', function (event) {
		  if (!form.checkValidity()) {
			event.preventDefault()
			event.stopPropagation()
		  }
  
		  form.classList.add('was-validated')
		}, false)
	  })
  })()


	return(

	<div className="container-fluid ">
				<div className="titulo text-center">
					<h3>DATOS EGRESADO</h3>
				</div>
		<form onSubmit={ handleSubmit } className="needs-validation" noValidate>

			<div className="row cajaformulario">				
				<div className="col-sm-12 col-md-3 text-center ">
				<img src={estudiante} width="250px" className="imgestudent img-fluid"/>
					 <div>
						<label className="mt-3">CARGAR FOTO</label>
						<input type="file" className="form-control" name="foto" required />	
					</div>				
				</div>				
					<div className="col-sm-12 col-md-9">
						<div className="row">
							<div className="col-sm-12 col-md-4">
								<input type="text" className="form-control mt-3" name="nombre" onChange={ handleInputChange} value={values.nombre} placeholder="Nombre Completo:" pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ\s]{2,30}" required="required"/>				
								<div className="valid-feedback">El campo está correcto</div>
								<div className="invalid-feedback">Debe contener entre 2 y 30 letras, sin números ni caracteres especiales</div>
							</div>
							<div className="col-sm-12 col-md-4">
							 	<input type="text" className="form-control mt-3"  name="documento" onChange={ handleInputChange} value={values.documento} placeholder="Documento:" pattern="^[a-z0-9_-]{3,25}$" required="required"/>				
								<div className="valid-feedback">El campo está correcto</div>
								<div className="invalid-feedback">Debe contener entre 3 a 25 caracteres.</div>
							</div>
							<div className="col-sm-12 col-md-4">
								<input type="text" className="form-control mt-3"  name="direccion" onChange={ handleInputChange} value={values.direccion} placeholder="Dirección de Residencia:" pattern="[A-Za-z0-9-#./\s]{3,20}" required="required"/>				
								<div className="valid-feedback">El campo está correcto</div>
								<div className="invalid-feedback">Esta dirección no es válida</div>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-12 col-md-4">
								<input type="text" className="form-control mt-3"  name="correo" onChange={ handleInputChange} value={values.correo} placeholder="Correo electrónico:" pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}" required="required"/>				
								<div className="valid-feedback">El campo está correcto</div>
								<div className="invalid-feedback">Este correo no es válido</div>
							</div>
							<div className="col-sm-12 col-md-4" >
							 	<input type="tel" className="form-control mt-3"  name="telefono" onChange={ handleInputChange} value={values.telefono} placeholder="Teléfono fijo:" pattern="[^0-9]+${3,20}" required="required" />				
								 <div className="valid-feedback">El campo está correcto</div>
								<div className="invalid-feedback">Este número de teléfono no es válido</div>
							</div>
							<div className="col-sm-12 col-md-4">
								<input type="tel" className="form-control  mt-3"  name="celular" onChange={ handleInputChange} value={values.celular} placeholder="Celular:" pattern="[0-9+-\s]{3,20}" required="required" />				
								<div className="valid-feedback">El campo está correcto</div>
								<div className="invalid-feedback">Este número de celular no es válido</div>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-12 col-md-6">
								<input type="text" className="form-control mt-3" name="usuariokuepa" onChange={ handleInputChange} value={values.usuariokuepa} placeholder="Usuario Kuepa:" required/>				
							</div>
							<div className="col-sm-12 col-md-6">
							 	<input type="text" className="form-control  mt-3" name="codigo" onChange={ handleInputChange} value={values.codigo} placeholder="Código:" required/>				
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
								<input type="text" className="form-control mb-3"  name="programa" onChange={ handleInputChange} value={values.programa} placeholder="Programa:" required/>
								<input type="text" className="form-control mb-3" name="institucion" onChange={ handleInputChange} value={values.institucion} placeholder="Institución:" required/>
								<div className="row">
									<div className="col-sm-6 col-md-4 fecha">
										<label className="form-label">Fecha de Graduación</label>
									</div>
									<div className="col-sm-6 col-md-8">
										<input type="date" className="form-control mb-3" name="fechaGrado" onChange={ handleInputChange} value={values.fecha} required/>
									</div>
								</div>										
							</div>
							<div className="col-sm-12 col-md-6 mt-2">
								<textarea className="form-control" placeholder="Otros intereses:" name="intereses" onChange={ handleInputChange} value={values.intereses} rows="5"></textarea>
							</div>
					</div>
					<div className="col-sm-12 col-md-12 text-center mt-3">
						<button className="btn-save" type="submit"><FontAwesomeIcon icon={ faSave }/> GUARDAR</button>						
					</div>
				</div>											
		</form>			
	</div>


 );
}
export default FormularioEgresado;