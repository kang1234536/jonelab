import React, { useEffect, useState } from 'react'; 
// import { Link } from 'react-router-dom';
import WorkPresenterDefault from './WorkPresenterDefault';
import WorkPresenterSlide from './WorkPresenterSlide';

const WorkContainer = ()=>{
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 750);
	const winResizeFnc = ()=> {
		setIsMobile(window.innerWidth <= 750);
	}

	useEffect(()=> {
		window.addEventListener('resize', winResizeFnc);
		
		return ()=> {
			window.removeEventListener('resize', winResizeFnc);
		}
	
	}, [isMobile]);

	if(isMobile) {
		return(
			<>
				<WorkPresenterSlide />
			</>
		);
	}
	return (
		<>
			<WorkPresenterDefault />
		</>
	);

}

export default WorkContainer;
