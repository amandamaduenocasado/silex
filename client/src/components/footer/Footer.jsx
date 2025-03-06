import { Link } from 'react-router-dom';
import Logo from '../logo/Logo';
import {
	StyledCopy,
	StyledFooter,
	StyledFooterBot,
	StyledFooterToBig,
	StyledFooterTop,
	StyledLink,
	StyledSocial
} from './footer.styles';

const Footer = () => {
	return (
		<StyledFooter>
			{/* <StyledFooterToBig>
				<StyledFooterTop>
					<Logo />
					<StyledSocial>
						<Link>
							<img src='/assets/images/common/instagram.svg' alt='ig' />
						</Link>
						<Link>
							<img src='/assets/images/common/x.svg' alt='x' />
						</Link>

					</StyledSocial>
				</StyledFooterTop>
				<StyledFooterBot>
					<div>
						<StyledLink to='/contact'>Contact</StyledLink>
						<StyledLink to='/about'>About Us</StyledLink>
					</div>
				</StyledFooterBot>
			</StyledFooterToBig> */}
			<StyledCopy> {/*Se puede poner antes del span Spain | Spanish */}
				 <span>© 2025 Silex All rights reserved</span>
			</StyledCopy>
		</StyledFooter>
	);
};

export default Footer;
