import AsideContent from '@/components/AsideContent';
import Header from '@/components/Header';
import HtmlHeader from '@/components/HtmlHeader';
import HubComponents from '@/components/HubComponents';
import MainContent from '@/components/MainContent';
import useCurrentPageContext from '@/hooks/useAppContext';
import { filterCategory } from '@/utils/filterCategory';

export default function Home() {
	const { currentPage, miniatures } = useCurrentPageContext();

	const filteredCategory = filterCategory(miniatures, currentPage);

	return (
		<>
			<HtmlHeader />
			<MainContent>
				<Header />
				<div style={{ display: 'flex' }}>
					<AsideContent />
					<HubComponents>
						{currentPage === 'início'
							? miniatures.map((category) => category.component)
							: filteredCategory.map((category) => category.component)}
					</HubComponents>
				</div>
			</MainContent>
		</>
	);
}
