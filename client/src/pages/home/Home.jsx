import {
	StyledProductsContainer,
	StyledMain,
	StyledAddToCart,
	StyledButtonsContainer,
	StyledButton,
	StyledProductPhoto,
	StyledProductPrice,
	StyledCartAndPrice,
	StyledProductSolar,
	StyledProductCleanser,
	StyledProductRetinol,
	StyledImgHome,
	StyledVideo,
	StyledVideoLogo,
} from './home.styles';

import { Link } from 'react-router-dom';
import FireButton from '/assets/images/silex/button-fire.svg';
import { useAuth } from '../../hooks/useAuth';
import { PICTURES } from '../../constants/pictures-info';
import { PRODUCTS } from '../../constants/products-info';
import { useState, useEffect } from 'react';
import { useCart } from '../../hooks/useCart';

const Home = () => {
	const { user } = useAuth();
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
	const { addToCart, quantityToCard, cart } = useCart();

	const handleAdd = product => {
		if (product && product.id) {
			addToCart(product);
		} else {
			console.error('El producto no es válido');
		}
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
			setCurrentImageIndex(
				prevIndex => (prevIndex + 1) % PICTURES.solar.length
			);
		}, 1500);

		return () => clearInterval(interval);
	}, []);

	return (
		<StyledMain>
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

			<StyledProductsContainer>
				{/* SOLAR */}
				<StyledProductSolar>
					<h1>Silex Solar Spf 50</h1>
					<h2>for all skin types</h2>
					<p>
						Facial sunscreen with an ultra-light texture and an aqueous external
						phase, leaving a silky finish
					</p>
					<p>
						Immediate absorption. It melts into the skin and provides high
						protection. Hydrates the skin and offers antioxidant action
					</p>
					<p>This is the first step of your skincare routine</p>
					<StyledCartAndPrice>
						<StyledAddToCart onClick={() => handleAdd(PRODUCTS[0])}>
							<img
								src='/assets/images/silex/add-to-cart.svg'
								alt='add to cart'
							/>
							{quantityToCard(PRODUCTS[0], cart) > 0 && (
								<span>{quantityToCard(PRODUCTS[0], cart)}</span>
							)}
						</StyledAddToCart>
						<StyledProductPrice>17.95€ 50 ML</StyledProductPrice>
					</StyledCartAndPrice>
				</StyledProductSolar>

				<StyledProductPhoto
					src={
						isMobile
							? PICTURES.solar[currentImageIndex]
							: PICTURES.solar[((currentImageIndex + 1) % 2) + 1]
					}
					alt='solar'
					width={400}
				/>

				{/* CLEANSER */}
				<StyledProductCleanser>
					<h1>Silex Cleansing Gel </h1>
					<h2>for all skin types</h2>
					<p>
						Facial cleanser with an ultra-light texture and an aqueous external
						phase, leaving a silky finish
					</p>
					<p>
						Immediate absorption. It melts into the skin and provides deep
						cleansing. Hydrates the skin and offers antioxidant action
					</p>
					<p>This is the second step of your skincare routine</p>
					<StyledCartAndPrice>
						<StyledAddToCart onClick={() => handleAdd(PRODUCTS[1])}>
							<img
								src='/assets/images/silex/add-to-cart.svg'
								alt='add to cart'
							/>
							{quantityToCard(PRODUCTS[0], cart) > 0 && (
								<span>{quantityToCard(PRODUCTS[1], cart)}</span>
							)}
						</StyledAddToCart>
						<StyledProductPrice>20.95€ 50 ML</StyledProductPrice>
					</StyledCartAndPrice>
				</StyledProductCleanser>

				<StyledProductPhoto
					src={
						isMobile
							? PICTURES.cleanser[currentImageIndex]
							: PICTURES.cleanser[((currentImageIndex + 1) % 2) + 1]
					}
					alt='cleanser'
					width={400}
				/>

				{/* RETINOL */}
				<StyledProductRetinol>
					<h1>Silex Retinol 1%</h1>
					<h2>for all skin types</h2>
					<p>
						Contains encapsulated retinol to help rejuvenate the skin. Free of
						fragrances and oils
					</p>
					<p>
						Has a lightweight, non-comedogenic texture. Formulated with
						niacinamide, hyaluronic acid, and three essential ceramides
					</p>
					<p>This is the third step of your skincare routine</p>
					<StyledCartAndPrice>
						<StyledAddToCart onClick={() => handleAdd(PRODUCTS[3])}>
							<img
								src='/assets/images/silex/add-to-cart.svg'
								alt='add to cart'
							/>
							{quantityToCard(PRODUCTS[3], cart) > 0 && (
								<span>{quantityToCard(PRODUCTS[0], cart)}</span>
							)}
						</StyledAddToCart>
						<StyledProductPrice>17.95€ 30 ML</StyledProductPrice>
					</StyledCartAndPrice>
				</StyledProductRetinol>

				<StyledProductPhoto
					src={
						isMobile
							? PICTURES.retinol[currentImageIndex]
							: PICTURES.retinol[((currentImageIndex + 1) % 2) + 1]
					}
					alt='retinol'
					width={400}
				/>
			</StyledProductsContainer>
			{/* Logo animado */}
			<StyledVideoLogo>
				{[...Array(4)].map((_, i) => (
					<video key={i} autoPlay loop muted playsInline>
						<source
							src='/assets/images/silex/logo-large.webm'
							type='video/webm'
						/>
						Tu navegador no soporta el vídeo.
					</video>
				))}
			</StyledVideoLogo>
			<StyledVideo>
				<video autoPlay loop playsInline>
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
