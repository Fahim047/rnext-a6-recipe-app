import Image from 'next/image';
import Link from 'next/link';
import LWSKitchen from '../assets/lws-kitchen.png';
import Magnify from './icons/Magnify';

const navLinks = [
	{
		label: 'Home',
		href: '/',
	},
	{
		label: 'Categories',
		href: '/category',
	},
	{
		label: 'Latest Recipes',
		href: '/recipes',
	},
];
const Header = () => {
	return (
		<header className="bg-white w-full shadow-lg fixed top-0 z-50">
			<nav className="container mx-auto px-4 py-4">
				<div className="flex justify-between items-center text-black">
					<Link href="/" className="text-3xl font-bold">
						<Image
							src={LWSKitchen}
							className="h-10 w-fit"
							alt="LWS Kitchen"
							height={40}
							width={120}
						/>
					</Link>
					<ul className="hidden md:flex space-x-6">
						{navLinks.map((link) => (
							<li key={link.label}>
								<Link href={link.href} className="hover:text-orange-500">
									{link.label}
								</Link>
							</li>
						))}
					</ul>
					<div className="flex items-center space-x-4">
						<Link href="/" className="hover:text-orange-500">
							<Magnify />
						</Link>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
