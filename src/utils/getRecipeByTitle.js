import recipes from '@/data/recipes.json';
import { generateSlug } from './generateSlug';
export const getRecipeByTitle = (title) => {
	return recipes.find((recipe) => generateSlug(recipe.title) === title);
};
