import React from 'react';
import { useNavigate } from 'react-router-dom';

import './onlineWatchBtn.css';

const OnlineWatchBtn = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/onlinewatch')
	};

	return (
		<>
			<button
				className={'online-watch-btn'}
				onClick={handleClick}
			>
				ONLINE WATCH
				<div className={'online-watch-btn__18'}>18+</div>
			</button>
		</>
	)
}

export default OnlineWatchBtn;