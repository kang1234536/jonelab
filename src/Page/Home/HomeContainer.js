import React from "react";
import HomePresenter from "./HomePresenter";

export default class extends React.Component{
	// state={
	// 	tvPopular: null,
	// 	moviePopular: null,
	// 	error: null,
	// 	loading: true,
	// };

	// async componentDidMount() {
	// 	try{
	// 		const {
	// 			data : {results : moviePopular}
	// 		} = await movieApi.popular();
	// 		const {
	// 			data : {results : tvPopular}
	// 		} = await tvApi.popular();
	// 		this.setState({
	// 			moviePopular,
	// 			tvPopular,
	// 		});
	// 	}catch{
	// 		this.setState({
	// 			error : "Can'nt find video information"
	// 		});
	// 	}finally{
	// 		this.setState({
	// 			loading : false
	// 		});
	// 	}
	// }

	render() {
		return(
			<>
				Main
			</>
		);
	}
};