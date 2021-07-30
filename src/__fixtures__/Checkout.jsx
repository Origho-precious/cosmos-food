import Checkout from "../components/Checkout/Checkout";

const data = {
	subTotal: 100,
	deliveryFee: 5,
	total: 105,
};

export default (
	<div className="w-60 mx-auto">
		<Checkout
			subTotal={data.subTotal}
			deliveryFee={data.deliveryFee}
			total={data.total}
		/>
	</div>
);
