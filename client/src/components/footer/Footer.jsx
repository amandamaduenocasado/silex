import {
	StyledFooter,
	StyledGrid,
	StyledSpan,
	StyledVideoFooter,
	StyledLogoFooter,
	StyledSpanRight,
	StyledSpanCenter,
} from './footer.styles';

import { useLocation } from 'react-router-dom';

const Footer = () => {
	const location = useLocation();
	const showFooter = location.pathname === '/';

	return (
		<StyledFooter>
			{showFooter && (
				<>
					<StyledGrid>
						<StyledSpan> SPAIN | SPANISH </StyledSpan>
						<StyledSpanCenter>INSTAGRAM AND RRSS @SILEXSPAIN</StyledSpanCenter>
						<StyledSpanRight>
							© 2025 SILEX. ALL RIGHTS RESERVED
						</StyledSpanRight>

						<StyledVideoFooter>
							<video autoPlay loop playsInline>
								<source
									src='/assets/images/silex/tree-square.mp4'
									type='video/mp4'
								/>
							</video>
						</StyledVideoFooter>

						<StyledVideoFooter>
							<video autoPlay loop playsInline>
								<source
									src='/assets/images/silex/horses-square.mp4'
									type='video/mp4'
								/>
							</video>
						</StyledVideoFooter>

						{/* Espacio vacío debajo del tercer span */}
						<div></div>
					</StyledGrid>

					<StyledLogoFooter
						srcSet='/assets/images/silex/logo-silex-2025-s-black.png'
						alt='logo silex'
					/>
				</>
			)}
		</StyledFooter>
	);
};

export default Footer;
