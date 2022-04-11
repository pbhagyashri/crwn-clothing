import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './navigation.styles.scss';

const Navigation = () => {
	return (
		<>
			<div className='navigation'>
				<Link to='/' className='logo-container'>
					<div>
						<Logo className='logo' />
					</div>
				</Link>

				<div className='nav-links-container'>
					<Link to='Sign-in' className='nav-link'>
						SIGN IN
					</Link>
					<Link to='shop' className='nav-link'>
						SHOP
					</Link>
				</div>
			</div>
			<Outlet />
		</>
	);
};

export default Navigation;
