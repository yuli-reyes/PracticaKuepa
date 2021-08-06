import './formDatoLaboral.css';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faSave, faChevronLeft  } from '@fortawesome/free-solid-svg-icons';

import {  
  Link
} from "react-router-dom";

function DatoLaboral() {

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
					<div className="col-sm-12 col-md-4 text-center">
						<button className="btn-guardarsegui"><FontAwesomeIcon icon={ faSave } /> GUARDAR</button>						
					</div>
					<div className="col-sm-6 col-md-4 text-center">
						<Link to="/formacaseguimiento"><button className="botonessegui"><FontAwesomeIcon icon={ faChevronLeft } /> ANTERIOR</button></Link>				
					</div>
					<div className="col-sm-6 col-md-4 text-center">
						<button className="botonessegui"><FontAwesomeIcon icon={ faUpload } /> FINALIZAR</button>						
					</div>
				</div>
				
		</div>

		);

}

export default DatoLaboral;