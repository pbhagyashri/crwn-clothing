import React, { useContext } from 'react';
import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

import { CartContext } from '../../contexts/cart-context';

const CartIcon = () => {
	const { isCartOpen, setIsCartOpen } = useContext(CartContext);

	return (
		<div className='cart-icon-container'>
			<ShoppingBagIcon
				className='shopping-icon'
				onClick={() => setIsCartOpen(!isCartOpen)}
			/>
			<span className='item-count'>0</span>
		</div>
	);
};

export default CartIcon;
