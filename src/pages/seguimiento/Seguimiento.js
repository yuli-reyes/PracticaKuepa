import Header from '../../components/header/Header';
import Navsegui from '../../components/navSegui/NavSegui';
import Buscador from '../../components/buscador/Buscador';
import Cardsegui from '../../components/cardSeguimiento/CardSeguimiento';

function Seguimiento(){
	return(
		<div>
			<Header />
			<Navsegui />
			<Buscador />
			<Cardsegui />
		</div>
		);
}

export default Seguimiento;
