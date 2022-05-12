import React, { useContext } from 'react';
import { CartIconContainer, ItemCount, ShopingIcon } from './cart-icon.styles.jsx';

import { CartContext } from '../../contexts/cart-context';

const CartIcon = () => {
	const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

	return (
		<CartIconContainer>
			<ShopingIcon onClick={() => setIsCartOpen(!isCartOpen)} />
			<ItemCount>{cartCount}</ItemCount>
		</CartIconContainer>
	);
};

export default CartIcon;
