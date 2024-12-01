import recipes from '@/data/recipes.json';

export const getRecipesByCategoryId = (id) => {
	return recipes.filter((recipe) => recipe.category_id === id);
};
