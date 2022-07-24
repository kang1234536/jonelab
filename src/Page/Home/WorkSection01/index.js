import React, { useRef, useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const WorkSection01 = ({setObserveEl})=>{
	const workWrap = useRef(null);

	useEffect(()=> {
	
	}, []);

	return(
		<div className={'mainWorkWrap'} ref={workWrap}>
			mainWorkWrap
		</div>
	);
}

WorkSection01.propTypes = {
	setObserveEl : PropTypes.func.isRequired
}

export default WorkSection01;
