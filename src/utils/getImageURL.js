export const getImageURL = (name) => {
	return new URL(`../assets/thumbs/${name}`, import.meta.url).href;
};
