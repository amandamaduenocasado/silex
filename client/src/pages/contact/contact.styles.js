import styled from 'styled-components';
import { FONT_SIZE } from '../../styles/fonts';
import { COLORS } from '../../styles/colors';

const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
`;

const StyledBannerContact = styled.div`
	position: relative;
	width: 100%;
	height: 100vh;
	overflow: hidden;

	video {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 100%;
		height: 100%;
		object-fit: cover;
		transform: translate(-50%, -50%); /* Centra el video */
	}
`;

const StyledContactContainer = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
`;

const StyledContactInfo = styled.span`
	font-size: ${FONT_SIZE.m};
	color: ${COLORS.softLime};
	display: flex; 
  	flex-direction: column;
	gap: 0.2rem;
`;

const StyledContactPhone = styled.span`
	position: absolute;
	bottom: 0.1rem;
	right: 0.3rem;
	font-size: ${FONT_SIZE.m};
	color: ${COLORS.softLime};
	display: flex; 
  	flex-direction: column;
`;

export {
	StyledMain,
	StyledBannerContact,
	StyledContactContainer,
	StyledContactInfo,
	StyledContactPhone
};
