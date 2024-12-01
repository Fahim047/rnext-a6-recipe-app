'use client';

import AvatarImage from '@/assets/avatar.png';
import Save from '@/components/icons/Save';
import Share from '@/components/icons/Share';
import Recommendation from '@/components/Recommendation';
import { formatDate } from '@/utils/formatDate';
import { getRecipeByTitle } from '@/utils/getRecipeByTitle';
import Image from 'next/image';
import { useParams } from 'next/navigation';
const RecipeDetails = () => {
	const { category, recipe } = useParams();
	const recipeDetails = getRecipeByTitle(recipe);
	return (
		<main className="container mx-auto px-4 py-8 mt-[100px]">
			<article>
				<h1 className="text-4xl md:text-5xl font-bold mb-6">
					{recipeDetails.title}
				</h1>
				<div className="flex items-center space-x-4 mb-6">
					<Image
						src={AvatarImage}
						alt="Author"
						className="w-8 h-8 rounded-full"
						width={32}
						height={32}
					/>
					<span className="text-gray-600">{recipeDetails.author}</span>
					<span className="text-gray-400">|</span>
					<span className="text-gray-600">{recipeDetails.cooking_time}</span>
					<span className="text-gray-400">|</span>
					<span className="text-gray-600">
						{formatDate(recipeDetails.published_date)}
					</span>
				</div>
				<div className="flex justify-between items-center mb-8">
					<div className="flex space-x-4">
						<button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full">
							<Share />
							Share
						</button>
						<button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full">
							<Save />
							Save
						</button>
					</div>
				</div>
				<Image
					src={require(`../../../assets/thumbs/${recipeDetails.thumbnail}`)}
					alt="Cooking Image"
					className="w-full h-[600px] object-cover mb-8 rounded-lg"
					width={800}
					height={400}
				/>
				<p className="text-gray-600 mb-8">
					One thing I learned living in the Catskills section of Brooklyn, NY
					was how to cook a good Italian meal. Here is a recipe I created after
					having this dish in a restaurant. Enjoy!
				</p>

				<h2 className="text-3xl font-bold mb-4">Before you begin</h2>
				<p className="mb-8">
					Food qualities braise chicken cuts bowl through slices butternut
					snack. Tender meat juicy dinners. One-pot low heat plenty of time
					adobo fat raw soften fruit. sweet renders bone-in marrow richness
					kitchen, fricassee basted putter.
				</p>

				<h2 className="text-3xl font-bold mb-4">Here are the basics</h2>
				<p className="mb-8">
					Juicy meatballs brisket slammin&apos; baked shoulder. Juicy smoker soy
					sauce burgers brisket. polenta mustard hunk greens. Wine technique
					snack skewers chuck excess. Oil heat slowly. slices natural delicious,
					set aside magic tbsp skillet, bay leaves brown centerpiece. fruit
					soften edges frond slices onion snack pork steem on wines excess
					technique cup; Cover smoker soy sauce.
				</p>

				<blockquote className="text-3xl font-bold italic text-center my-12 px-4">
					&quot;One cannot think well, love well, sleep well, if one has not
					dined well.&quot;
				</blockquote>
				<p className="text-center text-gray-600 mb-12">
					— Virginia Woolf, A Room of One&apos;s Own
				</p>

				<h2 className="text-3xl font-bold mb-4">In the kitchen</h2>
				<p className="mb-8">
					Gastronomy atmosphere set aside. Slice butternut cooking home.
					Delicious romantic undisturbed raw platter will meld. Thick Skewers
					skillet natural, smoker soy sauce wait roux. slices rosette bone-in
					simmer. Romantic fall-off-the-bone butternut chuck under romas,
					Skewers on culinary experience.
				</p>

				<Image
					src={require(`../../../assets/thumbs/${recipeDetails.thumbnail}`)}
					alt="Cooking Image"
					className="mx-auto max-w-[400px] h-[300px] object-cover mb-8 rounded-lg"
					width={800}
					height={400}
				/>

				<p className="mb-8">
					Juicy meatballs brisket slammin&apos; baked shoulder. Juicy smoker soy
					sauce burgers brisket. polenta mustard hunk greens. Wine technique
					snack skewers chuck excess. Oil heat slowly. slices natural delicious,
					set aside magic tbsp skillet, bay leaves brown centerpiece. fruit
					soften edges frond slices onion snack pork steem on wines excess
					technique cup; Cover smoker soy sauce.
				</p>
			</article>
			<Recommendation
				categoryId={recipeDetails.category_id}
				recommendationTitle={recipeDetails.title}
			/>
		</main>
	);
};

export default RecipeDetails;
