import Banner from '@/components/Banner';
import CallToAction from '@/components/CTA';
import HandPickCollection from '@/components/HandPickCollection';
import LatestRecipes from '@/components/LatestRecipes';
import PopularCategories from '@/components/PopularCategories';
import SupperDelicious from '@/components/SupperDelicious';
import recipes from '@/data/recipes.json';
export default function Home() {
	const superDelicious = recipes.toSorted(
		(a, b) => b.rating.average_rating - a.rating.average_rating
	);
	const latestRecipes = recipes.toSorted(
		(a, b) => new Date(b.published_date) - new Date(a.published_date)
	);
	return (
		<main className="container mx-auto px-4 mt-[100px]">
			<Banner recipe={latestRecipes[0]} />
			<SupperDelicious recipes={superDelicious} />
			<PopularCategories />
			<CallToAction />
			<HandPickCollection />
			<LatestRecipes recipes={latestRecipes} />
		</main>
	);
}
