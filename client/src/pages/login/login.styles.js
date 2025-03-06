import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONT_SIZE } from '../../styles/fonts';

const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 10rem;
	background-color: ${COLORS.lime};
	width: 100%;
	min-height: 100vh;
`;

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 3.5rem;
	gap: 1rem;
	border-radius: 0.3rem;
	box-shadow: 0.25rem 0.25rem 0.6rem 0.05rem rgba(0, 0, 0, 0.3);
	background-color: white;
	width: 90%;

	@media screen and (width>=768px) {
		width: 80%;
		flex-direction: row;
	}
`;

const StyledTitle = styled.h2`
`;

const StyledSubtitle = styled.span`
	text-align: center;
	font-size: ${FONT_SIZE.xs};
`;

const StyledImg = styled.img`
	width: 15rem;
`;

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 0.2rem;
	width: 90%;
`;

const StyledInputAndTag = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.1rem;
	
`;

const StyledInput = styled.input`
	font-size: ${FONT_SIZE.xs};
	display: flex;
	align-items: center;
	height: 2.5rem;
	border-radius: 0.2rem;
	border: 0.03rem solid #D9D9D9;
	padding-inline: 0.5rem;
	text-align: center
`;

const StyledButton = styled.input`
	font-size: ${FONT_SIZE.xs};
	display: flex;
	align-items: center;
	height: 2.5rem;
	background-color: ${COLORS.softLime};
	border-radius: 0.2rem;
	border: none;
	color: white;
	padding-inline: 0.5rem;
	cursor: pointer;
	margin-bottom: 1rem;

	@media (hover: hover) {
		&:hover {
			background-color: ${COLORS.lime};
			color: white;
		}
	}
`;

const StyledPrivacy = styled.span`
	color: blue;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	font-size: ${FONT_SIZE.xs};
`;

export {
	StyledMain,
	StyledContainer,
	StyledImg,
	StyledForm,
	StyledInputAndTag,
	StyledInput,
	StyledButton,
	StyledPrivacy,
	StyledTitle,
	StyledSubtitle
};
