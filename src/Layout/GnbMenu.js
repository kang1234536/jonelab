import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const GnbMenu = ({gnbActive, setGnbActive}) => {
	const gnbWrapEl = useRef(null);
	const gnbInnerEl = useRef(null);

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

	useEffect(()=>{
		const gnbDom = gnbWrapEl.current;
		const gnbInnerDom = gnbInnerEl.current;

		if(gnbActive) {
			
		}else{
			
		}

	}, [gnbActive]);

	return (
		<>
			<nav className={gnbActive ? "gnbWrap active" : "gnbWrap"} ref={gnbWrapEl} onClick={clickDimFnc} aria-hidden={gnbActive ? "false" : "true"}>
				<div className="gnbInner"ref={gnbInnerEl} onClick={clickStopFnc}>
					<ul>
						<li><button type="button" className="menuItem">Company</button></li>
						<li><button type="button" className="menuItem">Work</button></li>
						<li><Link to="/contect">Contect</Link></li>
						<li><button type="button" className="btnBizDown">회사소개서</button></li>
					</ul>

				</div>
			</nav>
		</>
	);
}

GnbMenu.propTypes = {
	gnbActive: PropTypes.bool.isRequired,
	setGnbActive: PropTypes.func.isRequired,
};

export default GnbMenu;