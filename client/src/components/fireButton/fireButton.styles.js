import styled from 'styled-components';

const StyledFireButton = styled.button`
	position: fixed;
	bottom: 0.2rem;
	right: 0.2rem;
	z-index: 10;
	background: none;
	border: none;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 6rem;
	height: 6rem;
	transition: transform 0.1s ease-in-out;
	z-index: 100000;

	&:active {
		transform: scale(0.9); /* Escala el botón al 95% de su tamaño original */
	}

	img {
		width: 100%;
		height: auto;
		transition: width 0.3s ease;
	}

	@media screen and (min-width: 768px) {
		width: 7rem;
		height: 7rem;
	}

	@media screen and (min-width: 1024px) {
		width: 8.9rem;
		height: 8.9rem;
	}
`;

export { StyledFireButton };
