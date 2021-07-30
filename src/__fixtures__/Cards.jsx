import CartCard from "../components/CartCard/CartCard";
import FoodCard from "../components/FoodCard/FoodCard";

const food = {
	id: 1,
	name: "Peppered Chicken",
	imgURL: "https://sisijemimah.com/wp-content/uploads/2015/07/image70.jpg",
	price: "8.00",
};

const order = {
	id: 1,
	name: "Peppered Chicken",
	imgURL: "https://sisijemimah.com/wp-content/uploads/2015/07/image70.jpg",
	price: "8.00",
	qty: 1,
	updateList: () => {},
};


// eslint-disable-next-line import/no-anonymous-default-export
export default {
	FoodCard: (
		<FoodCard
			id={food.id}
			name={food.name}
			price={food.price}
			imgURL={food.imgURL}
		/>
	),
	CartCard: (
		<CartCard
			id={order.id}
			name={order.name}
			price={order.price}
			imgURL={order.imgURL}
			qty={order.qty}
			updateList={order.updateList}
		/>
	),
};
