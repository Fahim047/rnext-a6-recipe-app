import Image from 'next/image';
import Link from 'next/link';
import Button from './ui/Button';
const Banner = ({ recipe }) => {
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
					<h1 className="text-4xl font-bold mb-4 text-black">
						Decadent Tiramisu Delight
					</h1>
					<p className="text-gray-600 mb-4">
						Indulge in the ultimate Italian dessert experience with our velvety
						smooth tiramisu. Layers of coffee-soaked ladyfingers and creamy
						mascarpone filling create a heavenly treat that&apos;s sure to
						impress.
					</p>
					<Link href="/recipes">
						<Button>View Recipe</Button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Banner;
