import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Home from "./pages/home";
import Cart from "./pages/cart";

const App = () => {
	return (
		<BrowserRouter>
			<nav className="w-full h-20 px-20 shadow-xl flex justify-between items-center">
				<Link
					style={{ fontStyle: "oblique", color: "#FDF2F9" }}
					className="text-lg bg-black py-1 px-2 tracking-widest logo"
					to="/"
				>
					Cosmos FOODS
				</Link>

				<NavLink
					activeClassName="border-b-2"
					className="tracking-wider"
					to="/cart"
					exact
				>
					Go to Cart
				</NavLink>
			</nav>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/cart" component={Cart} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
