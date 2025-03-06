
import {

	StyledBannerContact,
	StyledMain,
	StyledContactContainer,
	StyledContactInfo,
	StyledContactPhone,


} from './contact.styles';

const Contact = () => {
	return (
		<StyledMain>
			<StyledBannerContact>
				<video autoPlay loop >
					<source src="/assets/images/silex/baby-video.mp4" type="video/mp4" />
					Tu navegador no soporta el video.
				</video>
			</StyledBannerContact>
			<StyledContactContainer>
				<StyledContactInfo>
					<span> 13 Calle de la Manzana, 28015
					</span>
					<span> Madrid
					</span>
					<span> contact@silex.com
					</span>
				</StyledContactInfo>
					</StyledContactContainer>
				<StyledContactPhone>+34 812 712 337</StyledContactPhone>

		</StyledMain>
	);
};


export default Contact;