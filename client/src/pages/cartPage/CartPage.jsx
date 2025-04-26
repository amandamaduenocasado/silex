import { useContext } from 'react';
import { CartContext } from '../../providers/CartProvider';

const CartPage = () => {
	const { cart } = useContext(CartContext);

	const cartInConstruction = true; // Puedes cambiarlo a false cuando termines de construir el carrito

	return (
		<div>
			<h1></h1>
			{cartInConstruction ? (
				<p>The cart is under construction! Please check back soon.</p> // Mensaje de construcción
			) : cart.length === 0 ? (
				<p>Tu carrito está vacío.</p>
			) : (
				<ul>
					{cart.map(item => (
						<li key={item.id}>
							<strong>{item.name}</strong> – {item.quantity} × {item.price}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default CartPage;
