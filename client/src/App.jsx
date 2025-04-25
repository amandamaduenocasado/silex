import { BrowserRouter } from 'react-router-dom';
import CartProvider from './providers/CartProvider';
import { GlobalStyles } from './styles/GlobalStyles';
import Router from './router/Router';
import AuthProvider from './providers/AuthProvider';
import useCursorTracking from './hooks/useCursorTracking';

const App = () => {
	useCursorTracking();

	return (
		<>
			<GlobalStyles />
			<BrowserRouter>
				<AuthProvider>
					<CartProvider>
						<Router />
					</CartProvider>
				</AuthProvider>
			</BrowserRouter>
		</>
	);
};

export default App;

/* Cuidado con como escribimos CartSideBar:

CartSideBar sí retorna, tanto cuando el carrito está vacío como cuando hay productos. Eso está bien estructurado.

Sin embargo, en tu App.jsx estás usando CartSideBar como si fuera un layout o wrapper:

<CartSideBar>
	<Router />
</CartSideBar>
Pero CartSideBar no acepta ni renderiza children, así que Router nunca se muestra, y por eso ves la pantalla en blanco. */
