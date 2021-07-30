import { updateQty } from "../../utils/helpers";

const CartCard = ({ id, imgURL, name, price, qty, updateList }) => {
	const increaseQtyHandler = () => {
		updateQty(
			{
				id,
				qty: qty + 1,
			},
			updateList
		);
	};

	const decreaseQtyHandler = () => {
		updateQty(
			{
				id,
				qty: qty - 1,
			},
			updateList
		);
	};

	return (
		<div className="rounded-sm pl-4 pr-6 py-3 h-32 flex shadow-xl w-full">
			<div
				style={{
					height: "100%",
					background: `url(${imgURL}) no-repeat center center/cover`,
				}}
				className="block w-36"
				alt="food"
			/>
			<div className="w-full ml-6 flex items-center justify-between">
				<div>
					<h4 className="mb-1">{name}</h4>
					<h4 className="font-bold">
						${price} x {qty}
					</h4>
				</div>
				<h4 className="font-bold">${(price * qty).toFixed(2)}</h4>
				<div className="flex">
					<span onClick={decreaseQtyHandler} title="Add to cart" role="button">
						<p style={{ color: "#F68B1E" }} className="text-2xl font-bold mr-6">
							-
						</p>
					</span>
					<span onClick={increaseQtyHandler} title="Add to cart" role="button">
						<p style={{ color: "#F68B1E" }} className="text-xl font-bold">
							+
						</p>
					</span>
				</div>
			</div>
		</div>
	);
};

export default CartCard;
