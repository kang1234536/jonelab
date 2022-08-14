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
						<div className="histroyCardBox">
							<span className={'img'} style={{
								display : 'block',
								backgroundColor : '#ccc',
								height : '471px',
								backgroundImage : `url("${process.env.PUBLIC_URL}/resources/images/temp/temp.jpg")`
							}}></span>
							<div className={'pjtSummary'}>APP(IOS, Andriod) / 2021 ~2022</div>
							<div className={'pjtName'}>BNK저축은행 모바일 뱅킹 앱 고도화 UIUX 구축</div>
							<ul className={'pjtDetail'}>
								<li>BNK저축은행 모바일 뱅킹 앱 고도화 프로젝트 기획, 디자인, 퍼블리싱 파트 수행.</li>
								<li>신용대출, 로그인, 메인, 비대면계좌 개설 등 프로세스 개편 및 디자인 고도화 .</li>
								<li>BNK금융그룹의 주요 컬러를 응용한 서비스 채널 과 고객의 이용 목적 및 사용자의 편의성을 위한 UIUX제공.</li>
							</ul>
						</div>
					</li>
					<li>
						<div className="histroyCardBox">
							<span className={'img'} style={{
								display : 'block',
								backgroundColor : '#ccc',
								height : '471px',
								backgroundImage : `url("${process.env.PUBLIC_URL}/resources/images/temp/temp.jpg")`
							}}></span>
							<div className={'pjtSummary'}>APP(IOS, Andriod) / Web /  Mobile Web / 2021 ~2022</div>
							<div className={'pjtName'}>BNK부산은행 비대면 방카슈랑스 UIUX 수행</div>
							<ul className={'pjtDetail'}>
								<li>BNK부산은행 비대면 방카슈랑스 프로젝트 UIUX 개발 수행.</li>
								<li>영업기회 확대 및 경쟁력 강화를 위한 부산은행에 최적화된 모바일/인터넷 방카슈랑스 플랫폼 구축을 위한 서비스 및 UI/UX 제공.</li>
							</ul>
						</div>
					</li>
					<li>
						<div className="histroyCardBox">
							<span className={'img'} style={{
								display : 'block',
								backgroundColor : '#ccc',
								height : '471px',
								backgroundImage : `url("${process.env.PUBLIC_URL}/resources/images/temp/temp.jpg")`
							}}></span>
							<div className={'pjtSummary'}>APP(IOS, Andriod) / 2021 </div>
							<div className={'pjtName'}>KKP SOHOM 앱 UIUX 구축</div>
							<ul className={'pjtDetail'}>
								<li>KKP 소호 특화 플랫폼 앱 SOHOM 구축 UIUX 개발 수행.</li>
								<li>소상공인을 대상으로 한 사업장 관리 및   데이터 기반의 사업 진단 서비스 제공.</li>
							</ul>
						</div>
					</li>
					<li>
						<div className="histroyCardBox">
							<span className={'img'} style={{
								display : 'block',
								backgroundColor : '#ccc',
								height : '471px',
								backgroundImage : `url("${process.env.PUBLIC_URL}/resources/images/temp/temp.jpg")`
							}}></span>
							<div className={'pjtSummary'}>APP(IOS, Andriod) / 2021 </div>
							<div className={'pjtName'}>KKP JELLYFOOT 앱 UIUX 구축</div>
							<ul className={'pjtDetail'}>
								<li>KKP 개인 SNS 플레이스 공유 앱 JELLYFOOT 구축 UIUX 개발 수행.</li>
								<li>빅데이터를 기반으로 한 타겟 고객 맞춤 마켓 플레이스 정보 제공 및 MZ 세대를 겨냥한 Gamification UIUX 제공.</li>
							</ul>
						</div>
					</li>
					<li>
						<div className="histroyCardBox">
							<span className={'img'} style={{
								display : 'block',
								backgroundColor : '#ccc',
								height : '471px',
								backgroundImage : `url("${process.env.PUBLIC_URL}/resources/images/temp/temp.jpg")`
							}}></span>
							<div className={'pjtSummary'}>APP(IOS, Andriod) / 2021 </div>
							<div className={'pjtName'}>BNK부산은행 소매대출 one 상품 프로세스 UIUX 개발</div>
							<ul className={'pjtDetail'}>
								<li>BNK 부산은행 소매대출 ONE 상품 프로세스UIUX 개발 수행.</li>
								<li>고객 성향과 은행의 전략적 목표에 따라 최적 상품을 추천하고, 채널간 데이터 통합 운영 서비스 제공.</li>
								<li>고객 편의를 극대화할 수 있는 UIUX 제공.</li>
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
