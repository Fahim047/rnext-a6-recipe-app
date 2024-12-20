'use client';
import { generateSlug } from '@/utils/generateSlug';
import { getCategoryById } from '@/utils/getCategoryById';
import { getRecipesByCategoryId } from '@/utils/getRecipesByCategoryId';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const CategoryDetails = () => {
	const { id } = useParams();
	const category = getCategoryById(id);
	const recipes = getRecipesByCategoryId(id);
	return (
		<main className="container mx-auto px-4 py-8 mt-[100px]">
			<div className="flex justify-between items-center mb-8">
				<div>
					<h1 className="text-4xl font-bold mb-2">
						{category.name}
						<span className="text-gray-500 text-2xl font-normal">
							({recipes.length})
						</span>
					</h1>
					<p className="text-gray-600">
						One thing I learned living in the Canarsie section of Brooklyn, NY
						was how to cook a good Italian meal. Here is a recipe I created
						after having this dish in a restaurant. Enjoy!
					</p>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
				{recipes.map((recipe) => (
					<Link
						href={`/${category.name}/${generateSlug(recipe.title)}`}
						key={recipe.title}
						className="bg-white rounded-lg overflow-hidden shadow-md"
					>
						<Image
							src={require(`../../../assets/thumbs/${recipe.thumbnail}`)}
							alt="Decadent Raspberry and Cream Cake"
							className="w-full h-48 object-cover"
							width={300}
							height={300}
						/>
						<div className="p-4">
							<h2 className="font-semibold text-lg mb-2">{recipe.title}</h2>
						</div>
					</Link>
				))}
			</div>
		</main>
	);
};

export default CategoryDetails;
