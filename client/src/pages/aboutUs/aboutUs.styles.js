import styled from 'styled-components';
import { FONT_SIZE, FONT_WEIGHT, FONT_FAMILY } from '../../styles/fonts';


const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem;
	margin-top: 5rem;
	`;

const StyledAboutTitle = styled.h2`
	font-size: ${FONT_SIZE.m};
	font-weight: ${FONT_WEIGHT.regular};
	`;

const StyledAboutInfo = styled.span`
	font-size: ${FONT_SIZE.s};
	line-height: 1.2;
	text-align: justify;
`;

const StyledAboutContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;

	@media screen and (width>=1024px) {
		flex-direction: row;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
	}
`;

const StyledAboutQuoteContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.2rem;
`;

const StyledAboutQuote = styled.span`
	font-family: ${FONT_FAMILY.arapey};
	font-size: ${FONT_SIZE.m};
	text-align: justify;

`;

const StyledAboutKitContainer = styled.div`
	display: flex; 
	flex-direction: column;
	width: 100%;

`;

const StyledAboutKit = styled.span`
	font-size: ${FONT_SIZE.s};
	line-height: 1.5;
	&:nth-child(1) {
	text-align: center;

	}

	&:nth-child(2) {
		margin-left: 2.2rem;
		text-align: center;
		
	}

	&:nth-child(3) {
		text-align: left;

	
	}
`;

const StyledAboutImg = styled.img`
	width: 400px;
`
export { StyledMain, StyledAboutContainer, StyledAboutTitle, StyledAboutInfo, StyledAboutImg, StyledAboutKitContainer, StyledAboutKit, StyledAboutQuote, StyledAboutQuoteContainer };
