/* eslint-disable react/prop-types */
import React from 'react';
import './cart-item.styles.scss';

const CartItem = ({ cartItem }) => {
	const { name, imageUrl, quantity, price } = cartItem;

	return (
		<div className='cart-item-container'>
			<img src={imageUrl} alt={`${name}`} className='img' />
			<div className='item-details'>
				<span className='name'>{name}</span>
				<span>
					{quantity} x ${price}
				</span>
			</div>
		</div>
	);
};

export default CartItem;
