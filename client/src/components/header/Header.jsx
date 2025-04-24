import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Menu from '../menu/Menu';
import { StyledBranding, StyledHeader, StyledPlus } from './header.styles';
import Logo from '../logo/Logo';

const Header = ({ showMenu, onCartClick }) => {
	const [menuOpen, setMenuOpen] = useState(false);
	const location = useLocation();

	// Rutas donde NO se muestra el Header

	const hideHeaderOnPaths = [
		'/login',
		'/register',
		'/redirect',
		'/cart',
		'/contact',
	];
	if (hideHeaderOnPaths.includes(location.pathname)) return null;

	// Solo muestra el logo en ciertas páginas
	const showLogo =
		location.pathname === '/login' ||
		location.pathname === '/about' ||
		location.pathname === '/shop' ||
		location.pathname === '/redirect' ||
		location.pathname === '/';

	// Función para abrir/cerrar el menú
	const handleMenuToggle = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<StyledHeader>
			{showLogo && (
				<StyledBranding>
					<Logo />
				</StyledBranding>
			)}

			{/* Botón Plus para abrir/cerrar el menú */}
			<StyledPlus
				onClick={handleMenuToggle}
				src='/assets/images/silex/menu-plus-green.svg'
				alt='Menu'
			/>

			{/* Pasamos los props al componente Menu, cuidado lo hacemos sin el $ */}
			<Menu
				showMenuAndButton={showMenu}
				menuOpen={menuOpen}
				onCartClick={onCartClick}
			/>
		</StyledHeader>
	);
};

export default Header;
