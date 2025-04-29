import { useState, useRef } from 'react';
import {
	StyledBannerContact,
	StyledContactContainer,
	StyledContactInfo,
	StyledContactPhone,
	StyledMuteButton,
} from './contact.styles';

import AudioPlayer from '../../components/audioPlayer/audioPlayer';

const Contact = () => {
	const videoRef = useRef(null);
	const [isMuted, setIsMuted] = useState(true);

	const handleUnmute = () => {
		if (videoRef.current) {
			videoRef.current.muted = false;
			videoRef.current.play();
			setIsMuted(false);
		}
	};

	return (
		<>
			<AudioPlayer src='assets/audio/silex-contact.mp3' />
			<StyledBannerContact>
				<video ref={videoRef} autoPlay muted={isMuted} loop playsInline>
					<source src='/assets/images/silex/baby-video.mp4' type='video/mp4' />
					Tu navegador no soporta el video.
				</video>

				{isMuted && (
					<StyledMuteButton onClick={handleUnmute}>
						SOUND/MUTED
					</StyledMuteButton>
				)}
			</StyledBannerContact>

			<StyledContactContainer>
				<StyledContactInfo>
					<span>13 Calle de la Manzana, 28015</span>
					<span>Madrid</span>
					<span>contact@silex.com</span>
				</StyledContactInfo>
			</StyledContactContainer>

			<StyledContactPhone>+34 812 712 337</StyledContactPhone>
		</>
	);
};

export default Contact;
