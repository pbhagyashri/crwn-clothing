import React from 'react';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import { AuthentiationContainer } from './authentiation.styles.jsx';

const Authentiation = () => {
	return (
		<AuthentiationContainer>
			<SignInForm />
			<SignUpForm />
		</AuthentiationContainer>
	);
};

export default Authentiation;
