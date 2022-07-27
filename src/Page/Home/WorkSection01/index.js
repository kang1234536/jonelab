import React, { useRef, useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const WorkSection01 = ({setObserveEl})=>{
	const workWrap = useRef(null);

	useEffect(()=> {
	
	}, []);

	return(
		<div className={'mainWorkWrap'} ref={workWrap}>
			<div className='titBox'>
				<strong className='tit'>Work</strong>
			</div>

			<div className={'historyListWrap'}>
				<ul>
					<li>
						<div>
							<span className={'img'} style={{
								display : 'block',
								backgroundColor : '#ccc',
								height : '471px'
							}}><img src="" alt="" /></span>
							<div className={'pjtSummary'}>APP(IOS, Andriod) / 2021 ~2022</div>
							<div className={'pjtName'}>BNK저축은행 모바일 뱅킹 앱 고도화 UIUX 구축</div>
							<ul className={'pjtDetail'}>
								<li>BNK저축은행 모바일 뱅킹 앱 고도화 프로젝트 기획, 디자인, 퍼블리싱 파트 수행.</li>
								<li>신용대출, 로그인, 메인, 비대면계좌 개설 등 프로세스 개편 및 디자인 고도화 .</li>
								<li>BNK금융그룹의 주요 컬러를 응용한 서비스 채널 과 고객의 이용 목적 및 사용자의 편의성을 위한 UIUX제공.</li>
							</ul>
						</div>
					</li>
				</ul>
			</div>

		</div>
	);
}

WorkSection01.propTypes = {
	setObserveEl : PropTypes.func.isRequired
}

export default WorkSection01;
