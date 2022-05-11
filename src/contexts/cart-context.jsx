import React, { useState, useEffect, createContext } from 'react';

export const CartContext = createContext({
	isCartOpen: false,
	cartCount: 0,
	cartTotal: 0,
	setIsCartOpen: () => null,
	addItemToCart: () => null,
	removeItemFromCart: () => null,
	clearItemFromCart: () => null,
});

const addCartItem = (cartItems, productToAdd) => {
	// find if cartItems contain productToAdd
	const existingItem = cartItems.find((cartItem) => productToAdd.id === cartItem.id);
	// if it does, add 1 to the quanity and return a new array
	if (existingItem) {
		return cartItems.map((cartItem) =>
			productToAdd.id === cartItem.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
		);
	}

	// else, add product to the list and return it cartItems
	return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
	const existingItem = cartItems.find((cartItem) => cartItemToRemove.id === cartItem.id);

	if (existingItem && existingItem.quantity === 1) {
		return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
	}
	if (existingItem) {
		return cartItems.map((cartItem) =>
			cartItemToRemove.id === cartItem.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem,
		);
	}
};

const clearCartItem = (cartItems, productToRemove) => {
	return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
};

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setCartCount] = useState(0);
	const [cartTotal, setCartTotal] = useState(0);

	const addItemToCart = (productToAdd) => {
		setCartItems(addCartItem(cartItems, productToAdd));
	};

	const removeItemFromCart = (productToRemove) => {
		setCartItems(removeCartItem(cartItems, productToRemove));
	};

	const clearItemFromCart = (productToRemove) => {
		setCartItems(clearCartItem(cartItems, productToRemove));
	};

	const value = {
		isCartOpen,
		setIsCartOpen,
		cartItems,
		setCartItems,
		addItemToCart,
		cartCount,
		cartTotal,
		removeItemFromCart,
		clearItemFromCart,
	};

	useEffect(() => {
		const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
		setCartCount(newCartCount);
	}, [cartItems]);

	useEffect(() => {
		const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
		setCartTotal(newCartTotal);
	}, [cartItems, cartCount]);

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
