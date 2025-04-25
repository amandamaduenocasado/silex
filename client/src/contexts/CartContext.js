import { createContext, useState } from 'react';

// Crear el contexto
export const CartContext = createContext();

// CartProvider: Proveedor de contexto que maneja el estado del carrito
export const CartProvider = ({ children }) => {
	// Estado del carrito
	const [cart, setCart] = useState([]);

	return (
		<CartContext.Provider value={{ cart, setCart }}>
			{children}
		</CartContext.Provider>
	);
};
