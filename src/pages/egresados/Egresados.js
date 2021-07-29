import Header from '../../components/header/Header';
import Navegre from '../../components/navegre/Navegre';
import Buscador from '../../components/buscador/Buscador';
import Cardegre from '../../components/cardegresados/Cardegresados';


function Egresados(){
	return(
		<div>
			<Header />
			<Navegre />
			<Buscador />
			<Cardegre />
		</div>
		);
}

export default Egresados;
