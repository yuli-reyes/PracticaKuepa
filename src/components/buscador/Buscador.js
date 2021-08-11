import './buscador.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import filtro from './filter-solid.svg';



	function Buscador(){
	return(

		<div className="container-fluid">
			<div className="row justify-content-center mt-3 buscador">
				
				<div  className="buscar col-sm-12 col-md-12 col-lg-12">
					<div className="input-group">
						<input type="text" className="form-control" placeholder="Documento" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
						<div className="input-group-append">
							<button className="btn-buscar" type="button">BUSCAR</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		);		
}

export default Buscador;
