import React, { useEffect } from 'react'; 
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

const WorkPresenterDefault = ()=>{

	return(
		<div className={'mainWorkWrap02'}>
			<div className={'historyListWrap02'}>
				<ul>
					<li>
						<div className="histroyCardBox02">
							<span className={'img'} style={{
								backgroundImage : `url("${process.env.PUBLIC_URL}/resources/images/temp/temp.jpg")`
							}}></span>
							<div className={'pjtName'}>우리카드</div>
							<div className={'pjtPeriod'}>App / Web / Mobile Web / 2020</div>
							<div className={'pjtSummary'}>UI기획 수행</div>
						</div>
					</li>
					<li>
						<div className="histroyCardBox02">
							<span className={'img'} style={{
								backgroundImage : `url("${process.env.PUBLIC_URL}/resources/images/temp/temp.jpg")`
							}}></span>
							<div className={'pjtName'}>Global Woori WON Banking</div>
							<div className={'pjtPeriod'}>App / Web / 2019~2020</div>
							<div className={'pjtSummary'}>UI기획 수행</div>
						</div>
					</li>
					<li>
						<div className="histroyCardBox02">
							<span className={'img'} style={{
								backgroundImage : `url("${process.env.PUBLIC_URL}/resources/images/temp/temp.jpg")`
							}}></span>
							<div className={'pjtName'}>광주은행 개인뱅킹</div>
							<div className={'pjtPeriod'}>App / 2020</div>
							<div className={'pjtSummary'}>UI기획 수행</div>
						</div>
					</li>
					<li>
						<div className="histroyCardBox02">
							<span className={'img'} style={{
								backgroundImage : `url("${process.env.PUBLIC_URL}/resources/images/temp/temp.jpg")`
							}}></span>
							<div className={'pjtName'}>DGB 태블릿브랜치</div>
							<div className={'pjtPeriod'}>App / Web / Mobile Web / 2020</div>
							<div className={'pjtSummary'}>UI기획 수행</div>
						</div>
					</li>
					<li>
						<div className="histroyCardBox02">
							<span className={'img'} style={{
								backgroundImage : `url("${process.env.PUBLIC_URL}/resources/images/temp/temp.jpg")`
							}}></span>
							<div className={'pjtName'}>BNK부산은행 STM</div>
							<div className={'pjtPeriod'}>STM/ 2020</div>
							<div className={'pjtSummary'}>UI기획 , GUI디자인 수행</div>
						</div>
					</li>
					<li>
						<div className="histroyCardBox02">
							<span className={'img'} style={{
								backgroundImage : `url("${process.env.PUBLIC_URL}/resources/images/temp/temp.jpg")`
							}}></span>
							<div className={'pjtName'}>㈜삼주 트리콜 대리운전</div>
							<div className={'pjtPeriod'}>App / Web / Mobile Web / 2020</div>
							<div className={'pjtSummary'}>UI기획 , GUI디자인, 퍼블리싱, 개발 수행</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
}

// WorkSection02.propTypes = {
// 	setObserveEl : PropTypes.func.isRequired
// }

export default WorkPresenterDefault;
