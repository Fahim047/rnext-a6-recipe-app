import categories from '../data/categories.json';
export const getCategoryById = (id) => {
	return categories.find((category) => category.id === id);
};
