import { useContext } from 'react';
import { CartContext } from '../../providers/CartProvider';
import Register from '../../pages/register/Register';
import { Link } from 'react-router-dom';
import {
	StyledCartContainer,
	StyledCartItem,
	StyledCartName,
	StyledCartProduct,
	StyledCartRegisterContainer,
	StyledSubtotalContainer,
	StyledCartPage,
	StyledCartTitle,
	StyledSubtitleCart,
	StyledCartPrice,
} from './cartPage.styles';

const CartPage = () => {
	const { cart, calculateSubtotal } = useContext(CartContext);

	const subtotal = calculateSubtotal();

	return (
		<StyledCartPage>
			{/* Contenedor del carrito */}
			<StyledCartContainer>
				<StyledCartTitle>SECURE CHECKOUT</StyledCartTitle>
				{cart.map(item => (
					<StyledCartItem key={item.id}>
						<StyledCartProduct src={item.mini} />
						<div>
							<StyledCartName>{item.name}</StyledCartName>
							<StyledCartPrice>{item.price}</StyledCartPrice>
						</div>
					</StyledCartItem>
				))}

				<StyledSubtotalContainer>
					<p>
						<strong>Subtotal:</strong> €{subtotal.toFixed(2)}
					</p>
				</StyledSubtotalContainer>
			</StyledCartContainer>

			{/* Contenedor del register */}
			<StyledCartRegisterContainer>
				<StyledSubtitleCart>SHIPPING ADDRESS</StyledSubtitleCart>
				<StyledSubtitleCart>
					<span>Do you have an account?</span> <Link to='/login'>Log in</Link>
				</StyledSubtitleCart>
				<Register redirectTo='/' inCart />
			</StyledCartRegisterContainer>
		</StyledCartPage>
	);
};

export default CartPage;
