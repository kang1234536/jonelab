import React, { useRef, useEffect, useState, useMemo } from 'react'; 
import PropTypes from 'prop-types';

const IntroSection = ({setObserveEl})=>{
	const [loopIdx, setLoopIdx] = useState(null);
	const introWrap = useRef(null);
	let winH = window.innerHeight;
	let setTimeAni;

	const aniLoopFn = useMemo(()=> {
		console.log(loopIdx);
		if(loopIdx == null) {
			setLoopIdx((loopIdx)=>0);
		} else if(loopIdx >= 0) {		
			loopIdx + 1 > 3 ? setLoopIdx((loopIdx)=>0) : setLoopIdx((loopIdx)=>loopIdx+1);
		}
		setTimeAni = setTimeout(aniLoopFn, 1000);
	}, []);

	useEffect(()=> {
		// setTimeAni = setTimeout(aniLoopFn, 100);
		setLoopIdx((loopIdx)=>0);
		console.log(loopIdx);
		console.log(loopIdx === 0);

		introWrap.current.style.height = winH + 'px';
		setObserveEl((observeEl)=>[...observeEl, introWrap.current]);

		return ()=>{
			clearTimeout(setTimeAni);
		}

	}, [introWrap]);

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
