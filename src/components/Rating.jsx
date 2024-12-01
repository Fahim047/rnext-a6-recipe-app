'use client';
import ReactStars from 'react-rating-stars-component';
const Rating = ({ rating }) => {
	return (
		<ReactStars
			count={5}
			value={rating}
			isHalf={true}
			edit={false}
			size={24}
			activeColor="#ffd700"
		/>
	);
};

export default Rating;
