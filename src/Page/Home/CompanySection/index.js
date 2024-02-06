import React, { useRef, useEffect, useContext } from 'react'; 
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {GState} from 'Router/GState';

const CompanySection = ({setObserveEl})=>{
	const{setCompanyEl} = useContext(GState);
	const companyWrap = useRef(null);
	const introItem01 = useRef(null);
	const introItem02 = useRef(null);
	const introItem03 = useRef(null);
	let introItemArr;

	useEffect(()=> {
		setCompanyEl(companyWrap);
		introItemArr = [introItem01, introItem02, introItem03];
		
		setObserveEl((observeEl)=>{
			var arrayEl = observeEl;
			introItemArr.forEach((val)=>{
				var hasEl = arrayEl.indexOf(val.current);
				if(hasEl > 0) {
					arrayEl.splice(hasEl, 0);
				}
				arrayEl = [...arrayEl, val.current];
			});
			return arrayEl;
		});
		
		return () => {
			setCompanyEl('');
		}

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
					<Link to="/contect" className={'btnItem'}><em>Get in Touch &gt;</em></Link>
				</div>
			</div>

			<div className={'companyIntroBox02'}>
				<ul>
					<li>
						<div className={'introItem'} ref={introItem01}>
							<strong className={'tit'}><span>ideology</span></strong>

							<div className="conts">
								사람과 사람을 연결한다는 이념을 바탕으로
								최고의 만남을 위한 공간을 만들기 위해  노력하고 있습니다.
							</div>
						</div>
					</li>
					<li>
						<div className={'introItem'} ref={introItem02}>
							<strong className={'tit'}><span>service</span></strong>

							<div className="conts">
								다양한 리서치를 통하여 추출된 User insight 를
								통하여 Key Concept 도출하여  최적의 서비스를 제공합니다.
							</div>
						</div>
					</li>
					<li>
						<div className={'introItem'} ref={introItem03}>
							<strong className={'tit'}><span>Value</span></strong>

							<div className="conts">
							기업의 니즈에 적합하도록 전문적이고 체계적인 운영을 통해
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
