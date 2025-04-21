import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONT_SIZE, FONT_WEIGHT } from '../../styles/fonts';

const StyledMenu = styled.div`
	position: fixed;
	top: 46rem;
	left: 0;
	width: auto;
	z-index: 10;
	max-height: 80vh;

	transition: transform 0.3s ease-in-out; /* Suaviza la apertura del menú */
	transform: ${({ $menuOpen }) =>
		$menuOpen ? 'translateX(0)' : 'translateX(-100%)'};

	@media screen and (min-width: 1024px) {
		overflow-y: hidden; /* Oculta la barrita */
		bottom: 0;
		top: auto;
		transform: translateX(0); /* Siempre visible en pantallas grandes */
		width: auto;
		max-height: none; /* No limitamos la altura en desktop */
	}
`;

const StyledUl = styled.ul`
	display: flex;
	flex-direction: column;
	padding-left: 0.3rem;
	padding-top: 1.3rem;
	gap: 0.4rem;

	@media screen and (width >= 1024px) {
		padding: 0.7rem;
		gap: 0.7rem;
	}
`;

const StyledNavLink = styled(NavLink)`
	all: unset;
	color: ${COLORS.lime};
	font-weight: ${FONT_WEIGHT.regular};
	font-size: ${FONT_SIZE.s};
	border: none;

	&.active {
		color: ${COLORS.neon};
	}

	@media screen and (width >= 1024px) {
		font-size: 1.3rem;
		&.active {
			color: ${COLORS.neon};
		}
	}

	@media (hover: hover) {
		&:hover {
			color: ${COLORS.white};
		}

		@media screen and (width >= 1024px) {
			&:hover {
				color: ${COLORS.neon};
				cursor: pointer;
			}
		}
	}
`;

const StyledLogOutButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 11.25rem;
	height: 2.125rem;
	border: 0.0625rem solid ${COLORS.dark};
	background-color: ${COLORS.white};
	border-radius: 0.5rem;
	color: ${COLORS.dark};
	font-weight: ${FONT_WEIGHT.bold};
	letter-spacing: 0;
	padding: 1.5625rem;
	margin: 1.5625rem;
	cursor: pointer;

	@media (hover: hover) {
		&:hover {
			color: ${COLORS.white};
			background-color: ${COLORS.deepViolet};
			border: 0.0625rem solid ${COLORS.white};
		}
	}
`;

export { StyledMenu, StyledUl, StyledNavLink, StyledLogOutButton };
