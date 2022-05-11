import React from 'react';
import './directory-item-styles.scss';

// eslint-disable-next-line react/prop-types
const DirectoryItem = ({ category }) => {
	// eslint-disable-next-line react/prop-types
	const { title, imageUrl } = category;

	return (
		<div className='directory-item-container'>
			<div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className='body'>
				<h2>{title}</h2>
				<p>Shop Now</p>
			</div>
		</div>
	);
};

export default DirectoryItem;
