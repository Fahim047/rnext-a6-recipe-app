import { getRecipesByCategoryId } from '@/utils/getRecipesByCategoryId';
import Image from 'next/image';

const Recommendation = ({ categoryId }) => {
	const recipes = getRecipesByCategoryId(categoryId);
	return (
		<section className="my-12">
			<h2 className="text-3xl font-bold mb-8">You might also like</h2>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
				{recipes.slice(0, 4).map((recipe) => (
					<div key={recipe.title}>
						<Image
							src={require(`../assets/thumbs/${recipe.thumbnail}`)}
							alt="Recipe 1"
							className="w-full h-60 object-cover rounded-lg mb-2"
							width={300}
							height={300}
						/>
						<h3 className="font-semibold">Strawberries and Cream Cake</h3>
					</div>
				))}
			</div>
		</section>
	);
};

export default Recommendation;
