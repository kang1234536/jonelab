import React, { useRef, useEffect, useState } from 'react'; 
import PropTypes from 'prop-types';

const IntroSection = ({setObserveEl})=>{
	const [loopIdx, setLoopIdx] = useState(0);
	const introWrap = useRef(null);
	let winH = window.innerHeight;


	useEffect(()=> {
		introWrap.current.style.height = winH + 'px';
		setObserveEl((observeEl)=>{
			var hasEl = observeEl.indexOf(introWrap.current);
			if(hasEl > 0) {
				observeEl.splice(hasEl, 0);
			}
			return [...observeEl, introWrap.current];
		});
	}, [loopIdx]);

	return(
		<div className={'mainIntroWrap'} ref={introWrap}>
			<span className={loopIdx === 1 ? 'unit active' : 'unit'}>Creative</span>
			<span className={loopIdx === 2 ? 'unit active' : 'unit'}>Interactive</span>
			<span className={loopIdx === 3 ? 'unit active' : 'unit'}>User Experience</span>
			<span className={loopIdx === 34 ? 'unit active' : 'unit'}>We're J-one Lab</span>
		</div>
	);
}

IntroSection.propTypes = {
	setObserveEl : PropTypes.func.isRequired
}

export default IntroSection;
