import React,{useEffect, useState} from 'react';
import Navegre from '../../components/navegre/Navegre';
import Header from '../../components/header/Header';
import {db} from  '../../firebase';
import FormularioEgresado from '../../components/formularioEgresado/FormularioEgresado';




const FormEgre = () => {
	const [datos,setDatos] = useState([]);

	const addOrEdit = async (datObject) =>{
		await db.collection('datos').doc().set(datObject);
		console.log('datos egresado');
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
	        <FormularioEgresado addOrEdit={addOrEdit}/>

		</div>
		);
}

export default FormEgre;
