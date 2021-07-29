import './navegre.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap,faUnlockAlt,faHome, faArrowCircleLeft  } from '@fortawesome/free-solid-svg-icons';

function Navegre(){
	return(
		<div>
			<nav>
				<div className="container-fluid">
					<div className="row fondonav">
						<div className="col-sm-12 col-md-8">
							<h3 className="tituloegre"><FontAwesomeIcon icon={faGraduationCap} className="icon"/>EGRESADOS</h3>
						</div>
						<div className="col-sm-6 col-md-2 home">							
							<FontAwesomeIcon icon={faHome} className="home"/>					
						</div>
						<div className="col-sm-6 col-md-2 volver">
							<FontAwesomeIcon icon={faArrowCircleLeft} className="iconvolver"/>
							<a onClick={()=>{window.history.back()}} role="button">  VOLVER</a>
						</div>
					</div>
				</div>
			</nav>
		</div>

		);
	}

export default Navegre;