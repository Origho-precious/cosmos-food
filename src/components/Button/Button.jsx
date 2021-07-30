const Button = ({ children, variant = "primary" }) => {
	return (
		<button
			className={`block w-full h-12 ${
				variant === 'primary' ? "bg-black" : "bg-blue-600"
			} hover:opacity-70 mt-3 text-sm rounded-sm`}
			style={{ color: '#fff', border: "none", outline: "none" }}
			type="button"
		>
			{children}
		</button>
	);
};

export default Button;
