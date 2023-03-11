import React from 'react';
import { Link } from 'react-router-dom';

const HomBottom = () => {
	return (
		<div className={'homeContectWrap'}>
			<div className={'inner'}>

				<div className={'descBox'}>
					<div className="desc">Have a project for us?</div>
					<div className="desc02">Let’s talk</div>
				</div>

				<div className={'contectLink'}>
					<Link to="/contect" className={'btnItem'}><em>Get in Touch &gt;</em></Link>
				</div>
			</div>
		</div>
	);
}

export default HomBottom;