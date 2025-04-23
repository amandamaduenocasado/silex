import styled from 'styled-components';

const StyledHeader = styled.header`
	position: fixed;
	top: 0.15rem;
	left: 0;
	width: 100%;
	z-index: 1000;

	@media screen and (width>=1024px) {
		padding-inline: 1rem;
	}
`;

const StyledBranding = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

const StyledPlus = styled.img`
	position: absolute;
	right: 0;
	width: 2.5rem;
	height: 2.5rem;
	cursor: pointer;
	z-index: 10000;

	@media screen and (width>=1024px) {
		display: none;
	}
`;
export { StyledHeader, StyledBranding, StyledPlus };
