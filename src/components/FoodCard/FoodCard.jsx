import { addToCart } from "../../utils/helpers";

const FoodCard = ({ id, imgURL, name, price }) => {
	const handleAddToCart = () => {
		addToCart({
			id,
			imgURL,
			name,
			price,
		});
	};

	return (
		<div className="rounded-sm shadow-xl w-80">
			<div
				title={name}
				style={{
					height: "15rem",
					width: "100%",
					background: `url(${imgURL}) no-repeat center center/cover`,
				}}
				className="block w-full"
				alt="food"
			/>
			<div className="px-4 py-3 flex items-center justify-between">
				<div>
					<h4 title={name} className="mb-1">
						{name}
					</h4>
					<h4 title={name} className="font-bold">
						${price}
					</h4>
				</div>
				<span onClick={handleAddToCart} title="Add to cart" role="button">
					<i
						style={{ color: "#F68B1E" }}
						className="text-xl fas fa-cart-plus"
					/>
				</span>
			</div>
		</div>
	);
};

export default FoodCard;
