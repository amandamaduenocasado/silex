import styled from 'styled-components';
import { FONT_SIZE, FONT_WEIGHT } from '../../styles/fonts';

const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
`;

const StyledButtonsContainer = styled.div`
	display: flex;
	max-width: 100%;
	padding: 1.5rem;
	gap: 1.5rem;
`;

const StyledButton = styled.button`
	position: fixed;
	bottom: 0.1rem;
	right: 0.1rem;
	z-index: 10;
	background: none;
	border: none;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 7.7rem;
	height: 7.7rem;
	transition: transform 0.1s ease-in-out;

	&:active {
		transform: scale(0.9); /* Escala el botón al 95% de su tamaño original */
	}

	img {
		width: 100%;
		height: auto;
		transition: width 0.3s ease;
	}

	@media screen and (min-width: 768px) {
		width: 8.3rem;
		height: 8.3rem;
		bottom: 0.05rem;
	}

	@media screen and (min-width: 1600px) {
		width: 10.3rem;
		height: 10.3rem;
	}
`;

const StyledCartAndPrice = styled.div`
	display: flex;
	flex-direction: row;
	padding-block: 0.9rem;
	gap: 0.5rem;
	align-items: center;
`;

const StyledProductPrice = styled.span`
	font-size: ${FONT_SIZE.xs};

	@media screen and (min-width: 1024px) {
		font-size: ${FONT_SIZE.homexs};
	}
`;

const StyledAddToCart = styled.div`
	width: 1rem;
	height: auto;
	cursor: pointer;
`;

const StyledImgHome = styled.img`
	width: 100%;
	height: 100vh;
	position: relative;

	@media screen and (min-width: 1024px) {
		margin-bottom: 8rem;
	}
`;

const StyledProductsContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 0.2rem;
	padding-block: 1rem;
	padding-inline: 2rem;
	grid-template-rows: auto;

	h1 {
		font-size: ${FONT_SIZE.s};
		font-weight: ${FONT_WEIGHT.light};
	}

	h2 {
		font-size: ${FONT_SIZE.xs};
		font-weight: ${FONT_WEIGHT.light};
		margin-bottom: 1.5rem;
	}

	p {
		font-size: ${FONT_SIZE.xs};
		font-weight: ${FONT_WEIGHT.light};
		text-align: justify;
		margin-bottom: 1.5rem;
	}

	@media screen and (min-width: 786px) {
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: auto;
		padding-inline: 0;
		padding-block: 0;

		h1 {
			font-size: ${FONT_SIZE.s};
		}

		h2 {
			font-size: ${FONT_SIZE.homexs};
		}

		p {
			font-size: ${FONT_SIZE.homexs};
		}
	}
`;

const StyledProductSolar = styled.div`
	@media screen and (min-width: 786px) {
		padding-left: 25rem;
		grid-row: 1 / 2;
		grid-column: 1 / 2;
	}
`;

const StyledProductCleanser = styled.div`
	@media screen and (min-width: 786px) {
		padding-left: 25rem;
		grid-row: 2 / 3;
		grid-column: 1 / 2;
	}
`;

const StyledProductRetinol = styled.div`
	@media screen and (min-width: 786px) {
		padding-left: 25rem;
		grid-row: 3 / 4;
		grid-column: 1 / 2;
	}
`;

const StyledProductPhoto = styled.img`
	width: 100%;
	margin-bottom: 4rem;

	@media screen and (min-width: 1024px) {
		grid-column: 2 / 3;
		margin-left: auto;
		width: 80%;
		margin-bottom: 8rem;
		padding-right: 2rem;
	}
`;
const StyledVideo = styled.div`
	display: none; // provisional hasta que sepa como quitar el padding

	@media screen and (min-width: 768px) {
		display: block;
		position: relative;
		grid-row: 4 / 5;
		grid-column: -1 / 1;
		width: 100%;
		height: 100vh;
		overflow: hidden;
		margin-bottom: 4rem;
	}

	video {
		width: 100vw;
		height: 100vh;
		object-fit: cover;
		display: block;
	}
`;

const StyledVideoLogo = styled.div`
	display: none;

	@media screen and (min-width: 768px) {
		overflow: hidden;
		display: flex;
		position: relative;
		left: 0;
		width: 200vw; /* Doble del ancho para que entren los dos vídeos */
		display: flex;
		flex-direction: row;
		animation: slideLogos 10s linear infinite;
		gap: 1rem;
		margin-bottom: 5rem;
	}

	@keyframes slideLogos {
		0% {
			transform: translateX(0%);
		}
		100% {
			transform: translateX(-50%);
		}
	}

	video {
		display: block;
		width: 65vw;
		height: auto;
		object-fit: cover;
	}
`;

export {
	StyledMain,
	StyledProductsContainer,
	StyledAddToCart,
	StyledButtonsContainer,
	StyledButton,
	StyledProductPhoto,
	StyledProductPrice,
	StyledCartAndPrice,
	StyledProductSolar,
	StyledProductCleanser,
	StyledProductRetinol,
	StyledImgHome,
	StyledVideo,
	StyledVideoLogo,
};
