/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import {
	ProductCardContainer,
	ProductCardImage,
	ProductCardFooter,
	ProductCardFooterName,
	ProductCardPrice,
} from './product-card.styles.jsx';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { CartContext } from '../../contexts/cart-context';

const ProductCard = ({ product }) => {
	const { name, imageUrl, price } = product;
	const { addItemToCart } = useContext(CartContext);

	const handleAddToCard = () => {
		addItemToCart(product);
	};

	return (
		<ProductCardContainer>
			<ProductCardImage src={imageUrl} alt={name} />
			<ProductCardFooter>
				<ProductCardFooterName>{name}</ProductCardFooterName>
				<ProductCardPrice>{price}</ProductCardPrice>
			</ProductCardFooter>
			<Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={handleAddToCard}>
				Add to cart
			</Button>
		</ProductCardContainer>
	);
};

export default ProductCard;
