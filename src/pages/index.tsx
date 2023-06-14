import AsideContent from '@/components/AsideContent';
import Header from '@/components/Header';
import HtmlHeader from '@/components/HtmlHeader';
import HubComponents from '@/components/HubComponents';
import useAppContext from '@/hooks/useAppContext';
import { filterCategory } from '@/utils/filterCategory';
import { useEffect } from 'react';

export default function Home() {
	const { currentPage, miniatures, font, isMenuOpen, setWindowWidth } =
		useAppContext();
	const filteredCategory = filterCategory(miniatures, currentPage);

	useEffect(() => {
		setWindowWidth(window.innerWidth);
		window.addEventListener('resize', () => {
			setWindowWidth(window.innerWidth);
		});
	});

	return (
		<>
			<HtmlHeader />
			<main className={font.poppins.className}>
				<Header />
				<div
					style={{
						display: 'flex',
						position: 'fixed',
						width: '100vw',
						overflowY: isMenuOpen ? 'hidden' : 'scroll',
					}}
				>
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
