import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase.config';
import { createData } from '../../utils/api';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
	StyledButton,
	// StyledCheckbox,
	StyledContainer,
	StyledInput,
	StyledInputAndTag,
	StyledMain,
	StyledTerms,
	StyledTermsContainer,
	StyledRegisterForm,
	StyledRequired,
	StyledLogoRegister,
} from './register.styles';
import FireButton from '../../components/fireButton/FireButton';

import { useForm } from 'react-hook-form';

const Register = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const navigate = useNavigate();
	const errorMessage = '*This field is required';
	return (
		<StyledMain>
			<FireButton />
			<Link to='/'>
				<StyledLogoRegister
					srcSet='/assets/images/silex/logo-silex-2025-s.png 768w, /assets/images/silex/logo-silex-2025-s.png 1024w'
					sizes='(max-width: 1024px) 50vw, 100vw'
					src='/assets/images/silex/logo-silex-2025-s.png'
					alt='logo silex'
				/>
			</Link>
			<StyledContainer>
				<StyledRegisterForm
					onSubmit={handleSubmit(data => registerUser(data, navigate))}
				>
					{/* NAME */}
					<StyledInputAndTag>
						<label htmlFor='name'></label>
						<StyledInput
							type='text'
							{...register('name', { required: errorMessage })}
							placeholder='Name'
						/>
						<StyledRequired>{errors.name?.message}</StyledRequired>
					</StyledInputAndTag>

					{/* SURNAME */}
					<StyledInputAndTag>
						<label htmlFor='surname'></label>
						<StyledInput
							type='text'
							{...register('surname', { required: errorMessage })}
							placeholder='Surname'
						/>
						<StyledRequired>{errors.surname?.message}</StyledRequired>
					</StyledInputAndTag>

					{/* PROVINCE */}
					<StyledInputAndTag>
						<label htmlFor='province'></label>
						<StyledInput
							type='text'
							{...register('province')}
							placeholder='Province'
						/>
						<StyledRequired>{errors.address?.message}</StyledRequired>
					</StyledInputAndTag>

					{/* ADDRESS */}
					<StyledInputAndTag>
						<label htmlFor='address'></label>
						<StyledInput
							type='text'
							{...register('address', { required: errorMessage })}
							placeholder='Address'
						/>
						<StyledRequired>{errors.address?.message}</StyledRequired>
					</StyledInputAndTag>

					{/* EMAIL */}
					<StyledInputAndTag>
						<label htmlFor='email'></label>
						<StyledInput
							type='email'
							{...register('email', { required: errorMessage })}
							placeholder='Email'
						/>
						<StyledRequired>{errors.email?.message}</StyledRequired>
					</StyledInputAndTag>

					{/* PASSWORD */}
					<StyledInputAndTag>
						<label htmlFor='password'></label>
						<StyledInput
							type='text'
							{...register('password', { required: errorMessage })}
							placeholder='Password'
						/>
						<StyledRequired>{errors.password?.message}</StyledRequired>
					</StyledInputAndTag>
					<StyledTerms>
						<label htmlFor='terms'>
							<span>
								The password must have a length of eight to sixteen characters
							</span>
						</label>
					</StyledTerms>

					{/* PHONE */}
					<StyledInputAndTag>
						<label htmlFor='phone'></label>
						<StyledInput
							type='text'
							{...register('phone')}
							placeholder='Phone'
						/>
						<StyledRequired>{errors.password?.message}</StyledRequired>
					</StyledInputAndTag>
					<StyledTermsContainer></StyledTermsContainer>
					<StyledTerms>
						<label htmlFor='terms'>
							<span>
								By clicking Continue you confirm that you have read and
								understood our Privacy Policy, you are over 16 years old, and
								you wish to register
							</span>
						</label>
						{/* <StyledCheckbox
							type='radio'
							{...register('terms', { required: errorMessage })}
							id='terms'
						/> */}
					</StyledTerms>
					<StyledTerms>
						<label htmlFor='terms'>
							<span>
								I agree to receive (by email, phone, and other forms of
								electronic communication) commercial communications, including
								marketing and promotional messages, newsletters, advertisements,
								and catalogs related to Silex
							</span>
						</label>
						{/* <StyledCheckbox
							type='radio'
							{...register('terms', { required: errorMessage })}
							id='terms'
						/> */}
					</StyledTerms>

					<StyledButton type='submit' value='Register' />
				</StyledRegisterForm>
			</StyledContainer>
		</StyledMain>
	);
};

const registerUser = async (data, navigate) => {
	const { email, password, name, surname, address, profile } = data;
	try {
		const firebaseUser = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		const newUser = {
			_id: firebaseUser.user.uid,
			avatar: data.avatar,
			name,
			surname,
			address,
			email,
			vendor: profile === 'true',
		};
		await createData(newUser);
		console.log('User Registered');
		navigate('/');
	} catch (error) {
		console.log('Error registering user', error.code, error.message);
	}
};

export default Register;
