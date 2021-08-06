import React,{useEffect, useState} from 'react';
import Formegre from '../../components/formegre/Formegre';
import Navegre from '../../components/navegre/Navegre';
import Header from '../../components/header/Header';
import NavFormEgre from '../../components/navFormEgre/NavFormEgre';
import FormDatoAca from '../../components/formDatoAca/FormDatoAca';
import {db} from  '../../firebase';


const FormDatoAcademico = () => {

	const [datos,setDatos] = useState([]);

	const addOrEdit = async (datObject) =>{
		await db.collection('datos').doc().set(datObject);
		console.log('nueva tarea agregada');
	};

	const getDatos = async () => {
		db.collection('datos').onSnapshot((querySnapshot)=>{
			const basedatos =[];
			querySnapshot.forEach((doc)=>{
				basedatos.push({...doc.data(), id:doc.id});

			});
			setDatos(basedatos);
		});
	};

	useEffect(() => {
		getDatos();
	},[]);


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