import React, { useEffect, useState, useRef, useContext } from 'react'; 
import WorkPresenterDefault from './WorkPresenterDefault';
import WorkPresenterSlide from './WorkPresenterSlide';
import PropTypes from 'prop-types';

const WorkSection01 = ({setWorkEl})=>{
	const workWrap = useRef(null);
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 750);
	const winResizeFnc = ()=> {
		setIsMobile(window.innerWidth <= 750);
	}


	useEffect(()=> {
		setWorkEl(workWrap);
		window.addEventListener('resize', winResizeFnc);
		
		return ()=> {
			window.removeEventListener('resize', winResizeFnc);
			setWorkEl('');
		}
	
	}, [isMobile]);

	return(
		<div className={'mainWorkWrap'} ref={workWrap}>
			{
				isMobile
				? <WorkPresenterSlide />
				: <WorkPresenterDefault />
			}
		</div>
	);

}


WorkSection01.propTypes = {
	setWorkEl : PropTypes.func.isRequired,
}

export default WorkSection01;
