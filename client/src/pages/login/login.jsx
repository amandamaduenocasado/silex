import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase.config';
import { useNavigate } from 'react-router-dom';
import {
	StyledTitle,
	StyledSubtitle,
	StyledButton,
	StyledContainer,
	StyledForm,
	StyledImg,
	StyledInput,
	StyledInputAndTag,
	StyledMain,
	StyledPrivacy,
} from './login.styles';

const Login = () => {
	const navigate = useNavigate();
	return (
		<StyledMain>
			<StyledContainer>
				<StyledImg src='/assets/images/silex/mouth.png' alt='mouth' />
				<StyledTitle>LOG IN</StyledTitle>
				<StyledSubtitle>Write down your embarassed email</StyledSubtitle>
				<StyledForm onSubmit={event => loginUser(event, navigate)}>
					<StyledInputAndTag>
						<label htmlFor='Email'></label>
						<StyledInput
							type='email'
							name='email'
							id='email'
							placeholder='Email'
						/>
					</StyledInputAndTag>
					<StyledInputAndTag>
						<label htmlFor='Password'></label>
						<StyledInput
							type='password'
							name='password'
							placeholder='Password'
							id='password'
						/>
					</StyledInputAndTag>
					<StyledButton type='submit' value='Sign In' />
					<StyledPrivacy>Privacy Policy</StyledPrivacy>
				</StyledForm>
			</StyledContainer>
		</StyledMain>
	);
};

const loginUser = async (event, navigate) => {
	event.preventDefault();
	const email = event.target.email.value;
	const password = event.target.password.value;
	try {
		await signInWithEmailAndPassword(auth, email, password);
		console.log('User Logged');
		event.target.reset();
		navigate('/');
	} catch (error) {
		console.log('Error registering user', error.code, error.message);
	}
};

export default Login;
