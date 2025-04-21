import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { useEffect, useState } from 'react';

const Layout = () => {
	const location = useLocation();
	const hideFooter = ['/contact', '/login', '/redirect'].includes(
		location.pathname
	);

	const [showMenu, setShowMenu] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			const footer = document.querySelector('footer');
			if (footer) {
				const footerRect = footer.getBoundingClientRect();
				const windowHeight = window.innerHeight;
				if (footerRect.top <= windowHeight && footerRect.bottom >= 0) {
					setShowMenu(false);
				} else {
					setShowMenu(true);
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<>
			<Header showMenu={showMenu} />
			<Outlet />
			{!hideFooter && <Footer />}
		</>
	);
};

export default Layout;
