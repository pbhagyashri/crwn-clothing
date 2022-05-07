import React, { useContext } from 'react';
import './cart-dropdown.styles.scss';
import Button from '../button/button.component.jsx';
import { CartItemsContext } from '../../contexts/cart-item-context';

const CartDropdown = () => {
	const { cartItems } = useContext(CartItemsContext);
	return (
		<div className='cart-dropdown-container'>
			{cartItems.map((item) => (
				<div className='cart-items' key={item.id}>
					{item.name}
				</div>
			))}
			<Button />
		</div>
	);
};

export default CartDropdown;
