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
	// StyledLogoHome,
} from './home.styles';

import { Link } from 'react-router-dom';
import FireButton from '../../../public/assets/images/silex/button-fire.svg';
import { useAuth } from '../../hooks/useAuth';
import { PRODUCTS } from '../../constants/products-info';
import { useState, useEffect } from 'react';
import Header from '../../components/header/Header';

const Home = () => {
	const { user } = useAuth();
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
	const [showMenu, setShowMenu] = useState(true);

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
		const handleScroll = () => {
			const footer = document.querySelector('footer');
			if (footer) {
				const footerRect = footer.getBoundingClientRect();
				const windowHeight = window.innerHeight;

				// Cuando el footer esté completamente visible, ocultamos el menú
				if (footerRect.top <= windowHeight && footerRect.bottom >= 0) {
					setShowMenu(false);
				} else {
					setShowMenu(true);
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex(
				prevIndex => (prevIndex + 1) % PRODUCTS.solar.length
			);
		}, 1500);

		return () => clearInterval(interval);
	}, []);

	return (
		<StyledMain>
			{/* Header con el botón de menú */}
			<Header showMenu={showMenu} />
			{/* IMAGE */}
			<StyledImgHome
				srcSet='../../../public/assets/images/silex/photo-body-mobile-fix.png 768w, ../../../public/assets/images/silex/photo-body.png 1024w'
				sizes='(max-width: 768px) 50vw, 100vw'
				src='../../../public/assets/images/silex/photo-body-mobile-fix.png'
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
						<StyledAddToCart>
							<Link to={user ? '/cart' : '/redirect'}>
								<img
									src='/assets/images/silex/add-to-cart.svg'
									alt='add to cart'
								/>
							</Link>
						</StyledAddToCart>
						<StyledProductPrice>17.95€ 50 ML</StyledProductPrice>
					</StyledCartAndPrice>
				</StyledProductSolar>

				<StyledProductPhoto
					src={
						isMobile
							? PRODUCTS.solar[currentImageIndex]
							: PRODUCTS.solar[((currentImageIndex + 1) % 2) + 1]
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
						<StyledAddToCart>
							<Link to={user ? '/cart' : '/redirect'}>
								<img
									src='/assets/images/silex/add-to-cart.svg'
									alt='add to cart'
								/>
							</Link>
						</StyledAddToCart>
						<StyledProductPrice>20.95€ 50 ML</StyledProductPrice>
					</StyledCartAndPrice>
				</StyledProductCleanser>

				<StyledProductPhoto
					src={
						isMobile
							? PRODUCTS.cleanser[currentImageIndex]
							: PRODUCTS.cleanser[((currentImageIndex + 1) % 2) + 1]
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
						<StyledAddToCart>
							<Link to={user ? '/cart' : '/redirect'}>
								<img
									src='/assets/images/silex/add-to-cart.svg'
									alt='add to cart'
								/>
							</Link>
						</StyledAddToCart>
						<StyledProductPrice>17.95€ 30 ML</StyledProductPrice>
					</StyledCartAndPrice>
				</StyledProductRetinol>

				<StyledProductPhoto
					src={
						isMobile
							? PRODUCTS.retinol[currentImageIndex]
							: PRODUCTS.retinol[((currentImageIndex + 1) % 2) + 1]
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
