import AsideContent from '@/components/AsideContent';
import Header from '@/components/Header';
import HtmlHeader from '@/components/HtmlHeader';
import HubComponents from '@/components/HubComponents';
import useAppContext from '@/hooks/useAppContext';
import { filterCategory } from '@/utils/filterCategory';

export default function Home() {
	const { currentPage, miniatures, font } = useAppContext();
	const filteredCategory = filterCategory(miniatures, currentPage);

	return (
		<>
			<HtmlHeader />
			<main className={font.poppins.className}>
				<Header />
				<div style={{ display: 'flex' }}>
					<AsideContent />
					<HubComponents>
						{currentPage === 'início'
							? miniatures.map((miniature) => ({
									...miniature.component,
									props: { isMiniature: true, miniature },
							  }))
							: filteredCategory.map((miniature) => ({
									...miniature.component,
									props: { isMiniature: true, miniature },
							  }))}
					</HubComponents>
				</div>
			</main>
		</>
	);
}
