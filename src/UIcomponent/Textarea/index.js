import React, { useRef, useEffect } from 'react'; 
import PropTypes from 'prop-types';

const Textarea = ({type = 'text', classname = 'textarea', tit = '', placeholder = '', setVal})=>{

	const inpEl = useRef(null);
	const valFnc = ()=>{
		setVal(inpEl.current.value);
	}

	return(
		<span className={classname}>
			<textarea type={type} ref={inpEl} title={tit} placeholder={placeholder} onKeyUp={valFnc} ></textarea>
		</span>
	);
}

Textarea.propTypes = {
	type : PropTypes.string,
	classname : PropTypes.string,
	tit : PropTypes.string,
	placeholder : PropTypes.string,
	setVal : PropTypes.func,
}

export default Textarea;