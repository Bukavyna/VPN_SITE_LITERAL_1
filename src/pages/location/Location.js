import React from 'react';
import  { useNavigate } from 'react-router-dom';
import AvailableGoogle from '../../components/availableGoogle/AvailableGoogle';
import dataHostingServersConnectedToCloud from '../../resourses/img/data-hosting-servers-connected-to-cloud.png';
import premiumLocations from '../../resourses/symbols/premium-locations.png';
import freeLocations from '../../resourses/symbols/free_locations.png';
import usa from '../../resourses/flags/usa.png';
import australia from '../../resourses/flags/austallia.png';
import brazil from '../../resourses/flags/brazil.png';
import mexico from '../../resourses/flags/mexico.png';
import uk from '../../resourses/flags/UK.png';
import netherlands from '../../resourses/flags/netherlands.png';
import japan from '../../resourses/flags/japan.png';
import india from '../../resourses/flags/india.png';
import indonesia from '../../resourses/flags/indonesia.png';
import hong from '../../resourses/flags/hong.png';
// import LocationMap from '../../components/locationMap/LocationMap';

import './location.css';
import map from '../../resourses/img/map.png';

const Location = () => {
	const connectedStatusList = useNavigate();

	const handleClick = () => {
		connectedStatusList('/connectedStatusBlock');
	}

	return (
		<>
			<main>
				<div className={'location'}>
					<div className={'location__install-google'}>
						<div className={'location__install-google--box'}>
							<h3 className={'location__title'}>Our location</h3>
							<p className={'location__description'}>
								Our VPN application has more than 10 servers located in different parts of the world. 2 servers are absolutely free.
							</p>
							<AvailableGoogle />
						</div>
						<img className={'location__data-hosting-servers-img'} src={dataHostingServersConnectedToCloud} alt={'Data Hosting Servers Connected To Cloud'}/>
					</div>

					<div className={'location__info-box'}>
						<h3 className={'location__paragraph-title'}>Choosing the Right Location</h3>
						<p className={'location__paragraph-text'}>
							For optimal performance while using VPN, it's recommended to select a VPN server that is nearest to both the website you intend to access and your current geographical location.
						</p>
						<h3 className={'location__paragraph-title'}>Our worldwide locations</h3>
						<p className={'location__paragraph-text'}>
							Global Accessibility With VPN, you have the freedom to connect to various servers globally at no cost. This allows you to enjoy unrestricted digital freedom wherever you are.
						</p>
					</div>


					<div className={'location__container'}>
						<div className={'location__box'}>
							<img className={'location__country-img'} src={premiumLocations} alt={'premium Locations'}/>
							<h5 className={'location__country-title'}>FREE LOCATIONS</h5>
							<div className={'location__country-bloc'}>
								<div className={'location__country'}>
									<img className={'location__country-flag'} src={usa} alt={'usa'}/>
									<p className={'location__country-name'}>United States</p>
								</div>
								<div className={'location__country'}>
									<img className={'location__country-flag'} src={australia} alt={'australia'}/>
									<p className={'location__country-name'}>Australia</p>
								</div>
							</div>
						</div>

						<div className={'location__box'}>
							<img className={'location__country-img'} src={freeLocations} alt={'free Locations'}/>
							<h5 className={'location__country-title'}>PREMIUM LOCATIONS</h5>
							<div className={'location__country-bloc'}>
								<div className={'location__country'}>
									<img className={'location__country-flag'} src={brazil} alt={'brazil'}/>
									<p className={'location__country-name'}>Brazil</p>
								</div>
								<div className={'location__country'}>
									<img className={'location__country-flag'} src={mexico} alt={'mexico'}/>
									<p className={'location__country-name'}>Mexico</p>
								</div>
								<div className={'location__country'}>
									<img className={'location__country-flag'} src={uk} alt={'uk'}/>
									<p className={'location__country-name'}>United Kingdom</p>
								</div>
								<div className={'location__country'}>
									<img className={'location__country-flag'} src={netherlands} alt={'netherlands'}/>
									<p className={'location__country-name'}>Netherlands</p>
								</div>
								<div className={'location__country'}>
									<img className={'location__country-flag'} src={japan} alt={'japan'}/>
									<p className={'location__country-name'}>Japan</p>
								</div>
								<div className={'location__country'}>
									<img className={'location__country-flag'} src={india} alt={'india'}/>
									<p className={'location__country-name'}>India</p>
								</div>
								<div className={'location__country'}>
									<img className={'location__country-flag'} src={indonesia} alt={'indonesia'}/>
									<p className={'location__country-name'}>Indonesia</p>
								</div>
								<div className={'location__country'}>
									<img className={'location__country-flag'} src={hong} alt={'hong kong'}/>
									<p className={'location__country-name'}>Hong Kong</p>
								</div>
							</div>
						</div>
					</div>

					<div className={'location__paragraph-container'}>
						<div className={'location__paragraph-bloc'}>
							<h3 className={'location__paragraph-title'}>Benefits of Switching VPN Locations:</h3>
							<p className={'location__paragraph-text'}>
								<span className={'location__paragraph-span'}>Sports Enthusiasts:</span>: Sports enthusiasts can stream live events not available in their region by connecting to a VPN server located where the events
								are broadcasted.
							</p>
							<p className={'location__paragraph-text'}>
								<span className={'location__paragraph-span'}>Globetrotters:</span> Travelers can maintain access to social media and stream their favorite shows from anywhere by using a VPN to connect to servers in their
								home country.
							</p>
							<p className={'location__paragraph-text'}>
								<span className={'location__paragraph-span'}>Video Game Players:</span> Gamers can reduce latency and access games and content released early in other markets by selecting servers in those locations.
							</p>
							<p className={'location__paragraph-text'}>
								<span className={'location__paragraph-span'}>Deal Hunters:</span> Online shoppers looking to snap up the best deals or find cheaper airfares can switch their VPN location to various global markets to take advantage of regional sales and promotions.
							</p>
							<p className={'location__paragraph-text'}>
								<span className={'location__paragraph-span'}>Public Wi-Fi Users:</span> Individuals using public Wi-Fi can enhance their security and protect their data from hackers by connecting through a VPN, thereby encrypting their Internet connection.
							</p>
							<p className={'location__paragraph-text'}>
								<span className={'location__paragraph-span'}>Privacy Advocates:</span> Users concerned with privacy can use a VPN to conceal their physical location and personal identity, offering protection against cyber threats and surveillance.
							</p>
						</div>

						<div className={'location__box--map'}>
							<div className={'location__map'}>
								<img className={'location__map-img'} src={map} alt={'nap'}/>
							</div>
							<button
								className={'location__ip-btn'}
								onClick={handleClick}
							>
								Check my IP
							</button>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}

export default Location;