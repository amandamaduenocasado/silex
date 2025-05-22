import {
	StyledProductsContainer,
	StyledMain,
	StyledButtonsContainer,
	StyledButton,
	StyledProductPhoto,
	StyledProductPrice,
	StyledProduct,
	StyledImgHome,
	StyledVideo,
	StyledVideoLogo,
	StyledAddToCart,
	StyledQuantity,
	StyledQuantityButton,
	StyledContainerPrice,
	StyledQuantityDisplay,
} from './home.styles';

import { Link } from 'react-router-dom';
import FireButton from '/assets/images/silex/button-fire.svg';
import { useAuth } from '../../hooks/useAuth';
import { PICTURES } from '../../constants/pictures-info';
import { PRODUCTS } from '../../constants/products-info';
import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../../providers/CartProvider';
import MiniCart from '../../components/miniCart/MiniCart';
import AudioPlayer from '../../components/audioPlayer/audioPlayer';

const productImages = [PICTURES.solar, PICTURES.cleanser, PICTURES.retinol];

const Home = () => {
	const { user } = useAuth();
	const { addToCart, cart, incrementItem, decrementItem } =
		useContext(CartContext);
	const [imageIndexes, setImageIndexes] = useState([0, 0, 0]);
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
	const [showCart, setShowCart] = useState(false);

	const handleCloseCart = () => {
		setShowCart(false);
	};

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			setImageIndexes(prevIndexes =>
				prevIndexes.map((index, i) => (index + 1) % productImages[i].length)
			);
		}, 1500);
		return () => clearInterval(interval);
	}, []);

	return (
		<StyledMain>
			{/* AUDIO */}
			<AudioPlayer
				src='assets/audio/silex-ambient.mp3'
				triggerOnScroll={true}
			/>
			{/* IMAGE */}
			<StyledImgHome
				srcSet='/assets/images/silex/photo-body-mobile-fix.jpg 768w, /assets/images/silex/photo-body.jpg 1024w'
				sizes='(max-width: 768px) 50vw, 100vw'
				src='/assets/images/silex/photo-body-mobile-fix.png'
				alt='img home'
			/>
			{/* FIRE BUTTON */}
			{!user && (
				<StyledButtonsContainer>
					<Link to={'/about'}>
						<StyledButton>
							<img src={FireButton} alt='fire button' />
						</StyledButton>
					</Link>
				</StyledButtonsContainer>
			)}
			{/* MINICART ABRIR CERRAR */}
			{showCart && <MiniCart cart={cart} onClose={handleCloseCart} />}
			<StyledProductsContainer>
				{PRODUCTS.map((product, index) => {
					const productInCart = cart.find(item => item.id === product.id);

					return (
						<StyledProduct key={product.id}>
							{/* Contenedor de texto */}
							<div>
								<h1>{product.name}</h1>
								<h2>{product.title}</h2>
								<p>{product.description}</p>
								<p>{product.subdescription}</p>
								<p>{product.minidescription}</p>
								<StyledContainerPrice>
									<StyledProductPrice>
										{product.price}€ {''}
										{product.ml}
									</StyledProductPrice>

									{/* Lógica de carrito */}
									{!productInCart ? (
										<StyledAddToCart
											onClick={() => {
												addToCart(product);
												setShowCart(true);
											}}
										>
											<img
												src='/assets/images/silex/add-to-cart.png'
												alt='add to cart'
											/>
										</StyledAddToCart>
									) : (
										<StyledQuantityButton>
											<StyledQuantity
												onClick={() => {
													decrementItem(product);
													setShowCart(true);
												}}
											>
												-
											</StyledQuantity>
											<StyledQuantityDisplay>
												{productInCart.quantity}
											</StyledQuantityDisplay>
											<StyledQuantity
												onClick={() => {
													incrementItem(product);
													setShowCart(true);
												}}
											>
												+
											</StyledQuantity>
										</StyledQuantityButton>
									)}
								</StyledContainerPrice>
							</div>

							{/* Imagen del producto */}
							<StyledProductPhoto
								src={
									isMobile
										? productImages[index][imageIndexes[index]]
										: productImages[index][imageIndexes[index]]
								}
								alt={product.name}
							/>
						</StyledProduct>
					);
				})}
			</StyledProductsContainer>
			{/* Logo animado */}
			<StyledVideoLogo>
				<div>
					{[...Array(4)].map((_, i) => (
						<video key={i} autoPlay loop muted playsInline>
							<source
								src='/assets/images/silex/logo-large.webm'
								type='video/webm'
							/>
							Tu navegador no soporta el vídeo.
						</video>
					))}
				</div>
			</StyledVideoLogo>
			<StyledVideo>
				<video autoPlay loop playsInline muted preload='auto'>
					<source
						src='/assets/images/silex/girl-video-cut.webm'
						type='video/webm'
					/>
					<source
						src='/assets/images/silex/girl-video-cut.mp4'
						type='video/mp4'
					/>
					Tu navegador no soporta el video
				</video>
			</StyledVideo>
		</StyledMain>
	);
};

export default Home;
