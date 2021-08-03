import './navFormSegui.css';
import {
  
  NavLink
} from "react-router-dom";

function NavFormSegui(){
	return(
	<div className="container-fluid">	
		<div >
				<nav>
					 <ul className="menu">
						 <li className="item">
						 	<NavLink to="/formseguimiento" activeClassName="active">DATOS DEL EGRESADO</NavLink>
						 </li>	
						 <li className="item">
						 	<NavLink to="/formacaseguimiento" activeClassName="active">DATOS ACADÉMICOS</NavLink>
						 </li>
						 <li className="item">
						 	<NavLink to="/formulariodatosacademicos" activeClassName="active">DATOS LABORALES</NavLink>
						 </li>		
					 </ul>
			    </nav>	
		</div>
	</div>	

		);
}
export default NavFormSegui;