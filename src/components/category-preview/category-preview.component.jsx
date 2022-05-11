/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import './category-preview.styles.scss';
import ProductCard from '../product-card/product-card.component';

const CategoryPreview = ({ title, products }) => {
	return (
		<div className='category-preview-container'>
			<h2>
				<Link to={title} className='title'>
					{title.toUpperCase()}
				</Link>
			</h2>
			<div className='preview'>
				{products
					.filter((_, idx) => idx < 4)
					.map((product) => (
						<ProductCard product={product} key={product.id} />
					))}
			</div>
		</div>
	);
};

export default CategoryPreview;
