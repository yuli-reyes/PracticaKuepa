import React,{useEffect, useState} from 'react';
import Navegre from '../../components/navegre/Navegre';
import Header from '../../components/header/Header';
import {db} from  '../../firebase';
import FormularioEgresado from '../../components/formularioEgresado/FormularioEgresado';
import Swal from "sweetalert2";
import { useParams } from 'react-router-dom';



const FormEgre = () => {
	const [datos,setDatos] = useState([]);
	const [currentId, setCurrentId] = useState('');
	const {id}=useParams()

	const addOrEdit = async (datObject) =>{
		if(currentId === ''){
			await db.collection('datos').doc().set(datObject);
			Swal.fire({
				position: 'center',
				icon: 'success',
				title: 'La información ha sido guardada con éxito',
				showConfirmButton: false,
				timer: 1500
			  });
		}else {
			await db.collection('datos').doc(currentId).update(datObject);
			Swal.fire({
				position: 'center',
				icon: 'success',
				title: 'Datos Actualizados satisfactoriamente',
				showConfirmButton: false,
				timer: 1500
			  });
			  setCurrentId('');
		}

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
	        <FormularioEgresado {...{addOrEdit, currentId:id, datos}}/>

		</div>
		);
}

export default FormEgre;
