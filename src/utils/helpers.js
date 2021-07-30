const cartItems = () => {
	// Checking to see if we have cartItems save to localStorage
	if (!localStorage.getItem("cosmos-foods")) {
		// if not found, return an empty array
		return [];
	}

	// if found, parse and return the cartItems array
	return JSON.parse(localStorage.getItem("cosmos-foods"));
};

const addToCart = (cartItem) => {
	// creating an array from array of cartItems
	const arr = [...cartItems()];

	// Checking to see if we have cartItems and if the food with the ID passed is in the cart
	if (arr.length) {
		const itemPresent = arr?.find((item) => item.id === cartItem.id);

		if (itemPresent) {
			// increasing the number of orders for this food
			const updatedItem = {
				...cartItem,
				qty: itemPresent.qty + 1,
			};

			// Finding and updating the item in cartItems array
			const itemIdx = arr.findIndex((item) => item.id === cartItem.id);
			arr.splice(itemIdx, 1, updatedItem);

			// Saving cartItems to localStorage
			return localStorage.setItem("cosmos-foods", JSON.stringify(arr));
		}

		// if this is a new cart item
		const newItem = {
			...cartItem,
			qty: 1, // number of orders for this food
		};

		// Saving cartItems to localStorage
		return localStorage.setItem("cosmos-foods", JSON.stringify([newItem, ...arr]));
	} else {
		// if cartItem array is empty
		const item = {
			...cartItem,
			qty: 1, // number of orders for this food
		};

		// Save cart to localStorage
		localStorage.setItem("cosmos-foods", JSON.stringify([item]));
	}
};

const updateQty = (data, cb) => {
	// creating an array from array of cartItems
	const arr = [...cartItems()];

	// if the qty less than 1 we will remove it from the cart
	if (data?.qty < 1) {
		const itemIdx = arr.findIndex((item) => item.id === data.id);
		arr.splice(itemIdx, 1);

		// Saving cartItems to localStorage
		localStorage.setItem("cosmos-foods", JSON.stringify(arr));

		// Callback to refresh cart state
		return cb();
	}

	// Checking to see if any food with the ID passed is in the cart
	const selectedItem = arr?.find((item) => item.id === data.id);
	// increasing the number of orders for this food
	const updatedItem = {
		...selectedItem,
		qty: data.qty,
	};

	// Finding and updating the item in cartItems array
	const itemIdx = arr.findIndex((item) => item.id === data.id);
	arr.splice(itemIdx, 1, updatedItem);

	// Saving cartItems to localStorage
	localStorage.setItem("cosmos-foods", JSON.stringify(arr));

	// Callback to refresh cart state
	cb();
};

export { addToCart, updateQty, cartItems };
