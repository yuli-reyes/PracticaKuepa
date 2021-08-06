import Header from '../../components/header/Header';
import NavSegui from '../../components/navSegui/NavSegui';
import NavFormSegui from '../../components/navFormSegui/NavFormSegui';
import DatoLaboral from '../../components/formDatoLaboral/FormDatoLaboral';

function FormDatoLaboral(){
	return(
		<div>
		    <Header />
	        <NavSegui /> 
	        <NavFormSegui />	         
	        <DatoLaboral />

		</div>
		);
}

export default FormDatoLaboral;