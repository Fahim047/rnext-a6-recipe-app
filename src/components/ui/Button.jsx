const Button = ({ className, children }) => {
	return (
		<button
			type="submit"
			className={`bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 ${className}`}
		>
			{children}
		</button>
	);
};

export default Button;
