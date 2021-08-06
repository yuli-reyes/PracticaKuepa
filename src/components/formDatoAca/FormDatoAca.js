import React, {useState} from 'react';
import './formDatoAca.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff,faSave  } from '@fortawesome/free-solid-svg-icons';
import estudiante from '../cardegresados/graduate-student.jpg';

const FormDatoAca = (props) => {

	const inicialStateValues={
		programa: '',
		institucion: '',
		fecha: '',
		intereses:''
	};
	
	const [values,setValues] = useState(inicialStateValues);

	const handleInputChange= (e) =>{
		const{name,value}=e.target;
		setValues({...values,[name]:value})

	};
 	
 	const handleSubmit = (e) =>{
 		e.preventDefault();
 		props.addOrEdit(values);
 		setValues({...inicialStateValues})
 	}

	return(
		<div className="general container-fluid">
				<form onSubmit={handleSubmit}>
					<div className="row">
							<div className="fotoform col-sm-12 col-md-6">
							  <img src={ estudiante } width="300px"/>
							</div>  
	                        <div className="col-sm-12 col-md-6">
								<div className="row">									
										<input type="text" placeholder="Programa:" className="form-control mt-3" name="programa" onChange={ handleInputChange} value={values.programa}></input>
										<input type="text" placeholder="Institución:" className="form-control mt-3" name="institucion" onChange={ handleInputChange} value={values.institucion}></input>
										<input type="date" placeholder="Fecha de graduación:" className="form-control mt-3" name="fecha" onChange={ handleInputChange} value={values.fecha}></input>
										<textarea className="mt-3" name="intereses" placeholder="Otros intereses:" cols="50" rows="8" onChange={ handleInputChange} value={values.intereses}></textarea>							
								</div>
								<div className="row">
						
									<div className="col-sm-12 col-md-6 text-center mt-5">
										<button className="btncerrar"><FontAwesomeIcon icon={ faPowerOff } /> CERRAR</button>
									</div>
									<div className="col-sm-12 col-md-6 text-center mt-5"> 
										<button className="btnguardar"><FontAwesomeIcon icon={  faSave } /> GUARDAR CAMBIOS</button>
									</div>
								</div>

							</div>
					</div>
					
				</form>					 
						
		</div>
		);
}

export default FormDatoAca;
