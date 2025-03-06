import styled from 'styled-components';
import { FONT_SIZE } from '../../styles/fonts';
import { COLORS } from '../../styles/colors';

const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
`;

const StyledBanner = styled.div`
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

const StyledButtonsContainer = styled.div`
	display: flex;
	max-width: 100%;
	padding: 1.5625rem;
	gap: 1.5625rem;
`;

const StyledButton = styled.button`
	position: fixed;
	top: 48.5rem;
	right: 0;
	z-index: 10;
	background: none;
	border: none;
	border-style: none;
	cursor: pointer;

	img {
		width: 60px;
		
	}
	
		@media screen and (width>=1024px) {
			top: 59rem;
			right: 1rem;

		img {
		width: 110px;
		}
	}
	`;

const StyledBrand = styled.h2`
	font-size: 3.75rem;
	-webkit-text-stroke: 0.0625rem ${COLORS.white};
	text-shadow: 0 0.25rem 0.25rem;
	white-space: nowrap;
`;

const StyledProductName = styled.span`
	font-size: ${FONT_SIZE.s};

		@media screen and (width>=1024px) {
			font-size: ${FONT_SIZE.l};
	}
	`;

const StyledProductSubName = styled.span`
	font-size: ${FONT_SIZE.xs};
	margin-bottom: 0.9rem;

			@media screen and (width>=1024px) {
			font-size: ${FONT_SIZE.s};
	}
`;

const StyledProductInfo = styled.span`
	font-size: ${FONT_SIZE.xs};
	padding-block: 0.9rem;

			@media screen and (width>=1024px) {
			font-size: ${FONT_SIZE.s};
	}
`;

const StyledCartAndPrice = styled.div`
	display: flex;
	flex-direction: row;
	padding-block: 0.9rem;
	gap: 0.5rem;
`;

const StyledProductPrice = styled.span`
	font-size: ${FONT_SIZE.xs};

			@media screen and (width>=1024px) {
			font-size: ${FONT_SIZE.s};
	}
`;

const StyledAddToCart = styled.div`
	width: 1rem;
	height: 1rem;
`;

const StyledProductsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 0.2rem;
	padding-block: 1rem;
	padding-inline: 1.5rem;

		@media screen and (width>=1024px) {
	
		}
`;

const StyledProductPhoto = styled.img`
	padding-block: 1rem;
	margin-bottom: 3rem;
	width: 100%;

			@media screen and (width>=1024px) {
				margin-left: auto;
				display: block;
				width: 40%;
	}
`;

export {
	StyledMain,
	StyledBanner,
	StyledBrand,
	StyledProductName,
	StyledProductSubName,
	StyledProductInfo,
	StyledProductsContainer,
	StyledAddToCart,
	StyledButtonsContainer,
	StyledButton,
	StyledProductPhoto,
	StyledProductPrice,
	StyledCartAndPrice
};
