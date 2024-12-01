import recipes from '@/data/recipes.json';
export const getLatestRecipes = () => {
	const latestRecipes = recipes.toSorted(
		(a, b) => new Date(b.published_date) - new Date(a.published_date)
	);
	return latestRecipes;
};
