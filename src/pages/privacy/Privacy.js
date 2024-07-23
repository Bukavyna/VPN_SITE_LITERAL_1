import './privacy.css';

const Privacy = () => {
	return (
		<>
			<main className={'privacy'}>
				<h3 className={'privacy__title privacy__first-h3'}>Privacy Policy</h3>
				<p className={'privacy__text'}>
					This Privacy Policy (hereafter the “Policy”) specifies the rules applicable to all types of users’ data that may be collected or submitted while installing, accessing, or using <span className={'mail-app-text'}>(APP NAME)</span> (hereafter the “Service,” the “App”, “we”).
					In the Policy, we want to explain what data we don’t collect at all, what limited data we may collect, why we may collect it, and what rights and options you have regarding the use of your data.
					The privacy and safety of your data are what <span className={'mail-app-text'}>(APP NAME)</span> cares about the most. So, please, examine the Policy carefully before using the Service.
				</p>
				<h3 className={'privacy__title'}>Data Collection</h3>
				<p className={'privacy__text'}>
					We do not collect any identifiable personal data such as user’s name, email, phone number, geo-local details, data stored on the device, etc., which can reveal a user’s identity. We also do not track IP addresses of our users, connection logs, or traffic destination.
					Using the App, users may share with us only a minimal amount of basic anonymized connection metadata. Thus, we may gather only the information about duration of connection to our servers as well as information about the amount of data transferred a day.
					<hr/>We need the data that we collect for the sole purpose — to improve our Service and ensure the best network experience of our users. We may store the basic metadata for less than 24 hours for statistic reasons.
				</p>
				<h3 className={'privacy__title'}>Free and Premium Users</h3>
				<p className={'privacy__text'}>
					If you use our free App version, you may face AdMob’s, our ads partner’s, adverts. We want to emphasize that we do not share any data with the third-party advertiser, but it is possible that, without our assistance, the advertiser can collect the Advertising ID of your device while serving its adverts via our App. You can find out more about the Advertising ID and how to opt out personalized adverts here: https://support.google.com/googleplay/<hr/>android-developer/answer/6048248
					If you use our Premium App version, you won’t see any adverts while using our Service, which means no data will be gathered by the third-party advertiser.
					If you use our Premium App version, you won’t see any adverts while using our Service, which means no data will be gathered by the third-party advertiser.
				</p>
				<h3 className={'privacy__title'}>Data Share</h3>
				<p className={'privacy__text'}>
					Our app may use Firebase and Google Analytics services to analyze the collected data in order to detect bugs and connection failures, improve performance of our Services, and ensure seamless user experience. You can read more about these services policies here:policies.google.com/privacy
				</p>
				<h3 className={'privacy__title'}>Collecting Cookies</h3>
				<p className={'privacy__text'}>
					We don’t use cookies on our site, and App cookies are disabled by default as we don’t need them for analyzing traffic data. However, for analytics purposes, we use Google Analytics service, which may collect and store third-party cookies. Google’s share of these cookies with other parties is restricted by Google Analytics Terms of Use and
					Privacy Policy.
					The data related to app use collected by Google Analytics is non-personally identifiable, and we use it only for app performance improvement reasons. We use the data provided by Google Analytics service in a way it can’t be associated with an individual user. You can find out more about Google’s Privacy & Terms here: policies.google.com/privacy. You can also disable cookies on your browser to restrain Google Analytics from recognizing your activities.
				</p>
				<h3 className={'privacy__title'}>Opting Out Cookies</h3>
				<p className={'privacy__text'}>
					You can always change cookie preferences in your device or browser settings. Different browsers and devices allow you to control various types of cookies and decide which of them to block, which to allow, as well as clear exciting ones. You can find more information about controlling cookies in your browser “help” section.
				</p>
				<h3 className={'privacy__title'}>Children&apos;s Privacy</h3>
				<p className={'privacy__text'}>
					VPN Private is designed only for users above 16. We don’t aim to collect any data about individuals under 16. If you know or think that your child has reviled any personal data, don’t hesitate to inform us via <span className={'mail-app-text'}>(EMAIL@MAIL.COM)</span>, and we’ll remove all relevant data from
					our servers.
				</p>
				<h3 className={'privacy__title'}>Policy Changes</h3>
				<p className={'privacy__text'}>
					We reserve the right to modify the Policy anytime. So, please, check the Policy for changes and updates from time to time to stay well-informed on how VPN Private collects, uses, stores, and shares your data and what are your related rights.
				</p>
				<h3 className={'privacy__title'}>Contact</h3>
				<p className={'privacy__text none-bottom-margin'}>

					In case you have any questions, don’t hesitate to contact us at
				</p>
				<p className={'none-bottom-margin mail-app-text'}>
					(EMAIL@MAIL.COM)
				</p>
				<p className={'privacy__text'}>
					Last modified: May 14, 2024
				</p>
			</main>
		</>
	)
}

export default Privacy;