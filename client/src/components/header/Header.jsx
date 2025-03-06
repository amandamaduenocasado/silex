import { useState } from 'react';
import Menu from '../menu/Menu';
import {
	StyledBranding,
	StyledHeader,
	StyledPlus
} from './header.styles';
// import Logo from '../logo/Logo'; 

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<StyledHeader>
			<StyledBranding>
				{/* <Logo /> */}
			</StyledBranding>

			{!menuOpen && (
				<StyledPlus
					onClick={() => setMenuOpen(true)}
					src='/assets/images/silex/menu-plus-green.svg'
					alt=''
				/>
			)}
			{menuOpen && (
				<StyledPlus
					onClick={() => setMenuOpen(false)}
					src='/assets/images/silex/menu-plus-green.svg'
					alt=''
				/>
			)}
			<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
		</StyledHeader>
	);
};

export default Header;
