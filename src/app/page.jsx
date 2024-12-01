import Banner from '@/components/Banner';
import CallToAction from '@/components/CTA';
import HandPickCollection from '@/components/HandPickCollection';
import LatestRecipes from '@/components/LatestRecipes';
import PopularCategories from '@/components/PopularCategories';
import SuperDelicious from '@/components/SuperDelicious';
export default function Home() {
	return (
		<main className="container mx-auto px-4 mt-[100px]">
			<Banner />
			<SuperDelicious />
			<PopularCategories />
			<CallToAction />
			<HandPickCollection />
			<LatestRecipes />
		</main>
	);
}
