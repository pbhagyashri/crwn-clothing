import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';

const App = () => {
	return (
		<Routes>
			<Route element={<Navigation />} path='/'>
				<Route element={<Home />} path='/' />
				<Route element={<SignIn />} path='/sign-in' />
			</Route>
		</Routes>
	);
};

export default App;
