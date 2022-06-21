import React, { useEffect, useState, useMemo } from "react";
import IntroSection from "./IntroSection";

const HomePresenter = ()=>{
	const [observeEl, setObserveEl] = useState([]);
	const options = {
		rootMargin : '10px',
		threshold:1
	}
	const callback = function(entries, observer) {
		entries.forEach(function(entry) {
			if (entry.isIntersecting) {
				// console.log('화면에서 노출됨');
				entry.target.classList.add('active');
				observer.unobserve(entry.target);
			} else {
				// console.log('화면에서 제외됨');
				//entry.target.classList.remove('active');
			}
		});
	}
	// const observer = new IntersectionObserver(callback, options);
	const observer = useMemo(() => new IntersectionObserver(callback,options), []);

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
			<IntroSection setObserveEl = {setObserveEl} />
			{/* E : intro */}
			{/* S : intro */}
			<IntroSection setObserveEl = {setObserveEl} />
			{/* E : intro */}
			{/* S : intro */}
			<IntroSection setObserveEl = {setObserveEl} />
			{/* E : intro */}
			{/* S : intro */}
			<IntroSection setObserveEl = {setObserveEl} />
			{/* E : intro */}
			{/* S : intro */}
			<IntroSection setObserveEl = {setObserveEl} />
			{/* E : intro */}
		</div>
	);
}

export default HomePresenter;