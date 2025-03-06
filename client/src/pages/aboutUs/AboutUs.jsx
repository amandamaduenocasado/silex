
import { StyledMain, StyledAboutContainer, StyledAboutTitle, StyledAboutInfo, StyledAboutImg, StyledAboutKitContainer, StyledAboutKit, StyledAboutQuote, StyledAboutQuoteContainer  } from './aboutUs.styles';


const AboutUs = () => {
	return (
			<StyledMain>
			<StyledAboutContainer>
				<StyledAboutTitle>About</StyledAboutTitle>
				<StyledAboutInfo>
					Silex is a new Spanish cosmetic brand built on quality and honesty</StyledAboutInfo>
				<StyledAboutImg src='/assets/images/silex/photo-beach.png' alt='beach' />
				<StyledAboutInfo>
					The formula provides the highest level of sun protection while helping to maintain healthy skin</StyledAboutInfo>
				<StyledAboutImg src='/assets/images/silex/rocks-mix.png' alt='rocks' />

				<StyledAboutTitle>History</StyledAboutTitle>
				<StyledAboutInfo>
					Flint was the primary tool for fire-starting in ancient times. It is one of the oldest known materials in human history, as well as one of the simplest and most essential</StyledAboutInfo>
				<StyledAboutImg src='/assets/images/silex/rocks-black.png' alt='rocks' />
				<StyledAboutInfo>
					The brand is an analogy for this—simplicity and significance in what truly matters, without forgetting the fire of youth</StyledAboutInfo>
				
				<StyledAboutQuoteContainer>
				<StyledAboutQuote>
					1. m. pedernal, (variedad de cuarzo)
				</StyledAboutQuote>
				<StyledAboutQuote>
					2. Sin.: pedernal. moleña, cuarzo, silice
					</StyledAboutQuote>
				</StyledAboutQuoteContainer>
				<StyledAboutImg src='/assets/images/silex/skin-photo.png' alt='skin' />

				<StyledAboutTitle>Dreamin Kit</StyledAboutTitle>
				<StyledAboutImg src='/assets/images/silex/photo-body.png' alt='body' />
				<StyledAboutInfo>
					The brand launches three must-have products,</StyledAboutInfo>
				<StyledAboutKitContainer>
					<StyledAboutKit> soft cleanser, </StyledAboutKit>
					<StyledAboutKit> 50 spf sunscreen, </StyledAboutKit>
				<StyledAboutKit> gentle retinol </StyledAboutKit>
				</StyledAboutKitContainer>
				
				<StyledAboutInfo> This is your new routine, easy and effective </StyledAboutInfo>
			</StyledAboutContainer>
			</StyledMain>
	);
};

export default AboutUs;
