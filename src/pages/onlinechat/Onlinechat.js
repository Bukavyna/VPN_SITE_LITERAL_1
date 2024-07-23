import MicroservicesSystem from '../../components/microservices-system/MicroservicesSystem';
import TestBtnBack from '../../components/testBtnBack/TestBtnBack';
import FairOaksDesignSection from '../../components/fairOaksDesignSection/FairOaksDesignSection';
import coro from '../../resourses/img/coro.png';
import SupportSection from '../../components/supportSection/SupportSection';

import './onlinechat.css';

const OnlineChat = () => {
	return (
		<div>
			<main className={'onlinechat'}>

				<MicroservicesSystem />
				<img className={'onlinechat__coro-img'} src={coro} alt={'advertising coro'}/>

				<h3 className={'onlinechat__title onlinechat__first-title'}>Instant Messaging
					Platforms Overview</h3>

				<TestBtnBack />

				<h3 className={'onlinechat__title'}>WhatsApp</h3>
				<p className={'onlinechat__text'}>
					Is a widely used instant messaging application that enables users to exchange text messages and voice notes, make audio and video calls, and send various types of media including photos, videos, location data, and documents. It provides a comprehensive communication tool suitable for personal and professional use.</p>
				<h3 className={'onlinechat__title'}>Viber</h3>
				<p className={'onlinechat__text'}>
					Viber is a versatile instant messaging app that supports seamless communication across different platforms, making it easy to stay connected with friends, family, and work associates. It guarantees privacy with its end-to-end encryption for all personal and group chats, as well as voice and video calls.</p>
				<h3 className={'onlinechat__title'}>Messenger</h3>
				<p className={'onlinechat__text'}>
					Messenger, developed by Facebook, is a robust messaging platform with extensive features. Users can send messages, share links and media files, and discover new friends and groups. Boasting over a billion users each month, Messenger remains one of the most popular apps for global communication.</p>
				<h3 className={'onlinechat__title'}>One Signal</h3>
				<p className={'onlinechat__text'}>
					Signal emphasizes security and privacy in digital communication. This app offers text messaging, as well as voice and video calls. Whether it’s a personal conversation or a group discussion, all communications on Signal are protected by end-to-end encryption. To join, users simply need a phone number, enhancing the app's accessibility and ease of use for secure conversations.</p>

				<FairOaksDesignSection />
				<img className={'onlinechat__coro-img'} src={coro} alt={'advertising coro'}/>

				<h3 className={'onlinechat__title'}>Overview of Popular Social Media Platforms</h3>
				<h3 className={'onlinechat__title'}>Facebook</h3>
				<p className={'onlinechat__text'}>
					Facebook stands as a multifaceted social networking platform where users can explore business opportunities, connect with new friends or professionals, and freely express their thoughts on a multitude of topics. It serves as a comprehensive space for networking and personal expression.</p>
				<h3 className={'onlinechat__title'}>Twitter (Now X)</h3>
				<p className={'onlinechat__text'}>
					Originally known as Twitter, this platform is celebrated for its microblogging services. It enables users to stay updated with the latest happenings and express themselves through short messages known as "tweets," which are traditionally limited to 140 characters, fostering succinct and rapid communication.</p>
				<h3 className={'onlinechat__title'}>TikTok</h3>
				<p className={'onlinechat__text'}>
					TikTok is a dynamic social media service that specializes in short-form, vertical videos related to music, comedy, dance, and more. It offers a lively platform for creative expression through various filters and special effects, and users can also engage with the community by going live. TikTok has quickly become a favorite, particularly among
					younger audiences.</p>
				<h3 className={'onlinechat__title'}>YouTube</h3>
				<p className={'onlinechat__text'}>
					YouTube is the leading video hosting service that caters to a wide array of interests. Users can upload, share, and view videos ranging from educational material and music clips to vlogs and news segments. It’s a key destination for those looking to consume or distribute video content on virtually any subject.</p>

				<MicroservicesSystem />
				<SupportSection />

			</main>
		</div>
	)
}

export default OnlineChat;