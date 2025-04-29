import { useEffect, useRef, useState, useCallback } from 'react';

const AudioPlayer = ({
	src,
	triggerOnScroll = false,
	scrollThreshold = 100,
}) => {
	const audioRef = useRef(null);
	const [isAudioPlaying, setIsAudioPlaying] = useState(false);

	const handleScroll = useCallback(() => {
		if (window.scrollY > scrollThreshold && !isAudioPlaying) {
			setIsAudioPlaying(true);
			audioRef.current?.play();
		}
	}, [isAudioPlaying, scrollThreshold]);

	useEffect(() => {
		if (triggerOnScroll) {
			window.addEventListener('scroll', handleScroll);
			return () => window.removeEventListener('scroll', handleScroll);
		}
	}, [triggerOnScroll, handleScroll]);

	return (
		<audio ref={audioRef} src={src} autoPlay={!triggerOnScroll} muted={false} />
	);
};

export default AudioPlayer;
