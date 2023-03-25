import React, { useEffect , useState } from 'react'; 
import InpText from 'UIcomponent/InpTxet';
import Textarea from 'UIcomponent/Textarea';

const ContectPresenter = ()=>{
	const [companyVal, setCompanyVal] = useState('');
	const [nameVal, setNameVal] = useState('');
	const [emailVal, setEmailVal] = useState('');
	const [phoneVal, setPhoneVal] = useState('');
	const [writeVal, setWriteVal] = useState('');


	useEffect(()=> {
		// console.log(`company value = ${companyVal}`);
		// console.log(`name value = ${nameVal}`);
		// console.log(`email value = ${emailVal}`);
		// console.log(`phone value = ${phoneVal}`);
		// console.log(`write value = ${writeVal}`);
	});

	return(
		<div className={'contents'}>
			<div className={'titBox'}>
				<strong className={'tit'}>Get in touch</strong>
				<div className={'desc'}>Fill in the form or email us at . geenya@jonelab.com</div>
			</div>

			<div className={'registWrap'}>
				<div className="registTit">
					<strong className={'tit'}>Your Company</strong>
				</div>
				<div className={'registConts'}>
					<InpText tit={'회사명을 입력하세요'} placeholder={'Your Company'} setVal={setCompanyVal} />
				</div>
				<div className="registTit">
					<strong className={'tit'}>Your Name</strong>
				</div>
				<div className={'registConts'}>
					<InpText tit={'이름을 입력하세요'} placeholder={'Your Name'} setVal={setNameVal} />
				</div>
				<div className="registTit">
					<strong className={'tit'}>E-mail Address</strong>
				</div>
				<div className={'registConts'}>
					<InpText type="email" tit={'이메일을 입력하세요'} placeholder={'E-mail Address'} setVal={setEmailVal} />
				</div>
				<div className="registTit">
					<strong className={'tit'}>Phone Number</strong>
				</div>
				<div className={'registConts'}>
					<InpText type={'tel'} tit={'전화번호를 입력하세요'} placeholder={'Phone Number'} setVal={setPhoneVal} />
				</div>
				<div className="registTit">
					<strong className={'tit'}>Tell us about the Project </strong>
				</div>
				<div className={'registConts'}>
					<Textarea tit={'문의하실 내용을 입력해주세요'} placeholder={'Tell us about the Project'} setVal={setWriteVal} />
				</div>
			</div>

			<div className="pageBtnWrap">
				<button className="btnItem"><em>send</em></button>
			</div>
		</div>
	);
}

export default ContectPresenter;