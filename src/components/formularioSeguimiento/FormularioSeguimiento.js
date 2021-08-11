import './formularioSeguimiento.css';
import estudiante from '../cardegresados/graduate-student.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight,faSave, faChevronLeft  } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import Select from 'react-select';

import {  
  Link
} from "react-router-dom";

const options=[
		{label:"Seleccione",value:0},
		{label:"Bachillerato", value:1},
		{label:"Inglés", value:2},
		{label:"Otro", value:3}
	];

	const styles={
		control:base=>({
			...base,
			fontFamily:"Montserrat"

		}),
		menu:base=>({
			...base,
			fontFamily:"Montserrat"
		})
	};
	function Selector(){
		return(
			<div className="Selector">
			{/*<FontAwesomeIcon...*/}
			<Select className="select" styles={styles} options={options}/>
			</div>
			)
	}


function FormularioSeguimiento (){

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

	<div className="accordion" id="accordionExample">
		  <div className="accordion-item">
		    <h2 className="accordion-header" id="headingOne">
		      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
		        DATOS EGRESADO
		      </button>
		    </h2>
		    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
		      <div className="accordion-body">
		<form>				
			<div className="row cajaformulario">				
				<div className="col-sm-12 col-md-3">
					 <img src={estudiante} width="250px" className="imgestudent"/>	
				     <label className="mt-3">CARGAR FOTO</label>
					<input type="file" className="form-control" name="foto" />				
				</div>				
					<div className="col-sm-12 col-md-9">
						<div className="row">
							<div className="col-sm-12 col-md-4">
								<input type="text" className="form-control mt-3" name="nombre" placeholder="Nombre Completo:"/>				
							</div>
							<div className="col-sm-12 col-md-4">
							 	<input type="text" className="form-control mt-3"  name="documento" placeholder="Documento:"/>				
							</div>
							<div className="col-sm-12 col-md-4">
								<input type="text" className="form-control mt-3"  name="direccion" placeholder="Dirección de Residencia:"/>				
							</div>
						</div>
						<div className="row">
							<div className="col-sm-12 col-md-4">
								<input type="text" className="form-control mt-3"  name="correo" placeholder="Correo electrónico:"/>				
							</div>
							<div className="col-sm-12 col-md-4">
							 	<input type="text" className="form-control mt-3"  name="telefono" placeholder="Teléfono fijo:"/>				
							</div>
							<div className="col-sm-12 col-md-4">
								<input type="text" className="form-control  mt-3"  name="celular" placeholder="Celular:"/>				
							</div>
						</div>
						<div className="row">
							<div className="col-sm-12 col-md-6">
								<input type="text" className="form-control mt-3"  name="usuariokuepa" placeholder="Usuario Kuepa:"/>				
							</div>
							<div className="col-sm-12 col-md-6">
							 	<input type="text" className="form-control  mt-3"  name="codigo" placeholder="Código:"/>				
							</div>
						</div>										
					</div>
			</div>															
		</form>	
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
							<div className="fotoform col-sm-12 col-md-4">
							  <img src={ estudiante } width="250px"/>
							</div>  
	              <div className="col-sm-12 col-md-8">
								<div className="row">
									<div className="col-sm-12 col-md-6 text-center">
										<Selector />
										<input type="text" placeholder="Programa:" className="form-control mt-3" name="direccion"></input>
									</div>

									<div className="col-sm-12 col-md-6 text-center">
									<div className="row">
										<div className="col-sm-12 col-md-4">
											<label>Fecha de Graduación</label>
										</div>

										<div className="col-sm-12 col-md-8">
											<input type="date" className=" form-control" name="documento"></input>
										</div>
									</div>

										<div className=" row mt-3">										
											<div className="form-check label-estado col-sm-12 col-md-4">
											  <label className="form-check-label" for="inlineRadio1">Estado de Formación: </label>
											</div>

											<div className="form-check col-sm-12 col-md-4">
											  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
											  <label className="form-check-label" for="inlineRadio1">En Curso</label>
											</div>
											<div className="form-check col-sm-12 col-md-4">
											  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
											  <label className="form-check-label" for="inlineRadio2">Graduado</label>
											</div>
										</div>
									</div>
									<div className="col-sm-12 col-md-12 text-center">
										<input type="text" placeholder="Otro ¿Cuál?:" className="form-control mt-3" name="direccion"></input>
									</div>

										<div className="col-sm-12 col-md-6 text-center">
											<input type="text" placeholder="Programa:" className="form-control mt-3" name="programa"></input>
										</div>
										<div className="col-sm-12 col-md-6 text-center">
											<input type="date" placeholder="Fecha:" className="form-control mt-3" name="fecha"></input>
										</div>							
									</div>
								</div>
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
			<form className="datolaboral">
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
			</form>
				
				{
				(empleo==="empleado") && <form className="laboralsi">
				<div className="row">
					<div className="col-sm-12 col-md-6">
						<input type="text" placeholder="Nombre de la Empresa" className="form-control mt-3"/>
						<input type="text" placeholder="Dirección de la Empresa" className="form-control mt-3"/>
						<input type="text" placeholder="Tipo de Contrato" className="form-control mt-3"/>
					</div>
					<div className="col-sm-12 col-md-6">
						<input type="text" placeholder="Cargo que desempeña" className="form-control mt-3"/>
						<input type="text" placeholder="Número de contacto de la empresa" className="form-control mt-3"/>
						<input type="text" placeholder="Salario promedio del egresado" className="form-control mt-3"/>
					</div>
				</div>
			</form>
				}		

			{
			(empleo==="desempleado") && <form>
				<div className="col-sm-12 col-md-12 text-center">
					<label>De no estar laborando en su profesión escriba brevemente las razones:</label>
				</div>
				<div className="col-sm-12 col-md-12 text-center arealaboral">
					<textarea className="form-control mt-3" name="observaciones" cols="100" rows="8"></textarea>
				</div>
			</form>
			}

				<div className="row mt-5 mb-4">					
					
					<div className="col-sm-6 col-md-12 text-center">
						<button className="botonessegui"><FontAwesomeIcon icon={ faSave } /> GUARDAR</button>						
					</div>
				</div>
				
		</div>
		      </div>
		    </div>
		  </div>
	</div>
 );
}




export default FormularioSeguimiento;