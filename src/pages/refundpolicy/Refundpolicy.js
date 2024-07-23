
import cashback from '../../resourses/img/cashback 1.png';

import './refundpolicy.css';

const Refundpolicy = () => {
	return (
		<>
			<main className={'refundpolicy'}>
				<h3 className={'refundpolicy__title refundpolicy__title-first'}>Refund Policy</h3>
				<p className={'refundpolicy__text'}>
					You can refund the cost of the subscription by requesting it via <span className={'mail-app-text'}>(EMAIL@MAIL.COM)</span> 48 hours after the payment was made unless you got a free trial promotion.
				</p>
				<div className={'refundpolicy__cashback-bloc'}>
					<img className={'refundpolicy__cashback-img'} src={cashback} alt={'cashback logo'}/>
					<div className={'refundpolicy__cashback-text-box'}>
						<h3 className={'refundpolicy__title'}>Free Trial Promotions</h3>
						<p className={'refundpolicy__text'}>
							Subscribers who registered to a free trial can cancel their subscription during their free trial period by following
							these steps:
						</p>
						<p className={'refundpolicy__text'}>
							-Open Google Play;
							<br/>-In the menu, choose “Subscriptions”;
							<br/>-Tap the subscription you want to cancel;
							<br/>-Tap “Cancel subscription” at the bottom.
						</p>
						<p className={'refundpolicy__text'}>
							Free trial subscribers are not entitled to a refund.
						</p>
					</div>
				</div>
			</main>
		</>
	)
}

export default Refundpolicy;