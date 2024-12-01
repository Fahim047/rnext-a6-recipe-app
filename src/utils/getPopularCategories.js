import recipes from '@/data/recipes.json';
import { getCategoryById } from './getCategoryById';
export const getPopularCategories = () => {
	const recipeCount = recipes.reduce((acc, recipe) => {
		const categoryId = recipe.category_id;
		acc[categoryId] = (acc[categoryId] || 0) + 1;
		return acc;
	}, {});
	const popularCategories = Object.entries(recipeCount).toSorted(
		(a, b) => b[1] - a[1]
	);
	const popularCategoriesData = popularCategories.map(([categoryId, count]) => {
		const categoryDetails = getCategoryById(categoryId);
		return {
			...categoryDetails,
			count,
		};
	});
	return popularCategoriesData;
};
