import { useContext } from 'react';
import { CartContext } from '../../providers/CartProvider';

const CartPage = () => {
	const { cart } = useContext(CartContext);

	return (
		<div>
			<h1>Carrito</h1>
			{cart.length === 0 ? (
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
