import styled from 'styled-components';

export const ErrorOverlay = styled.div`
	height: 60vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const ErrorImage = styled.div`
	display: inline-block;
	background-image: url(${({ imageUrl }) => imageUrl});
	background-size: cover;
	background-position: center;
	width: 40vh;
	height: 40vh;
`;

export const ErrorText = styled.h2`
	font-size: 28px;
	color: #2f8e89;
`;
