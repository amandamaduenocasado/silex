import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONT_SIZE, FONT_WEIGHT } from '../../styles/fonts';

const StyledMenu = styled.div`
	position: fixed;
	top: 47rem;
	left: 0;
	width: auto;
	translate: ${({ $showMenu }) => ($showMenu ? '0' : '-100%')};
	transition: translate 0.3s;
	z-index: 10;
	max-height: 80vh;
	overflow-y: auto;



	@media screen and (min-width: 1024px) {
		bottom: 0; 
		top: auto; 
		translate: none; /* Desactiva la traducción si sigue ocultándose */
	}
`;

const StyledUl = styled.ul`
	display: flex;
	flex-direction: column;

	@media screen and (width>=1024px) {
	}
`;

const StyledNavLink = styled(NavLink)`
	color: ${COLORS.lime};
	font-weight: ${FONT_WEIGHT.regular};
	font-size: ${FONT_SIZE.s};
	padding: 0.3rem;


	&.active {
		color: ${COLORS.neon};
	}

	@media screen and (width>=1024px) {
		font-size: ${FONT_SIZE.m};

		&.active {
			color: ${COLORS.neon};
		}
	}

	@media (hover: hover) {
		&:hover {
			color: ${COLORS.white};
		}

		@media screen and (width>=1024px) {
			&:hover {
				color: ${COLORS.neon};
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

export {
	StyledMenu,
	StyledUl,
	StyledNavLink,
	StyledLogOutButton
};
