import styled from 'styled-components';

const StyledLogo = styled.img`
	display: none;

	@media screen and (min-width: 768px) {
		display: flex;
		margin-top: 1rem;
		width: 6rem;
		height: auto;
	}
`;

export { StyledLogo };
