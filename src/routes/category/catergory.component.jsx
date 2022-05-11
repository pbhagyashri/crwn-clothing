import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categories-context';
import ProductCard from '../../components/product-card/product-card.component';
import './catergory.styles.scss';

const Category = () => {
	const [products, setProducts] = useState([]);
	const { categoryMap } = useContext(CategoriesContext);
	const { category } = useParams();

	useEffect(() => {
		setProducts(categoryMap[category]);
	}, [category, categoryMap]);

	return (
		<>
			<h2 className='category-title'>{category.toUpperCase()}</h2>
			<div className='category-container'>
				{products && products.map((product) => <ProductCard product={product} key={product.id} />)}
			</div>
		</>
	);
};

export default Category;
