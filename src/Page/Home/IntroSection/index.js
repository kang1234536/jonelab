import React, { useRef, useEffect, useState } from 'react'; 
import PropTypes from 'prop-types';

const IntroSection = ({setObserveEl})=>{
	const [loopIdx, setLoopIdx] = useState(null);
	const introWrap = useRef(null);
	let winH = window.innerHeight;


	useEffect(()=> {
		introWrap.current.style.height = winH + 'px';
		setObserveEl((observeEl)=>{
			if(observeEl.indexOf(introWrap.current) > 0) {
				observeEl.splice(observeEl.indexOf(introWrap.current), 0);
			}
			return [...observeEl, introWrap.current];
		});
	}, [loopIdx]);

	return(
		<div className={'mainIntroWrap'} ref={introWrap}>
			<span className={loopIdx === 0 ? 'unit active' : 'unit'}>Creative</span>
			<span className={loopIdx === 1 ? 'unit active' : 'unit'}>Interactive</span>
			<span className={loopIdx === 2 ? 'unit active' : 'unit'}>User Experience</span>
			<span className={loopIdx === 3 ? 'unit active' : 'unit'}>We're J-one Lab</span>
		</div>
	);
}

IntroSection.propTypes = {
	setObserveEl : PropTypes.func.isRequired
}

export default IntroSection;
