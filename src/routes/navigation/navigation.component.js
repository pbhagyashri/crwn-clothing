import { React, useContext } from 'react';
import { Outlet } from 'react-router-dom';

import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles';

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
			<NavigationContainer>
				<LogoContainer to='/'>
					<div>
						<Logo className='logo' />
					</div>
				</LogoContainer>
				<NavLinks>
					<NavLink to='shop'>SHOP</NavLink>
					{currentUser ? (
						<NavLink onClick={SignOutUser} as='span'>
							SIGN OUT
						</NavLink>
					) : (
						<NavLink to='auth'>SIGN IN</NavLink>
					)}
					<CartIcon />
					{isCartOpen && <CartDropdown />}
				</NavLinks>
			</NavigationContainer>
			<Outlet />
		</>
	);
};

export default Navigation;
