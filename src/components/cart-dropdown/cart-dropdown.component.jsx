import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { CartDropdownContainer, CartItemContainer, EmptyCartMessage } from './cart-dropdown.styles.jsx';
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
		<CartDropdownContainer>
			<CartItemContainer>
				{cartItems.length ? (
					cartItems.map((cartItem) => <CartItem cartItem={cartItem} key={cartItem.id} />)
				) : (
					<EmptyCartMessage>Your cart is empty</EmptyCartMessage>
				)}
			</CartItemContainer>
			<Button onClick={goToCheckoutHandler}>Go To Checkout</Button>
		</CartDropdownContainer>
	);
};

export default CartDropdown;
