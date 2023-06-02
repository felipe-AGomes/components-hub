import Header from '@/components/Header';
import HtmlHeader from '@/components/HtmlHeader';
import MainContent from '@/components/MainContent';

export default function Home() {
	return (
		<>
			<HtmlHeader />
			<MainContent>
				<Header />
			</MainContent>
		</>
	);
}
