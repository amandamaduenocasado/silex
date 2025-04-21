import { useAuth } from '../../hooks/useAuth';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase.config';
import {
	StyledLogOutButton,
	StyledMenu,
	StyledNavLink,
	StyledUl,
} from './menu.styles';

const Menu = ({ showMenuAndButton, menuOpen }) => {
	const { user } = useAuth();

	// Si showMenuAndButton es false y no está abierto el menú, no renderizamos el menú
	if (!showMenuAndButton && !menuOpen) return null;

	const logout = async () => {
		try {
			await signOut(auth);
			console.log('User logged out successfully');
		} catch (error) {
			console.error('Error logging out:', error);
		}
	};

	return (
		<StyledMenu $menuOpen={menuOpen}>
			<nav>
				<StyledUl>
					<StyledNavLink to={'/redirect'}>LOG IN</StyledNavLink>
					<StyledNavLink to={'/cart'}>CART</StyledNavLink>
					<StyledNavLink to={'/contact'}>CONTACT</StyledNavLink>

					{user && <StyledNavLink to='/profile'>MY PROFILE</StyledNavLink>}

					{user && (
						<StyledLogOutButton onClick={logout}>
							<StyledNavLink to={'/'}>LOG OUT</StyledNavLink>
						</StyledLogOutButton>
					)}
				</StyledUl>
			</nav>
		</StyledMenu>
	);
};

export default Menu;
