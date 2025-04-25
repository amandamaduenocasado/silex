import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledMiniCartContainer = styled.div`
	position: fixed;
	width: 35vw;
	height: 75vh;
	top: 0.5rem;
	right: 0.5rem;
	background-color: white;
	padding: 3rem;
	padding-top: 4rem;
	border-radius: 3px;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
	z-index: 1000;
	animation: ${({ isClosing }) =>
		isClosing
			? 'fadeOut 0.3s ease-in-out forwards'
			: 'fadeIn 0.3s ease-in-out forwards'};

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(-10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes fadeOut {
		from {
			opacity: 1;
			transform: translateY(0);
		}
		to {
			opacity: 0;
			transform: translateY(-10px);
		}
	}
`;

const StyledMiniCartItem = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	margin-bottom: 2rem;
`;

const StyledCloseButton = styled.button`
	position: absolute;
	top: 15px;
	right: 15px;
	background: none;
	border: none;
	font-size: 1.3rem;
	cursor: pointer;
	color: #888;
	transition: color 0.2s ease;
	text-decoration: none;

	&:hover {
		color: #000;
	}
`;

const StyledCheckOut = styled.div`
	display: flex;
	gap: 5rem;
`;
const StyledButtonMini = styled.button`
	background-color: white;
	color: ${COLORS.dark};
	border: none;
	cursor: pointer;
	transition: background-color 0.3s ease;

	/* &:hover {
		background-color: #555;
	} */
`;
const StyledTaxes = styled.span`
	font-size: 0.7rem;
`;

const StyledQuantityMini = styled.span`
	flex-shrink: 0; /* Evita que el texto de la cantidad se comprima */
	align-self: flex-start; /* Alinea la cantidad al borde superior de la imagen */
	font-size: 0.8rem;
`;

const StyledNameMini = styled.span`
	display: inline-block;
	flex-grow: 1; /* Hace que el nombre ocupe todo el espacio disponible entre la foto y la cantidad */
	align-self: flex-start;
	font-size: 0.8rem;
`;

const StyledProductMini = styled.img`
	width: 6rem;
	height: auto;
	border: 2px solid ${COLORS.lime};
	padding: 0.5rem;
	margin-right: 1.5rem;
`;

export {
	StyledMiniCartContainer,
	StyledMiniCartItem,
	StyledCloseButton,
	StyledButtonMini,
	StyledQuantityMini,
	StyledNameMini,
	StyledProductMini,
	StyledCheckOut,
	StyledTaxes,
};
