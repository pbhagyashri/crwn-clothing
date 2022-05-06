/* eslint-disable react/prop-types */
import React from 'react';
import CategoryItem from '../category-item/category-item.component';
import './directory.styles.scss';

// eslint-disable-next-line react/prop-types
export const Directory = ({ categories }) => {
	return (
		<div className='directory-container'>
			{categories.map((category) => (
				<CategoryItem category={category} key={category.id} />
			))}
		</div>
	);
};

export default Directory;
