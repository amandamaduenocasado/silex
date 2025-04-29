import { useState, createContext } from 'react';

// Crear el contexto del carrito
export const CartContext = createContext();

// Proveedor del carrito
export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addToCart = product => {
		// Verificar si el producto ya existe en el carrito
		const existingProduct = cart.find(item => item.id === product.id);
		if (existingProduct) {
			// Si existe, incrementamos su cantidad
			setCart(
				cart.map(item =>
					item.id === product.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				)
			);
		} else {
			// Si no existe, lo añadimos al carrito
			setCart([...cart, { ...product, quantity: 1 }]);
		}
	};

	const calculateSubtotal = () => {
		return cart.reduce((total, item) => total + item.price * item.quantity, 0);
	};
	const incrementItem = product => {
		setCart(
			cart.map(item =>
				item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
			)
		);
	};

	const decrementItem = product => {
		setCart(
			cart
				.map(item =>
					item.id === product.id
						? { ...item, quantity: item.quantity - 1 }
						: item
				)
				.filter(item => item.quantity > 0)
		);
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				incrementItem,
				decrementItem,
				calculateSubtotal,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
