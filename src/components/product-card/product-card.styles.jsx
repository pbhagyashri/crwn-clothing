import styled from 'styled-components';

export const ProductCardContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	height: 350px;
	align-items: center;
	position: relative;

	button {
		width: 80%;
		opacity: 0.7;
		position: absolute;
		top: 255px;
		white-space: nowrap;
	}

	button:hover {
		opacity: 0.85;
		display: flex;
	}
`;
export const ProductCardImage = styled.img`
	width: 100%;
	height: 95%;
	object-fit: cover;
	margin-bottom: 5px;
`;

export const ProductCardFooter = styled.div`
	width: 100%;
	height: 5%;
	display: flex;
	justify-content: space-between;
	font-size: 18px;
`;

export const ProductCardFooterName = styled.span`
	width: 90%;
	margin-bottom: 15px;
	white-space: nowrap;
`;

export const ProductCardPrice = styled.span`
	width: 10%;
`;

// .product-card-container {
// 	width: 100%;
// 	display: flex;
// 	flex-direction: column;
// 	height: 350px;
// 	align-items: center;
// 	position: relative;

// 	img {
// 		width: 100%;
// 		height: 95%;
// 		object-fit: cover;
// 		margin-bottom: 5px;
// 	}

// button {
// 	width: 80%;
// 	opacity: 0.7;
// 	position: absolute;
// 	top: 255px;
// 	display: none;
// }

// 	&:hover {
// 		img {
// 			opacity: 0.8;
// 		}

// 		button {
// 			opacity: 0.85;
// 			display: flex;
// 			white-space: nowrap;
// 		}
// 	}

// 	.footer {
// 		width: 100%;
// 		height: 5%;
// 		display: flex;
// 		justify-content: space-between;
// 		font-size: 18px;

// 		.name {
// 			width: 90%;
// 			margin-bottom: 15px;
// 			white-space: nowrap;
// 		}

// 		.price {
// 			width: 10%;
// 		}
// 	}
// }
