import React, { useEffect, useState } from "react";
import IntroSection from "./IntroSection";

const HomePresenter = ()=>{
	const [targetObserver, setTargetObserver] = useState(null);
	/*
		* IntersectionObserver
		* options 설정
		* 1. root
		*  root 로 정의된 Element 기준으로 Target Element 의 노출, 비노출 여부를 결정한다.
		*  기본 값은 Browser ViewPort 이다.
		*  만약 root 로 정의한 Element 의 Children 에 Target Element 가 존재하지 않는다면, 화면에 노출 되더라도, 노출로 보지 않는다.
		*  만약 Target Element 가 Root Element 의 Children 이 되고, 화면에 노출되면, 노출로 보고 Callback Function 을 호출한다.
		* 2. rootMargin
		*  rootMargin 은 ‘0px 0px 0px 0px’ 형태로 정의할 수 있다.
		*  rootMargin 이 있으면, threshold 계산할 때, rootMargin 영역 만큼 더 계산한다.
		* 3. threshold
		*  threshold 를 number 나 Array<number> 로 정의할 수 있다. 정의하지 않는다면 기본값은 0 이다.
		*  number 로 정의할 경우, Target Element 의 노출 비율에 따라 한번 Callback Function 을 호출할 수 있지만, Array<number> 로 정의할 경우, 각각의 비율로 노출될 때마다 Callback Function 을 호출한다.
	*/
	var options = {
		threshold: 1
	}

	var callback = function(entries, observer) {
		entries.forEach(function(entry) {
			if (entry.isIntersecting) {
				console.log(`영역 노출`);
				entry.target.classList.add('active');
			} else {
				console.log(`영역 미노출`);
				entry.target.classList.remove('active');
			}
		});
	}

	const observer = new IntersectionObserver(callback, options);

	useEffect(()=> {
		console.log(targetObserver);
		console.log(targetObserver.current);
		// observer.observe(targetObserver.current);
	});

	return(
		<div className="contents">
			{/* S : intro */}
			<IntroSection setTargetObserver = {setTargetObserver} />
			{/* E : intro */}
			{/* S : intro */}
			<IntroSection setTargetObserver = {setTargetObserver} />
			{/* E : intro */}
			{/* S : intro */}
			<IntroSection setTargetObserver = {setTargetObserver} />
			{/* E : intro */}
			{/* S : intro */}
			<IntroSection setTargetObserver = {setTargetObserver} />
			{/* E : intro */}
			{/* S : intro */}
			<IntroSection setTargetObserver = {setTargetObserver} />
			{/* E : intro */}
		</div>
	);
}

export default HomePresenter;