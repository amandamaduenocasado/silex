import { Link } from 'react-router-dom';
import { StyledLogo } from './logo.styles';

const Logo = () => {
	return (
		<>
			<Link to='/'>
				<StyledLogo
					src='/assets/images/silex/logo-silex-2025-s.png'
					alt='logo silex'
				/>
			</Link>
		</>
	);
};

export default Logo;
