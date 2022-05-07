import React, { useState, createContext } from 'react';

export const CartItemsContext = createContext({
	cartItems: [],
	serCartItems: () => null,
});

// eslint-disable-next-line react/prop-types
export const CartItemsProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);
	const value = { cartItems, setCartItems };
	return (
		<CartItemsContext.Provider value={value}>
			{children}
		</CartItemsContext.Provider>
	);
};
