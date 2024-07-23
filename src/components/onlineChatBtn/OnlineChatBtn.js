import React from 'react';
import { useNavigate } from 'react-router-dom';
import lickBubble from '../../resourses/img/like-bubble.png';

import './onlineChatBtn.css';

const OnlineChatBtn = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/onlinechat');
	}

	return (
		<>
			<button
				className={'online-chat-btn'}
				onClick={handleClick}
			>
				ONLINE CHAT
				<img src={lickBubble} alt={'lick Bubble'}/>
			</button>
		</>
	)
}

export default OnlineChatBtn;