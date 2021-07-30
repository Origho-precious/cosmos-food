import Button from "../Button/Button"

const Checkout = ({ subTotal, deliveryFee, total }) => {
	return (
		<>
			<h4 className="text-lg text-center font-bold">Checkout</h4>
			<div>
				<div className="px-2 flex mt-5 items-center justify-between">
					<p className="text-sm font-medium">Sub Total:</p>
					<p className="text-sm font-medium">${subTotal.toFixed(2)}</p>
				</div>
				<div className="px-2 flex my-3 items-center justify-between">
					<p className="text-sm font-medium">Delivery fee:</p>
					<p className="text-sm font-medium">${deliveryFee.toFixed(2)}</p>
				</div>
				<div className="border px-2 py-2 flex mt-2 items-center justify-between">
					<p className="text-sm font-medium">Total:</p>
					<p className="text-sm font-medium">${total.toFixed(2)}</p>
				</div>
			</div>
			<Button>Checkout</Button>
		</>
	);
};

export default Checkout;
