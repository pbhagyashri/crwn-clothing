import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentiation from './routes/authentication/authentication.component';

const App = () => {
	return (
		<Routes>
			<Route element={<Navigation />} path='/'>
				<Route element={<Home />} path='/' />
				<Route element={<Authentiation />} path='/auth' />
			</Route>
		</Routes>
	);
};

export default App;
