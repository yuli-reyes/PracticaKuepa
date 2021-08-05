import Formegre from '../../components/formegre/Formegre';
import Navegre from '../../components/navegre/Navegre';
import Header from '../../components/header/Header';
import NavFormEgre from '../../components/navFormEgre/NavFormEgre';
import FormDatoAca from '../../components/formDatoAca/FormDatoAca';
import {db} from  '../../firebase';





const FormDatoAcademico = () => {
	const addOrEdit = async (datObject) =>{
		await db.collection('datos').doc().set(datObject);
		console.log('nueva tarea agregada')

	}
	return(
		<div>
		    <Header />
	        <Navegre /> 
	        <NavFormEgre />	         
	        <FormDatoAca addOrEdit={addOrEdit} />

		</div>
		);
}

export default FormDatoAcademico;