import recipes from '@/data/recipes.json';
export const getPopularRecipes = () => {
	return recipes.toSorted(
		(a, b) => b.rating.average_rating - a.rating.average_rating
	);
};
