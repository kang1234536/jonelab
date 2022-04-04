import React, {useEffect, useContext} from 'react';
import { useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { GState } from 'Router/GState';

const HomePresenter = ({moviePopular, tvPopular})=>{
	// const {setDepth1} = useContext(GState);
	// const {url} = useRouteMatch();

	// useEffect(()=>{
	// 	// setDepth1('tv');
	// 	setDepth1(url.split('/')[1]);
	// });

	return(
		<div className="mainConts">
			Main
		</div>
	);
}

// HomePresenter.propTypes = {
// 	moviePopular : PropTypes.array.isRequired,
// 	tvPopular : PropTypes.array.isRequired,
// }


export default HomePresenter;