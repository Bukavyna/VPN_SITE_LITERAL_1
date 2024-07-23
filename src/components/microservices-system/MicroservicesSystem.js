import React from 'react';
import navInformation from '../../resourses/symbols/information.png';
import navClose from '../../resourses/symbols/close.png';

import './microservicesSystem.css';

const MicroservicesSystem = () => {
	return (
		<div className={'microservicesSystem'}>
			<div className={'microservicesSystem__icon-divs'}>
				<div className={'microservicesSystem__icon-div microservicesSystem__information'}>
					<img src={navInformation} alt={'information'} className={'microservicesSystem__icon microservicesSystem__icon--information'}/>
				</div>
				<div className={'microservicesSystem__icon-div microservicesSystem__close'}>
					<img src={navClose} alt={'close'} className={'microservicesSystem__icon microservicesSystem__icon--close'}/>
				</div>
			</div>
			<h2 className={'microservicesSystem__title'}>
				Microservices System
			</h2>
			<p className={'microservicesSystem__inform'}>
				Arranges Your Application As A Collection Of Loosely Coupled Services With Microservices
			</p>
			<p className={'microservicesSystem__para'}>
				Microservice Architecture
			</p>
			<div className={'microservicesSystem__just-div'}></div>
		</div>
	)
}

export default MicroservicesSystem;