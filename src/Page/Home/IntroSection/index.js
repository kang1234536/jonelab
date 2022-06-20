import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const IntroSection = ({setTargetObserver})=>{
	const winH = window.innerHeight;
	const introWrap = useRef(null);

	useEffect(()=> {
		introWrap.current.style.height = winH + 'px';
		setTargetObserver(introWrap);
	});

	return(
		<div className="mainIntroWrap" ref={introWrap}>
			
		</div>
	);
}

IntroSection.propTypes = {
	setTargetObserver: PropTypes.func.isRequired,
};

export default IntroSection;
