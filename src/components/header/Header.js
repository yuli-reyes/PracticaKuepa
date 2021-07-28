import './header.css';
import logokuepa from '../../img/logokuepa.png';
import logotitulando from '../../img/logotitulando.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faDoorOpen } from '@fortawesome/free-solid-svg-icons';


function Header(){
	return(


		<div>
			<div className="container-fluid header">
				<div className="row">

				   	<div className="logokuepa col-sm-12 col-md-9 col-lg-9">
		        		<img src={logokuepa} width="130px" />
		        	</div>
		        	<div className="col-sm-12 col-md-1 col-lg-1 iconcircle">
		        		<FontAwesomeIcon icon={faUserCircle} />
		        	</div>

		        	<div className="col-sm-12 col-md-1 col-lg-2 iconexit">	
		        		<FontAwesomeIcon icon={faDoorOpen} /><a href="#" role="button">SALIR</a>
		        	</div>

	        	</div>

		        <div className="row">

		          	<div className="logotitulando">
		            	<img src={logotitulando} width="250px"/>
		          	</div>

		        </div>

			</div>
		</div>

		);
}

export default Header;