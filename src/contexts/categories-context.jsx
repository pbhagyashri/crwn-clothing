import React, { useState, createContext, useEffect } from 'react';
import { addCollectionAndDocument, getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

import SHOP_DATA from '../shop-data.js';

export const CategoriesContext = createContext({
	categoryMap: {},
});

// eslint-disable-next-line react/prop-types
export const CategoriesProvider = ({ children }) => {
	const [categoryMap, setCategoryMap] = useState({});
	const value = { categoryMap };

	useEffect(() => {
		addCollectionAndDocument('categories', SHOP_DATA);
	}, []);

	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoryMap = await getCategoriesAndDocuments();
			setCategoryMap(categoryMap);
		};

		getCategoriesMap();
	}, []);

	return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};
