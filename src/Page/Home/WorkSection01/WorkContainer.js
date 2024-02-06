import React, { useEffect, useState, useRef, useContext } from 'react'; 
// import { Link } from 'react-router-dom';
import {GState} from 'Router/GState';
import WorkPresenterDefault from './WorkPresenterDefault';
import WorkPresenterSlide from './WorkPresenterSlide';

const WorkContainer = ()=>{
	const{setWorkEl} = useContext(GState);
	const workWrap = useRef(null);
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 750);
	const winResizeFnc = ()=> {
		setIsMobile(window.innerWidth <= 750);
	}


	useEffect(()=> {
		window.addEventListener('resize', winResizeFnc);
		setWorkEl(workWrap);
		
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

export default WorkContainer;
