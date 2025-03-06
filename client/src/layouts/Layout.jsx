import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const Layout = () => {
	const location = useLocation();
	const hideFooter = ['/contact', '/login'].includes(location.pathname); // Oculta en Contact y Login

	return (
		<>
			<Header />
			<Outlet />
			{!hideFooter && <Footer />}
		</>
	);
};

export default Layout;
