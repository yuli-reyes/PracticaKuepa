import './formDatoAcaSegui.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight,faSave, faChevronLeft  } from '@fortawesome/free-solid-svg-icons';
import estudiante from '../cardegresados/graduate-student.jpg';
import Select from 'react-select';
import React from 'react';


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

function FormDatoAcaSegui(){
	return(
		<div className="general container-fluid">
				<form>
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
											
									
									<div className="row mt-5">
										<div className="col-sm-12 col-md-4 text-center">
											<button className="btn-guardar"><FontAwesomeIcon icon={ faSave } /> GUARDAR</button>						
										</div>
										<div className="col-sm-6 col-md-4 text-center">
											<Link to="/formseguimiento"><button className="botones"><FontAwesomeIcon icon={ faChevronLeft } /> ANTERIOR</button></Link>						
										</div>
										<div className="col-sm-6 col-md-4 text-center">
											<Link to="/formdatoslaborales"><button className="botones">SIGUIENTE <FontAwesomeIcon icon={ faChevronRight } /></button></Link>						
										</div>
									</div>
							  	</div>	
							</div>
					</div>


				</form>					 
						
		</div>
		);
}

export default FormDatoAcaSegui;
