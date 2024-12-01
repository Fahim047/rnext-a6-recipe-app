import { generateSlug } from '@/utils/generateSlug';
import { getCategoryById } from '@/utils/getCategoryById';
import Image from 'next/image';
import Link from 'next/link';
import Button from './ui/Button';
const Banner = ({ recipe }) => {
	const category = getCategoryById(recipe.category_id);
	return (
		<section className="mb-16 bg-orange-50">
			<div className="grid md:grid-cols-2 gap-8 items-center">
				<div>
					<Image
						src={require(`../assets/thumbs/${recipe.thumbnail}`)}
						alt="Mighty Super Cheesecake"
						className="w-full h-[450px] object-cover rounded-lg"
					/>
				</div>
				<div>
					<h1 className="text-4xl font-bold mb-4 text-black">{recipe.title}</h1>
					<p className="text-gray-600 mb-4">{recipe.description}</p>
					<Link
						href={`/${category.name.toLowerCase()}/${generateSlug(
							recipe.title
						)}`}
					>
						<Button>View Recipe</Button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Banner;
