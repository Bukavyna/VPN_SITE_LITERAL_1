import React from 'react';
import { useNavigate } from 'react-router-dom';
import businessSecure from '../../resourses/img/business-secure 1.png';
import checkMarc from '../../resourses/symbols/check-marc.png';
import heart from '../../resourses/symbols/heart.png';
import padlock from '../../resourses/symbols/padlock.png';
import user from '../../resourses/symbols/user.png';
import speed from '../../resourses/symbols/speed.png';
import map from '../../resourses/img/map.png';
import AvailableGoogle from '../../components/availableGoogle/AvailableGoogle';

import './home.scss';

const Home = () => {
	const locationList = useNavigate();

	const handleClick = () => {
		locationList('/location');
	}
	return (
	<>
		<main>
			<div className={'home'}>
				<div className={'home__install-google'}>
					<h3 className={'home__title'}>Welcome to (App NAME)</h3>
					<p className={"home__description"}>
						Unblock websites and apps with<hr/> Socks5 proxy servers.
						<hr/>With just a single click, unlock any website using the exceptionally swift and supremely secure VPN service.
					</p>
					<AvailableGoogle />
				</div>
				<img className={'home__business-secure'} src={businessSecure} alt={'business secure'}/>
			</div>

			<h3 className={'home__section-title'}>Our Features</h3>
			<div className={'home__container'}>
				<div className={'home__features-box'}>
					<img className={'home__features-img'} src={checkMarc} alt={'check marc'}/>
					<h5 className={'home__features-title'}>SAFETY FIRST</h5>
					<p className={'home__features-text'}>Ultimate Privacy Assured. We ensure
						no logs are maintained, and neither your traffic routes nor online behaviors are tracked. Benefit from the most robust
						and dependable encryption that
						keeps you secure online, even
						<br/>on public Wi-Fi networks.</p>
				</div>
				<div className={'home__features-box'}>
					<img className={'home__features-img'} src={heart} alt={'heart'}/>
					<h5 className={'home__features-title'}>COMPLIMENTARY ACCESS</h5>
					<p className={'home__features-text'}>
						Absolutely no cost involved. Gain immediate access to all features without paying a dime. Connect to the quickest servers without any additional fees as we offer more than 10 server locations worldwide, all available at no charge.
					</p>
				</div>
			</div>

			<div className={'home__container home__container-2'}>
				<div className={'home__features-box'}>
					<img className={'home__features-img'} src={padlock} alt={'padlock'}/>
					<h5 className={'home__features-title'}>ACCESS FREEDOM</h5>
					<p className={'home__features-text'}>
						Unblock Any Website. Effortlessly unblock and access popular social networks, multimedia platforms, and video services from anywhere globally. Overcome online censorship barriers, use any app or service, and freely download or stream content of your choice.
					</p>
				</div>
				<div className={'home__features-box'}>
					<img className={'home__features-img'} src={user} alt={'user'}/>
					<h5 className={'home__features-title'}>USER-FRIENDLINESS</h5>
					<p className={'home__features-text'}>
						Connect with a Single Tap. Our service requires no registration and features no complex settings. Designed for user-friendliness and intuitive navigation, the app ensures a straightforward experience from the moment you open it.
					</p>
				</div>
				<div className={'home__features-box'}>
					<img className={'home__features-img'} src={speed} alt={'speed'}/>
					<h5 className={'home__features-title'}>SPEED UNLEASHED</h5>
					<p className={'home__features-text'}>
						Experience No Boundaries in Speed. Enjoy a lightning-fast VPN service without any restrictions on speed or downloads. This allows you to enjoy browsing, torrenting, and streaming effortlessly. The seamless performance will make you forget that the VPN is even activated, as it leaves your internet speed unaffected.
					</p>
				</div>
			</div>

			<div className={'home__container-features'}>
				<div className={'home__box-features'}>
					<h3 className={'home__section-title'}>Global High-Speed VPN Servers</h3>
					<p className={'home__features-text'}>Opt for any global location at no cost and connect to our high-speed VPN for unlimited and secure online access. We are dedicated to providing you with the fastest, most secure, and most stable internet connection available. To achieve this, we manage and maintain our worldwide network of servers in-house around the clock. This continuous oversight ensures optimal service performance and enhanced reliability, allowing you comfort and freedom in your digital engagements wherever you
						choose to connect.</p>
				</div>
				<div className={'home__features-box--map'}>
					<div className={'home__features-map'}>
						<img className={'home__features-map-img'} src={map} alt={'nap'}/>
					</div>
					<button
						className={'home__location-btn'}
						onClick={handleClick}
					>
						Location list
					</button>
				</div>
			</div>
		</main>
	</>
	)
}

export default Home;