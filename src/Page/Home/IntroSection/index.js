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

	const resizeFn = ()=> {
		winH = window.innerHeight;
		introWrap.current.style.height = winH + 'px';
	}


	useEffect(()=> {
		introWrap.current.style.height = winH + 'px';
		timer = setTimeout(loopFn, 500);
		window.addEventListener('resize', resizeFn);
		
		return ()=> {
			clearTimeout(timer);
			window.removeEventListener('resize', resizeFn);
		}
	}, []);

	return(
		<div className={'mainIntroWrap'} ref={introWrap}>
			<span className={'unit'}>Creative</span>
			<span className={'unit'}>Interactive</span>
			<span className={'unit'}>User Experience</span>
			<span className={'unit'}>We're J-one Lab</span>

			<button type="button" className="btnScroll" aria-hidden="true"><span></span></button>
		</div>
	);
}

IntroSection.propTypes = {
	setObserveEl : PropTypes.func.isRequired
}

export default IntroSection;
