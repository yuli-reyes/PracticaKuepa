import Formegre from '../../components/formegre/Formegre';
import Navegre from '../../components/navegre/Navegre';
import Header from '../../components/header/Header';
import NavFormEgre from '../../components/navFormEgre/NavFormEgre';

const FormEgre = () => {
	const addTask = () => {
		console.log('nueva tarea')
	}
	
	return(
		<div>
		    <Header />
	        <Navegre /> 
	        <NavFormEgre />	         
	        <Formegre addOrEdit={addTask}/>

		</div>
		);
}

export default FormEgre;
