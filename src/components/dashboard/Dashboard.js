import './dashboard.css';
import egresados from './egresados.jpg';
import seguimiento from './seguimiento.jpg';
import iconegresados from './iconegresados.svg';
import iconseguimiento from './iconseguimiento.svg';
import {
  Link  
} from "react-router-dom";

function Dashboard(){

	return(
		<div className="container-fluid fuente">
			<div className="row mt-5">
				<div className="col-sm-12 col-md-6 cajanaranja">
					<Link to="/egresados"><button className="btn-egresado"><img src={iconegresados} width="40px" /> EGRESADOS</button></Link>
					<div className="seccion1">
						<p>Podrás ver todos los egresados que hay actualmente, también te permite añadir y ver al detalle la información de contacto y académica.</p>
					</div>
				</div>
				<div className="col-sm-12 col-md-6 cajaazul">				
					<button className="btn-seguimiento"><img src={iconseguimiento} width="50px" /> SEGUIMIENTO</button>
					<div className="seccion2">
						<p>Podrás realizar el seguimiento a los egresados, ver y actualizar sus  datos académicos y laborales, para llevar un control anual de sus actividades.</p>
					</div>
				</div>
			</div>
		</div>

		);
}

export default Dashboard;