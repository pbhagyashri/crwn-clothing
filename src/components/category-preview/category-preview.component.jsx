/* eslint-disable react/prop-types */
import React from 'react';
import { CategoryPreviewContainer, CategoryPreviewTitle, PreviewContainer } from './category-preview.styles.jsx';
import ProductCard from '../product-card/product-card.component';

const CategoryPreview = ({ title, products }) => {
	return (
		<CategoryPreviewContainer>
			<h2>
				<CategoryPreviewTitle to={title}>{title.toUpperCase()}</CategoryPreviewTitle>
			</h2>
			<PreviewContainer>
				{products
					.filter((_, idx) => idx < 4)
					.map((product) => (
						<ProductCard product={product} key={product.id} />
					))}
			</PreviewContainer>
		</CategoryPreviewContainer>
	);
};

export default CategoryPreview;
