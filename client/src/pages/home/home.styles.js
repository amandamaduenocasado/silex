import styled from 'styled-components';
import { FONT_FAMILY, FONT_SIZE, FONT_WEIGHT } from '../../styles/fonts';
import { COLORS } from '../../styles/colors';

const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
`;

const StyledImgHome = styled.img`
	width: 100%;
	height: 100vh;
	position: relative;

	@media screen and (min-width: 1024px) {
		margin-bottom: 8rem;
	}
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

	@media screen and (min-width: 700px) {
		width: 8.3rem;
		height: 8.3rem;
		bottom: 0.05rem;
	}

	@media screen and (max-width > 1600px) {
		width: 10.3rem;
		height: 10.3rem;
	}
`;

const StyledProductsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.2rem;
	padding-block: 1rem;
	padding-inline: 2rem;

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
		padding-inline: 0;
		padding-block: 0;
		gap: 3rem;

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

const StyledProduct = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 4rem;

	@media screen and (min-width: 768px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
	& > div {
		@media (min-width: 768px) {
			margin-left: 25rem; // Aquí ajustas cuánto se desplaza el texto a la derecha
			max-width: 50%; // Opcional, para que no se ensanche demasiado
			margin-bottom: 22.5rem;
		}
	}
`;

const StyledProductPhoto = styled.img`
	width: 100%;
	max-width: 100%;
	margin-top: 1rem;

	@media (min-width: 768px) {
		width: 78%;
		margin-left: 8rem;
	}
`;

const StyledProductPrice = styled.span`
	font-size: ${FONT_SIZE.xs};

	@media screen and (min-width: 1024px) {
		font-size: ${FONT_SIZE.homexs};
	}
`;

// Cart

const StyledAddToCart = styled.div`
	width: 1rem;
	height: auto;
`;

const StyledContainerPrice = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	margin-bottom: 1rem;

	@media screen and (min-width: 768px) {
		margin-bottom: 0;
	}
`;

const StyledQuantityButton = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

const StyledQuantity = styled.button`
	background: none;
	border: 1px solid #3b3e56;
	padding: 0.5px 5px;

	&:hover {
		background-color: ${COLORS.lime};
	}

	&:focus {
		outline: none;
	}
`;

const StyledQuantityDisplay = styled.span`
	font-size: ${FONT_SIZE.xs};
	font-family: ${FONT_FAMILY.manrope};
	text-align: center;
	width: 15px; // Ancho fijo para el número, asegurando que se alinee con los botones
`;

const StyledVideo = styled.div`
	display: none; // provisional hasta que sepa como quitar el padding

	@media screen and (min-width: 768px) {
		display: block;
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
		width: 100vw;
		display: flex;
		gap: 1rem;
		margin-bottom: 5rem;

		> div {
			display: flex;
			gap: 1rem;
			width: max-content;
			animation: slideLogos 30s linear infinite;
		}
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
		width: 50vw;
		max-width: 100vw;
		height: auto;
		object-fit: cover;
		animation: slideLogos 30s linear infinite;
		flex-shrink: 0;
	}
`;

export {
	StyledMain,
	StyledProductsContainer,
	StyledButtonsContainer,
	StyledButton,
	StyledProductPhoto,
	StyledProductPrice,
	StyledImgHome,
	StyledVideo,
	StyledVideoLogo,
	StyledProduct,
	StyledAddToCart,
	StyledQuantity,
	StyledQuantityButton,
	StyledContainerPrice,
	StyledQuantityDisplay,
};
