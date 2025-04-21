import styled from 'styled-components';
import { FONT_SIZE, FONT_WEIGHT, FONT_FAMILY } from '../../styles/fonts';

const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 4rem;
	width: 100%;
	padding: 2rem;

	@media screen and (min-width: 1024px) {
		padding: 0;
		padding-right: 2.5rem;
		margin-top: 7rem;
	}
`;

const StyledAboutTitle = styled.h2`
	display: block;
	font-size: ${FONT_SIZE.s};
	font-weight: ${FONT_WEIGHT.regular};
	text-align: center;
	margin-bottom: 1.8rem;

	@media screen and (min-width: 1024px) {
		font-size: ${FONT_SIZE.s};
		margin-bottom: 2rem;
	}
`;

const StyledAboutInfo = styled.span`
	display: block;
	font-size: ${FONT_SIZE.xshome};
	font-weight: ${FONT_WEIGHT.light};
	line-height: 1.3;
	text-align: justify;
	margin-bottom: 1.4rem;

	@media screen and (min-width: 1024px) {
		font-size: 1rem;
	}
`;

const StyledAboutUsContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	align-items: center;
	gap: 2rem;

	@media screen and (min-width: 1024px) {
		grid-template-columns: repeat(3, 1fr);
		gap: 6rem;
		align-items: baseline;
		padding-left: 25rem;
	}
`;

const StyledAbout = styled.div`
	@media screen and (min-width: 1024px) {
		grid-row: 1;
		grid-column: 1;
	}
`;

const StyledHistory = styled.div`
	@media screen and (min-width: 1024px) {
		grid-row: 1;
		grid-column: 2;
	}
`;

const StyledDreamin = styled.div`
	@media screen and (min-width: 1024px) {
		grid-row: 1;
		grid-column: 3;
	}
`;

const StyledAboutQuoteContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.2rem;
	margin-bottom: 1.5rem;
`;

const StyledAboutQuote = styled.span`
	font-family: ${FONT_FAMILY.arapey};
	font-size: ${FONT_SIZE.l};
	text-align: justify;

	@media screen and (min-width: 1024px) {
		font-size: ${FONT_SIZE.l};
	}
`;

const StyledAboutKitContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-bottom: 2rem;
`;

const StyledAboutKit = styled.span`
	font-size: ${FONT_SIZE.xshome};
	font-weight: ${FONT_WEIGHT.light};
	line-height: 1.5;

	&:nth-child(1) {
		text-align: center;
	}

	&:nth-child(2) {
		margin-left: 2rem;
		text-align: center;
	}

	&:nth-child(3) {
		text-align: left;
	}

	@media screen and (min-width: 1024px) {
		font-size: 0.9rem;

		&:nth-child(2) {
			margin-left: 1.6rem;
		}
	}
`;

const StyledAboutImg = styled.img`
	width: 100%;
	margin-bottom: 2rem;
`;

export {
	StyledMain,
	StyledAboutUsContainer,
	StyledAboutTitle,
	StyledAboutInfo,
	StyledAboutImg,
	StyledAboutKitContainer,
	StyledAboutKit,
	StyledAboutQuote,
	StyledAboutQuoteContainer,
	StyledAbout,
	StyledHistory,
	StyledDreamin,
};
