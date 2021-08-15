import './buscador.css';
import { db } from '../../firebase';


	function Buscador(){

			const handleChange = async (e)=>{
				const docs = await db.collection("datos").where("documento", "==", e.target.value).get()
				docs.forEach(elem => {
					console.log(elem.data())
					})
			}

	return(

		<div className="container-fluid">
			<div className="row justify-content-center mt-3 buscador">
				
				<div  className="buscar col-sm-12 col-md-12 col-lg-12">
					<div className="input-group">
						<input type="text" className="form-control" onChange={handleChange} placeholder="Documento" aria-label="Recipient's username" />
						<div className="input-group-append">
							<button className="btn-buscar" type="button">BUSCAR</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		);		
}

export default Buscador;
