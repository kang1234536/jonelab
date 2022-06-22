import React, { useRef, useEffect } from 'react'; 
import PropTypes from 'prop-types';

const IntroSection = ({setObserveEl})=>{
	const introWrap = useRef(null);
	let winH = window.innerHeight;
	let timer;
	let loopIdx = 0;
	const loopFn = ()=>{
		var unitEl = introWrap.current.querySelectorAll('.mainIntroWrap .unit');
		var animateFn = ()=>{
			unitEl.forEach((el)=>{
				el.classList.remove('active');
			});
			unitEl[loopIdx].classList.add('active');
			loopIdx = loopIdx + 1 > 3 ? 0 : loopIdx + 1
		}

		timer = setTimeout(loopFn, 2500);
		animateFn();
	}


	useEffect(()=> {
		introWrap.current.style.height = winH + 'px';
		setObserveEl((observeEl)=>{
			var hasEl = observeEl.indexOf(introWrap.current);
			if(hasEl > 0) {
				observeEl.splice(hasEl, 0);
			}
			return [...observeEl, introWrap.current];
		});

		timer = setTimeout(loopFn, 500);

		return ()=>clearTimeout(timer);
	}, []);

	return(
		<div className={'mainIntroWrap'} ref={introWrap}>
			<span className={'unit'}>Creative</span>
			<span className={'unit'}>Interactive</span>
			<span className={'unit'}>User Experience</span>
			<span className={'unit'}>We're J-one Lab</span>

			<button type="button" className="btnScroll" aria-hidden="true"></button>
		</div>
	);
}

IntroSection.propTypes = {
	setObserveEl : PropTypes.func.isRequired
}

export default IntroSection;
