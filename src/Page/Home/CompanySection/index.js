import React, { useRef, useEffect } from 'react'; 
import PropTypes from 'prop-types';

const CompanySection = ({setObserveEl})=>{
	const companyWrap = useRef(null);


	useEffect(()=> {
		// introWrap.current.style.height = winH + 'px';
		setObserveEl((observeEl)=>{
			var hasEl = observeEl.indexOf(companyWrap.current);
			if(hasEl > 0) {
				observeEl.splice(hasEl, 0);
			}
			return [...observeEl, companyWrap.current];
		});

	}, []);

	return(
		<div className={'mainCompanyWrap'} ref={companyWrap}>
			
		</div>
	);
}

CompanySection.propTypes = {
	setObserveEl : PropTypes.func.isRequired
}

export default CompanySection;
