import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONT_SIZE } from '../../styles/fonts';

const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem; /* hueco entre logo y margen superior */
`;

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	@media screen and (width>=768px) {
		flex-direction: row;
	}
`;

const StyledRegisterForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 0.5rem; /* hueco entre inputs */
	width: 80%;

	@media screen and (min-width: 768px) {
		width: 100%;
	}
`;

const StyledInputAndTag = styled.div`
	display: flex;
	flex-direction: column;
`;

const StyledInput = styled.input`
	font-size: ${FONT_SIZE.xs};
	display: flex;
	align-items: center;
	height: 3rem;
	border-radius: 0.1rem;
	border: 0.03rem solid #d9d9d9;
	text-align: center;
	width: 100%;

	@media screen and (min-width: 768px) {
		max-width: 50rem; /* Se vuelve más grande en escritorio */
		font-size: 0.8rem;
	}
`;

const StyledTermsContainer = styled.div`
	display: flex;
`;

const StyledTerms = styled.div`
	gap: 1rem;
	text-align: justify;
	font-size: ${FONT_SIZE.xs};
	max-width: 40rem; // es el que maneja todo el contenedor
	flex-wrap: wrap; // permite saltos de línea
	color: ${COLORS.dark};
	font-size: 0.7rem;
`;

const StyledCheckbox = styled.input`
	position: relative;
	display: flex;
	align-items: center;
	width: 2rem;
	height: 2rem;
	border: 0.05rem solid ${COLORS.dark};
	border-radius: 0;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;

	&:checked {
		background-color: ${COLORS.white};
		border: 0.0625rem solid ${COLORS.neon};
	}
	&:checked::after {
		content: '🔥';
		position: absolute;
		color: ${COLORS.white};
	}
`;

const StyledButton = styled.input`
	font-size: ${FONT_SIZE.xs};
	display: flex;
	align-items: center;
	height: 2.5rem;
	background-color: ${COLORS.softLime};
	border-radius: 0.2rem;
	border: none;
	color: white;
	padding-inline: 0.5rem;
	cursor: pointer;
	margin-top: 1rem;
	margin-bottom: 7rem;
	all: unset;
	display: inline-block;

	@media (hover: hover) {
		&:hover {
			background-color: ${COLORS.lime};
			color: white;
		}

		@media screen and (width>=768px) {
			font-size: ${FONT_SIZE.xs};
			height: 3rem;
			margin-bottom: 3rem;
		}
	}
`;

const StyledRequired = styled.span`
	color: red;
	font-size: 0.6rem;
`;

const StyledLogoRegister = styled.img`
	width: 5rem;
	display: flex;
	align-items: center;
	@media screen and (width>=768px) {
		width: 4rem;
	}
`;

export {
	StyledMain,
	StyledContainer,
	StyledRegisterForm,
	StyledInputAndTag,
	StyledInput,
	StyledTermsContainer,
	StyledTerms,
	StyledCheckbox,
	StyledButton,
	StyledRequired,
	StyledLogoRegister,
};
