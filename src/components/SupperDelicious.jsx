import Image from 'next/image';
import Star from './icons/Star';
const SupperDelicious = ({ recipes }) => {
	return (
		<section className="mb-16" id="super_delicious">
			<h2 className="text-3xl font-bold mb-8">Super Delicious</h2>
			<div className="grid md:grid-cols-3 gap-8">
				{recipes.slice(0, 3).map((recipe) => (
					<div key={recipe.title}>
						<Image
							src={require(`../assets/thumbs/${recipe.thumbnail}`)}
							alt="Chicken Meatball with Creamy Cheese"
							className="w-full h-[300px] object-cover rounded-lg mb-4"
						/>
						<h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
						<div className="flex items-center text-yellow-500 mb-2">
							<Star />
							<Star />
							<Star />
							<Star />
							<Star />
						</div>
						<p className="text-gray-600">{recipe.cooking_time}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default SupperDelicious;
