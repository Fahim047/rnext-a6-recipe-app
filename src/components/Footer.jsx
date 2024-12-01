import Image from 'next/image';
import Link from 'next/link';
import LWSKitchen from '../assets/lws-kitchen.png';

const footerLinks = [
	{
		category: 'platform',
		title: 'LWS KITCHEN',
		links: [
			{ label: 'About Us', href: '/about-us' },
			{ label: 'Careers', href: '/careers' },
			{ label: 'Contact Us', href: '/contact-us' },
			{ label: 'Feedback', href: '/feedback' },
		],
	},
	{
		category: 'legal',
		title: 'Legal',
		links: [
			{ label: 'Terms', href: '/terms' },
			{ label: 'Conditions', href: '/conditions' },
			{ label: 'Cookies', href: '/cookies' },
			{ label: 'Copyright', href: '/copyright' },
		],
	},
	{
		category: 'social',
		title: 'Follow Us',
		links: [
			{ label: 'Facebook', href: '/facebook' },
			{ label: 'Twitter', href: '/twitter' },
			{ label: 'Instagram', href: '/instagram' },
			{ label: 'Youtube', href: '/youtube' },
		],
	},
];

const Footer = () => {
	return (
		<footer className="bg-gray-100 py-8">
			<div className="container mx-auto px-4">
				<div className="grid md:grid-cols-4 gap-8">
					<div>
						<Link href="/" className="text-3xl font-bold">
							<Image
								src={LWSKitchen}
								className="h-10 w-fit"
								width={120}
								height={40}
								alt="LWS Kitchen"
							/>
						</Link>
						<p className="text-gray-600 mt-2 text-sm">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
					</div>
					{footerLinks.map((section) => (
						<div key={section.category}>
							<h4 className="font-semibold mb-4 text-black">{section.title}</h4>
							<ul className="space-y-2">
								{section.links.map((link) => (
									<li key={link.label}>
										<Link
											href={link.href}
											className="text-gray-600 hover:text-orange-500"
										>
											{link.label}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
