import React, { useRef, useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CompanySection = ({setObserveEl})=>{
	const companyWrap = useRef(null);


	useEffect(()=> {
		// introWrap.current.style.height = winH + 'px';
		setObserveEl((observeEl)=>{
			var hasEl = observeEl.indexOf(companyWrap.current);
			if(hasEl > 0) {
				observeEl.splice(hasEl, 0);
			}
			return [...observeEl, companyWrap.current];
		});

	}, []);

	return(
		<div className={'mainCompanyWrap'} ref={companyWrap}>
			<div className={'companyIntroBox'}>
				<div className={'companyIntroInner'}>
					고객에게는 목표 지향적인 솔루션을 제시하고,<br />
					사용자에게는 혁신적인 경험을 제공하는<br />
					UX 전문가 그룹입니다.<br />
				</div>

				<div className={'companyLinkBox'}>
					<Link to="/contect"><em>Get in Touch &gt;</em></Link>
				</div>
			</div>

			<div className={'companyIntroBox02'}>
				<ul>
					<li>
						<div className={'introItem'}>
							<strong class={'tit'}>ideology</strong>

							<div className="conts">
								사람과 사람을 연결한다는 이념을 바탕으로<br />
								최고의 만남을 위한 공간을 만들기 위해  노력하고 있습니다.
							</div>
						</div>
					</li>
					<li>
						<div className={'introItem'}>
							<strong class={'tit'}>service</strong>

							<div className="conts">
								다양한 리서치를 통하여 추출된 User insight 를<br />
								통하여 Key Concept 도출하여  최적의 서비스를 제공합니다.
							</div>
						</div>
					</li>
					<li>
						<div className={'introItem'}>
							<strong class={'tit'}>Value</strong>

							<div className="conts">
							기업의 니즈에 적합하도록 전문적이고 체계적인 운영을 통해<br />
							최적의 브랜드 가치를 함께 만들어갑니다.
							</div>
						</div>
					</li>
				</ul>
			</div>


		</div>
	);
}

CompanySection.propTypes = {
	setObserveEl : PropTypes.func.isRequired
}

export default CompanySection;
