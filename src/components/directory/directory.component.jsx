/* eslint-disable react/prop-types */
import React from 'react';
import DirectoryItem from '../directory-item/directory-item.component';
import { DirectoryComponent } from './directory.styles.jsx';

// eslint-disable-next-line react/prop-types
export const Directory = ({ categories }) => {
	return (
		<DirectoryComponent>
			{categories.map((category) => (
				<DirectoryItem category={category} key={category.id} />
			))}
		</DirectoryComponent>
	);
};

export default Directory;
