import './botonlogin.css';
import Swal from "sweetalert2";
import logotitulando from '../../img/logotitulando.png';

function Botonlogin(){
	const mostrarBienvenida=()=>{
		Swal.fire({
		  title: 'Bienvenido',
		  text: 'Has iniciado sesión con éxito.',
		  imageUrl: 'https://i2.wp.com/kuepa.blog/wp-content/uploads/2017/07/cropped-perfil-01.png?fit=755%2C253&ssl=1',
		  imageWidth: 300,
		  imageHeight: 100,
		  confirmButtonText: 'Aceptar',
		  confirmButtonColor: '#30A296'
})
	}
	return(
		<div>
			<button className="btn-inicio" type="button" onClick={()=>mostrarBienvenida()}>INICIAR SESION</button>
		</div>
		);
 }
 export default Botonlogin;