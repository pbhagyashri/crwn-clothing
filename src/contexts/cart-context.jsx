import React, { useState, createContext } from 'react';

export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => null,
});

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const value = { isCartOpen, setIsCartOpen };

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
