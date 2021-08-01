import './navFormEgre.css';
import {
  
  NavLink
} from "react-router-dom";




function NavFormEgre(){
	return(
	<div className="container-fluid">	
		<div >
				<nav>
					 <ul className="menu">
						 <li className="item">
						 	<NavLink to="/formegresados" activeClassName="active">DATOS DEL EGRESADO</NavLink>
						 </li>	
						 <li className="item">
						 	<NavLink to="/formulariodatosacademicos" activeClassName="active">DATOS ACADÉMICOS</NavLink>
						 </li>		
					 </ul>
			    </nav>	
		</div>
	</div>	

		);
}
export default NavFormEgre;