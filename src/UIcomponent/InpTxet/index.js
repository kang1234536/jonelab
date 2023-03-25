import React, { useRef, useEffect } from 'react'; 
import PropTypes from 'prop-types';

const InpText = ({type = 'text', classname = 'inp', tit = '', placeholder = '', setVal})=>{

	const inpEl = useRef(null);
	const valFnc = ()=>{
		setVal(inpEl.current.value);
	}

	return(
		<span className={classname}>
			<input type={type} ref={inpEl} title={tit} placeholder={placeholder} onKeyUp={valFnc} />
		</span>
	);
}

InpText.propTypes = {
	type : PropTypes.string,
	classname : PropTypes.string,
	tit : PropTypes.string,
	placeholder : PropTypes.string,
	setVal : PropTypes.func,
}

export default InpText;