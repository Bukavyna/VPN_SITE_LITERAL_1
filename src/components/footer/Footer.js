import React from 'react';
import { Link } from 'react-router-dom';

import './footer.css';

const Footer = () => {
	return (
		<div className={'footer'}>
			<div className={'footer__police'}>
				<p
					className={'footer__link'}><Link to={'privacy'}>Private police</Link>
				</p>
				<p
					className={'footer__link'}><Link to={'refundpolicy'}>Refund police</Link>
				</p>
				<p
					className={'footer__link'}><Link to={'cyberthreats'}>Terms of service</Link>
				</p>
			</div>
			<p className={'footer__copyright'}>Copyright © 2024</p>
		</div>
	)
}

export default Footer;