import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const GState = React.createContext(null);

// 전역으로 사용할 변수 및 function 주입
const GStateProvider = ({ children }) => {

	// 화면 메뉴 1 menu name defualt home
	const [menu, setMenu] = useState('');
	const [companyEl, setCompanyEl] = useState('');
	const [workEl, setWorkEl] = useState('');

	const value = {
		menu,
		setMenu,
		companyEl,
		setCompanyEl,
		workEl,
		setWorkEl,
	};

	useEffect(() => {
		document.cookie = 'SameSite=None; Secure';
	}, []);
	
	return <GState.Provider value={value}>{children}</GState.Provider>;
};

GStateProvider.propTypes = {
	children: PropTypes.element.isRequired,
};

export default GStateProvider;
