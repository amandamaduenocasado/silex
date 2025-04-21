import { Link } from 'react-router-dom';
import { StyledFireButton } from './fireButton.styles';

const FireButton = () => {
	return (
		<Link to='/'>
			<StyledFireButton>
				<img src='/assets/images/silex/button-fire.svg' alt='fire button' />
			</StyledFireButton>
		</Link>
	);
};

export default FireButton;
