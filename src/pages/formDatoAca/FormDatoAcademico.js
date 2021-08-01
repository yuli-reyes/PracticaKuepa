import Formegre from '../../components/formegre/Formegre';
import Navegre from '../../components/navegre/Navegre';
import Header from '../../components/header/Header';
import NavFormEgre from '../../components/navFormEgre/NavFormEgre';
import FormDatoAca from '../../components/formDatoAca/FormDatoAca';





function FormDatoAcademico(){
	return(
		<div>
		    <Header />
	        <Navegre /> 
	        <NavFormEgre />	         
	        <FormDatoAca />

		</div>
		);
}

export default FormDatoAcademico;