// this creates an app instance for us based on a cofig file that we provide.
// config file wil lconnect this app instance with the Firebase project that we create inside firebase console so we need a way to connect to it
import { initializeApp } from 'firebase/app';
// import some libraries to help with authentication
// you can sign in in a popup or by redirecting users
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Firebase needs API key an dit is not a super secret API key so it is ok to keep it in the code.
const firebaseConfig = {
	apiKey: 'AIzaSyASHwSLomfXvdC3EnhnN_V2j18aKg3MLaw',
	authDomain: 'crwn-clothing-db-1f23e.firebaseapp.com',
	projectId: 'crwn-clothing-db-1f23e',
	storageBucket: 'crwn-clothing-db-1f23e.appspot.com',
	messagingSenderId: '130947411041',
	appId: '1:130947411041:web:a460808b0e914837b18e20',
	measurementId: 'G-P1MPQ082CN',
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const firebaseApp = initializeApp(firebaseConfig);

// to use google authentiation, we have to first initialize a provider using GoogleAuthProvider
// we can have multiple auth provieders like Github and Facebook
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
	prompt: 'select_account', // always prompt user to select an account in-case they have mutliple google accounts
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
	signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
	signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
	userAuth,
	additionalInformation = {},
) => {
	// give me document referance 'doc' inside databse -> users colletion with this uniq identifier 'userAuth.uid'
	// doc returns the user from database
	const userDocRef = doc(db, 'users', userAuth.uid);
	// return user instance we created above. snapshot allows us to check if user exists
	const userSnapshot = await getDoc(userDocRef);
	// check if user instance exists.
	// if it exits, we want to return it
	// if not create it using the snapshot
	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInformation,
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;
	const result = await createUserWithEmailAndPassword(auth, email, password);
	return result;
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;
	const result = await signInWithEmailAndPassword(auth, email, password);
	return result;
};

export const SignOutUser = async () => await signOut(auth);

// onAuthStateChanged will call the provided callback function whenever the value of auth changes
// when a user signs in, that's considered an auth change. when user signs out, that's another change.
// both times our callback is going to get invoked.
// we are returning whatever we get back from onAuthStateChanged.
export const onAuthStateChangedListener = (callback) =>
	onAuthStateChanged(auth, callback);
