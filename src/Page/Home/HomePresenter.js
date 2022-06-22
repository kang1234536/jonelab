import React, { useEffect, useState, useMemo } from "react";
import IntroSection from "./IntroSection";
import CompanySection from "./CompanySection";

const HomePresenter = ()=>{
	const [observeEl, setObserveEl] = useState([]);
	const options = {
		rootMargin : '10px',
		threshold:0.9
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
	// const observer = useMemo(() => new IntersectionObserver(callback,options), []);

	useEffect(()=>{
		if(observeEl.length) {
			observeEl.forEach(function(box) {
				observer.observe(box);
			});
		}

		return ()=>{
			if(observeEl.length) observer.unobserve();
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
		</div>
	);
}

export default HomePresenter;