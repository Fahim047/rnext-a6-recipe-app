import { generateSlug } from '@/utils/generateSlug';
import { getCategoryById } from '@/utils/getCategoryById';
import { getLatestRecipes } from '@/utils/getLatestRecipes';
import Image from 'next/image';
import Link from 'next/link';

const LatestRecipes = () => {
	const recipes = getLatestRecipes();
	return (
		<section id="latest" className="mb-16">
			<h2 className="text-3xl font-bold mb-8">Latest Recipes</h2>
			<div className="grid md:grid-cols-4 gap-8">
				{recipes.slice(0, 4).map((recipe) => (
					<Link
						href={`/${getCategoryById(
							recipe.category_id
						).name.toLowerCase()}/${generateSlug(recipe.title)}`}
						key={recipe.title}
					>
						<Image
							src={require(`../assets/thumbs/${recipe.thumbnail}`)}
							alt="Strawberry Cream"
							className="w-full h-[300px] object-cover rounded-lg mb-4"
							width={300}
							height={300}
						/>
						<h3 className="text-lg font-semibold mb-2">{recipe.title}</h3>
						<p className="text-gray-600">
							{getCategoryById(recipe.category_id).name}
						</p>
					</Link>
				))}
			</div>
		</section>
	);
};

export default LatestRecipes;
