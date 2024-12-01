import { generateSlug } from '@/utils/generateSlug';
import { getCategoryById } from '@/utils/getCategoryById';
import { getPopularRecipes } from '@/utils/getPopularRecipes';
import Image from 'next/image';
import Link from 'next/link';
import Star from './icons/Star';
const SuperDelicious = () => {
	const recipes = getPopularRecipes();
	return (
		<section className="mb-16" id="super_delicious">
			<h2 className="text-3xl font-bold mb-8">Super Delicious</h2>
			<div className="grid md:grid-cols-3 gap-8">
				{recipes.slice(0, 3).map((recipe) => (
					<Link
						href={`/${getCategoryById(
							recipe.category_id
						).name.toLowerCase()}/${generateSlug(recipe.title)}`}
						key={recipe.title}
					>
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
					</Link>
				))}
			</div>
		</section>
	);
};

export default SuperDelicious;
