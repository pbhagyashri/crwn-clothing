import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import './cart-dropdown.styles.scss';
import Button from '../button/button.component.jsx';
import CartItem from '../cart-item/cart-item.component';
import { CartContext } from '../../contexts/cart-context';

const CartDropdown = () => {
	const { cartItems, setIsCartOpen } = useContext(CartContext);

	const navigate = useNavigate();
	const goToCheckoutHandler = () => {
		setIsCartOpen(false);
		navigate('/checkout');
	};

	return (
		<div className='cart-dropdown-container'>
			<div className='cart-items'>
				{cartItems.map((cartItem) => (
					<CartItem cartItem={cartItem} key={cartItem.id} />
				))}
			</div>
			<Button onClick={goToCheckoutHandler}>Go To Checkout</Button>
		</div>
	);
};

export default CartDropdown;
