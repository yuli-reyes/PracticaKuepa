import './formularioSeguimiento.css';
import estudiante from '../cardegresados/graduate-student.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import {db} from  '../../firebase';


const FormularioSeguimiento = (props) =>{

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
			fechaGrado:'',
			estadoformacion:'',
			otrocurso:'',
			otroprograma:'',
			otrafecha:'',
			nombreempresa:'',
			direccionempresa:'',
			tipocontrato:'',
			cargolaboral:'',
			telempresa:'',
			salario:''
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

		const [empleo, setEmpleo] = useState("ninguno")
		const [checked, setChecked] = useState({

			si:false,
			no:false
		})

		const handleChangeRadio = (e) => {

			const {name} = e.target
			if (name==="si"){
				setChecked({
					si:true,
					no:false			
				})
				setEmpleo("empleado")
			}
				if (name==="no"){
				setChecked({
					no:true,
					si:false			
				})
				setEmpleo("desempleado")
			}

		}

	return(

	<form onSubmit={ handleSubmit }>
		<div className="accordion" id="accordionExample">
		  <div className="accordion-item">
		    <h2 className="accordion-header" id="headingOne">
		      <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
		        DATOS EGRESADO
		      </button>
		    </h2>
		    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
		      <div className="accordion-body">
								
					<div className="row cajaformulario">				
						<div className="col-sm-12 col-md-3 text-center">
							<img src={estudiante} width="250px" className="imgestudent img-fluid"/>					
						</div>				
							<div className="col-sm-12 col-md-9">
								<div className="row">
									<div className="col-sm-12 col-md-4">
										<input type="text" className="form-control mt-3" name="nombre" placeholder="Nombre:" disabled />				
									</div>
									<div className="col-sm-12 col-md-4">
										<input type="text" className="form-control mt-3"  name="documento" placeholder="Documento:" disabled/>				
									</div>
									<div className="col-sm-12 col-md-4">
										<input type="text" className="form-control mt-3"  name="direccion" placeholder="Dirección de Residencia:" disabled/>				
									</div>
								</div>
								<div className="row">
									<div className="col-sm-12 col-md-4">
										<input type="text" className="form-control mt-3"  name="correo" placeholder="Correo electrónico:" disabled/>				
									</div>
									<div className="col-sm-12 col-md-4">
										<input type="text" className="form-control mt-3"  name="telefono" placeholder="Teléfono fijo:" disabled/>				
									</div>
									<div className="col-sm-12 col-md-4">
										<input type="text" className="form-control  mt-3"  name="celular" placeholder="Celular:" disabled/>				
									</div>
								</div>
								<div className="row">
									<div className="col-sm-12 col-md-6">
										<input type="text" className="form-control mt-3"  name="usuariokuepa" placeholder="Usuario Kuepa:" disabled/>				
									</div>
									<div className="col-sm-12 col-md-6">
										<input type="text" className="form-control  mt-3"  name="codigo" placeholder="Código:" disabled/>				
									</div>
								</div>										
							</div>
					</div>															
					
		      </div>
		    </div>
		  </div>
		<div className="accordion-item">
		    <h2 className="accordion-header" id="headingTwo">
		      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
		        DATOS ACADÉMICOS
		      </button>
		    </h2>
		    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
		      		<div className="accordion-body">
		        		<div className="row">
								<div className="col-sm-12 col-md-12">
									<div className="row mt-3">
											<div className="col-sm-12 col-md-6 text-center">
												<input type="text" placeholder="Programa:" className="form-control mt-3" name="programa" disabled></input>
												<input type="text" placeholder="Otro Estudio:" className="form-control mt-3" name="otroestudio"></input>
											</div>

											<div className="col-sm-12 col-md-6 text-center">
												<div className="row mt-3">
													<div className="col-sm-12 col-md-4">
														<label>Fecha de Graduación</label>
													</div>

													<div className="col-sm-12 col-md-8">
														<input type="date" className=" form-control" name="fecha" disabled></input>
													</div>
												</div>

												<div className=" row mt-3">										
													<div className="form-check label-estado col-sm-12 col-md-4">
														<label className="form-check-label" for="inlineRadio1">Estado de Formación: </label>
													</div>

													<div className="form-check col-sm-12 col-md-4">
														<input className="form-check-input" type="radio" name="estadoformacion" onChange={ handleInputChange} value={values.estadoformacion} />
														<label className="form-check-label" for="inlineRadio1">En Curso</label>
													</div>
													<div className="form-check col-sm-12 col-md-4">
														<input className="form-check-input" type="radio" name="estadoformacion" onChange={ handleInputChange} value={values.estadoformacion}/>
														<label className="form-check-label" for="inlineRadio2">Graduado</label>
													</div>
												</div>									

											</div>												
									</div>
								</div>
						</div>
						
						<div className="col-sm-12 col-md-12 text-center">
							<input type="text" placeholder="Institución:" className="form-control mt-3" name="institucion"></input>
										
						</div>						
					</div>
			</div>
		</div>
		  <div className="accordion-item">
		    <h2 className="accordion-header" id="headingThree">
		      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
		        DATOS LABORALES
		      </button>
		    </h2>
		    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
		      <div className="accordion-body">
		        <div>
			<div className="datolaboral">
				<div className="row">
					<div className="form-check col-sm-12 col-md-8">
						<label className="form-check-label">Actualmente se encuentra laborando en su profesión:</label>
					</div>
					<div className="form-check col-sm-12 col-md-2">
						<input type="radio" name="si" id="opcionSi" onChange={handleChangeRadio} checked={checked.si}/><label className="form-check-label">Si</label>
					</div>
					<div className="form-check col-sm-12 col-md-2">
						<input type="radio" name="no" id="opcionNo" onChange={handleChangeRadio} checked={checked.no} /><label className="form-check-label">No</label>
					</div>
				</div>
			</div>
				
				{
				(empleo==="empleado") && <div className="laboralsi">
				<div className="row">
					<div className="col-sm-12 col-md-6">
						<input type="text" placeholder="Nombre de la Empresa" className="form-control mt-3" name="nombreempresa" onChange={ handleInputChange} value={values.nombreempresa}/>
						<input type="text" placeholder="Dirección de la Empresa" className="form-control mt-3" name="direccionempresa"onChange={ handleInputChange} value={values.direccionempresa}/>
							<select className="inputselect form-select mt-3" name="tipocontrato" value={values.tipocontrato} onChange={handleInputChange} required>    
								<option selected disabled value="">Seleccione un Tipo de Contrato</option>
								<option value="prestacion">Prestación de Servicios</option>
								<option value="contratoIndefi">Contrato a Término Indefinido</option>
								<option value="contratoFijo">Contrato a Término Fijo</option>
								<option value="contratoAprendizaje">Contrato de Aprendizaje</option>
								<option value="contratoTemporal">Contrato Temporal</option>
							</select>
					</div>
					<div className="col-sm-12 col-md-6">
						<input type="text" placeholder="Cargo que desempeña" className="form-control mt-3" name="cargolaboral" />
						<input type="text" placeholder="Número de contacto de la empresa" className="form-control mt-3" name="telempresa"/>
						<select className="inputselect form-select mt-3" name="salario" onChange={handleInputChange} required>    
								<option selected disabled value="">Salario Promedio del Egresado</option>
								<option value="salariomin">Salario Mínimo Vigente</option>
								<option value="2salariosmin">2 Salarios Mínimos</option>
								<option value="3salariosmin">3 Salarios Mínimos</option>
								<option value="4salariosmin">4 Salarios Mínimos</option>
								<option value="5o62salariosmin">5 o más de 6 Salarios Mínimos</option>
							</select>
					</div>
				</div>
			</div>
				}		

			{
			(empleo==="desempleado") && <div>
				<div className="col-sm-12 col-md-12 text-center">
					<label>De no estar laborando en su profesión escriba brevemente las razones:</label>
				</div>
				<div className="col-sm-12 col-md-12 text-center arealaboral">
					<textarea className="form-control mt-3" name="observaciones" cols="100" rows="8"></textarea>
				</div>
			</div>
			}

				<div className="row mt-5 mb-4">					
					
					<div className="col-sm-6 col-md-12 text-center">
						<button type="submit" className="btn-guardar"><FontAwesomeIcon icon={ faSave } /> GUARDAR</button>						
					</div>
				</div>
				
		</div>
		      </div>
		    </div>
		  </div>
	</div>
	</form>
 );
}




export default FormularioSeguimiento;