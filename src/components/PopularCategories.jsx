import { getPopularCategories } from '@/utils/getPopularCategories';
import Image from 'next/image';

const PopularCategories = () => {
	const categories = getPopularCategories();
	return (
		<section className="mb-16">
			<div className="flex justify-between items-top">
				<h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
				<a href="./category.html" className="text-orange-500">
					View All
				</a>
			</div>
			<div className="grid grid-cols-3 md:grid-cols-6 gap-4">
				{categories.slice(0, 6).map((category) => (
					<div key={category.id} className="cursor-pointer text-center group">
						<div className="overflow-hidden rounded-full mb-2 w-20 h-20 mx-auto">
							<Image
								src={require(`../assets${category.image}`)}
								alt="Breakfast"
								className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
								width={100}
								height={100}
							/>
						</div>
						<p className="transition-transform duration-300 group-hover:scale-105">
							{category.name}
						</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default PopularCategories;
