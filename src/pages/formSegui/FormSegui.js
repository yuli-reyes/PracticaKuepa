import Formsegui from '../../components/formegre/Formegre';
import Navsegui from '../../components/navSegui/NavSegui';
import Header from '../../components/header/Header';
import NavFormSegui from '../../components/navFormSegui/NavFormSegui';

function FormSegui(){
	return(
		<div>
		    <Header />
	        <Navsegui /> 
	        <NavFormSegui />	         
	        <Formsegui />

		</div>
		);
}

export default FormSegui;