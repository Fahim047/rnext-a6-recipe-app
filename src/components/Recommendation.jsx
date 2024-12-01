import { generateSlug } from '@/utils/generateSlug';
import { getCategoryById } from '@/utils/getCategoryById';
import { getRecipesByCategoryId } from '@/utils/getRecipesByCategoryId';
import Image from 'next/image';
import Link from 'next/link';

const Recommendation = ({ categoryId, recommendationTitle }) => {
	const recipes = getRecipesByCategoryId(categoryId)
		.filter((recipe) => recipe.title !== recommendationTitle)
		.toSorted((a, b) => b.rating.average_rating - a.rating.average_rating);

	return (
		<section className="my-12">
			<h2 className="text-3xl font-bold mb-8">You might also like</h2>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
				{recipes.slice(0, 4).map((recipe) => (
					<Link
						href={`/${getCategoryById(
							recipe.category_id
						).name.toLowerCase()}/${generateSlug(recipe.title)}`}
						key={recipe.title}
					>
						<Image
							src={require(`../assets/thumbs/${recipe.thumbnail}`)}
							alt={recipe.title}
							className="w-full h-60 object-cover rounded-lg mb-2"
							width={300}
							height={300}
						/>
						<h3 className="font-semibold">{recipe.title}</h3>
					</Link>
				))}
			</div>
		</section>
	);
};

export default Recommendation;
