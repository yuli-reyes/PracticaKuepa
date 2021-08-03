import './navFormEgre.css';
import {
  
  NavLink
} from "react-router-dom";




function NavFormEgre(){
	return(
	<div className="container-fluid">	
		<div >
				<nav className="barra">
					 <ul className="menu">
						 <li className="iteme">
						 	<NavLink to="/formegresados" activeClassName="activegre">DATOS DEL EGRESADO</NavLink>
						 </li>	
						 <li className="iteme">
						 	<NavLink to="/formulariodatosacademicos" activeClassName="activegre">DATOS ACADÉMICOS</NavLink>
						 </li>		
					 </ul>
			    </nav>	
		</div>
	</div>	

		);
}
export default NavFormEgre;