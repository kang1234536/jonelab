import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GnbMenu from 'Layout/GnbMenu';


const Header = () => {

	const [gnbActive, setGnbActive] = useState(false);
	//GNB OPEN BUTTON FUNCTION
	const gnbOpenFnc = (e)=>{
		if(gnbActive) {
			setGnbActive(false);
		}else{
			setGnbActive(true);
		}
	}

	useEffect(()=> {

	});

	return (
		<>
			<header id="header">
				<div className="headerInner">
					<Link to="/" className="logo"><img src="/resources/images/logo.png" alt="j-one LAB" /></Link>
					<button type="button" className={gnbActive ? "btnGnbMenu active" : "btnGnbMenu"} onClick={gnbOpenFnc} aria-expanded={gnbActive ? "true" : "false"}></button>
				</div>
				<GnbMenu
					gnbActive={gnbActive}
					setGnbActive={setGnbActive}
				/>
			</header>
		</>
	);
}

export default Header;