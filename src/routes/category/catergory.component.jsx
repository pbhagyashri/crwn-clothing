import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categories-context';
import ProductCard from '../../components/product-card/product-card.component';
import { CategoryContainer, CategoryTitle } from './catergory.styles.jsx';

const Category = () => {
	const [products, setProducts] = useState([]);
	const { categoryMap } = useContext(CategoriesContext);
	const { category } = useParams();

	useEffect(() => {
		setProducts(categoryMap[category]);
	}, [category, categoryMap]);

	return (
		<>
			<CategoryTitle>{category.toUpperCase()}</CategoryTitle>
			<CategoryContainer>
				{products && products.map((product) => <ProductCard product={product} key={product.id} />)}
			</CategoryContainer>
		</>
	);
};

export default Category;
