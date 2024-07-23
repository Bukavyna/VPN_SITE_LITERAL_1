import React from 'react';
import googlePlay from '../../resourses/google Play.png';

import './availableGoogle.css';

const AvailableGoogle = () => {
	return (
		<div className={'google-play'}>
			<div className={'google-play__box'}>
				<h3 className={'google-play__title'}>Available on</h3>
				<img className={'google-play__img'} src={googlePlay} alt={'google play'}/>
			</div>
			<button className={'btn google-play__btn'}>Install now</button>
		</div>
	)
}

export default AvailableGoogle;