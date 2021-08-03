import NavSegui from '../../components/navSegui/NavSegui';
import Header from '../../components/header/Header';
import NavFormSegui from '../../components/navFormSegui/NavFormSegui';
import FormDatoSegui from '../../components/formDatoAcaSegui/FormDatoAcaSegui';





function FormDatoSeguimiento(){
	return(
		<div>
		    <Header />
	        <NavSegui /> 
	        <NavFormSegui />	         
	        <FormDatoSegui />

		</div>
		);
}

export default FormDatoSeguimiento;