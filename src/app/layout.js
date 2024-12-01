import Footer from '@/components/Footer';
import Header from '@/components/Header';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

export const metadata = {
	title: 'LWS Kitchen - Food Blog and Recipes',
	description: 'LWS Kitchen - Food Blog and Recipes',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}
			>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
