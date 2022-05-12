import { React, useState, useContext } from 'react';
import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { SignInContainer, SignInFormTitle, SignInButtonContainer } from './sign-in-form.styles.jsx';
import { UserContext } from '../../contexts/user-contexts';

const defaultFormFields = {
	email: '',
	password: '',
};

const SignInForm = () => {
	const [formField, setFormField] = useState(defaultFormFields);
	const { email, password } = formField;

	const { setCurrentUser } = useContext(UserContext);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormField({ ...formField, [name]: value });
	};

	const resetFormField = () => {
		setFormField(defaultFormFields);
	};

	const signInWithGoogle = async () => {
		await signInWithGooglePopup();
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const { user } = await signInAuthUserWithEmailAndPassword(email, password);
			resetFormField();
			setCurrentUser(user);
		} catch (error) {
			switch (error.code) {
				case 'auth/wrong-password':
					alert('incorrect password');
					break;
				case 'auth/user-not-found':
					alert('no user associated with this email');
					break;
				default:
					console.log(error);
			}
		}
	};
	return (
		<SignInContainer>
			<SignInFormTitle>SignIn Page</SignInFormTitle>
			<form onSubmit={handleSubmit}>
				<FormInput
					label='Email'
					inputOptions={{
						type: 'email',
						required: true,
						onChange: handleChange,
						name: 'email',
						value: email,
					}}
				/>
				<FormInput
					label='Password'
					inputOptions={{
						type: 'password',
						required: true,
						onChange: handleChange,
						name: 'password',
						value: password,
					}}
				/>
				<SignInButtonContainer>
					<Button type='submit'>Sign in</Button>
					<Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>
						Google sign in
					</Button>
				</SignInButtonContainer>
			</form>
		</SignInContainer>
	);
};

export default SignInForm;
