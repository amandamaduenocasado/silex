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
	StyledProductAdd,
} from './miniCart.styles';
import { Link } from 'react-router-dom';

const MiniCart = ({ onClose }) => {
	const [isClosing, setIsClosing] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsClosing(true);
			setTimeout(onClose, 3000); // Cerramos el carrito después de la animación
		}, 3000);

		return () => clearTimeout(timeout);
	}, [onClose]);

	// Detectamos si estamos en una pantalla móvil
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 768) {
				setIsMobile(true); // Activamos el modo móvil si la pantalla es pequeña
			} else {
				setIsMobile(false); // Si la pantalla es grande, volvemos al formato normal
			}
		};

		handleResize(); // Revisamos el tamaño inicial
		window.addEventListener('resize', handleResize); // Recalculamos cuando la ventana cambie de tamaño

		return () => window.removeEventListener('resize', handleResize); // Limpiamos el event listener
	}, []);

	const { cart } = useContext(CartContext);

	return (
		<StyledMiniCartContainer isClosing={isClosing}>
			<StyledCloseButton onClick={onClose}>x</StyledCloseButton>
			{isMobile ? (
				<StyledProductAdd>Producto añadido</StyledProductAdd> // En móvil solo mostramos el mensaje
			) : cart.length === 0 ? (
				<p>El carrito está vacío</p>
			) : (
				cart.map(item => (
					<StyledMiniCartItem key={item.id}>
						<StyledProductMini src={item.miniature} />
						<StyledNameMini>{item.name}</StyledNameMini>
						<StyledQuantityMini>x{item.quantity}</StyledQuantityMini>
					</StyledMiniCartItem>
				))
			)}
			{!isMobile && (
				<StyledCheckOut>
					<StyledTaxes>
						Taxes included. Discount and shipping calculated at checkout
					</StyledTaxes>
					<Link to='/cart'>
						<StyledButtonMini>Continue</StyledButtonMini>
					</Link>
				</StyledCheckOut>
			)}
		</StyledMiniCartContainer>
	);
};

export default MiniCart;
