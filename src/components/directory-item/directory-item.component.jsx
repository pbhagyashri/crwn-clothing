/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
	DirectoryItemContainer,
	BackgroundImage,
	Body,
	DirectoryItemTitle,
	DirectoryItemSubTitle,
} from './directory-item-styles';

const DirectoryItem = ({ category }) => {
	const { title, imageUrl, route } = category;
	const navigate = useNavigate();

	const onNavigationHandler = () => navigate(route);

	return (
		<DirectoryItemContainer onClick={onNavigationHandler}>
			<BackgroundImage imageUrl={imageUrl} />
			<Body>
				<DirectoryItemTitle>{title}</DirectoryItemTitle>
				<DirectoryItemSubTitle>Shop Now</DirectoryItemSubTitle>
			</Body>
		</DirectoryItemContainer>
	);
};

export default DirectoryItem;
