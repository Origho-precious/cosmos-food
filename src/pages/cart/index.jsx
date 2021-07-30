import { useEffect, useState } from "react";
import CartCard from "../../components/CartCard/CartCard";
import Checkout from "../../components/Checkout/Checkout";
import { cartItems as data } from "../../utils/helpers";

const Cart = () => {
	const [cartItems, setCartItems] = useState(data());
	const [update, setUpdate] = useState(false);

	useEffect(() => {
		setCartItems(data());
	}, [update]);

	// Getting the sum of each food x the number of plates ordered
	const subTotal = cartItems.reduce((acc, cur) => acc + cur.price * cur.qty, 0);

	// delivery fee is 5% (5/100) of the subtotal
	const deliveryFee = 0.05 * subTotal;

	const total = subTotal + deliveryFee;

	return (
		<section className="mt-20 w-2/3 mx-auto">
			<h2 className="text-4xl">Your Cart</h2>
			<article className="mt-6 w-full flex">
				<div className="w-2/3 mr-16">
					<h4 className="text-xl mb-4 font-bold">Orders</h4>
					{cartItems?.length ? (
						cartItems.map((item) => (
							<div key={item?.id} className="mb-10">
								<CartCard
									id={item?.id}
									name={item.name}
									price={item.price}
									imgURL={item.imgURL}
									qty={item.qty}
									updateList={() => setUpdate(!update)}
								/>
							</div>
						))
					) : (
						<div className="text-center">
							<h5>Cart is empty!</h5>
						</div>
					)}
				</div>
				<div className="w-56">
					<Checkout
						subTotal={subTotal}
						total={total}
						deliveryFee={deliveryFee}
					/>
				</div>
			</article>
		</section>
	);
};

export default Cart;
