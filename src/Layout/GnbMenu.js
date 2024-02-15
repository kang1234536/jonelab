import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {GState} from 'Router/GState';

const GnbMenu = ({gnbActive, setGnbActive}) => {
	
	const {menu} = useContext(GState);
	
	const clickDimFnc = (e)=> {
		if(gnbActive) {
			setGnbActive(false);
		}else{
			setGnbActive(true);
		}
	}
	const clickStopFnc = (e)=> {
		e.stopPropagation();
	}

	return (
		<>
			<nav className={gnbActive ? "gnbWrap active" : "gnbWrap"} onClick={clickDimFnc} aria-hidden={gnbActive ? "false" : "true"}>
				<div className="gnbInner" onClick={clickStopFnc}>
					<ul>
						<li><Link to="/" state={{sectId : 'company'}} className="menuItem" onClick={clickDimFnc}>Company</Link></li>
						<li><Link to="/" state={{sectId : 'work'}} className="menuItem" onClick={clickDimFnc}>Work</Link></li>
						<li><Link to="/contect" className="menuItem" onClick={clickDimFnc}>Contect</Link></li>
					</ul>
					<div className="util">
						<button type="button" className="btnBizDown">회사소개서</button>
					</div>

				</div>

				<button type="button" className={gnbActive ? "btnGnbMenu active" : "btnGnbMenu"} onClick={clickDimFnc}><em className={'blind'}>전체메뉴 닫기</em></button>
			</nav>
		</>
	);
}

GnbMenu.propTypes = {
	gnbActive: PropTypes.bool.isRequired,
	setGnbActive: PropTypes.func.isRequired,
};

export default GnbMenu;