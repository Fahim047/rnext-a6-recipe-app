import { generateSlug } from '@/utils/generateSlug';
import { getCategoryById } from '@/utils/getCategoryById';
import { getLatestRecipes } from '@/utils/getLatestRecipes';
import Image from 'next/image';
import Link from 'next/link';

const LatestRecipesPage = () => {
	const latestRecipes = getLatestRecipes();
	return (
		<main className="container mx-auto px-4 py-8 mt-[100px]">
			<section id="latest" className="mb-16">
				<h1 className="text-5xl font-bold mb-12">Latest Recipes</h1>
				<div className="grid md:grid-cols-4 gap-8">
					{latestRecipes.slice(0, 20).map((recipe) => (
						<Link
							href={`/${getCategoryById(
								recipe.category_id
							).name.toLowerCase()}/${generateSlug(recipe.title)}`}
							key={recipe.title}
						>
							<Image
								src={require(`../../assets/thumbs/${recipe.thumbnail}`)}
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
		</main>
	);
};

export default LatestRecipesPage;
