import {
	StyledCta,
	StyledImageAndText,
	StyledImgRedirect,
	StyledMain,
	StyledRedirectContainer,
	StyledQuestion,
} from './redirect.styles';

// import FireButton from '../../components/fireButton/FireButton';

const Redirect = () => {
	return (
		<StyledMain>
			{/* <FireButton /> */}
			<StyledQuestion>DO YOU ALREADY HAVE AN ACCOUNT?</StyledQuestion>
			<StyledRedirectContainer>
				<StyledImageAndText to={'/login'}>
					<StyledImgRedirect src='/assets/images/silex/baby.png' alt='login' />
					<StyledCta>LOG IN</StyledCta>
				</StyledImageAndText>

				<StyledImageAndText to={'/register'}>
					<StyledImgRedirect
						src='/assets/images/silex/mantis.png'
						alt='register'
					/>
					<StyledCta>REGISTER</StyledCta>
				</StyledImageAndText>
			</StyledRedirectContainer>
		</StyledMain>
	);
};

export default Redirect;
