import { React, Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentiation from './routes/authentication/authentication.component';
import Shop from '../src/routes/shop/Shop.Component';

const App = () => {
	return (
		<Routes>
			<Route element={<Navigation />} path='/'>
				<Route element={<Home />} path='/' />
				<Route element={<Shop />} path='/shop' />
				<Route element={<Authentiation />} path='/auth' />
			</Route>
		</Routes>
	);
};

export default App;
