import FoodCard from "../../components/FoodCard/FoodCard";
import { data } from "../../utils/data";

const Home = () => {
	return (
		<section className="mt-20 w-10/12 mx-auto">
			<h2 className="text-center text-4xl">Any kind of food you need!</h2>
			<article className="mt-16 w-full flex flex-wrap items-center">
				{data.map((food) => (
					<div key={food.id} className="mx-6 mb-16">
						<FoodCard
							id={food.id}
							name={food.name}
							price={food.price}
							imgURL={food.imgURL}
						/>
					</div>
				))}
			</article>
		</section>
	);
};

export default Home;
