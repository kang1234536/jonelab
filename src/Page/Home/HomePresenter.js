import React, { useEffect, useState } from "react";
import IntroSection from "./IntroSection";
import CompanySection from "./CompanySection";
import WorkSection01 from "./WorkSection01";

const HomePresenter = ()=>{
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
		<div className="contents">
			{/* S : intro */}
			<IntroSection
				setObserveEl = {setObserveEl}
			/>
			{/* E : intro */}
			{/* S : COMPANY */}
			<CompanySection
				setObserveEl = {setObserveEl}
			/>
			{/* E : COMPANY */}

			{/* S : WORK01 */}
			<WorkSection01
				setObserveEl = {setObserveEl}
			/>
			{/* E : WORK01 */}


		</div>
	);
}

export default HomePresenter;