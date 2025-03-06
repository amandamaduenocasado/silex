import {
	StyledBanner,
	StyledProductsContainer,
	StyledProductSubName,
	StyledProductName,
	StyledProductInfo,
	StyledMain,
	StyledAddToCart,
	StyledButtonsContainer,
	StyledButton,
	StyledProductPhoto,
	StyledProductPrice,
	StyledCartAndPrice
} from './home.styles';

import { Link } from 'react-router-dom';
import FireButtonIcon from '../../../public/assets/images/silex/button-fire.svg';
import { useAuth } from '../../hooks/useAuth';
import { PRODUCTS } from '../../constants/products-info';
import { useState, useEffect } from "react";

const Home = () => {
const { user } = useAuth();
const [currentImageIndex, setCurrentImageIndex] = useState(0);

useEffect(() => {
	const interval = setInterval(() => {
		setCurrentImageIndex((prevIndex) => (prevIndex + 1) % PRODUCTS.solar.length);
	}, 3000); // Cambia cada 3 segundos

	return () => clearInterval(interval);
}, []);

	return (
		<StyledMain>
			<StyledBanner>
				<video autoPlay loop >
					<source src="/assets/images/silex/mantis-video-long.mp4" type="video/mp4" />
					Tu navegador no soporta el video.
				</video>
			</StyledBanner>
							{!user && (
					<StyledButtonsContainer>
						<Link to={'/about'}>
							<StyledButton>
								<img src={FireButtonIcon} alt='fire button'/>
							</StyledButton>
						</Link>
					</StyledButtonsContainer>
				)}

			<StyledProductsContainer>
				<StyledProductName>Silex Solar Spf 50</StyledProductName>
				<StyledProductSubName>for all skin types</StyledProductSubName>
				<StyledProductInfo>Fotoprotector facial de textura ultraligera y fase externa acuosa con acabado final sedoso</StyledProductInfo>
				<StyledProductInfo>Absorción inmediata. Se funde con la piel y proporciona una alta protección. Hidrata la piel y aporta acción antioxidante</StyledProductInfo>
				<StyledCartAndPrice>
				<StyledAddToCart>
					<Link>
							<img src='/assets/images/silex/add-to-cart.svg' alt='add to cart' />
					</Link>
				</StyledAddToCart>
					<StyledProductPrice>17.95€ 50 ML</StyledProductPrice>
					</StyledCartAndPrice>
				<StyledProductPhoto src={PRODUCTS.solar[currentImageIndex]} alt={`solar-${currentImageIndex}`} width={400} />
				
				<StyledProductName>Silex Gel Limpiador</StyledProductName>
				<StyledProductSubName>for all skin types</StyledProductSubName>
				<StyledProductInfo>Limpiador facial de textura ultraligera y fase externa acuosa con acabado final sedoso</StyledProductInfo>
				<StyledProductInfo>Absorción inmediata. Se funde con la piel y proporciona una alta limpieza. Hidrata la piel y aporta acción antioxidante</StyledProductInfo>
				<StyledCartAndPrice>
				<StyledAddToCart>
					<Link>
							<img src='/assets/images/silex/add-to-cart.svg' alt='add to cart' />
					</Link>
				</StyledAddToCart>
					<StyledProductPrice>20.95€ 50 ML</StyledProductPrice>
					</StyledCartAndPrice>
				<StyledProductPhoto src={PRODUCTS.cleanser[currentImageIndex]} alt={`cleanser-${currentImageIndex}`} width={400} />
				
				<StyledProductName>Silex Retinol 1%</StyledProductName>
				<StyledProductSubName>for all skin types</StyledProductSubName>
				<StyledProductInfo>Con retinol encapsulado para ayudar a rejuvenecer la piel. Sin perfumes, ni aceites</StyledProductInfo>
				<StyledProductInfo>Tiene una textura ligera y no comedogénica, Está formulada con niacinamida, ácido Hialurónico y tres ceramidas esenciales</StyledProductInfo>
				<StyledCartAndPrice>
				<StyledAddToCart>
					<Link>
							<img src='/assets/images/silex/add-to-cart.svg' alt='add to cart' />
					</Link>
				</StyledAddToCart>
					<StyledProductPrice>17.95€ 30 ML</StyledProductPrice>
					</StyledCartAndPrice>
				<StyledProductPhoto src={PRODUCTS.retinol[currentImageIndex]} alt={`retinol-${currentImageIndex}`} width={400} />
				
			</StyledProductsContainer>
		</StyledMain>
	);
};

export default Home;
