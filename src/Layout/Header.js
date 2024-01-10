import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GnbMenu from 'Layout/GnbMenu';
import History from 'Router/History';

const Header = () => {
	const [gnbActive, setGnbActive] = useState(false);
	const [isBack, setIsBack] = useState(false);
	
	//GNB OPEN BUTTON FUNCTION
	const gnbOpenFnc = (e)=>{
		if(gnbActive) {
			setGnbActive(false);
		}else{
			setGnbActive(true);
		}
	}
	
	useEffect(() => {

		const histroyEvt = ()=>{
			console.log('뒤로가기 할 때 수행할 동작을 적는다');
			setIsBack(true);
		}
		const removeHistroyEvt = History.listen(({ action }) => {
			console.log(action);
			if (action === "POP") {
				histroyEvt();
			}
		});

		if(!isBack) {
			window.scrollTo({
				top : 0,
				behavior : 'smooth',
			});
		}
		return removeHistroyEvt;
	});

	return (
		<>
			<header id="header">
				<div className="headerInner">
					<Link to="/" className="logo"><img src="/resources/images/common/logo.png" alt="j-one LAB" /></Link>
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