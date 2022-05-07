/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import './product-card.styles.scss';
import Button from '../button/button.component';
import { CartItemsContext } from '../../contexts/cart-item-context';

const ProductCard = ({ product }) => {
	const { name, imageUrl, price } = product;
	const { cartItems, setCartItems } = useContext(CartItemsContext);

	const handleAddToCard = () => {
		setCartItems([...cartItems, product]);
	};

	return (
		<div className='product-card-container'>
			<img src={imageUrl} alt={name} />
			<div className='footer'>
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</div>
			<Button buttonType='inverted' onClick={handleAddToCard}>
				Add to cart
			</Button>
		</div>
	);
};

export default ProductCard;
