import React, { useEffect, useState, useContext } from "react";
import { useLocation } from 'react-router-dom';
import {GState} from 'Router/GState';
import IntroSection from "./IntroSection";
import CompanySection from "./CompanySection";
import WorkSection01 from "./WorkSection01";
import WorkSection02 from "./WorkSection02";
import HomBottom from "./HomBottom";

const HomePresenter = ()=>{
	const [compEl, setCompEl] = useState({});
	const [workEl, setWorkEl] = useState({});
	const {scrollToFn} = useContext(GState);
	const {state : locaState} = useLocation();
	const [observeEl, setObserveEl] = useState([]);
	const options = {
		rootMargin : '10px',
		threshold:0.5
	}
	const callback = function(entries, observer) {
		entries.forEach(function(entry) {
			if (entry.isIntersecting) {
				entry.target.classList.add('active');
				observer.unobserve(entry.target);
			}
		});
	}
	const observer = new IntersectionObserver(callback, options);

	const goSectFn = (sectId)=> {
		let offsetT;
		console.log(`sectId == ${sectId}`);
		console.log(`offsetT == ${offsetT}`);
		if(sectId == 'company') {
			console.log('compEl.current.offsetTop ======= ', compEl.current);
			// offsetT = compEl.current.offsetTop;
		} else if(sectId == 'work') {
			console.log('workEl.current.offsetTop ======= ', workEl.current);
			// offsetT = workEl.current.offsetTop;
		}


		scrollToFn({
			top : offsetT,
			smooth : 'smooth',
		})
	}
	
	useEffect(()=>{
		if(locaState != null) {
			goSectFn(locaState['sectId']);
		}
	}, [locaState['sectId']]);
	
	useEffect(()=>{
		if(observeEl.length) {
			observeEl.forEach(function(box) {
				observer.observe(box);
			});
		}

		return ()=>{
			if(observeEl.length) {
				observeEl.forEach(function(box) {
					observer.observe(box);
				});
			}

		}
	}, [observeEl]);

	return(
		<div className="contents main">
			{/* S : intro */}
			<IntroSection
				setObserveEl = {setObserveEl}
				/>
			{/* E : intro */}
			{/* S : COMPANY */}
			<CompanySection
				setObserveEl = {setObserveEl}
				setCompEl = {setCompEl}
				/>
			{/* E : COMPANY */}

			{/* S : WORK01 */}
			<WorkSection01
				setWorkEl = {setWorkEl}
			/>
			{/* E : WORK01 */}

			{/* S : WORK02 */}
			<WorkSection02 />
			{/* E : WORK02 */}

			{/* S : HomBottom */}
			<HomBottom />
			{/* E : HomBottom */}


		</div>
	);
}

export default HomePresenter;