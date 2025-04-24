import styled from 'styled-components';
import { FONT_SIZE } from '../../styles/fonts';
import { COLORS } from '../../styles/colors';

const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
	margin: 0;
	padding: 0;
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
		object-fit: cover;
		transform: translate(-50%, -50%); /* Centra el video */
		width: 100vw;
		height: 100dvh;
		display: block;
		pointer-events: none;
		z-index: -1;
	}
`;

const StyledContactContainer = styled.div`
	position: absolute;
	top: 0.5rem;
	left: 0.5rem;
`;

const StyledContactInfo = styled.span`
	font-size: ${FONT_SIZE.l};
	color: ${COLORS.softLime};
	display: flex;
	flex-direction: column;
	gap: 0.2rem;

	@media screen and (width>=1024px) {
		font-size: ${FONT_SIZE.xxl};
	}
`;

const StyledContactPhone = styled.span`
	position: absolute;
	bottom: 0.1rem;
	right: 0.3rem;
	font-size: ${FONT_SIZE.l};
	color: ${COLORS.softLime};
	display: flex;
	flex-direction: column;

	@media screen and (width>=1024px) {
		font-size: ${FONT_SIZE.xxl};
	}
`;

export {
	StyledMain,
	StyledBannerContact,
	StyledContactContainer,
	StyledContactInfo,
	StyledContactPhone,
};
