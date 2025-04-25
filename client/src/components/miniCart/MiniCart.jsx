import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../providers/CartProvider';
import {
	StyledMiniCartContainer,
	StyledMiniCartItem,
	StyledCloseButton,
	StyledNameMini,
	StyledQuantityMini,
	StyledButtonMini,
	StyledProductMini,
	StyledCheckOut,
	StyledTaxes,
} from './miniCart.styles';
import { Link } from 'react-router-dom';

const MiniCart = ({ onClose }) => {
	// Añadimos un estado para gestionar el cierre y activar la animación fadeOut
	const [isClosing, setIsClosing] = useState(false);

	useEffect(() => {
		// Si el carrito se cierra, activamos la animación fadeOut
		const timeout = setTimeout(() => {
			setIsClosing(true);
			setTimeout(onClose, 3000); // Cerramos el carrito después de la animación
		}, 3000);

		return () => clearTimeout(timeout);
	}, [onClose]);

	const { cart } = useContext(CartContext);

	return (
		<StyledMiniCartContainer isClosing={isClosing}>
			<StyledCloseButton onClick={onClose}>x</StyledCloseButton>
			{cart.length === 0 ? (
				<p>El carrito está vacío</p>
			) : (
				cart.map(item => (
					<StyledMiniCartItem key={item.id}>
						<StyledProductMini src={item.miniature} />
						<StyledNameMini>{item.name}</StyledNameMini>
						<StyledQuantityMini>{item.quantity}</StyledQuantityMini>
					</StyledMiniCartItem>
				))
			)}
			<StyledCheckOut>
				<StyledTaxes>
					Taxes included. Discount and shipping calculated at checkout
				</StyledTaxes>
				<Link to='/cart'>
					<StyledButtonMini>Continue</StyledButtonMini>
				</Link>
			</StyledCheckOut>
		</StyledMiniCartContainer>
	);
};

export default MiniCart;
