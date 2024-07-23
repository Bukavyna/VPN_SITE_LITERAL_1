import MicroservicesSystem from '../../components/microservices-system/MicroservicesSystem';
import FairOaksDesignSection from '../../components/fairOaksDesignSection/FairOaksDesignSection';
import TestBtnBack from '../../components/testBtnBack/TestBtnBack';
import Coro from '../../components/coro/Coro';

import './chooseno.css';
import SupportSection from '../../components/supportSection/SupportSection';

const Chooseno = () => {
	return (
		<>
			<main className={'chooseno'}>
				<MicroservicesSystem />
				<Coro />

				<p className={'chooseno__text'}>We are incredibly grateful for the feedback provided in this survey.
					Your contributions are invaluable in enhancing the quality of our services. Thank you for dedicating your time and effort to assist us in our
					continuous
					<TestBtnBack />
					<br/>improvement.
					Our apologies for any inconvenience you may have experienced. Please be assured that we are diligently addressing the problem to rectify it promptly. Understanding the foundational elements of the Internet, such as IP addresses, is crucial. An IP address is a unique numerical identifier allocated to every device on a network. This identifier plays a vital role in the exchange of information across devices, enabling the tracking of data transmission and reception.</p>
				<FairOaksDesignSection />
				<p className={'chooseno__text'}>
					IP addresses can be categorized into two primary types: private and public. Private IP addresses are assigned to devices within a closed network, making them visible only within that particular network and hidden from the external internet. Conversely, public IP addresses are globally visible and can be accessed by any user across the internet.
					Diving deeper, there are a few subtypes of IP addresses. The most commonly employed is IP Version 4 (IPv4), which comprises a sequence of four numeric blocks separated by periods, like 192.168.1.10. With the burgeoning number of internet-connected devices, IP Version 6 (IPv6) has been developed as a successor to IPv4. IPv6 addresses are longer, consisting of eight groups of four hexadecimal digits, an example being ab12:0102:cf04:3456:9bcd:ef98:7654, allowing for a vast increase in the number of devices that can be simultaneously connected.
					Dynamic IP addresses represent another important type of private IP address. These addresses are not fixed and vary each time a device logs onto a network, helping to efficiently manage limited IP address resources. This contrasts with static IP addresses, which remain consistent over time.
					Additionally, the concept of loopback IP addresses exists for network troubleshooting purposes. These special addresses are used to check the network interface on a device but do not facilitate external internet or
					inter-network connectivity.
				</p>
				<p className={'chooseno__text'}>Exploring how a VPN alters your displayed location could be key if you're interested in the broader capabilities of a Virtual Private Network (VPN). Essentially, a VPN modifies how your location is perceived online, effectively disguising your actual geographical location. This feature offers several advantages, including access to location-specific content and enhanced privacy and security.
					Essentially, a VPN routes your internet traffic through a secure, encrypted tunnel, concealing your real IP address. It substitutes it with the IP address of the VPN server located in another country. The result is that it appears as though your digital activities originate from this other location.
					For instance, if you are in the United States and connect to a VPN server situated in the UK, your online location will seem to be in the UK as well. Therefore, you could access region-specific content available only in the UK, such as programs on BBC iPlayer. Conversely, if you connect from the UK to a server in the US, you gain access to content exclusively available in the US, like certain Netflix shows not available in the UK.
				</p>

				<MicroservicesSystem />
				<SupportSection />
			</main>
		</>
	)
}

export default Chooseno;