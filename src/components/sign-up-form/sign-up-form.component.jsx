import { React, useState } from 'react';
import FormInput from '../form-input/form-input.component';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import { SignUpContainer, SignUpFormTitle } from './sign-up-form.jsx';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const SignUpForm = () => {
	const [formField, setFormField] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formField;

	const resetFormField = () => {
		setFormField(defaultFormFields);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (password !== confirmPassword) {
			alert('Password do not match');
			return;
		}

		try {
			const { user } = await createAuthUserWithEmailAndPassword(email, password);
			await createUserDocumentFromAuth(user, { displayName });
			resetFormField();
		} catch (error) {
			if (error.code === 'auth/email-already-in-use') {
				alert('Can not create user, email already in use');
			} else {
				console.log('user creation was not successful', error);
			}
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormField({ ...formField, [name]: value });
	};

	return (
		<SignUpContainer>
			<SignUpFormTitle>Don&apos;t have an account?</SignUpFormTitle>
			<span>Sign up with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label='Display Name'
					inputOptions={{
						type: 'text',
						required: true,
						onChange: handleChange,
						name: 'displayName',
						value: displayName,
					}}
				/>

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

				<FormInput
					label='Confirm Password'
					inputOptions={{
						type: 'password',
						required: true,
						onChange: handleChange,
						name: 'confirmPassword',
						value: confirmPassword,
					}}
				/>
				<Button type='submit' buttonType={BUTTON_TYPE_CLASSES.inverted}>
					Sign Up
				</Button>
			</form>
		</SignUpContainer>
	);
};

export default SignUpForm;
