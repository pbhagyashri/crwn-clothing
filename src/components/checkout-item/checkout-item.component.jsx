import React, { useContext } from 'react';
import {
	CheckoutItemContainer,
	ImageContainer,
	CartItemImage,
	CartItemName,
	CartItemPrice,
	CartItemQuantity,
	CartItemValue,
	Arrow,
	RemoveButton,
} from './checkout-item.styles.jsx';

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
				<CheckoutItemContainer key={cartItem.id}>
					<ImageContainer>
						<CartItemImage src={cartItem.imageUrl} alt={`${cartItem.name}`} />
					</ImageContainer>
					<CartItemName>{cartItem.name}</CartItemName>
					<CartItemQuantity>
						<Arrow onClick={() => handleDescrease(cartItem)}>&#10094;</Arrow>
						<CartItemValue>{cartItem.quantity}</CartItemValue>
						<Arrow onClick={() => handleIncrease(cartItem)}>&#10095;</Arrow>
					</CartItemQuantity>
					<CartItemPrice>{cartItem.price}</CartItemPrice>
					<RemoveButton onClick={() => clearItemFromCart(cartItem)}>&#10005;</RemoveButton>
				</CheckoutItemContainer>
			))}
		</>
	);
};

export default CheckoutItem;
