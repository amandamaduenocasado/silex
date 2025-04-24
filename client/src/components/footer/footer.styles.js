import styled from 'styled-components';
import { FONT_FAMILY } from '../../styles/fonts';

const StyledFooter = styled.footer`
	display: flex;

	@media screen and (max-width: 768px) {
		width: 100%;
		display: flex;
		flex-direction: column;
	}
`;

const StyledGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	width: 100%;
	padding: 0 1rem;
	gap: 0.7rem;
	margin-bottom: 0.2rem;

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;

const StyledSpan = styled.span`
	font-size: 0.6rem;

	@media screen and (min-width: 768px) {
		font-size: 0.9rem;
	}
`;

const StyledSpanCenter = styled(StyledSpan)``;

const StyledSpanRight = styled(StyledSpan)`
	@media screen and (min-width: 768px) {
		text-align: right;
		justify-self: end; /* Esto alinea el span al final de su columna */
		font-size: 1.1rem;
		font-family: ${FONT_FAMILY.arapey};
	}
`;

const StyledVideoFooter = styled.div`
	width: 25%;
	object-fit: cover;

	video {
		width: 100%;
		height: auto;
		border-radius: 2%;
		pointer-events: none;
		z-index: -1;
	}
`;

const StyledLogoFooter = styled.img`
	width: 100vw;
	height: auto;

	@media screen and (min-width: 768px) {
		display: none;
	}
`;

export {
	StyledFooter,
	StyledGrid,
	StyledSpan,
	StyledVideoFooter,
	StyledLogoFooter,
	StyledSpanRight,
	StyledSpanCenter,
};
