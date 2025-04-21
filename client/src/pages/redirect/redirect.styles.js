import styled from 'styled-components';
import { FONT_SIZE, FONT_WEIGHT } from '../../styles/fonts';
import { Link } from 'react-router-dom';
import { COLORS } from '../../styles/colors';

const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: ${COLORS.lime};
	width: 100%;
	min-height: 100vh;

	@media screen and (width>=768px) {
	}
`;

const StyledRedirectContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;

	@media screen and (width>=768px) {
		display: flex;
		flex-direction: row;
		gap: 3rem;
	}
`;

const StyledImageAndText = styled(Link)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 14rem;
	height: 14rem;
	cursor: pointer;
	border-radius: 0.3rem;
	box-shadow: 0.25rem 0.25rem 0.6rem 0.05rem rgba(0, 0, 0, 0.3);
	background-color: white;

	@media screen and (min-width: 1024px) {
		width: 24.2rem;
		height: 24.2rem;
	}
`;

const StyledImgRedirect = styled.img`
	width: 100%; /* Que ocupe todo el ancho del contenedor */
	height: auto;
	max-width: 25rem; /* Ajusta el tamaño máximo en PC */
	margin-bottom: 0.7rem;

	@media screen and (min-width: 1024px) {
		max-width: 100%; /* Ajusta el tamaño en PC */
		margin-bottom: 1.4rem;
	}
`;

const StyledCta = styled.p`
	display: block;
	font-size: ${FONT_SIZE.s};
	font-weight: ${FONT_WEIGHT.regular};
	color: ${COLORS.deepBlue};
	text-align: center;

	@media screen and (width>=1024px) {
		font-size: ${FONT_SIZE.xl};
	}
`;

const StyledQuestion = styled.p`
	display: block;
	font-size: ${FONT_SIZE.s};
	color: ${COLORS.deepBlue};
	font-weight: ${FONT_WEIGHT.bold};
	margin-bottom: 4rem;
	padding-inline: 5rem;

	@media screen and (width>=1024px) {
		font-size: ${FONT_SIZE.xxl};
		text-align: center;
	}
`;

export {
	StyledMain,
	StyledRedirectContainer,
	StyledImageAndText,
	StyledImgRedirect,
	StyledCta,
	StyledQuestion,
};
