import styled from 'styled-components';

const StyledCartPage = styled.div`
	display: flex;
	flex-direction: column;

	@media screen and (min-width: 768px) {
		flex-direction: row;
		justify-content: space-between;
	}
`;

const StyledCartContainer = styled.div`
	padding: 2rem;

	@media screen and (min-width: 768px) {
		padding: 4rem;
		padding-left: 19rem;
		border-right: 1px solid #ccc;
		width: 41%;
	}
`;

const StyledCartTitle = styled.p`
	margin-bottom: 2rem;
`;

const StyledSubtitleCart = styled.p`
	padding-left: 2rem;

	& > span,
	& > a {
		font-size: 0.8rem;
	}

	@media screen and (min-width: 768px) {
		padding: 0;
	}
`;
const StyledCartItem = styled.div`
	display: flex;
	gap: 2rem;
	margin-bottom: 1rem;
	font-size: 0.8rem;
`;

const StyledCartInfo = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
`;

const StyledCartName = styled.p`
	display: inline-block;
	flex-grow: 1;
	align-self: flex-start;
`;

const StyledCartQuantity = styled.p`
	flex-shrink: 0;
	align-self: flex-start;
	margin-left: 3rem;
`;

const StyledCartPrice = styled.p``;

const StyledCartProduct = styled.img`
	width: 5rem;
	height: auto;
	margin-bottom: 2rem;

	@media screen and (min-width: 768px) {
		width: 8rem;
	}
`;

const StyledCartRegisterContainer = styled.div`
	display: flex;
	flex-direction: column;

	@media screen and (min-width: 768px) {
		padding: 4rem;
		padding-right: 8rem;
	}
`;

const StyledSubtotalContainer = styled.div`
	font-size: 0.9rem;
`;

export {
	StyledCartContainer,
	StyledCartItem,
	StyledCartProduct,
	StyledCartName,
	StyledCartQuantity,
	StyledCartRegisterContainer,
	StyledSubtotalContainer,
	StyledCartPage,
	StyledCartTitle,
	StyledSubtitleCart,
	StyledCartInfo,
	StyledCartPrice,
};
