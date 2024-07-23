import { useState } from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

const Navbar = () => {
	const [ openMenu, setOpenMenu ] = useState(false);

	const toggleMenu = () => {
		setOpenMenu(!openMenu);
	};

	const handleClickLink = () => {
		setOpenMenu(false);
	}

	return (
		<>
			<nav className={'navbar'}>
				<div>
					<div onClick={toggleMenu}>
						<div className={`navbar__burger ${openMenu ? 'hide' : 'show'}`}>
							<span></span>
							<span></span>
							<span></span>
						</div>
						<div className={`navbar__burger-x ${openMenu ? 'show' : 'hide'}`}>X</div>
					</div>
					<div className={`navbar__menuItems ${openMenu ? 'show' : 'hide'}`}>
						<ul className={'menuItems-teg-ul'}>
							<li
								className={'menuItems'}><Link to={'/'} onClick={handleClickLink}>Home</Link>
							</li>
							<li
								className={'menuItems'}><Link to={'location'} onClick={handleClickLink}>Location</Link>
							</li>
							<li
								className={'menuItems'}><Link to={'travel'} onClick={handleClickLink}>Travel</Link>
							</li>
							<li
								className={'menuItems'}><Link to={'trading'} onClick={handleClickLink}>Trading</Link>
							</li>
							<li
								className={'menuItems'}><Link to={'dating'} onClick={handleClickLink}>Dating</Link>
							</li>
						</ul>
						<ul className={'menuItems-teg-ul'}>
							<li
								className={'menuItems'}><Link to={'privacy'} onClick={handleClickLink}>Privacy Policy</Link>
							</li>
							<li
								className={'menuItems'}><Link to={'refundpolicy'} onClick={handleClickLink}>Refund Policy</Link>
							</li>
							<li
								className={'menuItems'}><Link to={'vulnerabilitydisclosure'} onClick={handleClickLink}>Vulnerability Disclosure</Link>
							</li>
						</ul>
						<p>Copyright © 2024</p>
					</div>

				</div>
			</nav>
		</>
	);
}

export default Navbar;