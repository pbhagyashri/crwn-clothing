import { React, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import './navigation.styles.scss';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import { SignOutUser } from '../../utils/firebase/firebase.utils';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { UserContext } from '../../contexts/user-contexts';
import { CartContext } from '../../contexts/cart-context';

const Navigation = () => {
	const { currentUser } = useContext(UserContext);
	const { isCartOpen } = useContext(CartContext);

	return (
		<>
			<div className='navigation'>
				<Link to='/' className='logo-container'>
					<div>
						<Logo className='logo' />
					</div>
				</Link>
				<div className='nav-links-container'>
					<Link to='shop' className='nav-link'>
						SHOP
					</Link>
					{currentUser ? (
						<span className='nav-link' onClick={SignOutUser}>
							SIGN OUT
						</span>
					) : (
						<Link to='auth' className='nav-link'>
							SIGN IN
						</Link>
					)}
					<CartIcon />
					{isCartOpen && <CartDropdown />}
				</div>
			</div>
			<Outlet />
		</>
	);
};

export default Navigation;
