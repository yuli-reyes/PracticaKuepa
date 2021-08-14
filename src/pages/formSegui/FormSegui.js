import React,{useEffect, useState} from 'react';
import Navsegui from '../../components/navSegui/NavSegui';
import Header from '../../components/header/Header';
import FormSeguimiento from '../../components/formularioSeguimiento/FormularioSeguimiento';
import {db} from  '../../firebase';

const FormSegui = () => {
	
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
	        <Navsegui /> 
			<FormSeguimiento addOrEdit={addOrEdit} />



		</div>
		);
}

export default FormSegui;
