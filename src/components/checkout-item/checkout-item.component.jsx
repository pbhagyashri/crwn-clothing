import React, { useContext } from 'react';
import './checkout-item.styles.scss';

import { CartContext } from '../../contexts/cart-context';

const CheckoutItem = () => {
	// eslint-disable-next-line no-unused-vars
	const { cartItems, addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);

	const handleIncrease = (cartItem) => {
		addItemToCart(cartItem);
	};

	const handleDescrease = (cartItems) => {
		removeItemFromCart(cartItems);
	};

	return (
		<>
			{cartItems.map((cartItem) => (
				<div key={cartItem.id} className='checkout-item-container'>
					<div className='image-container'>
						<img src={cartItem.imageUrl} alt={`${cartItem.name}`} className='img' />
					</div>
					<span className='name'>{cartItem.name}</span>
					<div className='quantity'>
						<div className='arrow' onClick={() => handleDescrease(cartItem)}>
							&#10094;
						</div>
						<span className='value'>{cartItem.quantity}</span>
						<div className='arrow' onClick={() => handleIncrease(cartItem)}>
							&#10095;
						</div>
					</div>
					<span className='price'>{cartItem.price}</span>
					<div className='remove-button' onClick={() => clearItemFromCart(cartItem)}>
						&#10005;
					</div>
				</div>
			))}
		</>
	);
};

export default CheckoutItem;
