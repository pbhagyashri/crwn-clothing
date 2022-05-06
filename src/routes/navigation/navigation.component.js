import { React, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './navigation.styles.scss';
import { UserContext } from '../../contexts/user-contexts';
import { SignOutUser } from '../../utils/firebase/firebase.utils';

const Navigation = () => {
	const { currentUser } = useContext(UserContext);
	return (
		<>
			<div className='navigation'>
				<Link to='/' className='logo-container'>
					<div>
						<Logo className='logo' />
					</div>
				</Link>

				<div className='nav-links-container'>
					{currentUser ? (
						<span className='nav-link' onClick={SignOutUser}>
							SIGN OUT
						</span>
					) : (
						<Link to='auth' className='nav-link'>
							SIGN IN
						</Link>
					)}
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
