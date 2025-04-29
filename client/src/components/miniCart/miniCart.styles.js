import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledProductAdd = styled.div`
	font-size: 0.8rem;
	display: flex; /* Hacemos el texto más pequeño */
`;

const StyledCloseButton = styled.button`
	background: none;
	border: none;
	position: absolute;
	top: 14px;
	right: 10px;
	cursor: pointer;
	color: #888;
	transition: color 0.2s ease;
	text-decoration: none;
	font-size: 0.8rem;

	&:hover {
		color: #000;
	}

	@media screen and (min-width: 768px) {
		top: 15px;
		right: 15px;
		font-size: 1rem;
	}
`;

const StyledMiniCartContainer = styled.div`
	position: fixed;
	width: 9rem;
	height: 3rem;
	top: 0.5rem;
	right: 0.5rem;
	background-color: #91ff98;
	color: #3b3e56;
	padding: 1rem;
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

	@media screen and (min-width: 768px) {
		width: 35vw;
		height: 75vh;
		top: 0.5rem;
		right: 0.5rem;
		padding: 3rem;
		padding-top: 4rem;
		border-radius: 3px;
		background-color: #fff;
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
	margin-bottom: 0;

	@media screen and (min-width: 768px) {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 2rem;
	}
`;

const StyledCheckOut = styled.div`
	display: flex;
	gap: 5rem;
`;

const StyledButtonMini = styled.button`
	background-color: white;
	color: #3b3e56;
	border: none;
	cursor: pointer;
	transition: background-color 0.3s ease;
`;

const StyledTaxes = styled.span`
	font-size: 0.7rem;
`;

const StyledQuantityMini = styled.span`
	flex-shrink: 0;
	align-self: flex-start;
	font-size: 0.8rem;
`;

const StyledNameMini = styled.span`
	display: inline-block;
	flex-grow: 1;
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
	StyledProductAdd,
};
