import { Link } from 'react-router-dom';
import { StyledLogo } from './logo.styles';

const Logo = () => {
	return (
		<>
			<Link to='/'>
				<StyledLogo src='/assets/images/silex/logo-silex-black.png' alt='' />
			</Link>
		</>
	);
};

export default Logo;
