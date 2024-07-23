import MicroservicesSystem from '../../components/microservices-system/MicroservicesSystem';
import FairOaksDesignSection from '../../components/fairOaksDesignSection/FairOaksDesignSection';
import TestBtnBack from '../../components/testBtnBack/TestBtnBack';
import coro from '../../resourses/img/coro.png'

import './onlinewatch.css';
import SupportSection from '../../components/supportSection/SupportSection';

const OnlineWatch = () => {
	return (
		<div>
			<main className={'onlinewatch'}>
				<MicroservicesSystem />
				<img className={'onlinewatch__coro-img'} src={coro} alt={'advertising coro'}/>

				<h3 className={'onlinewatch__title onlinewatch__first-title'}>
						Overview of Top 5 Secure
						<br/>Browsers for
						<br/>Enhanced Privacy
					</h3>

					<TestBtnBack />

				<p className={'onlinewatch__text'}>In the digital age, most mainstream browsers track user activity, utilizing data from searches, page visits, and viewed content to tailor advertisements and news. However, concerns over privacy and data collection have led to the development of secure browsers dedicated to preserving user anonymity online. Here are the top five secure browsers designed for those who prefer to surf the internet without leaving a trail:</p>

				<MicroservicesSystem />

					<h3 className={'onlinewatch__title'}>Tor Browser</h3>
					<p className={'onlinewatch__text'}>Tor Browser is the foremost choice for privacy-conscious users. It routes traffic over the Tor network, camouflaging a user’s identity and location by bouncing the connection across a distributed network of relays. Tor Browser is ideal for those who need the highest level of privacy and are willing to trade off some speed for security.</p>
					<h3 className={'onlinewatch__title'}>Brave</h3>
					<p className={'onlinewatch__text'}>Brave focuses on user privacy by blocking trackers and intrusive ads by default. It also offers features like automatic HTTPS upgrades, private browsing with Tor for enhanced anonymity, and a native cryptocurrency (Basic Attention Tokens) that users can earn by opting into
						<br/> privacy-respecting ads.</p>
					<h3 className={'onlinewatch__title'}>DuckDuckGo</h3>
					<p className={'onlinewatch__text'}>Known primarily for its private search engine, DuckDuckGo also offers a web browser that prioritizes user privacy. It blocks tracking cookies by default and provides a site privacy grade rating from A to F. This browser is a great choice for everyday browsing without the hassle of complex configurations.</p>
					<h3 className={'onlinewatch__title'}>Mozilla Firefox</h3>
					<p className={'onlinewatch__text'}>While Mozilla Firefox is a mainstream browser, it offers significant customization options geared towards privacy and security, especially in its Private Browsing mode. Features include tracking protection, content blocking, and a range of privacy-centric add-ons available through its repository.</p>
					<h3 className={'onlinewatch__title'}>Epic Privacy Browser</h3>
					<p className={'onlinewatch__text'}>Epic is built from the Chromium source code for compatibility but strips out all features that could compromise user privacy. It blocks ads, trackers, fingerprinting, crypto mining, ultrasound signaling and more by default, and always operates in a private
						<br/>browsing mode.</p>

				<p className={'onlinewatch__text'}>These browsers are designed for users who are particularly sensitive about their online privacy and wish to secure their internet activities from potential surveillance and data profiling. Each offers unique features that cater to various levels of security needs and personal preferences in anonymous browsing.</p>

				<FairOaksDesignSection/>
				<SupportSection />
			</main>
		 </div>
	)
}

export default OnlineWatch;