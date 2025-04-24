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
	width: 7.7rem;
	height: 7.7rem;
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
		width: 8.3rem;
		height: 8.3rem;
		bottom: 0.05rem;
	}

	@media screen and (min-width: 1600px) {
		width: 10.3rem;
		height: 10.3rem;
	}
`;

export { StyledFireButton };
