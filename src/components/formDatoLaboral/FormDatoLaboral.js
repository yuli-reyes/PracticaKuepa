import './formDatoLaboral.css';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faSave, faChevronLeft  } from '@fortawesome/free-solid-svg-icons';

function DatoLaboral() {

const [empleo, setEmpleo] = useState("ninguno")


useEffect(()=>{
	const si=document.querySelector("#opcionSi")
	const no=document.querySelector("#opcionNo")
	if (si.checked){
		setEmpleo("empleado")
		
	}
	if (no.checked){
		setEmpleo("desempleado")
	}

},[empleo]);

		return(
		<div>
			<form>
				<div className="row">
					<div className="form-check col-sm-12 col-md-8">
						<label className="form-check-label">Actualmente se encuentra laborando en su profesión:</label>
					</div>
					<div className="form-check col-sm-12 col-md-2">
						<input type="radio" id="opcionSi"/><label className="form-check-label">Si</label>
					</div>
					<div className="form-check col-sm-12 col-md-2">
						<input type="radio" id="opcionNo"/><label className="form-check-label">No</label>
					</div>
				</div>
			</form>
				
				{
				(empleo==="empleado") && <form>
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
				<div className="col-sm-12 col-md-12 text-center">
					<textarea className="mt-3" name="observaciones" cols="100" rows="8"></textarea>
				</div>
			</form>
			}

				<div className="row mt-5">
					<div className="col-sm-12 col-md-4 text-center">
						<button className="btn-guardar"><FontAwesomeIcon icon={ faSave } /> GUARDAR</button>						
					</div>
					<div className="col-sm-6 col-md-4 text-center">
						<button className="botones"><FontAwesomeIcon icon={ faChevronLeft } /> ANTERIOR</button>						
					</div>
					<div className="col-sm-6 col-md-4 text-center">
						<button className="botones"><FontAwesomeIcon icon={ faUpload } /> FINALIZAR</button>						
					</div>
				</div>

		</div>

		);

}

export default DatoLaboral;