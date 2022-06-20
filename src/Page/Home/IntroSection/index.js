import React, { useRef, useEffect } from 'react'; 
// import { useInView } from 'react-intersection-observer';
// import PropTypes from 'prop-types';

const IntroSection = ()=>{
	const winH = window.innerHeight;
	const introWrap = useRef(null);

	useEffect(()=> {
		introWrap.current.style.height = winH + 'px';
	}, [introWrap]);

	return(
		<div className={'mainIntroWrap'} ref={introWrap}>
			Intro
		</div>
	);
}

export default IntroSection;
