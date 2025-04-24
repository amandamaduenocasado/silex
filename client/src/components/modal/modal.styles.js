import styled from 'styled-components';

const StyledCheckOut = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	background-color: blue;
	backdrop-filter: blur(5px);
	z-index: 100;
`;

export { StyledCheckOut };
