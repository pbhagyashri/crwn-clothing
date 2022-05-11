import React, { useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories-context';
import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
	const { categoryMap } = useContext(CategoriesContext);

	return (
		<>
			{Object.keys(categoryMap).map((title) => {
				const products = categoryMap[title];
				return <CategoryPreview title={title} products={products} key={title} />;
			})}
			;
		</>
	);
};

export default CategoriesPreview;
