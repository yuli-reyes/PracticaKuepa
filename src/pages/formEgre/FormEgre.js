import Formegre from '../../components/formegre/Formegre';
import Navegre from '../../components/navegre/Navegre';
import Header from '../../components/header/Header';
import NavFormEgre from '../../components/navFormEgre/NavFormEgre';




function FormEgre(){
	return(
		<div>
		    <Header />
	        <Navegre /> 
	        <NavFormEgre />	         
	        <Formegre />

		</div>
		);
}

export default FormEgre;
