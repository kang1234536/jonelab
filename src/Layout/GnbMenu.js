import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const GnbMenu = ({gnbActive, setGnbActive}) => {
	const gnbWrapEl = useRef(null);

	useEffect(()=>{

	}, []);

	return (
		<>
			<nav className={gnbActive ? "gnbWrap active" : "gnbWrap"} ref={gnbWrapEl} aria-hidden={gnbActive ? "false" : "true"}>
				<div className="gnbInner">
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
	gnbActive: PropTypes.bool.isRequired
};

export default GnbMenu;