import './buscador.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import filtro from './filter-solid.svg';



	const options=[
		{label:"Filtrar Búsqueda",value:0},
		{label:"Apellido", value:1},
		{label:"Documento", value:2},
		{label:"Año de graduación", value:3},
		{label:"Programa de formación", value:4}
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
			
			<Select className="select" styles={styles} options={options}/>
			</div>
			)
	}
	function Buscador(){
	return(

		<div className="container-fluid">
			<div className="row justify-content-end mt-3 buscador">
				<div className=" selectfiltro col-sm-12 col-md-6 col-lg-4">								
					<Selector />	
				</div>	
				<div  className="buscar col-sm-12 col-md-6 col-lg-8">
					<div className="input-group">
						<input type="text" className="form-control" placeholder="Escribe de acuerdo a tu elección" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
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
